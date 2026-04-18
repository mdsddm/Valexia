import { Inngest } from "inngest";
import User from "../models/User.js";
import Session from "../models/Session.js";
import { connectDB } from "./db.js";
export const inngest = new Inngest({ id: "valexia" });
import { upsertStreamUser, deleteStreamUser, chatClient } from "./stream.js";
import {
  isEmailServiceConfigured,
  sendSessionReminderEmail,
  sendSessionStartedEmail,
} from "../services/emailService.js";

function getSessionRecipients(session) {
  const recipients = [];

  if (session.host?.email) {
    recipients.push({
      recipientEmail: session.host.email,
      recipientName: session.host.name,
    });
  }

  if (session.participant?.email) {
    recipients.push({
      recipientEmail: session.participant.email,
      recipientName: session.participant.name,
    });
  }

  return recipients;
}
const syncUser = inngest.createFunction(
  { id: "sync-user" },
  { event: "clerk/user.created" },
  async ({ event }) => {
    await connectDB();
    const { id, email_addresses, first_name, last_name, image_url } =
      event.data;
    const newUser = {
      clerkId: id,
      email: email_addresses[0]?.email_address,
      name: `${first_name || ""}${last_name || ""}`,
      profileImage: image_url,
    };
    await User.create(newUser);
    await upsertStreamUser({
      id: newUser.clerkId.toString(),
      name: newUser.name,
      image: newUser.profileImage,
    });
  },
);
const deleteUserFromDB = inngest.createFunction(
  { id: "delete-user-from-db" },
  { event: "clerk/user.deleted" },
  async ({ event }) => {
    await connectDB();
    const { id } = event.data;
    await User.deleteOne({ clerkId: id });

    await deleteStreamUser(id.toString());
  },
);

const sendSessionReminder15m = inngest.createFunction(
  { id: "send-session-reminder-15m" },
  { cron: "*/1 * * * *" },
  async () => {
    if (!isEmailServiceConfigured()) {
      return { skipped: true, reason: "smtp_not_configured" };
    }

    await connectDB();

    const now = Date.now();
    const fiveMinutesFromNow = now + 5 * 60 * 1000;
    const reminderWindowEnd = now + 15 * 60 * 1000;

    const sessions = await Session.find({
      type: "scheduled",
      status: "scheduled",
      scheduledAt: {
        $gt: new Date(fiveMinutesFromNow),
        $lte: new Date(reminderWindowEnd),
      },
      reminder15mSentAt: null,
    })
      .populate("host", "name email")
      .populate("participant", "name email");

    let sentCount = 0;

    for (const session of sessions) {
      try {
        const recipients = getSessionRecipients(session);

        for (const recipient of recipients) {
          await sendSessionReminderEmail({
            ...recipient,
            sessionName: session.name,
            scheduledAt: session.scheduledAt,
            sessionId: session._id.toString(),
            minutesBeforeStart: 15,
          });
          sentCount += 1;
        }

        session.reminder15mSentAt = new Date();
        session.reminder15mAttemptedAt = new Date();
        await session.save({ validateModifiedOnly: true });
      } catch (error) {
        session.reminder15mAttemptedAt = new Date();
        await session.save({ validateModifiedOnly: true });
        console.error(
          `Failed to send 15m reminder for session ${session._id}:`,
          error.message,
        );
      }
    }

    return {
      processedSessions: sessions.length,
      sentEmails: sentCount,
    };
  },
);

const sendSessionReminder5m = inngest.createFunction(
  { id: "send-session-reminder-5m" },
  { cron: "*/1 * * * *" },
  async () => {
    if (!isEmailServiceConfigured()) {
      return { skipped: true, reason: "smtp_not_configured" };
    }

    await connectDB();

    const now = Date.now();
    const reminderWindowEnd = now + 5 * 60 * 1000;

    const sessions = await Session.find({
      type: "scheduled",
      status: "scheduled",
      scheduledAt: {
        $gt: new Date(now),
        $lte: new Date(reminderWindowEnd),
      },
      reminder5mSentAt: null,
    })
      .populate("host", "name email")
      .populate("participant", "name email");

    let sentCount = 0;

    for (const session of sessions) {
      try {
        const recipients = getSessionRecipients(session);

        for (const recipient of recipients) {
          await sendSessionReminderEmail({
            ...recipient,
            sessionName: session.name,
            scheduledAt: session.scheduledAt,
            sessionId: session._id.toString(),
            minutesBeforeStart: 5,
          });
          sentCount += 1;
        }

        session.reminder5mSentAt = new Date();
        session.reminder5mAttemptedAt = new Date();
        await session.save({ validateModifiedOnly: true });
      } catch (error) {
        session.reminder5mAttemptedAt = new Date();
        await session.save({ validateModifiedOnly: true });
        console.error(
          `Failed to send 5m reminder for session ${session._id}:`,
          error.message,
        );
      }
    }

    return {
      processedSessions: sessions.length,
      sentEmails: sentCount,
    };
  },
);

const sendSessionStarted = inngest.createFunction(
  { id: "send-session-started-email" },
  { cron: "*/1 * * * *" },
  async () => {
    if (!isEmailServiceConfigured()) {
      return { skipped: true, reason: "smtp_not_configured" };
    }

    await connectDB();

    const now = Date.now();
    const startedWindowStart = now - 24 * 60 * 60 * 1000;

    const sessions = await Session.find({
      type: "scheduled",
      status: { $in: ["scheduled", "active"] },
      scheduledAt: {
        $gte: new Date(startedWindowStart),
        $lte: new Date(now),
      },
      sessionStartedEmailSentAt: null,
    })
      .populate("host", "name email")
      .populate("participant", "name email");

    let sentCount = 0;

    for (const session of sessions) {
      try {
        const recipients = getSessionRecipients(session);

        for (const recipient of recipients) {
          await sendSessionStartedEmail({
            ...recipient,
            sessionName: session.name,
            scheduledAt: session.scheduledAt,
            sessionId: session._id.toString(),
          });
          sentCount += 1;
        }

        session.sessionStartedEmailSentAt = new Date();
        session.sessionStartedEmailAttemptedAt = new Date();
        await session.save({ validateModifiedOnly: true });
      } catch (error) {
        session.sessionStartedEmailAttemptedAt = new Date();
        await session.save({ validateModifiedOnly: true });
        console.error(
          `Failed to send session-started email for session ${session._id}:`,
          error.message,
        );
      }
    }

    return {
      processedSessions: sessions.length,
      sentEmails: sentCount,
    };
  },
);

export const functions = [
  syncUser,
  deleteUserFromDB,
  sendSessionReminder15m,
  sendSessionReminder5m,
  sendSessionStarted,
];

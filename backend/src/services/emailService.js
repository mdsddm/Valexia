import nodemailer from "nodemailer";
import { ENV } from "../lib/env.js";

const hasSmtpConfig =
  Boolean(ENV.SMTP_HOST) &&
  Boolean(ENV.SMTP_PORT) &&
  Boolean(ENV.SMTP_USER) &&
  Boolean(ENV.SMTP_PASS) &&
  Boolean(ENV.EMAIL_FROM);

let transporter = null;

if (hasSmtpConfig) {
  transporter = nodemailer.createTransport({
    host: ENV.SMTP_HOST,
    port: Number(ENV.SMTP_PORT),
    secure: Number(ENV.SMTP_PORT) === 465,
    auth: {
      user: ENV.SMTP_USER,
      pass: ENV.SMTP_PASS,
    },
  });
}

export function isEmailServiceConfigured() {
  return Boolean(transporter);
}

function escapeHtml(value = "") {
  return String(value)
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");
}

function buildSessionLink(sessionId) {
  const baseUrl = ENV.CLIENT_URL || "http://localhost:5173";
  return `${baseUrl}/session/${sessionId}`;
}

function getReminderTemplate({
  recipientName,
  sessionName,
  scheduledAt,
  sessionId,
  minutesBeforeStart = 15,
}) {
  const safeName = escapeHtml(recipientName || "there");
  const safeSessionName = escapeHtml(sessionName || "Interview Session");
  const formattedTime = new Date(scheduledAt).toLocaleString();
  const sessionLink = buildSessionLink(sessionId);

  return {
    subject: `Reminder: ${safeSessionName} starts in ${minutesBeforeStart} minutes`,
    text: [
      `Hi ${recipientName || "there"},`,
      "",
      `Your session "${sessionName || "Interview Session"}" starts in ${minutesBeforeStart} minutes.`,
      `Scheduled time: ${formattedTime}`,
      "",
      `Join now: ${sessionLink}`,
      "",
      "Good luck,",
      "Valexia",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <p>Hi ${safeName},</p>
        <p>
          Your session <strong>${safeSessionName}</strong> starts in <strong>${minutesBeforeStart} minutes</strong>.
        </p>
        <p><strong>Scheduled time:</strong> ${escapeHtml(formattedTime)}</p>
        <p>
          <a href="${sessionLink}" style="display: inline-block; padding: 10px 14px; background: #2563eb; color: #fff; text-decoration: none; border-radius: 6px;">
            Join Session
          </a>
        </p>
        <p>Good luck,<br/>Valexia</p>
      </div>
    `,
  };
}

function getSessionStartedTemplate({
  recipientName,
  sessionName,
  scheduledAt,
  sessionId,
}) {
  const safeName = escapeHtml(recipientName || "there");
  const safeSessionName = escapeHtml(sessionName || "Interview Session");
  const formattedTime = new Date(scheduledAt).toLocaleString();
  const sessionLink = buildSessionLink(sessionId);

  return {
    subject: `Session Started: ${safeSessionName} is now live`,
    text: [
      `Hi ${recipientName || "there"},`,
      "",
      `Your session "${sessionName || "Interview Session"}" is now live.`,
      `Scheduled time: ${formattedTime}`,
      "",
      `Join now: ${sessionLink}`,
      "",
      "Good luck,",
      "Valexia",
    ].join("\n"),
    html: `
      <div style="font-family: Arial, sans-serif; line-height: 1.5; color: #111827;">
        <p>Hi ${safeName},</p>
        <p>
          Your session <strong>${safeSessionName}</strong> is now <strong>live</strong>.
        </p>
        <p><strong>Scheduled time:</strong> ${escapeHtml(formattedTime)}</p>
        <p>
          <a href="${sessionLink}" style="display: inline-block; padding: 10px 14px; background: #059669; color: #fff; text-decoration: none; border-radius: 6px;">
            Join Live Session
          </a>
        </p>
        <p>Good luck,<br/>Valexia</p>
      </div>
    `,
  };
}

export async function sendSessionReminderEmail({
  recipientEmail,
  recipientName,
  sessionName,
  scheduledAt,
  sessionId,
  minutesBeforeStart = 15,
}) {
  if (!transporter) {
    return { skipped: true, reason: "smtp_not_configured" };
  }

  if (!recipientEmail) {
    return { skipped: true, reason: "missing_recipient_email" };
  }

  const template = getReminderTemplate({
    recipientName,
    sessionName,
    scheduledAt,
    sessionId,
    minutesBeforeStart,
  });

  await transporter.sendMail({
    from: ENV.EMAIL_FROM,
    to: recipientEmail,
    subject: template.subject,
    text: template.text,
    html: template.html,
  });

  return { sent: true };
}

export async function sendSessionStartedEmail({
  recipientEmail,
  recipientName,
  sessionName,
  scheduledAt,
  sessionId,
}) {
  if (!transporter) {
    return { skipped: true, reason: "smtp_not_configured" };
  }

  if (!recipientEmail) {
    return { skipped: true, reason: "missing_recipient_email" };
  }

  const template = getSessionStartedTemplate({
    recipientName,
    sessionName,
    scheduledAt,
    sessionId,
  });

  await transporter.sendMail({
    from: ENV.EMAIL_FROM,
    to: recipientEmail,
    subject: template.subject,
    text: template.text,
    html: template.html,
  });

  return { sent: true };
}

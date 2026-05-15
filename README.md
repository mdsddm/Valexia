# Valexia

Valexia is a full-stack technical interview platform designed to manage interview sessions, coding problems, candidate submissions, and AI-based candidate score generation.

The main goal of this project is to make technical interview evaluation more organized, faster, and easier for interviewers and candidates.

---

## Project Overview

Valexia provides a structured environment where interviewers can manage technical interview problems and candidates can participate in interview sessions. After the session is completed, AI is used to generate a candidate score based on the submitted solution and predefined evaluation criteria.

In this project, AI is used only for candidate score generation. It does not conduct interviews, generate questions, or work as a chatbot.

---

## Features

- User authentication
- Dashboard
- Problem management
- Interview session room
- Candidate submission
- AI-generated candidate score
- Score display
- Session record management
- Frontend and backend separation

---

## Role of AI

AI is used only after the interview session is completed.

The system sends the following data to the AI model:

- Problem statement
- Candidate solution
- Evaluation criteria
- Difficulty level
- Time taken, if available

The AI then generates a candidate score, which is displayed in the system.

---

## Technology Stack

### Frontend

- React.js / Next.js
- JavaScript
- HTML
- CSS

### Backend

- Node.js
- Express.js
- JavaScript

### Authentication

- Clerk

### AI Integration

- AI API for candidate score generation

### Database

- Database used for storing users, problems, sessions, submissions, and scores

---

## Project Structure

```text
Valexia
│
├── backend
│   ├── controllers
│   ├── routes
│   ├── models
│   ├── config
│   └── server.js
│
├── frontend
│   ├── src
│   ├── components
│   ├── pages
│   └── package.json
│
├── package.json
├── package-lock.json
├── .gitignore
└── README.md

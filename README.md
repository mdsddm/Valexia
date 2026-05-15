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
Installation and Setup
1. Clone the repository
git clone https://github.com/mdsddm/Valexia.git
2. Go to the project folder
cd Valexia
Backend Setup
1. Go to the backend folder
cd backend
2. Install backend dependencies
npm install
3. Create a .env file

Create a .env file inside the backend folder and add required environment variables.

Example:

PORT=5000
DATABASE_URL=your_database_url
AI_API_KEY=your_ai_api_key
CLERK_SECRET_KEY=your_clerk_secret_key
4. Start the backend server
npm start
Frontend Setup
1. Go to the frontend folder
cd frontend
2. Install frontend dependencies
npm install
3. Start the frontend server
npm run dev
How It Works
User logs in to the platform.
Interviewer creates or selects a coding problem.
Candidate joins the interview session.
Candidate solves and submits the solution.
After session completion, required data is sent to the AI API.
AI generates the candidate score.
The score is displayed and stored in the system.
AI Score Generation Flow
Candidate Submission
        ↓
Backend API
        ↓
AI API
        ↓
Generated Score
        ↓
Database
        ↓
Frontend Score Display
Future Scope
Detailed AI feedback
Real-time code execution
Test case validation
Video call support
Analytics dashboard
Resume-based interview preparation
AI-generated interview questions
Mobile application support
Multi-language support
Conclusion

Valexia helps make technical interview evaluation more structured and efficient. It provides a platform for managing interview sessions and uses AI as a supporting feature to generate candidate scores after the session.

Author

Mohd Saddam
MCA, Jamia Millia Islamia

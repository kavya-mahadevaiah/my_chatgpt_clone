# 🧄 ChatUnicorn - Fullstack AI Chatbot App

A magical, full-stack ChatGPT clone powered by React, Next.js, Node.js, Express, MongoDB, and OpenRouter (for AI). Styled with a pastel-pink unicorn theme using Tailwind CSS. Supports multiple chat sessions, real-time AI responses, chat history, and persistent storage.

---

## 🌈 Tech Stack

| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Frontend    | React, Next.js, Tailwind CSS  |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB (via Mongoose)        |
| AI Provider | OpenRouter (GPT-based models) |

---

## 💡 Features

* Multiple chat sessions with sidebar navigation
* OpenRouter-powered AI chatbot
* Persistent storage of messages in MongoDB
* Auto-generated titles based on first message
* Message auto-scroll
* Delete session functionality
* Stylish unicorn-themed UI with Tailwind CSS

---

## 📁 Project Structure

```
chatgpt-fullstack/
├── frontend/             # Next.js frontend
│   ├── components/       # Reusable UI components
│   ├── pages/            # Contains index.js (chat UI)
│   ├── styles/           # Tailwind CSS globals
│   └── utils/            # (Optional: for API functions)
├── backend/              # Node.js + Express API
│   ├── models/Chat.js    # Mongoose schema for chats
│   ├── routes/chatRoutes.js # Express routes
│   ├── server.js         # Backend entry point
│   └── .env              # MongoDB URI & config
├── .gitignore            # Prevents node_modules, .env, etc.
```

---

## 🔗 Integration Overview

### Frontend ↔️ Backend

* The frontend sends HTTP requests to the backend API (`/api/chats`, `/api/chats/:id`, etc.)
* New messages are sent, stored, and fetched via Express

### Backend ↔️ Database

* Express uses Mongoose to interact with MongoDB
* Chat sessions are stored with messages and timestamps

### Backend ↔️ OpenRouter

* When a user sends a message, the backend fetches a reply from OpenRouter

---

## 🧑‍💼 How to Clone & Run Locally (Read-only Usage)

> This project is intended for read-only use. Please do not modify or republish this repository as your own.

### 🔧 Prerequisites:

* Node.js (v16+)
* npm
* MongoDB Atlas account (or local MongoDB instance)

### 🚀 Step-by-Step

#### 1. Clone the Repo

```bash
git clone https://github.com/YOUR_USERNAME/chatgpt-unicorn-clone.git
cd chatgpt-unicorn-clone
```

#### 2. Set Up the Backend

```bash
cd backend
npm install
```

Create a `.env` file:

```
MONGO_URI=your_mongodb_connection_string
PORT=5000
```

Then start the backend:

```bash
node server.js
```

#### 3. Set Up the Frontend

```bash
cd ../frontend
npm install
npm run dev
```

Visit: `http://localhost:3000`

---

## 📬 API Endpoints

### 🔹 `POST /api/chats`

Create a new chat session

### 🔹 `GET /api/chats`

List all chat sessions

### 🔹 `GET /api/chats/:id`

Get messages for a session

### 🔹 `POST /api/chats/:id`

Add a message to a session

### 🔹 `PUT /api/chats/:id`

Update a chat title

### 🔹 `DELETE /api/chats/:id`

Delete a chat session

---

## 📸 UI Preview

```
🗂️  Sidebar with chat sessions
🧄  Main chat panel styled with pink and unicorn icons
💬  Auto-scrolling messages
```

---

## ✨ Credits

* Built by Kavya Mahadevaiah as a fullstack practice project
* Powered by OpenRouter for AI magic
* Styled with Tailwind for soft, responsive UI

---

## 📌 License

MIT - Feel free to clone it.

#  ChatUnicorn - Fullstack AI Chatbot App

This project is a full-stack AI chatbot application built using the MERN stack (MongoDB, Express, React, Node.js) alongside Next.js. It leverages OpenRouter (GPT) to enable real-time AI-powered conversations. The interface features a whimsical pastel-pink unicorn theme styled with Tailwind CSS. Users can enjoy multiple chat sessions, persistent chat history, and a responsive user experience across all devices.
 



| Layer       | Technology                    |
| ----------- | ----------------------------- |
| Frontend    | React, Next.js, Tailwind CSS  |
| Backend     | Node.js, Express.js           |
| Database    | MongoDB (via Mongoose)        |
| AI Provider | OpenRouter (GPT-based models) |


## Features
* Multiple chat sessions with sidebar navigation
* OpenRouter-powered AI chatbot
* Persistent storage of messages in MongoDB
* Auto-generated titles based on first message
* Message auto-scroll
* Delete session functionality
* Stylish unicorn-themed UI with Tailwind CSS


## Project Highlights
- **Frontend**: React + Next.js (App Router) with Tailwind CSS
- **AI Integration**: OpenRouter API (compatible with OpenAI/GPT-style models)
- **Backend**: Node.js + Express + MongoDB for chat storage
- **Persistent Chat**: Chat history and session continuity
- **Features**:
  - Multi-session chat interface
  - Auto-scroll, smooth UX, and keyboard accessibility
  - Support for `.txt` and `.pdf` document uploads for AI input context
  - Light and performant design with a pastel unicorn-themed UI


## How I Built It - **Integration Overview**
I developed this project as a fun way to deepen my understanding of full-stack development, particularly with modern React (Next.js), REST APIs, and integrating AI services.
I used ChatGPT as a **technical assistant** to:
- Debug tricky API response structures
- Get architecture suggestions for managing chat state
- Explore best practices for folder structures in Next.js
- Generate some UI copy and regex patterns
Everything else — from planning to deployment — was built and customized by me.

---
##  How to Clone & Run Locally (Read-only Usage)

> This project is intended for read-only use. Please do not modify or republish this repository as your own.

### 🔧 Prerequisites:

* Node.js (v16+)
* npm
* MongoDB Atlas account (or local MongoDB instance)

### Step-by-Step

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
**API Endpoints**
The following RESTful API endpoints power the chat functionality of the application:
| **Method** | **Endpoint**     | **Description**                            
| ---------- | ---------------- | ------------------------------------------ 
| `POST`     | `/api/chats`     | Create a new chat session                  
| `GET`      | `/api/chats`     | Retrieve a list of all chat sessions       
| `GET`      | `/api/chats/:id` | Fetch messages for a specific chat session 
| `POST`     | `/api/chats/:id` | Add a new message to a chat session        
| `PUT`      | `/api/chats/:id` | Update the title of a chat session         
| `DELETE`   | `/api/chats/:id` | Delete a specific chat session   

---


---

## Contributions
 
* Built by Kavya Mahadevaiah as a fullstack practice project
* Powered by OpenRouter for AI magic

---

## 📌 License

MIT - Feel free to clone it.

# 💬 AI Chatbot Web App with Login and MongoDB

A full-stack web-based AI chatbot application that allows users to log in, ask questions, store chat history in MongoDB, and interact with Cohere or OpenAI API for responses.

---

## 🚀 Features

- **Login Page**: Users can log in using Name and Roll Number.
- **Chat Interface**: Responsive, modern UI to send and receive messages from the AI.
- **Chat History**: All conversations are stored in MongoDB.
- **History Controls**: Option to **delete** or **resend** messages from history.
- **All-in-One Code**: HTML, CSS, and JS combined for frontend.
- **Cohere/OpenAI API**: Integrated for smart responses.
- **Fully Responsive**: Works on all devices.

---

## 🔧 Technologies Used

- **Frontend**: HTML5, CSS3, JavaScript
- **Backend**: Node.js, Express.js
- **Database**: MongoDB
- **API**: Cohere or OpenAI

---

## 📁 Project Structure

chatbot/
├── index.html # Main Chat Interface
├── login.html # Login Page
├── server.js # Express Backend Server
├── models/
│ └── Chat.js # Mongoose Schema
├── package.json
└── README.md

yaml
Copy code

---

## 🧪 Setup Instructions

1. **Clone this repo**:
   ```bash
   git clone https://github.com/YourUsername/Chatbot-.git
   cd Chatbot-
Install dependencies:

bash
Copy code
npm install
Configure MongoDB:

Create a .env file and add:

ini
Copy code
MONGO_URI=your_mongodb_connection_string
API_KEY=your_cohere_or_openai_key
Run the backend:

bash
Copy code
node server.js
Open login.html in your browser.

🌐 Deployment Suggestions
Backend: Render, Railway, Cyclic, Heroku

Frontend: GitHub Pages, Vercel, Netlify

Database: MongoDB Atlas


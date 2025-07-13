📄 Project Documentation: Chatbot Login Interface
________________________________________
🧾 1. Project Title
Chatbot Web Application – Login Interface
________________________________________
🎯 2. Objective
To design and implement a responsive, user-friendly login page that captures a user's name and roll number, stores it in a MongoDB database, and redirects the user to the chatbot interface.
________________________________________
🏗️ 3. Technology Stack
Component	Technology
Frontend	HTML, CSS, JavaScript
Backend (API)	Node.js / Flask 
Database	MongoDB
Communication	Fetch API (HTTP POST)
Deployment	Localhost (for testing)
________________________________________
📐 4. System Architecture
less
CopyEdit
[User] --> [Login Page (index.html)]
            |
            ↓
   [JavaScript Validation & Fetch API]
            |
            ↓
[Backend API /save-user Endpoint]
            |
            ↓
       [MongoDB Database]
________________________________________
🧱 5. Frontend Code Overview
✅ HTML – Structure
•	Two input fields: Full Name, Roll Number
•	One button: Start Chat
•	Container styled as .login-box
✅ CSS – Styling
•	Gradient background (#b3e5fc to #d1c4e9)
•	Centered content using Flexbox
•	Login box with shadow, padding, rounded corners
•	Responsive and mobile-friendly
✅ JavaScript – Functionality
javascript
CopyEdit
function startChat() {
  const name = document.getElementById("name").value.trim();
  const roll = document.getElementById("roll").value.trim();

  if (!name || !roll) {
    alert("Please fill in all fields.");
    return;
  }

  // Save data to backend
  fetch("http://localhost:5000/save-user", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name, roll })
  });

  // Store data locally
  localStorage.setItem("chat_name", name);
  localStorage.setItem("chat_roll", roll);

  // Redirect to chat page
  window.location.href = "chat.html";
}
________________________________________
🔌 6. Backend API Endpoint (Assumed)
http
CopyEdit
POST /save-user
Content-Type: application/json

{
  "name": "John Doe",
  "roll": "123456"
}
Expected Response: 200 OK or error status
________________________________________
🗃️ 7. Database Integration
•	MongoDB Collection: users
•	Fields saved: name, roll
Example Document:
json
CopyEdit
{
  "_id": "auto-generated",
  "name": "John Doe",
  "roll": "123456"
}
________________________________________
⚙️ 8. LocalStorage Usage
Data stored for frontend use in chat.html:
•	localStorage.getItem("chat_name")
•	localStorage.getItem("chat_roll")
________________________________________
✅ 9. Advantages
•	Clean and modern UI
•	Lightweight and fast-loading
•	Validates input to prevent empty fields
•	Integrates backend and frontend data flow
________________________________________
📌 10. Future Improvements
•	Add password field and authentication
•	Input validations (regex, length checks)
•	Error messages for failed backend responseResponsive alerts/toasts for user feedback
___________________________________


📍 11. Conclusion
This login interface successfully captures and processes user identity before starting the chatbot session. It integrates frontend design, client-side validation, and server communication, forming the foundation of a robust chatbot application.
________________________________________





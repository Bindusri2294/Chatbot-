const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const app = express();

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chatbot', { useNewUrlParser: true, useUnifiedTopology: true });

const ChatSchema = new mongoose.Schema({
  username: String,
  question: String,
  answer: String,
  timestamp: { type: Date, default: Date.now }
});

const Chat = mongoose.model('Chat', ChatSchema);

app.post('/save-chat', async (req, res) => {
  try {
    const chat = new Chat(req.body);
    await chat.save();
    res.sendStatus(200);
  } catch (error) {
    res.status(500).send("DB Error");
  }
});

app.listen(5000, () => console.log('Server running at http://localhost:5000'));

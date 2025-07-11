const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:27017/chatbotDB', {
  useNewUrlParser: true,
  useUnifiedTopology: true
});

const UserSchema = new mongoose.Schema({
  name: String,
  roll: String,
  createdAt: { type: Date, default: Date.now }
});

const ChatSchema = new mongoose.Schema({
  name: String,
  roll: String,
  question: String,
  answer: String,
  createdAt: { type: Date, default: Date.now }
});

const User = mongoose.model("User", UserSchema);
const Chat = mongoose.model("Chat", ChatSchema);

app.post('/save-user', async (req, res) => {
  const { name, roll } = req.body;
  if (!name || !roll) return res.status(400).send("Missing fields");
  try {
    const exists = await User.findOne({ roll });
    if (!exists) await new User({ name, roll }).save();
    res.send("User saved");
  } catch {
    res.status(500).send("Failed to save user");
  }
});

app.post('/save-chat', async (req, res) => {
  const { name, roll, question, answer } = req.body;
  if (!name || !roll || !question || !answer) return res.status(400).send("Missing data");
  try {
    await new Chat({ name, roll, question, answer }).save();
    res.send("Chat saved");
  } catch {
    res.status(500).send("Failed to save chat");
  }
});

app.listen(PORT, () => console.log(`✅ Server running at http://localhost:${PORT}`));

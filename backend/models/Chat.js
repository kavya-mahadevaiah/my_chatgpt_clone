const mongoose = require('mongoose');

const messageSchema = new mongoose.Schema({
  sender: {
    type: String, // 'user' or 'bot'
    required: true,
  },
  text: {
    type: String,
    required: true,
  }
}, { timestamps: true });

const chatSchema = new mongoose.Schema({
  title: {
    type: String,
    default: 'Untitled Chat',
  },
  messages: [messageSchema]
}, { timestamps: true });

module.exports = mongoose.model('Chat', chatSchema);

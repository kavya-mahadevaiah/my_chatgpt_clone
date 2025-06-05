const express = require('express');
const router = express.Router();
const Chat = require('../models/Chat');

//  Create a new chat session
router.post('/', async (req, res) => {
  try {
    const { title } = req.body;
    const newChat = new Chat({ title, messages: [] });
    const saved = await newChat.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create chat.' });
  }
});

//  Get all chat sessions
router.get('/', async (req, res) => {
  try {
    const chats = await Chat.find().sort({ updatedAt: -1 });
    res.json(chats.map(({ _id, title, createdAt }) => ({ _id, title, createdAt })));
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chats.' });
  }
});

//  Get messages for a specific chat
router.get('/:id', async (req, res) => {
  try {
    const chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).json({ error: 'Chat not found.' });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to fetch chat.' });
  }
});

//  Add message to a chat
router.post('/:id', async (req, res) => {
  try {
    const { sender, text } = req.body;
    const chat = await Chat.findById(req.params.id);
    if (!chat) return res.status(404).json({ error: 'Chat not found.' });

    chat.messages.push({ sender, text });
    chat.updatedAt = new Date();
    const updated = await chat.save();
    res.json(updated);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add message.' });
  }
});

//  Update chat title
router.put('/:id', async (req, res) => {
  try {
    const { title } = req.body;
    const chat = await Chat.findByIdAndUpdate(
      req.params.id,
      { title },
      { new: true }
    );
    if (!chat) return res.status(404).json({ error: 'Chat not found.' });
    res.json(chat);
  } catch (err) {
    res.status(500).json({ error: 'Failed to update title.' });
  }
});

//  Delete a chat session
router.delete('/:id', async (req, res) => {
  try {
    const deleted = await Chat.findByIdAndDelete(req.params.id);
    if (!deleted) return res.status(404).json({ error: 'Chat not found' });
    res.json({ message: 'Chat deleted' });
  } catch (err) {
    res.status(500).json({ error: 'Failed to delete chat' });
  }
});



module.exports = router;

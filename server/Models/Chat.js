const mongoose = require("mongoose");

// User Schema
const UserSchema = new mongoose.Schema({
  username: String,
  avatar: String,
});

// Message Schema
const MessageSchema = new mongoose.Schema({
  sender: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  content: String,
  timestamp: { type: Date, default: Date.now },
});

// Group Chat Schema
const GroupChatSchema = new mongoose.Schema({
  name: String,
  users: [{ type: mongoose.Schema.Types.ObjectId, ref: "User" }],
  messages: [MessageSchema],
});

// Model for User
const UserModel = mongoose.model("User", UserSchema);

// Model for Message
const MessageModel = mongoose.model("Message", MessageSchema);

// Model for Group Chat
const GroupChatModel = mongoose.model("GroupChat", GroupChatSchema);

module.exports = { UserModel, MessageModel, GroupChatModel };

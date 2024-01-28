// ChatWindow.js
import React, { useState } from 'react';
import MessageInput from '../input';
import Message from '../message';

function ChatWindow() {
  // Simulated messages (replace with actual messages from your backend)
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello!', sender: 'John' },
    { id: 2, text: 'Hi there!', sender: 'Jane' },
    { id: 3, text: 'How are you?', sender: 'John' },
  ]);

  const sendMessage = (messageText) => {
    const newMessage = {
      id: messages.length + 1, // In a real app, use unique IDs from your backend
      text: messageText,
      sender: 'You', // Simulating that the current user sends the message
    };
    setMessages([...messages, newMessage]);
  };

  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.map((message) => (
          <Message key={message.id} text={message.text} sender={message.sender} />
        ))}
      </div>
      {/* Input field for typing messages */}
      <MessageInput sendMessage={sendMessage} />
    </div>
  );
}

export default ChatWindow;


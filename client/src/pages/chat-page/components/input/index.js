import React, { useState } from 'react';
import './style.css';

function MessageInput({ sendMessage }) {
  const [message, setMessage] = useState('');

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== '') {
      sendMessage(message);
      setMessage('');
    }
  };

  const handleKeyPress = (event) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <div className="message-input">
      <input
        type="text"
        placeholder="Type your message..."
        value={message}
        onChange={handleMessageChange}
        onKeyPress={handleKeyPress}
      />
      <button onClick={handleSendMessage}>Send</button>
    </div>
  );
}

export default MessageInput;

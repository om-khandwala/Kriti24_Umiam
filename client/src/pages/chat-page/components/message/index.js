import React from 'react';
import './style.css'

function Message({ text, sender }) {
  return (
    <div className="message">
      <strong>{sender}:</strong> {text}
    </div>
  );
}

export default Message;

import React from 'react';
import './style.css'

function Message({ text, sender }) {
  return (
    <div className="message">
      <strong>{sender.toLowerCase()}</strong> 
      <p>{text}</p>
    </div>
  );
}

export default Message;

import React, { useState } from "react";
import "./style.css";
// import queryString from "query-string";
function MessageInput({ sendMessage, socket, id }) {
  const [message, setMessage] = useState("");
  console.log("The param value is ", id);
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = () => {
    if (message.trim() !== "") {
      sendMessage(message);
      setMessage("");
    }
    socket.emit("send_msg", {
      msg: message,
      id: id,
    });
  };

  const handleKeyPress = (event) => {
    if (event.key === "Enter") {
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

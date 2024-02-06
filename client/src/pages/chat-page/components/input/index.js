import React, { useState } from "react";
import "./style.css";
import { createChat } from "../../../../api/groups";
// import queryString from "query-string";
function MessageInput({ sendMessage, socket, id, user }) {
  const [message, setMessage] = useState("");
  console.log("The param value is ", id);
  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    const data = {
      groupId: id,
      chats: [{
        userName: user.name,
        message: message
      }
      ]
    }
    await createChat(data)
    if (message.trim() !== "") {
      sendMessage(data);
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

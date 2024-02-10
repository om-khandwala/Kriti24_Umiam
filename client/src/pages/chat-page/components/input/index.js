import React, { useState } from "react";
import "./style.css";
import { createChat } from "../../../../api/groups";

function MessageInput({ sendMessage, socket, id, user, group }) {
  const [message, setMessage] = useState("");

  const handleMessageChange = (event) => {
    setMessage(event.target.value);
  };

  const handleSendMessage = async () => {
    if (group.members.includes(user._id)) {
      const data = {
        groupId: id,
        chats: [
          {
            userName: user.name,
            message: message,
          },
        ],
      };

      await createChat(data);

      if (message.trim() !== "") {
        sendMessage(message);
        setMessage("");
        socket.emit("send_msg", {
          msg: message,
          id: id,
          sender: user.name,
        });
      }
    } else {
      alert("You are not allowed to send messages to this group.");
    }
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
      <button onClick={handleSendMessage}>
        <i className="fa-solid fa-arrow-right"></i>
      </button>
    </div>
  );
}

export default MessageInput;

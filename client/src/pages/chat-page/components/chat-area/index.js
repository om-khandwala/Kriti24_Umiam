// ChatWindow.js
import React, { useEffect, useState } from "react";
import MessageInput from "../input";
import Message from "../message";
import { useLocation } from "react-router-dom";
function ChatWindow({ socket }) {
  const [messages, setMessages] = useState([]);

  const location = useLocation();
  const data = new URLSearchParams(location.search);
  const paramValue = data.get("id");
  console.log(paramValue);
  const sendMessage = (messageText) => {
    socket.emit("send_msg", { msg: messageText });
  };
  // console.log(messages);

  useEffect(() => {
    const handleReceivedMessage = (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: data.msg,
          id: prevMessages.length + 1,
          sender: "OtherUser",
        },
      ]);
    };

    socket.on("msg_rcvd", handleReceivedMessage);
    socket.emit("join", { id: paramValue });
    return () => {
      socket.off("msg_rcvd", handleReceivedMessage);
    };
  }, [socket, paramValue]);

  return (
    <div className="chat-window">
      <div className="message-list">
        {messages.length > 0 &&
          messages.map((message) => {
            return (
              <Message
                key={message.id}
                text={message.message}
                sender={message.sender}
              />
            );
          })}
      </div>
      {/* Input field for typing messages */}
      <MessageInput
        sendMessage={sendMessage}
        socket={socket}
        paramValue={paramValue}
      />
    </div>
  );
}

export default ChatWindow;

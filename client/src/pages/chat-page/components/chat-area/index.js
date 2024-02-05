import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import MessageInput from "../input";
import Message from "../message";
import Navbar from "../navabar";
import Cookies from 'js-cookie';
import './style.css'

function ChatWindow({ socket }) {
  const userName = Cookies.get('user');
  const user = (JSON.parse(userName.slice(2)));
  const [messages, setMessages] = useState([]);
  const { id } = useParams();

  const sendMessage = (messageText) => {
    socket.emit("send_msg", { msg: messageText });
  };

  useEffect(() => {
    const handleReceivedMessage = (data) => {
      setMessages((prevMessages) => [
        ...prevMessages,
        {
          message: data.msg,
          id: prevMessages.length + 1,
          sender: `${user.name}`,
        },
      ]);
    };

    socket.on("msg_rcvd", handleReceivedMessage);
    socket.emit("join", { id: id }); 
    return () => {
      socket.off("msg_rcvd", handleReceivedMessage);
    };
  }, [socket, id, user.name]); 
  return (
    <div className="chat-window">
      <Navbar />
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
        id= {id}
      />
    </div>
  );
}

export default ChatWindow;

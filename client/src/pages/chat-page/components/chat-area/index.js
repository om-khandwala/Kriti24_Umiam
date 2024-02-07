import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom"; 
import MessageInput from "../input";
import Message from "../message";
import Navbar from "../navabar";
import Cookies from 'js-cookie';
import './style.css'
import { getGroupChat } from "../../../../api/groups";

function ChatWindow({ socket, group }) {
  const userName = Cookies.get('user');
  const user = (JSON.parse(userName.slice(2)));
  const [messages, setMessages] = useState([]);
  const [oldMsg, setOldMsg] = useState([]);
  const { id } = useParams();

 // console.log(group)

  const sendMessage = (messageText) => {
    socket.emit("send_msg", { msg: messageText });
  };

  useEffect(() => {
    const fetchMsg = async () => {
        try {
            const allMsg = await getGroupChat(id);
            setOldMsg(allMsg);
        } catch (error) {
            console.error('Error fetching messages:', error);
        }
    };

    fetchMsg();
}, [id]);

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
          {oldMsg.length > 0 &&
            oldMsg.map((msg,index) => {
              return (
                <Message
                  key={index}
                  text={msg.message}
                  sender={msg.userName}
                />
              );
          })}

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

      <MessageInput
        user={user}
        group = {group} 
        sendMessage={sendMessage}
        socket={socket}
        id= {id}
      />
    </div>
  );
}

export default ChatWindow;

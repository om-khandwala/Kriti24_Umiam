import ChatWindow from "./components/chat-area";
import { useParams } from "react-router-dom";
import Sidebar from "./components/sidebar";
import "./style.css";
import { useEffect, useState } from "react";
import { getGroup } from "../../api/groups";
import Navbar from "../../componets/navbar/navbar";

function ChatPage({ socket, user }) {
  const [group, setGroup] = useState([]);
  const { id } = useParams();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = await getGroup(id);
        setGroup(groupsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, [id]);

  console.log(user)

  return (
    <div className="chat-page">
      <Navbar user={user}/>
      <div className="flex-gap-0">
        <Sidebar group={group} />
        <ChatWindow socket={socket} group={group} />
      </div>
    </div>
  );
}

export default ChatPage;

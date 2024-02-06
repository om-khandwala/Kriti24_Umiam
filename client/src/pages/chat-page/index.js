import ChatWindow from "./components/chat-area";
import Navbar from "./components/navabar";
import { useParams } from 'react-router-dom';
import Sidebar from "./components/sidebar";
import "./style.css";
import { useEffect, useState } from "react";
import { getGroup } from "../../api/groups";

function ChatPage({socket, user}) {
  const [group,  setGroup] = useState([]);
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

  return (
    <div className="body">
      <div className="flex-gap-0">
        <Sidebar group={group}/>
        <ChatWindow socket={socket} />
      </div>
    </div>
  );
}

export default ChatPage;

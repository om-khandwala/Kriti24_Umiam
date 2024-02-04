import ChatWindow from "./components/chat-area";
import Navbar from "./components/navabar";
import Sidebar from "./components/sidebar";
import "./style.css";

function ChatPage({ socket }) {
  return (
    <div className="body">
      <Navbar />
      <Sidebar />
      <ChatWindow socket={socket} />
    </div>
  );
}

export default ChatPage;

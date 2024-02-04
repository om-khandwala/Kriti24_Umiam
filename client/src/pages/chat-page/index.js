import ChatWindow from "./components/chat-area";
import Navbar from "./components/navabar";
import Sidebar from "./components/sidebar";
import "./style.css";

<<<<<<< HEAD
function ChatPage({ socket }) {
  return (
    <div className="body">
      <Navbar />
      <Sidebar />
      <ChatWindow socket={socket} />
    </div>
  );
=======
function ChatPage (){
    return(
        <div className="container">
            <div className="members">
                <Sidebar />
            </div>
            <div className="navChat">
            <div className="nav">
                <Navbar />
            </div>
            <div className="chat">
                <ChatWindow />
            </div>
            </div>
        </div>
    )
>>>>>>> refs/remotes/origin/main
}

export default ChatPage;

import ChatWindow from './components/chat-area';
import Navbar from './components/navabar';
import Sidebar from './components/sidebar';
import './style.css'

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
}

export default ChatPage;
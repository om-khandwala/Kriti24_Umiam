import ChatWindow from './components/chat-area';
import Navbar from './components/navabar';
import Sidebar from './components/sidebar';
import './style.css'

function ChatPage (){
    return(
        <div className='body'>
            <Navbar />
            <Sidebar />
            <ChatWindow />
        </div>
    )
}

export default ChatPage;
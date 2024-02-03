import './App.css';
import ChatPage from './pages/chat-page';
import DoubtForum from './pages/doubt-forum';
import FeedPage from './pages/feed-page';
import ProfilePage from './pages/profile-page';
import ProjectUploadPage from './pages/project-upload';
import FileUpload from './pages/test';
function App() {
  return (
    <div className="App">
     {/* <Button size="small" backgroundColor={'black'} onClick={() => console.log('Small button clicked')}>Small Button</Button> */}
     {/* <ProjectUploadPage /> */}
     <ProfilePage />
     {/* <DoubtForum /> */}
    </div>
  );
}

export default App;

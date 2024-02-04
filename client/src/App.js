import './App.css';
// import Community_Page from './pages/community-page';
import ChatPage from './pages/chat-page';
import DoubtForum from './pages/doubt-forum';
import FeedPage from './pages/feed-page';
import ProfilePage from './pages/profile-page';
import ProjectUploadPage from './pages/project-upload';
import FileUpload from './pages/project-upload/file-upload';
function App() {
  return (
    <div className="App">
     {/* <Button size="small" backgroundColor={'black'} onClick={() => console.log('Small button clicked')}>Small Button</Button> */}
     <ProjectUploadPage />
     {/* <FileUpload /> */}
     {/* <ProfilePage /> */}
     {/* <DoubtForum /> */}
    </div>
  );
}

export default App;

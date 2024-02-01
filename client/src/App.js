import './App.css';
import ChatPage from './pages/chat-page';
import FeedPage from './pages/feed-page';
import ProjectUploadPage from './pages/project-upload';
import FileUpload from './pages/test';
function App() {
  return (
    <div className="App">
     {/* <Button size="small" backgroundColor={'black'} onClick={() => console.log('Small button clicked')}>Small Button</Button> */}
     <ProjectUploadPage />
    </div>
  );
}

export default App;

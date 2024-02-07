import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import io from "socket.io-client";
import CommunityPage from "./pages/community-page/index.js";
import ChatPage from "./pages/chat-page";
import DoubtForum from "./pages/doubt-forum";
import FeedPage from "./pages/feed-page";
import ProfilePage from "./pages/profile-page";
import ProjectUploadPage from "./pages/project-upload";
import Home from "./pages/home-page/index.js";
import Btn from "./pages/btn-test/btn.js";
import Cookies from "js-cookie";
// import FileUpload from "./pages/test";
const socket = io.connect("http://localhost:5050");
function App() {
  const userName = Cookies.get("user");
  const user = JSON.parse(userName.slice(2));
  const userId = user._id;
  return (
    <Router>
      <div className="App">
        {/* Use the Route component with corrected paths */}
        <Routes>
          <Route path="/upload" element={<ProjectUploadPage />} />
          <Route
            path="/communities"
            element={<CommunityPage userId={userId} />}
          />
          <Route
            path="/communities/:id"
            element={<ChatPage socket={socket} />}
          />
          <Route path="/profile" element={<ProfilePage user={user} />} />
          <Route path="/doubt" element={<DoubtForum id={userId} />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
          <Route path="/feed" element={<FeedPage user={user} />} />
          <Route path="/btn" element={<Btn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

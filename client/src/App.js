import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import io from "socket.io-client";

import ChatPage from "./pages/chat-page";
import DoubtForum from "./pages/doubt-forum";
import FeedPage from "./pages/feed-page";
import ProfilePage from "./pages/profile-page";
import ProjectUploadPage from "./pages/project-upload";
import Home from "./pages/home-page/index.js";
import Btn from "./pages/btn-test/btn.js";
// import FileUpload from "./pages/test";
const socket = io.connect("http://localhost:5050");
function App() {
  return (
    <Router>
      <div className="App">
        {/* Use the Route component with corrected paths */}
        <Routes>
          <Route path="/upload" element={<ProjectUploadPage />} />
          <Route path="/profile" element={<ProfilePage />} />
          <Route path="/doubt" element={<DoubtForum />} />
          <Route path="/chat" element={<ChatPage socket={socket} />} />
          <Route path="/feed" element={<FeedPage />} />
          <Route path="/chat" element={<ChatPage />} />
          <Route path="/btn" element={<Btn />} />
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

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
import Cookies from "js-cookie";
import UserForm from "./pages/user-form/index.js";
import Coursepage from "./pages/course-page/components/course_page.js";
import ProjectFeed from "./pages/project-feed/App2.js";
import ProjectName from "./pages/project-page/index.js";
import ErrorBoundary from "./Error/ErrorBoundary.js";
import { ToastContainer } from "react-toastify";
const socket = io.connect("https://umiam-kriti24.onrender.com");

function App() {
  const userName = Cookies.get("user");
  let user = [];
  let userId = "";

  if (userName !== undefined) {
    user = JSON.parse(userName.slice(2));
    userId = user._id;
  }

  console.log(user, userId);

  return (
    <Router>
      <ErrorBoundary>
        <div className="App">
          <ToastContainer
            position="top-right"
            autoClose={5000}
            hideProgressBar={false}
            newestOnTop={false}
            closeOnClick
            rtl={false}
            pauseOnFocusLoss
            draggable
            pauseOnHover
            theme="light"
            style={{ zIndex: 99990 }}
          />
          <Routes>
            {user.length !== 0 && (
              <>
                <Route
                  path="/upload"
                  element={<ProjectUploadPage user={user} />}
                />
                <Route
                  path="/communities"
                  element={<CommunityPage user={user} />}
                />
                <Route
                  path="/communities/:id"
                  element={<ChatPage socket={socket} user={user}/>}
                />
                <Route
                  path="/project-feed/:id"
                  element={<ProjectName />}
                ></Route>
                <Route path="/user-form" element={<UserForm user={user} />} />
                <Route path="/profile/:id" element={<ProfilePage />} />
                <Route path="/doubt" element={<DoubtForum user = {user} id={userId} />} />
                <Route path="/chat" element={<ChatPage socket={socket} />} />
                <Route path="/feed" element={<FeedPage user={user} />} />
                <Route path="/" element={<Home />} />
                <Route path="/course" element={<Coursepage user={user} />} />
                <Route
                  path="/project-feed"
                  element={<ProjectFeed user={user} />}
                />
              </>
            )}
            {user.length === 0 && <Route path="/" element={<Home />} />}
            <Route
              path="*"
              element={
                <h2
                  style={{
                    display: "flex",
                    height: "100vh",
                    justifyContent: "center",
                    alignItems: "center",
                  }}
                >
                  404 Page not found!
                </h2>
              }
            />{" "}
          </Routes>
        </div>
      </ErrorBoundary>
    </Router>
  );
}

export default App;

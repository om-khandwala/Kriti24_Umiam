import "./style.css";
import Profile from "./componets/profile";
import UserDetails from "./componets/user-detail";
import AboutSection from "./componets/about-me";
import MyCourses from "./componets/user-courses";
import UserProject from "./componets/user-project";
import Navbar from "../../componets/navbar/navbar";
import { useEffect, useState } from "react";
import { findUser } from "../../api/user";
import { useParams } from "react-router-dom";

function ProfilePage() {
  const [activeMenu, setActiveMenu] = useState("project");
  const [user, setUser] = useState({});
  const { id } = useParams();

  useEffect(() => {
    const fetchUser = async () => {
      try {
        const userData = await findUser(id);
        setUser(userData);
      } catch (error) {
        console.error('Error fetching user data:', error);
      }
    };

    fetchUser();
  }, [id]);

  const handleMenuClick = (menu) => {
    setActiveMenu(menu);
  };

  return (
    <>
      <Navbar />
      {user._id !== null && user._id !== undefined && <div className="profile-page">
        <div className="profile-header">
          <Profile className="profile" userData={user} />
        </div>

        <div className="user-menu flex">
          <p onClick={() => handleMenuClick("project")}>Project</p>
          <p onClick={() => handleMenuClick("about")}>About Me</p>
        </div>

        {activeMenu === "project" && <UserProject userData={user} />}
        {activeMenu === "about" && (
          <div className="about-user">
            <UserDetails userData={user} />
            <AboutSection userData={user} />
            <MyCourses userData={user} />
          </div>
        )}
      </div>}
      
    </>
  );
}

export default ProfilePage;

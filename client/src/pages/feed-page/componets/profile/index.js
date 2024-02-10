import React from "react";
import { Link } from 'react-router-dom';
import "./style.css";
function Profile({user}) {
  return (
    <div className="profile-container">
      <div className="bg"></div>
      <div className="circle"></div>
      <h3>{user.name.toLowerCase()}</h3>
      <p>{user.shortDescription}</p>
      <Link to={`/profile/${user._id}`}>
        <button>Visit profile</button>
      </Link>
    </div>
  );
}

export default Profile;

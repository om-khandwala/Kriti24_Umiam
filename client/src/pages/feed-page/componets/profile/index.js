import React from "react";
import "./style.css";
function Profile({user}) {
  return (
    <div className="profile-container">
      <div className="circle"></div>
      <h3>{user.name}</h3>
      <p>{user.shortDescription}</p>
      <p>visit profile</p>
    </div>
  );
}

export default Profile;

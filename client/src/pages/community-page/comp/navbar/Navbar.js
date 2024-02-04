import React from "react";
import "./style.css";

const Navbar = () => {
  return (
    <div className="navbar">
      <div className="left-part">
        <img src="logo.png" alt="Logo" />
        <h4>Communities</h4>
      </div>
      <div className="right_nav">
        <div className="search-bar">
            <input type="text" placeholder="Search Community" />
        </div>
        <button className="community_search">
            Create Community
        </button>
      </div>
    </div>
  );
};

export default Navbar;

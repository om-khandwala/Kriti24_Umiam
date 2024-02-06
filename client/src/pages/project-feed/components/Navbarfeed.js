import React from 'react';
import './Navbarfeed.css'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <img src='./images/Group 15.png' alt='projectimg' className='logo'></img>
        <span className="project-name">Project Alpha</span>
      </div>
      <ul className="navbar-nav">
        <li className="nav-item">Home</li>
        <li className="nav-item">Feed</li>
        <li className="nav-item">Groups</li>
        <li className="nav-item">About Us</li>
      </ul>
      <div className="navbar-search">
        <input type="text"  className="search-input" />
      </div>
      <div className="notif">
        <img src='./images/directbox-notif.png' alt='directbox' className='directbox-notif'></img>
        <img src='./images/message-notif.png' alt='directbox' className='message-notif'></img>
      </div>
      <div className="navbar-profile">
        <img src="./images/Ellipse 23.png" alt="Profile" className="profile-pic" />
      </div>
    </nav>
  );
}

export default Navbar;

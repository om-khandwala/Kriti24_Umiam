import React from 'react';
import './style.css'
function Navbar({user}) {
  return (
    <div className="navbar-chat-page">
      <div className='flex'>
        <div className="circle1">
          <img src={user.logo} alt='user-profile'/>
        </div>
        <div className="navbar-title">{user.name.toLowerCase()}</div>
      </div>
      <i className="fa-solid fa-circle-info"></i>
    </div>
  );
}

export default Navbar;
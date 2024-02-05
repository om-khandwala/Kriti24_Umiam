import React from 'react';
import './style.css'
function Navbar() {
  return (
    <div className="navbar-chat-page">
      <div className='flex'>
        <div className="circle1"></div>
        <div className="navbar-title">User</div>
      </div>
      <i class="fa-solid fa-circle-info"></i>
    </div>
  );
}

export default Navbar;
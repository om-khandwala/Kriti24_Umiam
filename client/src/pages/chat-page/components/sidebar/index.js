import './style.css'
import React from 'react';
function Sidebar() {
  return (
    <div className="sidebar">
      <div className="headingofside">
        <div className="circle"></div>
        <div className="Projectname"><strong>Project</strong></div>
      </div>
      <p className='member'>Members</p>
      <div className="members">
        <div className="name">
          <div className="circle1"></div>
          <p>Faiz</p>
        </div>
        <div className="name">
          <div className="circle1"></div>
          <p>Faiz</p>
        </div>
        <div className="name">
          <div className="circle1"></div>
          <p>Faiz</p>
        </div>
        <div className="name">
          <div className="circle1"></div>
          <p>Faiz</p>
        </div>
        <div className="name">
          <div className="circle1"></div>
          <p>Faiz</p>
        </div>
      </div>
      {/* Display contacts or conversations */}
    </div>
  );
}

export default Sidebar;

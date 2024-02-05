import HorizontalLine from '../../../../componets/line';
import './style.css'
import React from 'react';
function Sidebar({group}) {
    
  return (
    <div className="sidebar">
      <div className="heading-of-side">
        <div className="circle"></div>
        <h2 className="project-name"><strong>{group.name}</strong></h2>
      </div>

      <HorizontalLine />

      <div className="members">
      {group.members && group.members.map((member, index) => (

      <div className="name" key={index}>
          <div className="circle1"></div>
          <p>{member}</p>
      </div>
    
      ))}

      </div>

    </div>
  );
}

export default Sidebar;

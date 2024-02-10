import HorizontalLine from '../../../../componets/line';
import './style.css'
import React from 'react';
function Sidebar({group}) {
    
  return (
    <div className="sidebar">
      <div className="heading-of-side">
        <div className="circle">
  
        </div>
        <h2 className="project-name"><strong>{group.name}</strong></h2>
      </div>

      <HorizontalLine color={'white'}/>

      <div className="members">
      {group.membersName && group.membersName.map((member, index) => (

      <div className="name" key={index}>
          <div className="circle1">
            {/* <img src={member.logo} alt='profile'/> */}
          </div>
          <p>{member.toLowerCase()}</p>
      </div>
    
      ))}

      </div>

    </div>
  );
}

export default Sidebar;

import React from 'react'
import "./style.css";
import Group from './group'

function MiddleSection({groups, user}) {
  return (
    <div className='community-container'>
     {groups.map((group, index) => {
        return <Group key={index} user={user} group={group} />;
      })}
    </div>
  )
}

export default MiddleSection

import React,{useEffect, useState} from 'react'
import "./style.css";

function Left({groups,user}){
  const [mygroups,setMygroups] = useState([]);
  useEffect(()=>{
    groups.map((group,index)=>{
      if(group.members.includes(user._id) && !mygroups.includes(group.name)){
        setMygroups([...mygroups,group.name]);
      }
    });
  },[groups])
  // console.log("hello",groups);
  return (
    <div className='left '>
        <div className="all_com">
            <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Logo" />
            <h4>All Communities</h4>
        </div>
        <div className="my_com">
            <img src="https://w7.pngwing.com/pngs/81/570/png-transparent-profile-logo-computer-icons-user-user-blue-heroes-logo-thumbnail.png" alt="Logo" />
            <h4>My Communities</h4>
        </div>
        <div className="lists">
          <ul>
            {mygroups.map((name,index)=>{
              return <li key={index}>{name}</li>
            })}
          </ul>
        </div>
    </div>
  )
}

export default Left

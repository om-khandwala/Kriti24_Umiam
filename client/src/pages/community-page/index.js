import React, { useEffect, useState } from 'react';
import "./style.css";
import Navbar from '../../componets/navbar/navbar';
import Left from './comp/Left_Section';
import MiddleSection from './comp/middle_section';
import Right_sec from './comp/right_section/Right_sec';
import { allGroups } from '../../api/groups';
import NavbarSecondary from './comp/navbar/Navbar';

function CommunityPage({user}) {
  const [groups, setGroups] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const groupsData = await allGroups();
        setGroups(groupsData);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  return (
    <>
    <Navbar />
    <div className='karta'>
      <NavbarSecondary user={user} />
      <div className="main_container">
        <Left groups={groups} user={user} />
        <div className="mid_main">
           {groups.length > 0 && <MiddleSection groups={groups} user={user}/>}
        </div>
        <Right_sec />
      </div>
    </div>
    </>
  );
}

export default CommunityPage;

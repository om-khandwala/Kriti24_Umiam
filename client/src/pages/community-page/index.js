import React, { useEffect, useState } from 'react';
import "./style.css";
import Navbar from './comp/navbar/Navbar';
import Left from './comp/Left_Section';
import MiddleSection from './comp/middle_section';
import Right_sec from './comp/right_section/Right_sec';
import { allGroups } from '../../api/groups';

function CommunityPage() {
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
    <div className='karta'>
      <Navbar />
      <div className="main_container">
        <Left />
        <div className="mid_main">
           {groups.length > 0 && <MiddleSection groups={groups} />}
        </div>
        <Right_sec />
      </div>
    </div>
  );
}

export default CommunityPage;

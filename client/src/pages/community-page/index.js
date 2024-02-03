import React from 'react'
import "./style.css";
import Navbar from './comp/navbar/Navbar'
import Left from './comp/Left_Section'
import MiddleSection from './comp/middle_section';
import Right_sec from './comp/right_section/Right_sec';
function Community_Page() {
  return (
    <div className='karta'>
        <Navbar></Navbar>
        <div className="main_container">
            <Left></Left>
            <div className="mid_main">
            < MiddleSection/>
            < MiddleSection/>
            </div>
            <Right_sec/>
        </div>

    </div>
  )
}

export default Community_Page

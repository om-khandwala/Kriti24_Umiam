import React, { useState } from 'react';
import './Projectsearch.css'; 
import CreateCourseForm from './addcoursepopup';

const SearchProject = () => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    // Function to toggle the visibility of the popup component
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };


    return ( 
        <nav className="serach_navbar">
            <img src='./images/profile-2user.png' alt='profile-user' className='profile_user'></img>
            <span className="project_option">Courses</span>
            <div className="search-bar">
                <input type="text" placeholder="Search Course" className="search-int" />
            </div>
            <img src='./images/search-normal.png' alt='serach' className='search_img'></img>
            <div>
                <button className="create-project-btn" onClick={togglePopup}>Create Course</button>
            </div>
            {isPopupOpen && <CreateCourseForm onClose={togglePopup} />}
        </nav>
     );
}
 
export default SearchProject;
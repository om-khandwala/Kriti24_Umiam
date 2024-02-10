import React, { useState } from 'react';
import './Projectsearch.css'; 
import CreateCourseForm from './addcoursepopup';
import { allCourses } from '../../../../api/course';

const SearchProject = ({setCourses}) => {
    const [isPopupOpen, setIsPopupOpen] = useState(false);
    const [filter, setFilter] = useState("");
    // Function to toggle the visibility of the popup component
    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };
    async function hii(){
        const all = await allCourses();
        const bll = all;
        const filteredCourses = all.filter(course=>course.title.toLowerCase().includes(filter));
        const desc = bll.filter(course=>course.description.toLowerCase().includes(filter));
        const ans = [...new Set([...filteredCourses, ...desc])];
        console.log(ans)
        setCourses(ans);
    }
    function handleKeyDown(event){
        if(event.key=='Enter'){
            hii();
        }
    }

    return ( 
        <nav className="search_navbar">
            <div className='left'>
                <img src='./images/profile-2user.png' alt='profile-user' className='profile_user'></img>
                <span className="project_option">Courses</span>
            </div>

            <div className="right">
                <input type="text" placeholder="Search Course" className="search-int" onChange={(e) => setFilter(e.target.value.toLowerCase())} onKeyDown={handleKeyDown} />
                <img src='./images/search-normal.png' alt='serach' className='search_img' onClick={hii} ></img>
                <button className="create-project-bt" onClick={togglePopup}>Create Course</button>
            </div>
        
            {isPopupOpen && <CreateCourseForm setCourses = {setCourses} onClose={togglePopup} />}
        </nav>
     );
}
 
export default SearchProject;
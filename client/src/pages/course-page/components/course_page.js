import Navbar from "../../../componets/navbar/navbar.js";
import SearchProject from "./comp/Projectsearch";
import Aboutcourse from "./comp/CourseList";
import { useState } from "react";
import { useEffect } from "react";
import { allCourses } from "../../../api/course.js";
import './course_page.css';


const Coursepage = () => {
   const [Courses, setCourses] = useState([]);
    useEffect(()=>{
        const courses = async() => {
            const fetchedCourses = await allCourses();
            console.log(fetchedCourses)
            setCourses(fetchedCourses);
        }

         
        courses();
    }, [])
    return ( 
        <div className="course_page">
           <Navbar />
           <SearchProject setCourses = {setCourses}/>
           <div className="courses_listpage">
                  {Courses.length==0 ? <div>No Courses found</div> : Courses.map(course => <Aboutcourse key = {course._id} course = {course} />)}
           </div>
        </div>
     );
}
 
export default Coursepage;
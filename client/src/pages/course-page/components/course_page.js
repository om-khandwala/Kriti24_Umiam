import Navbar from "./comp/Navbarfeed";
import SearchProject from "./comp/Projectsearch";
import Aboutcourse from "./comp/CourseList";
// import CreateCourseForm from "./comp/addcoursepopup";
// import CourseForm from "./comp/addcoursepopup";

const Coursepage = () => {
    return ( 
        <div className="course_page">
           <Navbar />
           <SearchProject />
           <div className="courses_listpage">
                  <Aboutcourse />
                  {/* <CreateCourseForm /> */}
           </div>
        </div>
     );
}
 
export default Coursepage;
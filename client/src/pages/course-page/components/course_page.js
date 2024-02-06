import Navbar from "./comp/Navbarfeed";
import SearchProject from "./comp/Projectsearch";
import Aboutcourse from "./comp/CourseList";

const Coursepage = () => {
    return ( 
        <div className="course_page">
           <Navbar />
           <SearchProject />
           <div className="courses_listpage">
                  <Aboutcourse />
           </div>
        </div>
     );
}
 
export default Coursepage;
import { useEffect, useState } from 'react';
import HorizontalLine from '../../../componets/line';
import './component.css'
import Course from './course';
import { allCourses } from '../../../api/course';

function MyCourses({userData}){
    const [mycourses,setmyCourses]=useState([]);
    useEffect(()=>{
        let mycourse=[];
        const fetchData = async () => {

            const allcourses = await allCourses();
            allcourses.map((course,index)=>{
                // console.log(course,"course");
                // console.log(course.author,userData.userData._id,"auth");
                if(course.author===userData._id){
                    mycourse.push(course);
                }
            });
            setmyCourses(mycourse);
        }
        fetchData();
    },[]);
    console.log(mycourses,"mycourses");
    return (
        <div className="course-section">
            <h4>My Courses</h4>
            <HorizontalLine color={'white'}/>
            <div>
                {mycourses.map((course,index)=>{return<Course key={index} course={course}/>})}
            </div>
        </div>
    )
}

export default MyCourses;
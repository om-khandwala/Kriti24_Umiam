import React, { useEffect, useState } from 'react';
import './CourseList.css';
import CommentSection from './addcommentsec';
import { allFeedbacks } from '../../../../api/course.js';

const Aboutcourse = ({course}) => {
    
    const [comments, setComments] = useState([]);
    const [isPopupOpen, setIsPopupOpen] = useState(false);

    const togglePopup = () => {
        setIsPopupOpen(!isPopupOpen);
    };

    const [selectedCourseId, setSelectedCourseId] = useState(null);

    const handleCommentsClick = (courseId) => {
        setSelectedCourseId((prevCourseId) => {
            return prevCourseId === courseId ? null : courseId;
        });
    };

    useEffect(()=>{
        const com = async() => {
            const fetchedComments = await allFeedbacks(course._id);
            setComments(fetchedComments.feedbacks);
        };

        com();
    }, [])
    return (
        <div className='all_courses'>
            {
                    <div key={course._id} className='about_course'>
                        <div className="proj_title">
                            <p className='course_title'>{course.title}</p>
                        </div>
                        <div className="course_des">
                            <p>{course.description}</p>
                        </div>
                        <div className="line"></div>
                        <div className="comment">
                            <p onClick={() => handleCommentsClick(course._id)}>Comments</p>
                        </div>
                        {selectedCourseId === course._id && <CommentSection comments = {comments} course = {course} setComments = {setComments} onClose={() => setSelectedCourseId(null)} />}
                        {isPopupOpen && <CommentSection  onClose={togglePopup} />}
                    </div>
            }
        </div>
    );
}

export default Aboutcourse;
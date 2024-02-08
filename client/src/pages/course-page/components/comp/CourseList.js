import React, { useState } from 'react';
import './CourseList.css';
import CommentSection from './addcommentsec';


const Aboutcourse = () => {

    
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

    const [coursedet, setcoursedet] = useState(
        [
            { title: 'Weather App', body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", id: 1 },
            { title: 'Weather App', body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", id: 2 },
            { title: 'Weather App', body: "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. Various versions have evolved over the years, sometimes by accident, sometimes on purpose (injected humour and the like).", id: 3 },
        ]
    )

    return (
        <div className='all_courses'>
            {
                coursedet.map((course) => (
                    <div key={course.id} className='about_course'>
                        <div className="proj_title">
                            <p className='course_title'>{course.title}</p>
                        </div>
                        <div className="course_des">
                            <p>{course.body}</p>
                        </div>
                        <div className="line"></div>
                        <div className="comment">
                            <p onClick={() => handleCommentsClick(course.id)}>Comments</p>
                        </div>
                        {selectedCourseId === course.id && <CommentSection onClose={() => setSelectedCourseId(null)} />}
                        {isPopupOpen && <CommentSection onClose={togglePopup} />}
                    </div>
                ))
            }
        </div>
    );
}

export default Aboutcourse;
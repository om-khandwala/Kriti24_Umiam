import React, { useState } from 'react';
import './addcoursepopup.css';
import { allCourses, createCourse, currentUser } from '../../../../api/course';
import { useEffect } from 'react';

const CreateCourseForm = ({ onClose, setCourses }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');
  const [user, setUser] = useState({});
  const [showModal, setShowModal] = useState(true);

  useEffect(()=>{
    const get = async() => {
      const response = await currentUser();
      setUser(response.user[0]);
    }
    get();
  },[])

  const handleSubmit = async (event) => {
    event.preventDefault();
    await createCourse({
      title: courseTitle,
      description: courseDescription,
      author: user._id
    })
    const all = await allCourses();
    setCourses(all);
   // console.log('Submitted:', courseTitle, courseDescription);
  
    setCourseTitle('');
    setCourseDescription('');
   
    onClose();
  };

  

  return (
    <>
      {showModal && (
        <div className="overlay"></div>
      )}
      <div className="create-course-form">
          <p className='add_course'>Add a New Course</p>
        <span className="close" onClick={onClose}>&times;</span>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="courseTitle">Course Title:</label>
            <input className='add-course-title' type="text" id="courseTitle" value={courseTitle} onChange={(event) => setCourseTitle(event.target.value)} required/>
          </div>
          <div className="form-group">
            <label htmlFor="courseDescription">Course Description:</label>
            <textarea id="courseDescription" value={courseDescription} onChange={(event) => setCourseDescription(event.target.value)} required className='courseDescription'/>
          </div>
          <div className="button-group">
            <button type="submit" className='submit-btn-course'>Submit</button>
          </div>
        </form>
      </div>
    </>
  );
};

export default CreateCourseForm;

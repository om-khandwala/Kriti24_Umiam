import React, { useState } from 'react';
import './addcoursepopup.css'; // Import CSS file for styling

const CreateCourseForm = ({ onClose }) => {
  const [courseTitle, setCourseTitle] = useState('');
  const [courseDescription, setCourseDescription] = useState('');

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform form submission logic here
    console.log('Submitted:', courseTitle, courseDescription);
    // Reset input fields after submission
    setCourseTitle('');
    setCourseDescription('');
    // Close the form after submission
    onClose();
  };

  

  return (
    <div className="create-course-form">
        <p className='add_course'>Add a New Course</p>
      <span className="close" onClick={onClose}>&times;</span>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="courseTitle">Course Title:</label>
          <input className='addcoursetitle' type="text" id="courseTitle" value={courseTitle} onChange={(event) => setCourseTitle(event.target.value)} required/>
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
  );
};

export default CreateCourseForm;

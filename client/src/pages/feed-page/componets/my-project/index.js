import React from 'react';
import { Link } from 'react-router-dom'
import './style.css';

function MyProject({ userProject }) {
  return (
    <div className='myproject-container'>
      <div className="heading">
        <h3>Your Projects</h3>
        <Link to='/upload'><button>New</button></Link>
      </div>
      <input type="text" placeholder='Find your projects'/>
      <div className='projects'>
        {userProject.map(project => (
          <div className='project' key={project._id}>
            <img src={project.logo} />
            <p>{project.projectName}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default MyProject;

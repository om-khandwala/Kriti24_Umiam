import React , { useState } from 'react'
import Description from './components/description/Description'
import Outcomes from './components/Outcomes/Outcomes';
import Comments from './components/comments/comments';
import Media from './components/media/media';
import Collab from './components/collab/collab';
import './style.css'
function ProjectName() {
    const [activeComponent, setActiveComponent] = useState(null);

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
    };
  return (
    <div className='project-page-container'>
        <div className="upper">
            <p className='Back'>Back to Home</p>
            <p className='PN'><strong>Project Name</strong></p>
        </div>
        <div className="navu">
            <p onClick={() => handleClick('Description')}>Description</p>
            <p onClick={() => handleClick('Outcomes')}>Outcomes</p>
            <p onClick={() => handleClick('Collab')}>Collab</p>
            <p onClick={() => handleClick('Comments')}>Comments</p>
            <p onClick={() => handleClick('Media')}>Media</p>
        </div>
        {activeComponent === 'Description' && <Description />}
        {activeComponent === 'Outcomes' && <Outcomes />}
        {activeComponent === 'Collab' && <Collab />}
        {activeComponent === 'Comments' && <Comments/>}
        {activeComponent === 'Media' && <Media />}
    </div>
  )
}

export default ProjectName

import React, { useEffect, useState } from 'react';
import Description from './components/description/Description';
import Outcomes from './components/Outcomes/Outcomes';
import Comments from './components/comments/comments';
import Media from './components/media/media';
import Collab from './components/collab/collab';
import './style.css';
import { getProjectById } from '../../api/project';

function ProjectName() {
    const [activeComponent, setActiveComponent] = useState(null);
    const [project , setProject] = useState([]);

  //  console.log(project.links.image);

    useEffect(() => {
        const fetchProject = async () => {
            try {
                const project = await getProjectById('65c5f5d3ed00a7be42199ec8');
                setProject(project);
               // console.log(project); // You can handle the fetched project data here
            } catch (error) {
                console.error("Error while fetching project:", error);
            }
        };

        fetchProject();
    }, []);

    const handleClick = (componentName) => {
        setActiveComponent(componentName);
        window.scrollTo({
            top: window.innerHeight * 0.55,
            behavior: 'smooth'
        });
    };

    return (
        <div className='project-page-container'>
            <div className="upper">
                <p className='Back'>Back to Home</p>
                <div className='heading-container'>
                    <p className='heading'>{project.projectName}</p>
                    <p className='created-by'>-{project.author}</p>
                </div>
            </div>
            <div className="nav">
                <p onClick={() => handleClick('Description')}>Description</p>
                <p onClick={() => handleClick('Outcomes')}>Outcomes</p>
                <p onClick={() => handleClick('Collab')}>Collab</p>
                <p onClick={() => handleClick('Comments')}>Comments</p>
                <p onClick={() => handleClick('Media')}>Media</p>
            </div>
            {activeComponent === 'Description' && <Description project={project}/>}
            {activeComponent === 'Outcomes' && <Outcomes project = {project}/>}
            {activeComponent === 'Collab' && <Collab project = {project}/>}
            {activeComponent === 'Comments' && <Comments project={project} />}
            {activeComponent === 'Media' && <Media project = {project}/>}
        </div>
    );
}

export default ProjectName;

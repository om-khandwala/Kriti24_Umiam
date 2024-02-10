import { Link } from 'react-router-dom';

function Project({ project }) {
  console.log(project, "hello");
  return (
    <div class="project-component">
      <img src={project.links.image[0]} alt="projectImage" />
      <div>
        <p className="type">Type</p>
        <h4>{project.projectName}</h4>
        <p>{project.description}</p>
        <Link to={`/project-feed/${project._id}`}><p className="learn-more">Learn More</p></Link>
      </div>
    </div>
  );
}

export default Project;

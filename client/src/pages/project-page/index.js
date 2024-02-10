import React, { useEffect, useState } from "react";
import Description from "./components/description/Description";
import Outcomes from "./components/Outcomes/Outcomes";
import Comments from "./components/comments/comments";
import Media from "./components/media/media";
import Collab from "./components/collab/collab";
import "./style.css";
import { getProjectById } from "../../api/project";
import { useParams, Link } from "react-router-dom";
import Github from "./components/github/Github";

function ProjectName() {
  const [activeComponent, setActiveComponent] = useState("Description");
  const [project, setProject] = useState([]);

  const { id } = useParams();

  useEffect(() => {
    const fetchProject = async () => {
      try {
        const project = await getProjectById(id);
        setProject(project);
        // console.log(project); // You can handle the fetched project data here
      } catch (error) {
        console.error("Error while fetching project:", error);
      }
    };

    fetchProject();
  }, [id]);

  const handleClick = (componentName) => {
    setActiveComponent(componentName);
    window.scrollTo({
      top: window.innerHeight * 0.55,
      behavior: "smooth",
    });
  };

  return (
    <div className="project-page-container">
      <div className="upper">
        <Link to="/feed">
          <p className="home-page">Back to Home</p>
        </Link>
        <div className="heading-container">
          <p className="heading">{project.projectName}</p>
          {/* <p className='created-by'>-{project.author}</p> */}
        </div>
      </div>
      <div className="nav">
        <p onClick={() => handleClick("Description")}>Description</p>
        <p onClick={() => handleClick("Outcomes")}>Outcomes</p>
        <p onClick={() => handleClick("Collab")}>Collab</p>
        <p onClick={() => handleClick("Comments")}>Comments</p>
        <p onClick={() => handleClick("Media")}>Media</p>
        <p onClick={() => handleClick("Git")}>Github</p>
      </div>
      {activeComponent === "Description" && <Description project={project} />}
      {activeComponent === "Outcomes" && <Outcomes project={project} />}
      {activeComponent === "Collab" && <Collab project={project} />}
      {activeComponent === "Comments" && <Comments project={project} />}
      {activeComponent === "Media" && <Media project={project} />}
      {activeComponent === "Git" && <Github project={project} />}
    </div>
  );
}

export default ProjectName;

import { useEffect, useState } from "react";
import { userProjects } from "../../../api/project";

function Project({ project }) {
  return (
    <div class="project-component">
      <img src="https://images.unsplash.com/photo-1682687218147-9806132dc697?q=80&w=3175&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
      <div>
        <p className="type">Type</p>
        <h4>{project.projectName}</h4>
        <p>{project.description}</p>
        <p className="learn-more">Learn More</p>
      </div>
    </div>
  );
}

export default Project;

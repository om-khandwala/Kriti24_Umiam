import { useEffect, useState } from "react";
import "./component.css";
import Project from "./project";
import { userProjects } from "../../../api/project";

function UserProject({ userData }) {
  const id = userData._id;
  // console.log(id);
  const [userProject, setUserProject] = useState([]);
  useEffect(() => {
    const fetchProjects = async () => {
      const data = await userProjects(id);
      setUserProject(data);
    };
    fetchProjects();
  }, [id]);
  // console.log(userProject, "User projects are");
  return (
    <div className="user-projects">
      {userProject.length === 0 && <h3>No projects to show</h3>}
      {userProject.length > 0 &&
        userProject.map((project) => {
          return <Project project={project} />;
        })}
    </div>
  );
}

export default UserProject;

import SearchProject from "./components/Projectsearch";
import Projectspace from "./components/ProjectSpace";
import Aboutproject from "./components/ProjectsList";
import "./index.css";
import { useEffect, useState } from "react";
import { allProject } from "../../api/project";
import Navbar from "../../componets/navbar/navbar";
function ProjectFeed({ user }) {
  const [userProject, setUserProject] = useState([]);
  useEffect(() => {
    const fetchProject = async () => {
      const data = await allProject();
      setUserProject(data);
    };
    fetchProject();
  }, []);

  return (
    <div className="App">
      <Navbar />
      <SearchProject />
      <div className="view_project">
        <Projectspace setUserProject={setUserProject} user={user} />
        {userProject.length > 0 &&
          userProject.map((project) => {
            return <Aboutproject userProject={project} />;
          })}
      </div>
    </div>
  );
}

export default ProjectFeed;

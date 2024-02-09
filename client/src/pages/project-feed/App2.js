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
    <>
      <Navbar />
      <SearchProject />
      <div className="view-project">
        <div className="left-part">
           <Projectspace setUserProject={setUserProject} user={user} />
        </div>

        <div className="project-feed-component">
          {userProject.length > 0 &&
            userProject.map((project) => {
              return <Aboutproject userProject={project} />;
            })}
        </div>
      </div>
    </>
  );
}

export default ProjectFeed;

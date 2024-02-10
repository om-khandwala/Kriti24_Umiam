import { allProject, userProjects } from "../../../api/project";
import "./ProjectSpace1.css";

const Projectspace = ({ setUserProject, user }) => {
  const id = user._id;
  const handleAllProject = async () => {
    const data = await allProject();
    setUserProject(data);
  };
  const handleClick = async () => {
    const data = await userProjects(id);
    setUserProject(data);
  };

  return (
    <div className="project-options">
      <div className="allprojects">
        <img
          src="./images/profile-circle.png"
          alt="profile-circle"
          className="profile-circle"
        ></img>
        <button className="all_proj" onClick={handleAllProject}>
          All Projects
        </button>
      </div>
      <div className="myprojects">
        <img
          src="./images/profile-circle.png"
          alt="profile-circle"
          className="profile-circle"
        ></img>
        <button className="my_proj" onClick={handleClick}>
          My Projects
        </button>
      </div>
    </div>
  );
};

export default Projectspace;

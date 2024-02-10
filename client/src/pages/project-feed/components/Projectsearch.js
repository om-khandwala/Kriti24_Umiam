import { Link } from "react-router-dom";
import "./Projectsearch.css";

const SearchProject = () => {
  return (
    <nav className="serach_navbar">
      <img
        src="./images/profile-2user.png"
        alt="profile-user"
        className="profile_user"
      ></img>
      <Link to={"/upload"}>
        <button className="create-project-btn">Create Project</button>
      </Link>
    </nav>
  );
};

export default SearchProject;

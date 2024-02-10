import React from "react";
import "./style.css";
import { Link } from "react-router-dom";
function Github({ project }) {
  return (
    <div className="gith">
      <p className="git">Github</p>
      <div className="boxing6">
        <Link to={project.repository}>{project.repository}</Link>
      </div>
    </div>
  );
}

export default Github;

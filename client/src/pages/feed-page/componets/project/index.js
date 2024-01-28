import React from "react";
import Star from "../../../../componets/star";
import Language from "../../../../componets/language";
import "./style.css";
function Project() {
  return (
    <div className="project-container">
      <h3 className="project-name">Project name</h3>
      <p className="project-description">
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Necessitatibus
        modi doloribus nobis.
      </p>
      <div className="box">
        <div className="rating">
          <Star />
          <p>2.5k</p>
        </div>
        <div className="language-total">
          <Language name={"Java"} />
          <Language name={"PHP"} />
        </div>
      </div>
      <div className="line"></div>
    </div>
  );
}

export default Project;

import React from "react";
import Star from "../../../../componets/star";
import Language from "../../../../componets/language";
import HorizontalLine from '../../../../componets/line';
import "./style.css";
function Project({project, condition}) {
  console.log(project)
  return (
    <div className="project-container">
      {condition === 'group' ? (
        <h3 className="project-name">{project.name}</h3>
      ) : (
        <h3 className="project-name">{project.projectName}</h3>
      )}
      <p className="project-description">
        {project.description.split(' ').slice(0, 8).join(' ')}{project.description.split(' ').length > 10 ? '...' : ''}
      </p>

      <div className="box">
        <div className="rating">
          <Star />
          <p>{project.rating}</p>
        </div>
        <div className="language-total">
          {project.tags.map((tag, index) => (
              <Language key={index} id={index} name={tag} />
          ))}
        </div>
      </div>
      <HorizontalLine color={'black'}/>
    </div>
  );
}

export default Project;

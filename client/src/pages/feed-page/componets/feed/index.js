import React from "react";
import Language from "../../../../componets/language";
import "./style.css";
import Star from "../../../../componets/star";

function Feed({project}) {
  return (
    <div className="feed-container">
      <div className="heading">
        <div className="flex">
        <img src={project.logo} alt="Logo" />
          <h3>{project.projectName}</h3>
        </div>
        
        <div className="flex">
            {project.tags.map((tag, index) => (
                <Language key={index} name={tag} />
            ))}
        </div>

      </div>
      <div className="description">
        <p>
          {project.description}
        </p>
      </div>
      <div className="body-image">
        <img src={project.links.image[0]} alt="body-image" />
      </div>
      <div className="footer">
        <div className="like">
          <Star />
          <p>{project.rating}</p>
        </div>
        <div className="comment">
          <i class="fa-regular fa-comment"></i>
          <p>Comment</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;

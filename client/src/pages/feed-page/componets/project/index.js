import React, { useEffect, useState } from "react";
import Star from "../../../../componets/star";
import Language from "../../../../componets/language";
import HorizontalLine from "../../../../componets/line";
import { updateProject } from "../../../../api/project";
import "./style.css";
import StarLiked from "../../../../componets/likedStar";
import { Link } from "react-router-dom";

function Project({ project, condition, user }) {
  const [proj, setproj] = useState(project);
  console.log(proj);
  const [isLiked, setIsLiked] = useState(
    proj && proj.rating && proj.rating.includes(user._id)
  );

  const handlestar = async (e) => {
    console.log(proj);
    if (!proj.rating.includes(user._id)) {
      setproj({
        ...proj,
        numberofRatings: proj.numberofRatings + 1,
        rating: [...proj.rating, user._id],
      });
      const like = true;
      setIsLiked(like);
    } else {
      console.log("disliked");
      setproj({
        ...proj,
        numberofRatings: proj.numberofRatings - 1,
        rating: proj.rating.filter((id) => id !== user._id),
      });
      const like = false;
      setIsLiked(like);
    }
  };
  useEffect(() => {
    const updateproj = async () => {
      try {
        const response = await updateProject(proj, proj._id);
        console.log("liked");
      } catch (err) {
        console.error("Error updating project:", err);
      }
      console.log(proj);
    };
    updateproj();
  }, [proj]);

  return (
    <div className="project-container">
      {condition === "group" ? (
       <Link to={`../communities/${project._id}`}><h3 className="project-name">{project.name}</h3></Link>
      ) : (
        <Link to={`../project-feed/${proj._id}`}><h3 className="project-name">{proj.projectName}</h3></Link>
      )}
      <p className="project-description">
        {proj.description.split(" ").slice(0, 8).join(" ")}
        {proj.description.split(" ").length > 10 ? "..." : ""}
      </p>

      <div className="box">
        {condition!=="group"?<div className="rating" onClick={handlestar}>
          {isLiked ? <StarLiked /> : <Star />}
          <p>{proj.numberofRatings}</p>
        </div>:<div></div>}
        <div className="language-total">
          {proj.tags.map((tag, index) => (
            <Language key={index} id={index} name={tag} />
          ))}
        </div>
      </div>
      <HorizontalLine color={"black"} />
    </div>
  );
}

export default Project;

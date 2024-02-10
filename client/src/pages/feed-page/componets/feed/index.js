import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Language from "../../../../componets/language";
import "./style.css";
import Star from "../../../../componets/star";
// import st from "../../../../componets/star";
import { updateProject } from "../../../../api/project";
import StarLiked from "../../../../componets/likedStar";

function Feed({ project, user }) {
  const [proj, setproj] = useState(project);
  const [isLiked, setIsLiked] = useState(
    proj.rating.includes(user._id) ? true : false
  );
  const handlestar = async (e) => {
    if (!proj.rating.includes(user._id)) {
      setproj({
        ...proj,
        numberofRatings: proj.numberofRatings + 1,
        rating: [...proj.rating, user._id],
      });
      const like = true;
      setIsLiked(like);
    } else {
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
        const response = updateProject(proj, proj._id);
      } catch (err) {
        console.error("Error updating project:", err);
      }
      console.log(proj);
    };
    updateproj();
  }, [proj]);

  return (
    <div className="feed-container">
      <div className="heading">
        <div className="flex">
        <Link to={`../project-feed/${project._id}`}><img src={proj.logo} alt="Logo" />
          <h3>{proj.projectName}</h3></Link>
        </div>

        <div className="flex">
          {proj.tags.map((tag, index) => (
            <Language key={index} name={tag} />
          ))}
        </div>
      </div>
      <div className="description">
        <p>{proj.description}</p>
      </div>
      <div className="body-image">
        <img src={proj.links.image[0]} alt="bodyImage" />
      </div>
      <div className="footer">
        <div className="like" onClick={handlestar}>
          {isLiked ? <StarLiked /> : <Star />}
          <p>{proj.numberofRatings}</p>
        </div>
      </div>
    </div>
  );
}

export default Feed;

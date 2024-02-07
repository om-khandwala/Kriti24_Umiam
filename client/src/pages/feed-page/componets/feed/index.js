import React, { useState } from "react";
import Language from "../../../../componets/language";
import "./style.css";
import Star from "../../../../componets/star";
import { updateProject } from "../../../../api/project";

function Feed({project,user}) {
  const [proj,setproj] = useState(project);
  const handlestar = async (e) => {
    console.log(proj);
    if(!(proj.rating.includes(user._id))){
      setproj({...proj,numberofRatings:proj.numberofRatings+1,rating:[...proj.rating,user._id]});
      try{
        const response = await updateProject(proj,proj._id);
        console.log("liked")
      }catch(err){
        console.error('Error updating project:', err);
      }
    }else{
      console.log("disliked");
      setproj({...proj,numberofRatings:proj.numberofRatings-1,rating:proj.rating.filter((id)=>id!=user._id)});
      try{
        const response = await updateProject(proj,proj._id);
      }catch(err){
        console.error('Error updating project:', err);
      }
    }
  }

  return (
    <div className="feed-container">
      <div className="heading">
        <div className="flex">
        <img src={proj.logo} alt="Logo" />
          <h3>{proj.projectName}</h3>
        </div>
        
        <div className="flex">
            {proj.tags.map((tag, index) => (
                <Language key={index} name={tag} />
            ))}
        </div>

      </div>
      <div className="description">
        <p>
          {proj.description}
        </p>
      </div>
      <div className="body-image">
        <img src={proj.links.image[0]} alt="body-image" />
      </div>
      <div className="footer">
        <div className="like" onClick={handlestar}>
          <Star />
          <p>{proj.numberofRatings}</p>
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

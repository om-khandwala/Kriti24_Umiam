import React,{useState} from "react";
import Star from "../../../../componets/star";
import Language from "../../../../componets/language";
import HorizontalLine from '../../../../componets/line';
import { updateProject } from "../../../../api/project";
import "./style.css";


function Project({project, condition,user}) {
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
    <div className="project-container">
      {condition === 'group' ? (
        <h3 className="project-name">{proj.name}</h3>
      ) : (
        <h3 className="project-name">{proj.projectName}</h3>
      )}
      <p className="project-description">
        {proj.description.split(' ').slice(0, 8).join(' ')}{proj.description.split(' ').length > 10 ? '...' : ''}
      </p>

      <div className="box">
        <div className="rating" onClick={handlestar}>
          <Star />
          <p>{proj.numberofRatings}</p>
        </div>
        <div className="language-total">
          {proj.tags.map((tag, index) => (
              <Language key={index} id={index} name={tag} />
          ))}
        </div>
      </div>
      <HorizontalLine color={'black'}/>
    </div>
  );
}

export default Project;

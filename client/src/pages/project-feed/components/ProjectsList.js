import "./ProjectsList.css";

const Aboutproject = ({ userProject }) => {
  console.log(userProject, "faaf");
  return (
    <div className="about_proj">
      <div className="proj_title">
        <p className="title">{userProject.ProjectName}</p>
      </div>
      <div className="proj_img">
        {userProject.links.image.map((element) => {
          return (
            <img
              src={element}
              alt="project related images"
              className="projrelimg"
            ></img>
          );
        })}
      </div>
      <div className="proj_details">
        <p>{userProject.description}</p>
      </div>
      <div className="tech_used">
        {userProject.tags.map((tag) => {
          console.log(tag);
          return <button className="tools">{tag}</button>;
        })}
      </div>
    </div>
  );
};

export default Aboutproject;

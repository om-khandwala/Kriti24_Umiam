import "./ProjectsList.css";
import { Link } from 'react-router-dom';

const Aboutproject = ({ userProject }) => {
 // console.log(userProject, "faaf");
  return (
    <>
       <Link to={`./${userProject._id}`}>
          <div className="about_proj">
            <p className="title">{userProject.projectName}</p>
          
            <div className="tech_used">
              {userProject.tags.map((tag) => {
                console.log(tag);
                return <button className="tools">{tag}</button>;
              })}
            </div>
            <div className="proj_img">
              <div className="img-container">
                {userProject.links.image.length >= 5 && (
                    <>
                        {/* Render the first image separately */}
                        <div className="first-image">
                            <img
                                src={userProject.links.image[0]}
                                alt="project related images"
                                className="projrelimg"
                            />
                        </div>

                        <div className="other-images">
                            {userProject.links.image.slice(1, 5).map((element, index) => ( 
                                    <img
                                        src={element}
                                        alt="project related images"
                                        className="projrelimg"
                                        key={index}
                                    />
                            ))}
                        </div>
                    </>
                )}
              </div>
            </div>
            <div className="proj_img">
            {userProject.links.image.length>=2 && userProject.links.image.length<5 && userProject.links.image.slice(0,2).map((element) => {
                return (
                  <img
                    src={element}
                    alt="project related images"
                    className="projrelimg"
                  ></img>
                );
              })}
            </div>
            <div className="proj_img">
            {userProject.links.image.length===1 &&  userProject.links.image.slice(0,1).map((element) => {
                return (
                  <div className="single-img-container">
                    <img
                      src={element}
                      alt="project related images"
                      className="projrelimg"
                    ></img>
                  </div>
                );
              })}
            </div>
            <div className="proj_details">
              <p>{userProject.description}</p>
            </div>
          </div>
      </Link>
    </>
  );
};

export default Aboutproject;

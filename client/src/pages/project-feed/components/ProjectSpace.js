import './ProjectSpace.css'; 

const Projectspace = () => {
    return ( 
        <div className="project-options">
            <div className="allprojects">
                <img src='./images/profile-circle.png' alt='profile-circle' className='profile-circle'></img>
                <p className='all_proj'>All Projects</p>
            </div>
            <div className="myprojects">
                <img src='./images/profile-circle.png' alt='profile-circle' className='profile-circle'></img>
                <p className='my_proj'>My Projects</p>
            </div>
            <ul className="tags">
                    <li className="tags-title">React Master</li>
                    <li className="tags-title">Frontend Master</li>
                    <li className="tags-title">Backend Ninjas</li>
                </ul>
        </div>
     );
}
 
export default Projectspace;
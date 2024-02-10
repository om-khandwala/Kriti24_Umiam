import './component.css';

function Profile({userData}){
    return(
        <div className="profile">
            <div className='profile-bg'></div>
            <div className = 'user-image'>
                 <img src= {userData.logo}  className="user-img" alt = 'user-img'/>
            </div>
            <div className="user-details">
                <h2>{userData.name.toLowerCase()}</h2>
                <h4>{userData.shortDescription}</h4>        
            </div>
            
        </div>
    )
};

export default Profile;
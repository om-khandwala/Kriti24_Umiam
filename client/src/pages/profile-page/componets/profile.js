import './component.css';

function Profile(){
    return(
        <div className="profile">
            <img src='/images/cover.webp' alt='user background img' className='bg-img'/>
            <img src= '/images/user.jpg'  className="user-img" alt = 'user-img'/>
            <div className="user-details">
                <div className="left">
                    <h2>Name</h2>
                    <h4>Short Description</h4>
                </div>
                <div className="right">
                    <button>Edit Profile</button>
                </div>
            </div>
        </div>
    )
};

export default Profile;
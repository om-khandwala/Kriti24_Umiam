import './style.css'
import Profile from "./componets/profile";
import UserDetails from "./componets/user-detail";
import AboutSection from './componets/about-me';
import MyCourses from './componets/user-courses';
import UserProject from './componets/user-project';

function ProfilePage(){
    return(
        <div className='profile-page'>
            <div className="profile-header">
                <Profile className='profile'/>
                <UserDetails />
            </div>

            <AboutSection />
            <MyCourses />
            <UserProject />
        </div>
    );
}

export default ProfilePage;
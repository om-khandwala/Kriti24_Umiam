import './style.css';
import Profile from "./componets/profile";
import UserDetails from "./componets/user-detail";
import AboutSection from './componets/about-me';
import MyCourses from './componets/user-courses';
import UserProject from './componets/user-project';
import Navbar from '../../componets/navbar/navbar';
import { useState, useEffect } from 'react';
import { getUser } from '../../api/user';
import Cookies from 'js-cookie';

function ProfilePage() {
    const [userData, setUserData] = useState('');
    const [activeMenu, setActiveMenu] = useState('project');
    const storedToken = Cookies.get('token');

    useEffect(() => {
        const fetchUserData = async () => {
            try {
                const userData = await getUser(storedToken);
                setUserData(userData);
            } catch (error) {
                console.error('Error fetching user data:', error);
            }
        };

        fetchUserData();
    }, [storedToken]);

    // Define a function to handle menu clicks
    const handleMenuClick = (menu) => {
        setActiveMenu(menu);
    };

    return (
        <>
            <Navbar />
            <div className='profile-page'>
                <div className="profile-header">
                    <Profile className='profile' userData={userData} />
                </div>

                <div className='user-menu flex'>
                    <p onClick={() => handleMenuClick('project')}>Project</p>
                    <p onClick={() => handleMenuClick('about')}>About Me</p>
                </div>

                {activeMenu === 'project' && <UserProject userData={userData} />}
                {activeMenu === 'about' && (
                    <div className='about-user'>
                        <UserDetails userData={userData} />
                        <AboutSection userData={userData} />
                        <MyCourses userData={userData} />
                    </div>
                )}
            </div>
        </>
    );
}

export default ProfilePage;

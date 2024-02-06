import './style.css';
import MyProject from './componets/my-project';
import Profile from './componets/profile';
import Feed from './componets/feed';
import Project from './componets/project';
import { useState, useEffect } from 'react';
import { allProject, recentProject, userProjects } from '../../api/project';
import Navbar from '../../componets/navbar/navbar';
import { allGroups } from '../../api/groups';
import { Link } from 'react-router-dom';

function FeedPage({user}) {
    const [allProjects, setAllProjects] = useState([]);
    const [userProject, setUserProject] = useState([]);
    const [groups, setGroups] = useState([]);
    const [recentProjects, setRecentProjects] = useState([]);

   // console.log(allProjects, recentProjects);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedAllProjects = await allProject();
            fetchedAllProjects.sort((a,b) => b.rating - a.rating);
            setAllProjects(fetchedAllProjects);

            const fetchedRecentProjects = await recentProject();
            setRecentProjects(fetchedRecentProjects);

            const fetchedAllGroups = await allGroups();
            setGroups(fetchedAllGroups);

            const fetchedUserProject = await userProjects(`${user._id}`);
            setUserProject(fetchedUserProject);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <div className="left-section">
                    <Profile user={user}/>
                    <MyProject userProject= {userProject} />
                </div>
                <div className="middle-section">
                    {recentProjects.length > 0 && recentProjects.map((project, index) => (
                        <Feed key={index} project={project} />
                    ))}
                </div>
                <div className="right-section">
                    <div className="top-projects">
                        <h2>Top Project</h2>
                        {allProjects.length > 0 && <Project project={allProjects[0]}/>}
                        {allProjects.length > 1 && <Project project={allProjects[1]}/>}
                        {allProjects.length > 2 && <Project project={allProjects[2]}/>}
                     
                        <p>Explore More</p>
                    </div>
                    <div className="top-groups">
                        <h2>Top Communities</h2>
                            {groups.length > 0 && <Project condition = {'group'} project={groups[0]}/>}
                            {groups.length > 1 && <Project project={groups[1]}/>}
                        <p><Link to='/communities/'>Explore More</Link></p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedPage;

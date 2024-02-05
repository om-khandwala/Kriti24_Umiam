import './style.css';
import MyProject from './componets/my-project';
import Profile from './componets/profile';
import Feed from './componets/feed';
import Project from './componets/project';
import { useState, useEffect } from 'react';
import { allProject, recentProject } from '../../api/project';
import Navbar from '../../componets/navbar/navbar';

function FeedPage({user}) {
    const [allProjects, setAllProjects] = useState([]);
    const [recentProjects, setRecentProjects] = useState([]);

    console.log(allProjects, recentProjects);

    useEffect(() => {
        const fetchData = async () => {
            const fetchedAllProjects = await allProject();
            setAllProjects(fetchedAllProjects);

            const fetchedRecentProjects = await recentProject();
            setRecentProjects(fetchedRecentProjects);
        };

        fetchData();
    }, []);

    return (
        <div>
            <Navbar />
            <div className="main-container">
                <div className="left-section">
                    <Profile user={user}/>
                    <MyProject />
                </div>
                <div className="middle-section">
                    {recentProjects.length > 0 && recentProjects.map((project, index) => (
                        <Feed key={index} project={project} />
                    ))}
                </div>
                <div className="right-section">
                    <div className="top-projects">
                        <h2>Top Project</h2>
                        <Project />
                        <Project />
                        <Project />
                        <p>Explore More</p>
                    </div>
                    <div className="top-groups">
                        <h2>Top Groups</h2>
                        <Project />
                        <Project />
                        <p>Explore More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedPage;

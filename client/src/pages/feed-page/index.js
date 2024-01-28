import './style.css';
import Navbar from './componets/navbar';
import MyProject from './componets/my-project';
import Profile from './componets/profile';
import Feed from './componets/feed';
import Project from './componets/project';

function FeedPage() {
    return (
        <div>
            <Navbar />
            <div className="main-container">
                <div className="left-section">
                    <Profile />
                    <MyProject />
                </div>
                <div className="middle-section">
                    <Feed />
                    <Feed />
                    <Feed />
                </div>
                <div className="right-section">
                    <div className="top-projects">
                        <h2>Top Project</h2>
                        <Project />
                        <Project />
                        <Project />
                        <p>Exlopre More</p>
                    </div>
                    <div className="top-groups">
                        <h2>Top Groups</h2>
                        <Project />
                        <Project />
                        <p>Exlopre More</p>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default FeedPage;

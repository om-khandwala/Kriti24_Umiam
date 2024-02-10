import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { Link } from 'react-router-dom';
import { joinGroup } from '../../../../api/groups';

function Group({ group, user }) {

    const notify = (message) => toast(message);

    const join = async () => {
        const data = {
            groupId: group._id,
            userId: user._id
        };
        try {
            const response = await joinGroup(data);
            notify(response.msg);
        } catch (error) {
            console.error('Error joining group:', error);
        }
    };

    return (
        <>
        <div className="post">
            <h4>{group.name}</h4>
            <p>{group.description}</p>
            <div className="lang">
                {group.tags.map((tag, index) => (
                    <p key={index}>{tag}</p>
                ))}
            </div>

            <hr />
            <div className="foot">
                <div className="left_foot">
                    <div className="enter">
                        <i className="fa-solid fa-people-arrows"></i>
                        <Link to={`./${group._id}`}>
                            <button>Enter Discussion</button>
                        </Link>
                    </div>
                    <div className="Join">
                        <i className="fa-solid fa-right-to-bracket"></i>
                        <button onClick={join}>Join</button>
                    </div>
                </div>
                <div className="right_foot">
                    <i className="fa-solid fa-share"></i>
                    <h4>Share</h4>
                </div>
            </div>
        </div>
        </>
    );
}

export default Group;
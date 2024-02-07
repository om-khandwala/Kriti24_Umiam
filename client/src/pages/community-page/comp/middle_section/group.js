import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import { joinGroup } from '../../../../api/groups';

function Group({group, user}){
    let joinMsg;

    console.log('jkndfgjdjfgjdg',group, user)

    useEffect(()=>{
      const join = async () => {
        const data = {
          groupId: group._id,
          userId: user._id
        }
        joinMsg = await joinGroup(data);
        console.log(joinMsg)
      }
  
      join()
    },[group, user._id])

    return(
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
                        <i class="fa-solid fa-people-arrows"></i>
                        <Link to={`./${group._id}`}>
                        <button>Enter Descussin</button>
                        </Link>
                    </div>
                    <div className="Join">
                        <i class="fa-solid fa-right-to-bracket"></i>
                        <button onClick={() => alert(joinMsg.msg)}>Join</button>
                    </div>
                </div>
                <div className="right_foot">
                        <i class="fa-solid fa-share"></i>
                        <h4>Share</h4>
                </div>
                </div>
            </div>
        </>
    )
}

export default Group;
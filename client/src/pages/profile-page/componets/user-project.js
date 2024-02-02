import './component.css'
import Project from './project';

function UserProject (){
    return(
        <div class='user-projects'>
            <h4>My Projects</h4>
            <hr/>
            <div>
                <Project />
                <Project />
                <Project />
            </div>
        </div>
    )  
}

export default UserProject;
import './component.css'
import Project from './project';

function UserProject (){
    return(
        <div class='user-projects'>
            <Project />
            <Project />
            <Project /> 
        </div>
    )  
}

export default UserProject;
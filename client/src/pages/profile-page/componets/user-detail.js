import './component.css'
import HorizontalLine from '../../../componets/line';

function UserDetails ({userData}){
    return(
        <div className="user-info">
            <h4>Info</h4>
            <HorizontalLine color={'white'}/>
            <div>
                <p><strong>Major in  </strong>{userData.branch}</p>
                <p><strong>Roll Number</strong>{userData.rollNumber}</p>
                <p><strong>Year of Study </strong>2nd Year</p>
                <p><strong>Semester </strong></p>
            </div>
        </div>
    );
}

export default UserDetails;
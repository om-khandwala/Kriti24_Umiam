import './component.css'

function UserDetails ({userData}){
    return(
        <div class="user-info">
            <h4>Info</h4>
            <hr/>
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
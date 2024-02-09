import HorizontalLine from '../../../componets/line';
import './component.css'
import Course from './course';

function MyCourses(){
    return (
        <div class="course-section">
            <h4>My Courses</h4>
            <HorizontalLine color={'white'}/>
            <div>
                <Course/>
            </div>
        </div>
    )
}

export default MyCourses;
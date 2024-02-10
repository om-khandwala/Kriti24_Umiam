import './component.css';

function Course({course}){
    console.log("course",course);
    return(
        <div className='course-components'>
            <div className='course-details'>
                <h4>{course.title}</h4>
                <p>{course.description}</p>
            </div>
        </div>
    )
}

export default Course;
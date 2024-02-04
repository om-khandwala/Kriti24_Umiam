import './component.css';

function AboutSection({userData}){
    return (
        <div className = 'about-section'>
            <h4>About Me</h4>
            <hr/>
            <p>{userData.description}</p>
        </div>
    )
}

export default AboutSection;
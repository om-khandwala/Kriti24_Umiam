import './component.css';
import HorizontalLine from '../../../componets/line';

function AboutSection({userData}){
    return (
        <div className = 'about-section'>
            <h4>About Me</h4>
            <HorizontalLine color={'white'} />
            <p>{userData.description}</p>
        </div>
    )
}

export default AboutSection;
import { Link } from 'react-router-dom';
import './HomeButtons.css';

export function ProjectButton() {
    return (
        <Link to='/projects'><button className='homeButton' id='projectsButton'>My Projects</button></Link>
    );
}

export function AboutButton() {
    return (
        <Link to='/about'><button className='homeButton' id='aboutButton'>About</button></Link>
    );
}

export function ResumeButton() {
    return (
        <Link to='/resume'><button className='homeButton' id='resumeButton'>Resume</button></Link>
    );
}

export function ContactButton() {
    return (
        <Link to='/contact'><button className='homeButton' id='contactButton'>Contact</button></Link>
    );
}

    
    


//export default ProjectButton;
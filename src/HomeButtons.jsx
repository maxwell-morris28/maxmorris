import { Link } from 'react-router-dom';
import './HomeButtons.css';

export function ProjectButton() {
    return (
        <button className='homeButton' id='projectsButton'><Link to='/projects'>My Projects</Link></button>
    );
}

export function AboutButton() {
    return (
        <button className='homeButton' id='aboutButton'><Link to='/about'>About</Link></button>
    );
}

export function ResumeButton() {
    return (
        <button className='homeButton' id='resumeButton'><Link to='/resume'>Resume</Link></button>
    );
}

export function ContactButton() {
    return (
        <button className='homeButton' id='contactButton'><Link to='/contact'>Contact</Link></button>
    );
}

    
    


//export default ProjectButton;
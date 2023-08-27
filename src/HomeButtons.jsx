import { Link } from 'react-router-dom';
import './HomeButtons.css';

export function ProjectButton() {
    return (
        <Link to='/projects'><button className='homeButton' id='projectsButton'>My Projects</button></Link>
    );
}

export function ProjectsSubButton(props) {
    return (
        <a href={props.projectLink} target='_blank' rel='noreferrer'><button className='homeButton' id='projectsSubButton'>View Project</button></a>
    );
}

export function AboutButton() {
    return (
        <Link to='/about'><button className='homeButton' id='aboutButton'>About</button></Link>
    );
}

export function ResumeButton() {
    return (
        <Link to='/resume'><button className='homeButton resumeButton'>Resumé</button></Link>
    );
}

export function ResumeSubButton() {
    return (
        <a href='maxmorris_resume.pdf'><button className='homeButton' id='resumeSubButton'>Download Resumé</button></a>
    );
}

export function ContactButton() {
    return (
        <Link to='/contact'><button className='homeButton' id='contactButton'>Contact</button></Link>
    );
}

export function ContactSubButton(props) {
    return (
        <a href={props.contactLink} target='_blank' rel="noreferrer"><button className='homeButton' id='contactSubButton'>{props.contactName}</button></a>
    )
}

    
    


//export default ProjectButton;
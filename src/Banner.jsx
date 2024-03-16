import './Banner.css'
import { Link } from 'react-router-dom';


function Banner() {
    return (
        <div className="container">
            <div className='logo'>
                <img src='src/Logo.png' alt='Site logo, green, purple and red diagonal lines'></img>
            </div>
            <div className="navButtons">
                <Link to='/'><h3 className='nav' id='projects'>Projects</h3></Link>
                <Link to='/about'><h3 className='nav'>About Me</h3></Link>
                <Link to='/resume'><h3 className='nav'>Resume</h3></Link>
                <Link to='/contact'><h3 className='nav'>Contact</h3></Link>
            </div>
        </div>

    );
}

export default Banner
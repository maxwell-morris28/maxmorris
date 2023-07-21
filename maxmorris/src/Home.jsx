import './App.css';
import Banner from './Banner.jsx';
import { Link } from 'react-router-dom';


function Home() {
    return (
      <div className='card-overlay'>
        <Banner pageName="Hi, I'm Max!" />
        <button><Link to='/projects'>My Projects</Link></button>
        <button><Link to='/about'>About Me</Link></button>
        <button><Link to='/resume'>Resume</Link></button>
        <button><Link to='/contact'>Contact</Link></button>
        <div className='subheader'>
          <h2>A UX Designer and Researcher that Knows the Web</h2>
        </div>
      </div>
      
    )
  }
  
  export default Home
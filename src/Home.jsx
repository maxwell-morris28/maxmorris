import Banner from './Banner.jsx';
import { ProjectButton, AboutButton, ResumeButton, ContactButton } from './HomeButtons.jsx';
//import ProjectButton from './ProjectButton.jsx';
import './Home.css';


function Home() {
  window.scrollTo(0,0);
    return (
      <div id='HomeMenu'>
        <div className='card-overlay'>
          <Banner pageName="Hi, I'm Max!" />

          <div className='subheader'>
            <h2>A UX Designer and Researcher that Knows the Web</h2>
          </div>
          <div className='homeButtons'>
            <ProjectButton />
            <AboutButton />
            <ResumeButton />
            <ContactButton />
          </div>
          <br></br>

        </div>
      </div>
    )
  }
  
  export default Home
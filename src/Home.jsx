import Banner from './Banner.jsx';
import { ProjectButton, AboutButton, ResumeButton, ContactButton } from './HomeButtons.jsx';
//import ProjectButton from './ProjectButton.jsx';
import './Home.css';


function Home() {
    return (
      
      <div id='HomeMenu'>
        <Banner />
        <div className='card-overlay'>
          <div className='subheader'>
            <h2>Hi, I'm</h2>
          </div>
          <div className= 'name'>
            <h1>Max</h1>
          </div>
          <div className='subheader' id='subText'>
            <h2>Combining Design, Research, and Code to Create People-Friendly Experiences. Built from scratch with Figma and React.</h2>
          </div>
          <br></br>          <br></br>
          <br></br>          <br></br>
          <br></br>
          <br></br>


          <div className='projectList'>

            <div className='project' id='projectOne'>
              <img src='src/healthcrop.jpg'></img>
              <h2>Preventative Healthcare Model</h2>
            </div>

            <div className='project' id='ProjectTwo'>
              
            </div>

            <div className='project' id='projectThree'>
              
            </div>

          </div>
         
          
          <br></br>

        </div>
      </div>
    )
  }
  
  export default Home
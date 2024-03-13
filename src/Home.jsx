import Banner from './Banner.jsx';
import { ProjectButton, AboutButton, ResumeButton, ContactButton } from './HomeButtons.jsx';
//import ProjectButton from './ProjectButton.jsx';
import './Home.css';


function Home() {
    return (
      
      <div id='HomeMenu'>
        <Banner />
          <div className='subheader'>
            <h2>Hi, I'm</h2>
          </div>
          <div className= 'name'>
            <h1>Max</h1>
          </div>
          <div className='subheader' id='subText'>
            <h2>Combining Design, Research, and Code to Create People-Friendly Experiences. Built from scratch with Figma and React.</h2>
          </div>
         

          <div className='projectBody'>
            <div className='projectList'>

              <div className='project' id='projectOne'>
                <img src='src/healthcrop.jpg'></img>
              </div>

              <div className='project' id='projectTwo'>
                <img src='src/healthcrop.jpg'></img>
                
              </div>

              <div className='project' id='projectThree'>
                <img src='src/healthcrop.jpg'></img>
              </div>

              <div className='project' id='projectThree'>
                <img src='src/healthcrop.jpg'></img>
              </div>

            </div>
          </div>
          
         
          
          <br></br>

      </div>
    )
  }
  
  export default Home
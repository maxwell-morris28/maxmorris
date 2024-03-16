import Banner from './Banner.jsx';
import { ProjectButton, AboutButton, ResumeButton, ContactButton, ProjectsSubButton } from './HomeButtons.jsx';
//import ProjectButton from './ProjectButton.jsx';
import './Home.css';


function Home() {
    return (
      
      <div id='HomeMenu'>
        <Banner />
          <div className='subheader' id='greetingText'>
            <h2>Hi, I'm</h2>
          </div>
          <div className= 'name'>
            <h1>Max</h1>
          </div>
          <div className='subheader' id='subText'>
            <h2>Combining Design, Research, and Code to Create People-Friendly Experiences. Built from scratch with Figma and React.</h2>
          </div>
          {/*<div className='myWork'>
            <h2 id='resumeSubheader'>
              My Work
            </h2>
    </div>*/}

          <div className='projectBody'>
            <div className='projectList'>

            <div className='project' id='projectOne'>     
                
              <img src='src/sampleimg.png'></img>
              <div className='projectText'>  
                <h2 className='projectTitle'>AntiFragility Health</h2>
                <h2 className='projectTopics'>User Research</h2>
                <p className = 'projectDesc'>Applying user research methods to determine the barriers for customers of a 
                clinic trying to maintain a healthy lifestyle.</p>
                <ProjectsSubButton projectLink=''></ProjectsSubButton>
              </div>
               
            </div>

              

              <div className='project' id='projectTwo'>
                <div className='projectText'>  
                  <h2 className='projectTitle'>IMPACT Libraries</h2>
                  <h2 className='projectTopics'>User Research | Design</h2>
                  <p className = 'projectDesc'>Aiding library professionals in facilitating children computational thinking 
                  classes through a more accessible website redesign.</p>
                    <ProjectsSubButton projectLink=''></ProjectsSubButton>
                </div>   
                <img src='src/healthcrop.jpg'></img>
              </div>

              <div className='project' id='projectThree'>
                <img src='src/sampleimg.png'></img>
                <div className='projectText'>  
                  <h2 className='projectTitle'>Preventative Healthcare Model</h2>
                  <h2 className='projectTopics'>User Research</h2>
                  <p className = 'projectDesc'>Applying user research methods to determine the barriers for customers of a 
                  clinic trying to maintain a healthy lifestyle.</p>
                  <ProjectsSubButton projectLink=''></ProjectsSubButton>
                </div>
              </div>

              <div className='project' id='projectFour'>
                <div className='projectText'>  
                    <h2 className='projectTitle'>Preventative Healthcare Model</h2>
                    <h2 className='projectTopics'>User Research</h2>
                    <p className = 'projectDesc'>Applying user research methods to determine the barriers for customers of a 
                    clinic trying to maintain a healthy lifestyle</p>
                    <ProjectsSubButton projectLink=''></ProjectsSubButton>
                  </div>   
                  <img src='src/healthcrop.jpg'></img>
                </div>

            </div>
          </div>
          
         
          
          <br></br>

      </div>
    )
  }
  
  export default Home
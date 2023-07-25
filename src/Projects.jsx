import './SubBanner';
import SubBanner from './SubBanner';
import './Projects.css'
import { ProjectsSubButton } from './HomeButtons';

function Projects() {
    return (
      <div id="projectBackground">
          <SubBanner pageName='My Projects' id='projects-banner' />
          <div className='ProjectOne'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>New Student Social Events</h1>
                <p className='project-desc'>Designing an app for students new to the University of Maryland 
                  in order to connect them to the local social scene</p>
                <ProjectsSubButton />
              </div>
            </div>
          </div>
          
          <div className ='ProjectTwo'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>Repainting the Canvas</h1>
                <p className='project-desc'>Applying user centered research and design to assist the adjustment to 
                online learning during the COVID-19 pandemic</p>
                  <ProjectsSubButton projectLink='https://uxfol.io/p/mmorris18/038ff6de'/>
              </div>
            </div>
          </div>
          
          <div className='ProjectThree'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>Website Usability & Accessibility</h1>
                <p className='project-desc'>Aiding library professionals in facilitating computational thinking 
                classes for children</p>
                  <ProjectsSubButton />
                </div>
            </div>  
          </div>      
      </div>
      
    )
  }
  
  export default Projects
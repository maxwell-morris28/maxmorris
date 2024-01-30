import './SubBanner';
import SubBanner from './SubBanner';
import './Projects.css';  
import { ProjectsSubButton } from './HomeButtons';

function Projects() {
    return (
      <div id="projectBackground">
        <SubBanner pageName='My Projects' id='projects-banner' />
        <div className='projectContentAll'>
          <div className='ProjectOne'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>Preventative Healthcare Model</h1>
                <p className='project-desc'>Applying user research methods to determine the barriers for customers of a clinic
                trying to maintain a healthy lifestyle</p>
                <ProjectsSubButton projectLink="https://uxfol.io/p/mmorris18/021f5381"/>
              </div>
            </div>
          </div>
          
          {/*<div className ='ProjectTwo'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>New Student Social Events</h1>
                <p className='project-desc'>Designing an app for students new to the University of Maryland 
                  in order to connect them to the local social scene</p>
                  <ProjectsSubButton projectLink='https://uxfol.io/p/mmorris18/021f5382'/>
              </div>
            </div>
          </div>*/}
          
          {/*<div className='ProjectThree'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>Usability Evaluation: User Testing</h1>
                <p className='project-desc'>A moderated study of the desktop version of YouTube to assess its usability</p>
                  <ProjectsSubButton projectLink='https://uxfol.io/p/mmorris18/021f5383'/>
                </div>
            </div>  
        </div>*/ }

          <div className='ProjectFour'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>Website Usability & Accessibility</h1>
                <p className='project-desc'>Aiding library professionals in facilitating computational thinking 
                classes for children through a more accessible website redesign</p>
                  <ProjectsSubButton projectLink='https://uxfol.io/p/mmorris18/0302aae8'/>
                </div>
            </div>  
          </div>

          <div className='ProjectFive'>
            <div className='card-overlay'>
              <div className='project-container'>
                <h1 className='project-title'>Online Learning Case Study</h1>
                <p className='project-desc'>Applying user centered research and design to assist the adjustment to 
                online learning during the COVID-19 pandemic</p>
                  <ProjectsSubButton projectLink='https://uxfol.io/p/mmorris18/038ff6de'/>
                </div>
            </div>  
          </div>  
        </div>     
      </div>
      
    )
  }
  
  export default Projects
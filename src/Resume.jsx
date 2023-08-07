import SubBanner from "./SubBanner"
import './Resume.css'
import { ResumeSubButton } from './HomeButtons'

function Resume() {
    return (
      <div id="resumeBackground">
        <div className='card-overlay' id='resumeOverlay'>
          <SubBanner pageName='Resumé'/>
          <div className="resumeContentAll">
            <h2 id='resumeSubheader'>UX Designer/Resarcher</h2>  
            <div className='resumeContainer'>          
              <p> I have a B.S. in Information Science and will be graduating from the Human-Computer Interaction Master’s program at the 
                University of Maryland this coming Spring 2024. 
                I have three years of experience applying user-centered design and research concepts 
                in aiding others and have also taken on leadership roles promoting diversity and inclusion. 
                Please see the link to my resume below.</p>
              <ResumeSubButton />
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Resume
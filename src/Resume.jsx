import SubBanner from "./SubBanner"
import './Resume.css'

function Resume() {
    return (
      <div id="resumeBackground">
        <div className='card-overlay'>
          <SubBanner pageName='Resume'/>
        </div>
      </div>
    )
  }
  
  export default Resume
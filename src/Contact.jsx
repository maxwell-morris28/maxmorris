import SubBanner from "./SubBanner"
import { ContactSubButton } from "./HomeButtons"
import './Contact.css'
function Contact() {
    return (
      <div id='contactBackground'>
        <div className='card-overlay' id='contact-overlay'>
          <SubBanner pageName='Contact Me'/>
          <h2 id='resumeSubheader'>Please Feel Free to Reach Out!</h2>
          <div className='resumeContainer'>          
            <p> If you would like to reach out to me, I am available primarily through email and LinkedIn. Please see the links 
              below. I look forward to hearing from you!</p>
            <div className='buttonContainer'>
              <ContactSubButton contactName='Email' contactLink='mailto: mmorri2000@gmail.com'/>
              <ContactSubButton contactName='LinkedIn' contactLink='https://www.linkedin.com/in/maxwell-morris-7bb559176/'/>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
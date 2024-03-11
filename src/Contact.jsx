import SubBanner from "./SubBanner";
import Banner from "./Banner";
import { ContactSubButton } from "./HomeButtons";
import './Contact.css';
function Contact() {
    return (
      <div id='contactBackground'>
        <Banner />
        <div className='card-overlay' id='contact-overlay'>
          <div className="contactContentAll">
            <h2 id='resumeSubheader'>Please Feel Free to Reach Out!</h2>
            <div className='resumeContainer'>          
              <p> If you would like to reach out to me, I am available primarily through email and LinkedIn. Please see the links 
                below. I look forward to hearing from you!</p>
              <div className='buttonContainer'>
                <ContactSubButton contactName='Email' contactLink='mailto: mmorri2000@gmail.com'/>
                <ContactSubButton contactName='LinkedIn' contactLink='https://www.linkedin.com/in/maxwell-morris-7bb559176/'/>
                <br></br><br></br>

              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
  
  export default Contact
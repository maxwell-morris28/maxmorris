import SubBanner from "./SubBanner"
import "./About.css"
function About() {
    return (
      <div id="aboutBackground">
        <div className='card-overlay' id='resumeOverlay'>
          <SubBanner pageName='About Me'/>
          
            
          <div className="aboutContentAll">
            <h2 className='aboutSubheader'>Nice to Meet You!</h2>
            <div className='aboutContainer'>          
              <p id="intro">My name is Maxwell Morris, but you can just call me Max. I am currently attending the University of Maryland, 
                College Park in my last year pursuing a Master&apos;s degree in Human-Computer Interaction.<br></br><br></br> 
                I was introduced to technology at a very young age, which has fostered an interest that played a huge role in 
                deciding my career path. As a result, I have gained experience and skills across multiple disciplines, such as 
                UX Design and web development.</p>
              <img id='headshot' src="src/Max_Headshot.png"/>
            </div>
            <div className='myMission'>
              <h2 className='aboutSubheader' id='missionHeader'>My Mission</h2>
              <p id='missionText'>My love for computers and tech is matched by my strong desire to help others. I take pride in my strong
              sense of empathy, especially as a person of color. I believe in “Contextual Design,” where I can immerse in the lives of 
              those I design for so that I can truly see them as people, and not simply users. 
              <br></br><br></br>
              With technology becoming a more widespread, integral component of our lives, we are given new solutions, but also face more
              problems. I chose to become a UX Designer because I want to leverage my skills in technology to help address the existing
              and emerging problems of the world, whether it is related to accessibility, the COVID-19 pandemic, or anything else.
              <br></br><br></br>
              I am quite versatile, also having a skillset in front end web development (ie. HTML, CSS, JavaScript, React and Three.js) 
              which allows me to help bridge the gap between designers and developers. As a matter of fact, the website you are reading 
              this excerpt from was built from scratch using React! This skill I picked up helps to promote a more seamless workflow 
              that will allow helping those in need become that much easier.
              <br></br><br></br></p>
            </div>
          </div>
        </div>
      </div>

      
    )
  }
  
  export default About
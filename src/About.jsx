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
              <p id="intro">My name is Maxwell Morris, but you can just call me Max! I am currently attending the University of Maryland, 
                College Park in my last year pursuing a Master&apos;s degree in Human-Computer Interaction.<br></br><br></br> 
                I was introduced to technology at a very young age, which has fostered an interest that played a huge role in 
                deciding my career path. As a result, I have gained experience and skills across multiple disciplines, such as 
                UX Design and web development.</p>
              <img id='headshot' src="src/Max_Headshot.png" alt='Professional headshot of me smiling while wearing a dark blue blazer 
              with a light blue shirt'/>
            </div>
            <div className='myMission'>
              <h2 className='aboutSubheader' id='missionHeader'>My Mission</h2>
              <p id='missionText'>My love for computers and tech is matched by my strong desire to help others. I take pride in my strong
              sense of empathy, especially as a person of color who works directly with disadvantaged undergraduate students to help 
              build them up despite their circumstances. I believe in “Contextual Design,” where I can immerse in the lives of those 
              I design for so that I can truly see them as people, and not simply users. 
              <br></br><br></br>
              With technology becoming a more widespread, integral component of our lives, we are given new solutions, but also face more
              problems. I chose to become a UX Designer because I want to leverage my skills in technology to help address the existing
              and emerging problems of the world, whether it is related to accessibility, the COVID-19 pandemic, or anything else. 
              <br></br><br></br>
              As a UX Designer, I am always learning and willing to learn. But I have also gotten the chance to gain experience in areas 
              such as user-centered design, UX research methods, UI and Interaction Design, prototyping through Figma, designing for
              diversity, accessibility and WCAG, as well as the Agile methodology.
              <br></br><br></br>
              I am quite detail-oriented, committed to seeing my jobs through to the end without cutting corners. To that end, 
              I&apos;ve chosen to wear multiple hats through an additional skillset in front end web development (ie. HTML, CSS, JavaScript, 
              React and Three.js) which allows me to bridge the gap between designer and developer. As a matter of fact, the website 
              you are reading this excerpt from was built from scratch using React! I taught myself this skill because I am a 
              team player--I want to help promote a more seamless workflow that will allow helping those in need become that much easier.
              <br></br><br></br>
              I hope that by looking through my projects you can gain further insight on who I am as a designer and the passion I have 
              for what I do.
              </p>
            </div>
            <div className='funFacts'>
              <h2 className='aboutSubheader' id='funFactHeader'>Fun Facts</h2>
              <ul>
                <li className='factText'>I have a minor in Japanese (よろよろしくおねがいします！)</li><br></br>
                <li className="factText">I am a gamer currently working on developing my own game (JRPG's are my absolute favorite. I
                also love Super Smash Bros. Ultimate! )</li><br></br>
                <li className='factText'>I learned how to use a computer at three years old and my passion for them hasn't changed!</li><br></br>
                <li className="factText">I like to run 10K&apos;s in my spare time. As of right now, I can do around 53 minutes!</li><br></br>
              </ul>
              <br></br><br></br>
            </div>
          </div>
        </div>
      </div>

      
    )
  }
  
  export default About
import { Routes, Route } from 'react-router-dom';
import Home from './Home.jsx';
import About from './About.jsx';
import Resume from './Resume.jsx';
import Contact from './Contact.jsx';





function App() {
  

  return (
    <Routes>
      <Route path='/' element={ <Home /> } />
      <Route path='/About' element={ <About /> } />
      <Route path='/Resume' element={ <Resume /> }/>
      <Route path='/Contact' element={ <Contact /> }/>
    </Routes>
    
  )
}

export default App

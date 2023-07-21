import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Banner from './Banner.jsx'

function App() {
  

  return (
    <div className='card-overlay'>
      <Banner pageName="Hi, I'm Max!" />
      <div className='subheader'>
        <h2>A UX Designer and Researcher that Knows the Web</h2>
      </div>
    </div>
    
  )
}

export default App

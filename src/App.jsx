import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import HeroSection from './components/HeroSection'
import AboutMe from './components/AboutMe'
import Contact from './components/Contact'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <HeroSection />
      <AboutMe />
      <Projects />
      <Contact />
    </>
  )
}

export default App

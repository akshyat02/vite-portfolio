import { React, useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import Navbar from './components/Navbar'
import Bot from './components/Bot'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'

function App() {
  return (
    <div>
      <Navbar/>
      <Bot/>
      <Hero/>
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App

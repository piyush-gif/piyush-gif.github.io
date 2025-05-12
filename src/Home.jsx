import { useState } from 'react'
import './styles/NavBar.css'
import './styles/Body.css'
import './styles/Projects.css'
import './styles/Certification.css'
import './Components/NavBar'
import NavBar from './Components/NavBar'
import Card from './Components/Card'
import Project from './Components/Project'
import Certification from './Components/Certification'
import Contact from './Components/Contact'

function Home() {
  
  return (
    <>
      <NavBar/>
      <Card/>
      <Project/>
      <Certification/>
      <Contact/>
    </>
  )
}

export default Home

import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImgTwo from '../components/HeroImgTwo'
import Work from '../components/Work'

const Project = () => {
  return (
    <div>
       
      <Navbar />
      <HeroImgTwo heading="PROJECTS." text="some of my recent works" />
      <Work/>
      <Footer />
     
    </div>
  )
}

export default Project

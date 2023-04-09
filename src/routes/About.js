import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImgTwo from '../components/HeroImgTwo'
import AboutContent from '../components/AboutContent'

const About = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading="ABOUT." text="I am an undergraduate student
      of CSE. During my study, I learn something and with that I can make some simple things" />
      <AboutContent />
      <Footer />
    </div>
  )
}

export default About

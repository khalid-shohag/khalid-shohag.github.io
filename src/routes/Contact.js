import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import HeroImgTwo from '../components/HeroImgTwo'
import Form from '../components/Form'

const Contact = () => {
  return (
    <div>
      <Navbar />
      <HeroImgTwo heading="CONTACT." text="Let's have a chat" />
      <Form />
      <Footer />
    </div>
  )
}

export default Contact

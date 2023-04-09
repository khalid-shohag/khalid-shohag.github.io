import "./HeroImgStyles.css"

import React from 'react'

import IntroImg from "../assets/pattern.jpg"
import { Link } from "react-router-dom"

const Heroimg = () => {
  return (
    <div className="hero">
      <div className="mask">
        <img className="into-img"
          src={IntroImg} alt="Home"/>
      </div>
      <div className="content">
        <p>Hi, I am Khalid.</p>
        <h1>Undergraduate CSE student</h1>
        <Link to="/project" className="btn">Projects</Link>
        <Link to="/contact" className="btn btn-light">Contact</Link>
      </div>
    </div>
  )
}

export default Heroimg

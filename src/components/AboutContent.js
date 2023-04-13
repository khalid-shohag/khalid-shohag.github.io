import { Link } from "react-router-dom"
import "./AboutContentStyles.css"

import React from 'react'

import Hadoop from '../assets/apache-hadoop-picture.png'
import Flutter from '../assets/flutter.png'
import Resume from '../assets/khalid_hasan_resume.pdf'

const AboutContent = () => {
  return (
    <div className="about">
      <div className="left">
        <h1>Who Am I?</h1>
        <p>I am a CSE 4th year student.
             Currently, I am learning Big data analytics.</p>
        <Link to={Resume} target="_blank" download>
            <button className="btn">Resume</button>
        </Link>
      </div>
      <div className="right">
        <div className="img-container">
            <div className="img-stack-top">
                <img src={Flutter} className="img" alt="Flutter" />
            </div>
            <div className="img-stack-bottom">
                <img src={Hadoop} className="img" alt="Apache Hadoop" />
            </div>
        </div>
      </div>
    </div>
  )
}

export default AboutContent

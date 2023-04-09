import "./FooterStyles.css"

import React from 'react'
import {FaHome, FaPhone, FaMailBulk, FaFacebook, FaTwitter, FaLinkedin} from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-container">
        <div className="left">
          <div className="location">
            <FaHome size={20} style={ {color: "#fff", 
            marginRight: "2rem"} } />
            <div>
                <p>University of Rajshahi</p>
                <p>Rajshahi 6205, Bangladesh</p>
            </div>
          </div>
          <div className="phone">
            <h4><FaMailBulk size={20} style={ {color: "#fff", 
            marginRight: "2rem"} } />
            shohag9438@gmail.com</h4>
          
          </div>
        </div>
        <div className="right">
          <div className="social">
          <FaFacebook size={30} style={ {color: "#fff", 
            marginRight: "2rem"} } />
          <FaTwitter size={30} style={ {color: "#fff", 
            marginRight: "2rem"} } />
          <FaLinkedin size={30} style={ {color: "#fff", 
            marginRight: "2rem"} } />
          </div>
          
        </div>
      </div>
    </div>
  )
}

export default Footer

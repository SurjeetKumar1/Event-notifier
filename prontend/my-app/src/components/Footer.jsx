import React from 'react'
import "./Footer.css"
import { Link } from 'react-router-dom'
import { FaInstagramSquare } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { FaTwitter } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="footerbody">
      <footer>
      <div className='waves'>
        <div className='wave' id='wave1'></div>
        <div className='wave' id='wave2'></div>
        <div className='wave' id='wave3'></div>
        <div className='wave' id='wave4'></div>
      </div>
         <ul className='social_icon'>
            <li><a href='https://www.instagram.com/amankumar___a1/' ><FaInstagramSquare /></a></li>
            <li><a href='https://www.linkedin.com/in/surjeet-kumar-b494b6259/' ><FaLinkedin /></a></li>
            <li><Link to="#" ><FaTwitter /></Link></li>
         </ul>
         <ul className="menu">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="#">Event</Link> </li>
            <li><Link to="/signup">resiter</Link> </li>
            <li><Link to="/login">Login</Link> </li>
         </ul>
         <p style={{color:"white", marginTop:"10px"}}>&#169; 2024 Event Notifier | All Rights Reserved </p>
      </footer>
    </div>
  )
}

export default Footer

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
            <li><Link to="#" ><FaInstagramSquare /></Link></li>
            <li><Link to="#" ><FaLinkedin /></Link></li>
            <li><Link to="#" ><FaTwitter /></Link></li>
         </ul>
         <ul className="menu">
            <li><Link to="/">Home</Link> </li>
            <li><Link to="/about">About</Link> </li>
            <li><Link to="/event">Event</Link> </li>
            <li><Link to="/signup">resiter</Link> </li>
            <li><Link to="/login">Login</Link> </li>
         </ul>
         <p style={{color:"white", marginTop:"10px"}}>&#169; 2024 Event Notifier | All Rights Reserved </p>
      </footer>
    </div>
  )
}

export default Footer

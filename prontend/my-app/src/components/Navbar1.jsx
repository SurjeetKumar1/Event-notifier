import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./event-logo.png";
import "./Navbar1.css";
import { FiAlignRight, FiX } from "react-icons/fi";
import Button from '@mui/material/Button';
import { IoMdNotifications } from "react-icons/io";
import { BsBookmarks } from "react-icons/bs";
import cart from "./cart2.png"

export default function Navbar1() {
  // const [bg_color,setbg_color]=useState("rgb(255, 153, 0)");
  const [clicked, setClicked] = useState(false);
  // function setcolor(){
  //   setbg_color(bg_color==="white"?"rgb(255, 153, 0)":"white")
  // }

  return (
    <>
      <div className="nav">
        <Link to="/">
          <img src={logo} alt="cuh-logo" />
        </Link>
        <div className="navigate-information">
          <ul className={`nav-list ${clicked ? 'active' : 'navlist'}`}>
            <li>
              <Button 
              className="active"
              variant="contain" component={Link} 
  to="/"
  // onClick={setcolor}
              style={{height:"45px" ,background:"rgb(255, 153, 0)"}}>
        HOME
      </Button>
            </li>
          
            <li>
            <Button 
              className="active"
              variant="outline"
              size="small"  component={Link} 
  to="/signup"
              style={{height:"45px" }
              }>
        REGISTER
      </Button>
            </li>
            <li>
            <Button 
              className="active"
              variant="outline"
              size="small"  component={Link} 
  to="/login"
              style={{height:"45px"}}>
        Login
      </Button>
            </li>
              <li>
              <Link to="/bookmark" >
             {/* <img src={cart} alt="cart" style={{width:"35px", height:"35px",marginLeft:"-10px"}}/> */}
             <BsBookmarks style={{fontSize:"1.5rem",color:"black"}}/>
             </Link>
            </li>
            <li>
            <Link to="/notification">
             <IoMdNotifications style={{fontSize:"1.7rem" ,color:"black"}}/>
             </Link>
            </li>
          </ul>
        </div>
        <div className="mobile">
          <i id="bar" onClick={() => setClicked(!clicked)}>
            {clicked ? <FiX /> : <FiAlignRight />}
          </i>
        </div>
      </div>
    </>
  );
}
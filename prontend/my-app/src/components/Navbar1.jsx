import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./event-logo.png";
import "./Navbar1.css";
import { FiAlignRight, FiX } from "react-icons/fi";
import Button from '@mui/material/Button';

export default function Navbar1() {
  const [bg_color,setbg_color]=useState("rgb(255, 153, 0)");
  const [clicked, setClicked] = useState(false);
  function setcolor(){
    setbg_color(bg_color==="white"?"rgb(255, 153, 0)":"white")
  }

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
              variant="outline" component={Link} 
  to="/"
  // onClick={setcolor}
              style={{height:"45px"}}>
        HOME
      </Button>
            </li>
            {/* <li>
              <Button 
              className="active"
              variant="outline"  component={Link} 
  to="/about"
  onClick={setcolor}
              style={{height:"45px"}}>
        ABOUT
      </Button>
            </li> */}
            {/* <li>
              <Button 
              className="active"
              variant="outline"
              size="small"  component={Link} 
  to="/event"
              style={{height:"45px"}}>
        event
      </Button>
            </li> */}
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
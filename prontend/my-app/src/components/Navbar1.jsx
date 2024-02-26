import React, { useState } from "react";
import { Link } from "react-router-dom";
import logo from "./Uni-Alert.png";
import "./Navbar1.css";
import { FiAlignRight, FiX } from "react-icons/fi";
import Button from '@mui/material/Button';
import { IoMdNotifications } from "react-icons/io";
import { BsBookmarks } from "react-icons/bs";
import { GrGallery } from "react-icons/gr";
import { IoHome } from "react-icons/io5";
// import cart from "./cart2.png"
import { PiUserSwitchFill } from "react-icons/pi";
import { FaAddressCard } from "react-icons/fa";

export default function Navbar1() {
  const [clicked, setClicked] = useState(false);

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
                style={{ height: "45px", background: "rgb(255, 153, 0)" }}>
                <IoHome style={{marginRight:"3px"}} />HOME
              </Button>
            </li>
            <li>
              <Button
                className="active"
                variant="contain" component={Link}
                to="/eventgallery">
                <GrGallery style={{marginRight:"3px"}}/>Gallary
              </Button>
            </li>

            <li>
            <Button
  className="active"
  variant="outline"
  size="small"
  component={Link}
  to="/signup"
  style={{ height: "45px" }}
>
 <FaAddressCard style={{fontSize:" 1.3rem",marginRight:"5px"}}/>REGISTER
</Button>
            </li>
            <li>
              <Button
                className="active"
                variant="outline"
                size="small" component={Link}
                to="/login"
                style={{ height: "45px" }}>
                <PiUserSwitchFill style={{marginRight:"3px", fontSize:"1.4rem"}}/>Login
              </Button>
            </li>
            <li>
              <Link to="/bookmark" >
                <BsBookmarks style={{ fontSize: "1.5rem", color: "black" }} />
              </Link>
            </li>
            {/* <li>
              <Link to="/notification">
                <IoMdNotifications style={{ fontSize: "1.7rem", color: "black" }} />
              </Link>
            </li> */}
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
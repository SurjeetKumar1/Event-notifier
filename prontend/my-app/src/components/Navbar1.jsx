import React, { useState } from "react";
import { Link } from "react-router-dom";
import Cuh from "./cuh-logo.jpg";
import "./Navbar1.css";
import { FiAlignRight, FiX } from "react-icons/fi";

export default function Navbar1() {
  const [clicked, setClicked] = useState(false);

  return (
    <>
      <div className="nav">
        <Link to="/">
          <img src={Cuh} alt="cuh-logo" />
        </Link>
        <div className="navigate-information">
          <ul className={`nav-list ${clicked ? 'active' : 'navlist'}`}>
            <li>
              <Link to="/" className="active">
                Home
              </Link>
            </li>
            <li>
              <Link to="/about">About</Link>
            </li>
            <li>
              <Link to="/event">Event</Link>
            </li>
            <li>
            <Link to="/signup">Register</Link>
            </li>
            <li>
            <Link to="/login">Login</Link>
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
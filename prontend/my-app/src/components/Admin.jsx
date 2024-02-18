import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";

import "./Signup.css"
export default function Admin() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("http://localhost:7000/login", {
        email,
        password
      });
  
      if (res.data) {
        if (res.data.message === "correct") {
          navigate("/admin/eventdetails");
        } else {
          alert(res.data.message);
        }
      }
  
      setemail("");
      setpassword("");
    } catch (error) {
      console.error("Error during login:", error);
      // Handle the error as needed (display an error message, log, etc.)
    }
  };
  
  return (
    <div className='wraper'>
      <form method="GET" onSubmit={onsubmit} className='reg-form'>
        <h1>Admin Login Form</h1>
        <div className='profile'>

          <AccountCircleIcon style={{ fontSize: '6rem', background: 'linear-gradient(red, yellow)', borderRadius: "70px" }} />

        </div>
        <div className='input-box'>
          <input type='email'
            id='email'
            name='email'
            value={email}
            onChange={(e) => setemail(e.target.value)}
            required
            placeholder='example123@gmail.com' />
          <MdOutgoingMail className='register-icon' />
        </div>
        <div className='input-box'>
          <input type=""
            id='password'
            name='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)} placeholder="password" />
          <FaLock className='register-icon' />
        </div>
        {/* <div className='remember-forgot'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <Link to="#">Forgot password</Link>
        </div> */}
        <div>
        <button type="submit" className="submit-button">
          Login
        </button>
        </div>
        <div className="login-link">
          <p>Are you a student?</p>
          <Link to="/login">Login</Link>
        </div>
        
      </form>
    </div>
  );
}
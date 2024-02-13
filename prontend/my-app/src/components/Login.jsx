import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FaLock } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import axios from "axios";



import "./Signup.css"
export default function Signup() {
  const navigate = useNavigate();
  const [email, setemail] = useState("");
  const [password, setpassword] = useState("");
  const onsubmit = async (e) => {
    e.preventDefault();
    const res = await axios.post("event-notifier-neon.vercel.app/login", {
      email, password
    })
    if (res) {
      if (res.data.message === "correct") {
        navigate("/");
      } else {
        alert(res.data.message);

      }
    }
    setemail("");

    setpassword("");
  }
  return (
    <div className='wraper'>
      <form method="GET" onSubmit={onsubmit} className='reg-form'>
        <h1>Login Form</h1>
        <div className='profile'>

          <AccountCircleIcon style={{ fontSize: '6rem', background: 'linear-gradient(red, yellow)', borderRadius: "70px",color:"white" }} />

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
          <input type="password"
            id='password'
            name='password'
            value={password}
            onChange={(e) => setpassword(e.target.value)} placeholder="password" />
          <FaLock className='register-icon' />
        </div>
        <div className='remember-forgot'>
          <label>
            <input type='checkbox' />
            Remember me
          </label>
          <Link to="#">Forgot password</Link>
        </div>
        <button type="submit" className="submit-button">
          Login
        </button>
        <div className='login-link'>
          <p>Don't have an account?</p>
          <Link to="/signup" >Register</Link>
        </div>
        <div className="login-link">
          <p>Are you an admin?</p>
          <Link to="/admin">Admin Login</Link>
        </div>
      </form>
    </div>
  );
}

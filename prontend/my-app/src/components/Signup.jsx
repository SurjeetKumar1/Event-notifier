import React, { useState } from "react";
import { Link,useNavigate } from "react-router-dom";
import { FaUser } from "react-icons/fa";
import { FaLock } from "react-icons/fa";
import { MdOutgoingMail } from "react-icons/md";
import { FaSquarePhoneFlip } from "react-icons/fa6";
import AccountCircleIcon from "@mui/icons-material/AccountCircle";
import axios from "axios";
import "./Signup.css";
import emailjs from "@emailjs/browser";


// import emailjs from "@emailjs/browser";

export default function Signup() {

  const navigate=useNavigate();
const [username,setusername]=useState("");
const [email,setemail]=useState("");
const [phone,setPhone]=useState("");
const [password,setpassword]=useState("");
const [department,setdepartment]=useState("");
const [program,setpogram]=useState("")
const [semester,setsemester]=useState("");



const handleSubmit = async (e) => {

  e.preventDefault();

  // emailjs details
  const serviceId = "service_txd8gcq";
  const templateId = "template_aqcolm5";
  const publicKey = "tRdQ40jkzT2f8HYFk";

  // Create a new object that contains dynamic template params
  const templateParam = {
    from_name: username,
    from_email: email,
    to_name: "aman",
    from_department:'department'

  };

  try{
     // Send the email using EmailJS
     const emailResponse = await emailjs.send(
      serviceId,
      templateId,
      templateParam,
      publicKey
    );
    console.log("Email sent succesfully",emailResponse);
  

  if (!username || !email || !phone || !password || !department || !program || !semester) {
    alert("Please fill out all fields");
    return;
  }
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    alert("Please enter a valid email address");
    return;
  }
  const phoneRegex = /^\d{10}$/;
  if (!phoneRegex.test(phone)) {
    alert("Please enter a valid phone number");
    return;
  }


    // Register the user
    const res = await axios.post("http://localhost:7000/register", {
      username,
      email,
      phone,
      password,
      department,
      program,
      semester,
    });
    console.log("User registered successfully", res.data);
    if(res){
      if(res.data.message==="resitered"){
        alert(`${username} ,you are successfully resisterd`)
        navigate("/");
      }else{
        alert(res.data.message)
      }
    }

    // Reset form fields
    setusername("");
    setemail("");
    setPhone("");
    setpassword("");
    setdepartment("");
    setpogram("");
    setsemester("");

}catch(e){
  console.log(e);
}
}

  return (
    <div className="wraper">
      <form method="POST" onSubmit={handleSubmit} className="reg-form">
        <h1>Register Form</h1>
        <div className="profile">
          <AccountCircleIcon
            style={{
              fontSize: "6rem",
              background: "linear-gradient(red, yellow)",
              borderRadius: "70px",
              color:"white"
            }}
          />
        </div>
        <div className="input-box">
          <input type="text"
          id="username"
          name="username"
           placeholder="username"
           required
           value={username}
           onChange={(e)=>setusername(e.target.value)} />
           
          <FaUser className="register-icon" />
        </div>
        <div className="input-box">
          <input type="email"
          id="email"
          name="email"
          value={email}
          required
          onChange={(e)=>{setemail(e.target.value)}} placeholder="example123@gmail.com" />
          <MdOutgoingMail className="register-icon" />
        </div>
        <div className="input-box">
          <input type="text"
          id="phone"
          name="phone"
          value={phone}
          onChange={(e)=>{setPhone(e.target.value)}}
          required
           placeholder="936997xxxx" />
          <FaSquarePhoneFlip className="register-icon" />
        </div>
        <div className="input-box">
          <input type="password"
          id="password"
          name="password"
          value={password}
          onChange={(e)=>{setpassword(e.target.value)}}
          required
           placeholder="password" />
          <FaLock className="register-icon" />
        </div>

        <div className="input-box">
         <select onChange={((e)=>{setdepartment(e.target.value)})}>
         <option selected>Choose Department.....</option>
         <option>Computer Science And Engineering</option>
         <option>Electrical Engineering</option>
         <option>Civil Engineering</option>
         <option>Printing And Packaging Technology</option>

         </select>
        </div>

        <div className="input-box">
    <select onChange={(e)=>setpogram(e.target.value)}>
        <option selected>Choose Program.....</option>
        {department === "Computer Science And Engineering" && (
            <>
                <option>B.Tech</option>
                <option>M.Tech</option>
                <option>BCA</option>
                <option>MCA</option>
            </>
        )}
        {(department === "Electrical Engineering" || department === "Printing And Packaging Technology" || department === "Civil Engineering") && (
    <>
        <option>B.Tech</option>
        <option>M.Tech</option>
    </>
)}
    </select>
</div>



        <div className="input-box">
    <select onChange={(e)=>setsemester(e.target.value)}>
        <option selected>Choose Semester.....</option>
        {program === "B.Tech"  && (
            <>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                <option>6</option>
                <option>7</option>
                <option>8</option>
            </>
        )}
        {program === "M.Tech"||program==="BCA"||program==="MCA" && (
            <>
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
            </>
        )}
    </select>
</div>
        
        <div className="remember-forgot">
          <label>
            <input type="checkbox" />
            Remember me
          </label>
        </div>
        <button type="submit" className="submit-button">
          Register
        </button>
        <div className="login-link">
          <p>Have an account?</p>
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  );
}

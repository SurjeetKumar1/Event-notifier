require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
// const crypto = require("crypto");
const cors = require("cors");
require("./connection")
const StudentData = require("./student-data");
const nodemailer=require("nodemailer");
const path=require("path")
const axios = require("axios")

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

//nodemailer transporter details
const transporter=nodemailer.createTransport({
  service:"gmail",
  host:"smpt.gmail.com",
  port:465,
  secure:true,
  auth:{
    user:"ak2691622@gmail.com",
    pass:"letrkokrmyqobwvr"
  }
})


app.use(cors(
  {
    origin:[""],
    methods:["POST","GET"],
    credentials:true
  }
))

// mongoose.connect("mongodb+srv://amank250umar:HYQLspaui8AJ9GJ1@cluster0.lql7oej.mongodb.net/CUH-student?retryWrites=true&w=majority")

// Registration Route
app.post("/register", async (req, res) => {
    try {
        const { username, email, phone, password, department, program, semester } = req.body;
        const hashedPass = await bcrypt.hash(password, 10);
        const studentData = new StudentData({ username, email, phone, password: hashedPass, department, program, semester });
        const doc = await studentData.save();
        res.status(200).send(doc);
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ error: "Failed to register user" });
    }
});

// Login Route
app.post("/login", async (req, res) => {
    try {
        const { email, password } = req.body;
        const studentData = await StudentData.findOne({ email });
        if (!studentData) {
            return res.status(404).json({ error: "User not found" });
        }
        const isPasswordValid = await bcrypt.compare(password, studentData.password);
        if (!isPasswordValid) {
            return res.status(401).json({ error: "Incorrect password" });
        }
        res.status(200).json({ message: "correct" });
    } catch (error) {
        console.error("Error in login:", error);
        res.status(500).json({ error: "Failed to login" });
    }
});

 
app.get("/register", async (req, res) => {
  try {
      const cuh_members = await StudentData.find({}, { email: 1, _id: 0 });
      res.json(cuh_members);
  } catch (e) {
      res.status(400).end(e);
  }
})


// const sendMail=require("./controller/SendMail");
// app.get("/sendmail",sendMail);


const events_schema = require("./eventSchema");
const multer = require('multer');
const { default: mongoose } = require("mongoose");

// Storage configuration
const storage = multer.diskStorage({
  destination: "uploads",
  filename: (req, file, cb) => {
    cb(null, file.originalname);
  },
});



// Multer configuration
const upload = multer({
  storage: storage,
}).single('testImage');

// Image upload route
app.post("/upload",async(req, res) => {
  // Handle the file upload using Multer
  upload(req, res, async(err) => {
    if (err) {
      console.error(err);
      return res.status(500).send("Error uploading image");
    }

    // Create a new instance of the events_schema with the image details
    const newImage = new events_schema({
             Event_name: req.body.Event_name,
              Description: req.body.Description,
             Departmen: req.body.Departmen,
          Event_date: req.body.Event_date,
          venue:req.body.venue,
          Resistration_link: req.body.Resistration_link,
    
      Poster_image: {
        data: req.file.filename, 
        contentType: "image/png", // 
      },
    });

    // Save the new image details to the database
    try{
    const DetailsSave= await newImage.save()
    console.log(DetailsSave.Event_name);
    const EventName=DetailsSave.Event_name;
    const EventDepartment=DetailsSave.Departmen;
    const EventDescription=DetailsSave.Description;

    const response=await axios.get('http://localhost:7000/register')
    const emailArray = response.data.map(member => member.email);
console.log(emailArray);
    const mailOpstion={
      from:'"CUH" <cuh@gmail.com>',//sender address
    to:`${emailArray}`, // list of receivers"
    subject:`${EventName}`, //subject line
    text:`Department of ${EventDepartment} organize an ${EventName}`, //plain text body
    html:`<b>Description:${EventDescription}</b>`, //html body
    }

    const sendMail=async(transporter,mailOpstion)=>{
      try{
        await transporter.sendMail(mailOpstion);
        console.log("Email has been sent succesfully")
      }
      catch(e){
        console.log(e);
      }
    }
    sendMail(transporter,mailOpstion);

        res.status(200).send( {message: "uploaded"});
    }catch(e){
        console.error(e);
        res.status(500).send("Error saving image details");
  }
});
});

app.get("/upload",async (req,res)=>{
  let skipAmmount=Number(req.query.skip);
  try {
    const evendata = await events_schema.find().sort({"uploadedTime":-1}).skip(skipAmmount).limit(2);
    res.status(200).send(evendata);
} catch (e) {
    res.status(400).end(e);
}
})


app.listen(port, () => {
    console.log(`Server is listening  `);
});

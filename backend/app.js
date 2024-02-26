require("dotenv").config();
const express = require("express");
const bcrypt = require("bcryptjs");
// const crypto = require("crypto");
const cors = require("cors");
const cron = require("node-cron")

require("./connection")
const StudentData = require("./student-data");
const EventGallerySchema=require("./GalleryImgSchema.jsx");
const nodemailer=require("nodemailer");
const path=require("path")
const axios = require("axios");
const BookMarkSchema =require("./BookmarkSchima.js");

const app = express();
const port = 7000;

app.use(cors());
app.use(express.json());

//nodemailer transporter details
const transporter=nodemailer.createTransport({
  service:"gmail",
  host:"smtp.gmail.com",
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
        res.status(200).send({message:"resitered"});
    } catch (error) {
        console.error("Error in registration:", error);
        res.status(500).json({ message: "Failed to register user" });
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
  // destination: "uploads",

  //image destination upload
  destination:function(req,file,cb){
   cb(null,"../prontend/my-app/src/image")
  },
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

          Poster_image:req.file.filename
    
      // Poster_image: {
      //   data: req.file.filename, 
      //   contentType: "image/png", // 
      // },
    });

    // Save the new image details to the database
    try{
    const DetailsSave= await newImage.save()
    console.log(DetailsSave.Event_name);
    const EventName=DetailsSave.Event_name;
    const EventDepartment=DetailsSave.Departmen;
    const EventDescription=DetailsSave.Description;
    const EventDate=DetailsSave.Event_date;
    const EventVanue=DetailsSave.venue;

    const response=await axios.get('http://localhost:7000/register');
    const dateData=await axios.get('http://localhost:7000/upload');
console.log(dateData);
    const emailArray = response.data.map(member => member.email);
console.log(emailArray);
    const mailOpstion={
      from:'"CUH" <cuh@gmail.com>',//sender address
    to:`${emailArray}`, // list of receivers"
    subject:`${EventDepartment}`, //subject line
    text:`Department of ${EventDepartment} organize an ${EventName}`, //plain text body
    html:`<b>Department of ${EventDepartment} organize  ${EventName} at ${EventDate} on ${EventVanue} Description : ${EventDescription} </b>`, //html body
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
    console.log(skipAmmount)
    const evendata = await events_schema.find().sort({"uploadedTime":-1}).skip(skipAmmount).limit(3);
    res.status(200).send(evendata);
} catch (e) {
    res.status(400).end(e);
}
})

app.post("/Bookmark",async (req,res)=>{
  try {
    const {bookmarkId,eventName,EventDate,EventVenue,EventPoster } = req.body;
    const bookmarkdata=new BookMarkSchema({bookmarkId,eventName,EventDate,EventVenue,EventPoster});
    const saveBookmark = await bookmarkdata.save();
    // console.log(saveBookmark);
    res.status(200).send(saveBookmark);
} catch (error) {
    console.error("Error in Bookmak:", error);
    res.status(500).json({ error: "Failed to register user" });
}
})

app.get("/Bookmark",async (req,res)=>{
  try{
   const getdata=await BookMarkSchema.find();
   console.log(getdata);
   res.status(200).json(getdata);
  }catch(e){
    console.log(e);
  }
})
app.delete("/Bookmarkdeletion",async (req,res)=>{
  try{
    // console.log(req.body.id)
    const deletedBookmark = await BookMarkSchema.findOneAndDelete(req.body.bookmarkId);


   if(!deletedBookmark){
    return res.status(404).json({error:"Bookmark not found"});
   }
  //  console.log(deletedBookmark);
    res.status(200).json({message:"Bookmark deleted successfully",deletedBookmark});
  }catch(e){
    console.error(e);
    res.status(500).json({error:"internal Serval Error"});
  }
})

// gallery Image post
// Multer configuration
const uploadImg = multer({ storage: storage }).single('GalleryImage');

app.use(cors()); // Enable CORS

app.post("/GalleryImg", (req, res) => {
  uploadImg(req, res, async (err) => {
    if (err) {
      console.error(err);
      return res.status(500).json("Error in Uploading Gallery Img");
    }
    // console.log(req.body.data)
    const getImg = new EventGallerySchema({
      GalleryImgName: req.body.GalleryImgName,
      GalleryImg: req.file.filename
      // GalleryImg: {
      //   data: req.file.filename,
      //   // contentType: "image/png",
      // }
    });

    try {
      const galleryimgsave = await getImg.save();
      console.log(galleryimgsave);
      res.status(200).json({ message: "Image Uploaded", galleryimgsave });
    } catch (e) {
      console.error(e);
      res.status(500).json({ message: "Image saving error", error: e }); 
    }
  });
});

//get data from image Gallery
app.get("/GalleryImg",async(req,res)=>{
  try{
    const getImgdata=await EventGallerySchema.find();
    // console.log(getImgdata);
    res.status(200).json(getImgdata);
   }catch(e){
     console.status(500).error(e);
   }
})





app.listen(port, () => {
    console.log(`Server is listening  `);
});

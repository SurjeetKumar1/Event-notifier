const nodemailer = require("nodemailer");
require("dotenv").config();
const path =require("path");

const transporter = nodemailer.createTransport({
  service: "gmail",
  host: "smtp.gmail.com",
  port: 465,
  secure: true,
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS,
  },
});


    const mailOpstion={
      from: '"aman" <ak2691622@gmail.com>', // sender address
      to: "amank250umar@gmail.com", // list of receivers
      subject: "Hello ✔", // Subject line
      text: "Hello world?", // plain text body
      html: "<b>Hello world?</b>", // html body
      attachments:[
        {
         filename:"trans_light.png",
         path:path.join(__dirname,"trans_light.png"),
         contentType:"imge/jpg"
        }
      ]
    }


    const sendMail=async(transporter,mailOpstion)=>{
     try{
      await transporter.sendMail(mailOpstion);
      console.log("Email has been succesfully")
     }catch(e){
        console.log(e);
     }
    }

   sendMail(transporter,mailOpstion);

module.exports = sendMail;

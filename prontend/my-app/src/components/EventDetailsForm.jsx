import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import "./EventDetailsForm.css"; // Import the CSS file
import axios from 'axios';
import Button from '@mui/material/Button';
import { Baseurl } from '../Utils/BaseUrl';

export default function Department() {
  const navigate = useNavigate();


  const [Event_name, set_event_name] = useState("");
  const [Description, set_event_des] = useState("");
  const [Departmen, set_event_Department] = useState("");
  const [Event_date, set_event_Date] = useState("");
  const [Resistration_link, set_event_link] = useState("");
  const [testImage, setSelectedImage] = useState("");
  const [venue,setvenue]=useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };



  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to encapsulate all form data
    const formData = new FormData();
    formData.append('Event_name', Event_name);
    formData.append('Description', Description);
    formData.append('Departmen', Departmen);
    formData.append('Event_date', Event_date);
    formData.append('venue', venue);
    formData.append('Resistration_link', Resistration_link);
    formData.append('testImage', testImage); // Append the file
console.log(formData)
    try {

      const event_details = await axios.post(`${Baseurl}/upload`, formData);


      if(event_details){
        if(event_details.data.message==="uploaded"){
          navigate("/");

        }else{
          alert(event_details.data.message);
        }
      }
      // Reset state here to clear the form if needed
      set_event_name("");
      set_event_des("");
      set_event_Department("");
      set_event_Date("");
      set_event_link("");
      setSelectedImage("");
      setvenue("");

      console.log("Form submitted", event_details.data);
    } catch (error) {
      console.error(error);
    }
  };


  // for img gallery img
const [GalleryImgName,setGalleryImgName]=useState("")
const [GalleryImage,setgalleryImg]=useState("")

  // Post Img In Image Gallery
  const goSubmit=async(e)=>{
    e.preventDefault();
    // console.log(GalleryImage);
    // console.log(GalleryImgName);
    const imgData=new FormData();
    imgData.append("GalleryImgName",GalleryImgName)
    imgData.append("GalleryImage",GalleryImage)
    console.log(imgData)
    try{
     const gellary_img=await axios.post(`${Baseurl}/GalleryImg`,
     imgData
     );
     console.log("image uploaded successfully from prontend",gellary_img.data)
    //  setGalleryImgName("");
    //  setgalleryImg("");
    //  window. location. reload();
    alert("image successfully uploaded.")
    }catch(e){
      console.error("error in uploading img",e)
    }
  
   }

  return (
    <>
    <div className='event-form'>
      <form onSubmit={handleSubmit} className='f'>
      <h1>Event Details</h1>
      <label>Event Name</label>
        <input className='event-information'
          type='text'
          id='Event_name'
          name="Event_name"
          value={Event_name}
          placeholder='Event name'
          required
          onChange={(e) => handleChange(e, set_event_name)}
        />

        <label>Description</label>
        <input
        className='event-information'
          type='text'
          id='Description'
          name="event_describption"
          value={Description}
          placeholder='Write describtion about Event'
          required
          onChange={(e) => handleChange(e, set_event_des)}
        />
        <label>Department</label>
        <select style={{height:"45px",background:"rgb(3, 3, 41)",color:"white", border:"1px solid black",fontSize:"1.1rem",padding:"3px 10px 3px 20px",marginBottom:"14px",borderRadius:"10px"}} onChange={((e)=>{set_event_Department(e.target.value)})}>
         <option selected>Choose Department.....</option>
         <option>Computer Science And Engineering</option>
         <option>Electrical Engineering</option>
         <option>Civil Engineering</option>
         <option>Printing And Packaging Technology</option>
         <option>School Of Engineering And Technology</option>
         <option>Central University Of Haryana</option>
         <option>Journalism and Mass Communication</option>
         </select>

        <label>Event Date</label>
        <input
        className='event-information'
          type='date'
          id='event_date'
          name='Event_date'
          placeholder='Enter event date'
          value={Event_date}
          required
          onChange={(e) => handleChange(e, set_event_Date)}
        />
        <label>Venue</label>
        <input
        className='event-information'
          type='venue'
          id='venue'
          name='venue'
          placeholder='Venue'
          value={venue}
          required
          onChange={(e) => handleChange(e, setvenue)}
        />

        <label>Event Registration(if any)</label>
        <input
        className='event-information'
          type='url'
          id='Resistration_link'
          name='Resistration_link'
          placeholder='Enter event URL'
          value={Resistration_link}
          required
          onChange={(e) => handleChange(e, set_event_link)}
        />

        <label>Event Poster</label>
        <input
  className='event-information'  // Add your existing class or apply styles directly
  type="file"
  name='testImage'
  accept='image/'
  placeholder="Choose file"
  onChange={(e) => setSelectedImage(e.target.files[0])}
  style={{

    // borderRadius: '5px',
    margin: 'auto',
    fontSize:"1.2rem",
    paddingTop: "5.5px",
    borderRadius:"10px"

  }}
/>
        <button type="submit" className='btn-submit'>Submit</button>
      </form>
      </div>


      <div style={{display:"flex",justifyContent:"center",alignItems:"center",marginTop:"30px"}}>
      <div className='uploadimg'>
        <h1 style={{marginBottom:"20px",color:"rgb(13, 3, 55)"}}>Upload a Image for Event Gallery </h1>
        <div className='formuploadimg'>
        <form onSubmit={goSubmit}>
       
        <select onChange={(e)=>{setGalleryImgName(e.target.value)}}>
        <option selected>Choose Event Name.....</option>
          <option>Spandan</option>
          <option>Advik</option>
          <option>Youth Parliament</option>
          <option>Workshops</option>
          <option>Placement Drive</option>
          <option>Coding Events</option>
          <option>Cultural Events</option>
          <option>NSS Events</option>
        </select>
        <input type='file' multiple
        name='imge'
        accept='image/'
        placeholder='choose fiele'
        onChange={(e)=>{setgalleryImg(e.target.files[0])}}></input>
        <br/>
        <Button type='submit' variant="contained" style={{marginTop:"15px"}}>Upload Img</Button>
        </form>
        </div>
        </div>
      </div>
    </>
  );
}

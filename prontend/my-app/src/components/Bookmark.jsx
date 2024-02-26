import React, { useEffect, useState } from 'react'
import "./Bookmark.css"
import DeleteIcon from "@mui/icons-material/Delete"
import Button from "@mui/material/Button"
import axios from "axios"




const Bookmark = () => {

  const [getcarddata,setgetcarddata]=useState([]);

  const deleteEvent=async(id)=>{
    try{
      console.log()
    const deletebookmark=await axios.delete("http://localhost:7000/Bookmarkdeletion",
    id
    )
    console.log("Bookmark deleted successfully",deletebookmark);
    // alert("deletion Successfully");
  }catch(e){
    console.error("bookmark deletion error",e);
  }
  }

  const fetchdata=async()=>{
    try{ 
    const getcard=await axios.get("http://localhost:7000/Bookmark");
     console.log("getting card data successfully",getcard.data);
     setgetcarddata(getcard.data);
  }catch(e){
    console.error("getting card data error",e)
  }
  }

  useEffect(()=>{
    fetchdata();
  },[])
  return (
    <div>
    <div style={{display:"flex",justifyContent:"center",alignItems:"center" ,margin:"20px 0px 10px 0px"}}>
      <div className='toptext'>
        <h1 style={{fontSize:"2rem"}}>Uni Alert</h1>
        <h3>you have 6 items in your book mark</h3>
      </div>
      </div>

      <div className='bookmarkCardContaner'>
      {getcarddata.map((data,index)=>( 
  <div className='bookCard' key={data._id}>
    <div className='Carddetail'>
      <h3>Event Name : {data.eventName}</h3>
      <p>Date : {data.EventDate}</p>
      <p>Venue : {data.EventVenue}</p>
      <Button 
        variant="contained" 
        startIcon={<DeleteIcon />} 
        style={{background:"red", color:"white" , margin:"10px 0px"}}
        onClick={() => deleteEvent(data._id)} // Call deleteEvent function with event ID
      >
        Delete
      </Button>
    </div>
    {/* <img src={require(`../image/${data.GalleryImg}`)} alt="Eventimg"/> */}
    <img src='https://www.ecfmg.org/journeysinmedicine/wp-content/uploads/2021/09/IMGevent2_2320b7eb_smalledit-1024x758.jpeg'/>
  </div>
))}
      </div>
    </div>
  )
}

export default Bookmark

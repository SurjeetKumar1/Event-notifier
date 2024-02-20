import React from 'react'
import "./Bookmark.css"
import DeleteIcon from "@mui/icons-material/Delete"
import Button from "@mui/material/Button"

const Bookmark = () => {
  return (
    <div>
      <div className='toptext'>
        <h1 style={{fontSize:"2rem"}}>Uni Alert</h1>
        <h3>you have 6 items in your book mark</h3>
      </div>
      <div className='bookmarkCardContaner'>
        <div className='bookCard'>
        <div className='Carddetail'>
          <h3>Event Name : Advik</h3>
          <p>Date : 12-10-2024</p>
         <p>Vanue : Sports Complex</p>
          <Button variant="contain" startIcon={<DeleteIcon />} style={{background:"red", color:"white" , margin:"10px 0px"}}>
        Delete
      </Button>
        </div>
          <img src='https://images.unsplash.com/photo-1707343848873-d6a834b5f9b9?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='bookmarkimg'/>
        </div>
      </div>
    </div>
  )
}

export default Bookmark

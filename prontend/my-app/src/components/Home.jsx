import React, { useEffect, useState } from 'react'
import "./Home.css";
import Slider from "../screen/Slider"
import axios from "axios";
import Button from '@mui/material/Button';
import { FaBookmark } from "react-icons/fa";
import ImgSlider from "../screen/ImgSlider";


const Event = () => {

  const [apidata, setapidata] = useState([]);
  const [bookmarkColor, setbookmarkColor] = useState("black"); 

    const [page,setpage]=useState(1);
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      name: "Advik"
    },

    {
      img: "https://www.pingpongmoments.in/blog/wp-content/uploads/2022/09/corporate-events-3.jpg",
      name: "Hackathone"
    },

    {
      img: "https://www.greyeagleresortandcasino.ca/uploads/2023/03/live-concert-at-the-grey-eagle-event-centre-mobile.jpg",
      name: "Spandan"
    },

    {
      img: "https://www.michellepircher.me/wp-content/uploads/2015/05/Messe_Luzern_Corporate_Event.jpg",
      name: "Diwali"
    },
    {
      img: "https://global.hsmai.org/wp-content/uploads/2019/07/046_D4S1532-e1564102411695.jpg",
      name: "Conference"
    }
  ];
  useEffect(() => {
    fetchdata();
  }, [])

  const fetchdata = async () => {
    try {
      const skip = (page - 1) * 2; 
      const evdata = await axios.get(`http://localhost:7000/upload?skip=${skip}`);
      setpage(page + 1); 
      setapidata(prevData => [...prevData, ...evdata.data]); // Append new data to existing data
      console.log(evdata.data);
    } catch (e) {
      console.log(e);
    }
  };
  return (
    <>
      <div className='eventbody'>
        <Slider />
        <div className='line'></div>
        <div className='circleimg'>
          {data.map((item, index) => (
            <div key={index} className='Whole_box'>
              <div className='inbox'>
                <div className='boxImg'>
                  <img src={item.img} alt={item.name} style={{ width: "150px", height: "150px" }} />
                </div>
                <h3 style={{ fontSize: "1.3rem", color: "black", marginTop: "10px" }}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>

    <ImgSlider/>
        <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "rgb(20, 4, 63)", marginTop: "50px", marginLeft: "55px" }}>Upcoming Events</div>

        <div className='datacard' style={{ marginTop:"55px"}}>
      
          { apidata.map((data, index) => {
            return (
              <div className='card' id={index} style={{padding:"10px", marginBottom:"60px"}}>

                <div className='carddetals'>

                  <h1 className='name' style={{ color: "black", marginBottom: "10px ", marginTop: "6px", alignSelf :"center" }}>{data.

                    Event_name}</h1>

                  <div className='evedetails' style={{ margin: "10px 20px 10px 60px" }}>
                    <div style={{ marginBottom: "6px" }}><span>Department:</span> {data.
                      Departmen}</div>
                    <div style={{ marginBottom: "6px" }}><span>Date :</span>{data.
                      Event_date}</div>
                      <div style={{ marginBottom: "6px" }}><span>Venue :</span> {data.venue
                      }</div>
                    <div style={{ marginBottom: "6px" }}><span >Description :</span> {data.
                      Description}</div>

                  </div>
                  <div className="btn-link"
                  >
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => window.open(data.Resistration_link, "_blank")}
                    >
                      Register
                    </Button>
                    <Button variant="contained" color="success"
                      onClick={() => window.open(data.Poster_image, "_blank")}>
                      Poster
                    </Button>
                    <FaBookmark style={{
                      fontSize: "1.5rem", position: "relative", left: "33px", top: "6px", cursor: "pointer",
                      color: bookmarkColor
                    }}
                      onClick={() => setbookmarkColor(bookmarkColor === "black" ? "green" : "black")}

                    />

                  </div>
                </div>
              </div>
            )
          })
          }

        </div>
        <div style={{ textAlign: "center" ,margin:"10px 0" }}><Button variant="contained" color="secondary" size="large"
        style={{fontSize:"1.2rem",boxShadow:"5px 5px 10px black"}}
        onClick={fetchdata}
        
        >
          Show more
        </Button></div>


{/* 
        <div style={{ fontSize: "2.5rem", fontWeight: "700", color: "rgb(20, 4, 63)", marginTop: "50px", marginLeft: "55px" }}>Past Events</div>

        <div className='datacard' style={{ marginTop:"55px"}}>
      
          { apidata.map((data, index) => {
            return (
              <div className='card' id={index} style={{padding:"10px", marginBottom:"60px"}}>

                <div className='carddetals'>

                  <h1 className='name' style={{ color: "black", marginBottom: "10px ", marginTop: "6px", alignSelf :"center" }}>{data.

                    Event_name}</h1>

                  <div className='evedetails' style={{ margin: "10px 20px 10px 60px" }}>
                    <div style={{ marginBottom: "6px" }}><span>Department:</span> {data.
                      Departmen}</div>
                    <div style={{ marginBottom: "6px" }}><span>Date :</span>{data.
                      Event_date}</div>
                      <div style={{ marginBottom: "6px" }}><span>Venue :</span> {data.venue
                      }</div>
                    <div style={{ marginBottom: "6px" }}><span >Description :</span> {data.
                      Description}</div>

                  </div>
                  <div className="btn-link"
                  >
                    <Button
                      variant="contained"
                      color="success"
                      onClick={() => window.open(data.Resistration_link, "_blank")}
                    >
                      Register
                    </Button>
                    <Button variant="contained" color="success"
                      onClick={() => window.open(data.Poster_image, "_blank")}>
                      Poster
                    </Button>
                    <FaBookmark style={{
                      fontSize: "1.5rem", position: "relative", left: "33px", top: "6px", cursor: "pointer",
                      color: bookmarkColor
                    }}
                      onClick={() => setbookmarkColor(bookmarkColor === "black" ? "green" : "black")}

                    />

                  </div>
                </div>
              </div>
            )
          })
          }

        </div>
        <div style={{ textAlign: "center" ,margin:"10px 0" }}><Button variant="contained" color="secondary" size="large"
        style={{fontSize:"1.2rem",boxShadow:"5px 5px 10px black"}}
        onClick={fetchdata}
        
        >
          Show more
        </Button></div> */}
      </div>
    </>
  )
}

export default Event;

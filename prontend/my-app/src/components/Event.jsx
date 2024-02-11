import React from 'react'
import "./Event.css";
import Slider from "../screen/Slider"

const Event = () => {
  const data = [
    {
      img: "https://cdn.pixabay.com/photo/2016/11/23/15/48/audience-1853662_1280.jpg",
      name: "Advik"
    },

    {
      img: "https://www.pingpongmoments.in/blog/wp-content/uploads/2022/09/corporate-events-3.jpg",
      name: "abc"
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
                <h3 style={{fontSize:"1.3rem", color:"gold", marginTop:"10px"}}>{item.name}</h3>
              </div>
            </div>
          ))}
        </div>
        <div style={{fontSize:"2rem", fontWeight:"700",color:"Green", marginTop:"50px"}}>Upcomming Event</div>
        <div className='datacard'>
        <div className='card'>
          <div className='imgb'>
            <img src='https://global.hsmai.org/wp-content/uploads/2019/07/046_D4S1532-e1564102411695.jpg'/>
          </div>
        </div>
        </div>
        <div className='footer' style={{ marginTop: "100px" }}>hhhbsxjbs</div>
      </div>
    </>
  )
}

export default Event;

import React from 'react'
// import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImgSlider.css";
// import img1 from "../components/EventImg/img1.jpeg";
import img2 from "../components/EventImg/img2.jpeg";
import img3 from "../components/EventImg/img3.jpeg";
import img4 from "../components/EventImg/img4.jpeg";
import img5 from "../components/EventImg/img5.jpeg";
// import img6 from "../components/EventImg/img6.jpeg";
import img7 from "../components/EventImg/img7.jpeg";
import img8 from "../components/EventImg/img8.jpeg";
import img9 from "../components/EventImg/img9.jpeg";
// import img10 from "../components/EventImg/img10.jpeg";
import img11 from "../components/EventImg/img11.jpeg";
import img12 from "../components/EventImg/img12.jpeg";
import img13 from "../components/EventImg/img13.jpeg";
import img14 from "../components/EventImg/img14.jpeg";
import img15 from "../components/EventImg/img15.jpeg";
import img16 from "../components/EventImg/img16.jpeg";
import img17 from "../components/EventImg/img17.jpeg";
import img18 from "../components/EventImg/img18.jpeg";
// import img19 from "../components/EventImg/img19.jpeg";
import img20 from "../components/EventImg/img20.jpeg";
import img21 from "../components/EventImg/img21.jpeg";
import img22 from "../components/EventImg/img22.jpeg";




function Arrow(props) {
    const { className, style, onClick } = props;
    return (
      <div
        className={className}
        style={{ ...style, display: "block", background: "black" }}
        onClick={onClick}
      />
    );
  }
  

const ImgSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 10000,
        slidesToShow: 3,
        slidesToScroll: 3,
        autoplay: true,
    autoplaySpeed: 3000,
    cssEase: "linear",
        nextArrow: <Arrow/>,
        prevArrow: <Arrow />,
        initialSlide: 0,
        responsive: [
          {
            breakpoint: 1024,
            settings: {
              slidesToShow: 2,
              slidesToScroll: 2,
              infinite: true,
              dots: true
            }
          },
          {
            breakpoint: 768,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1,
              initialSlide: 1
            }
          },
          {
            breakpoint: 480,
            settings: {
              slidesToShow: 1,
              slidesToScroll: 1
            }
          }
        ]
      };
      return (
        <div className="slider-container">
          <Slider {...settings}>
            {/* <div className='imgcontainer'>
              <img src={img1} alt='eventimg'/>
            </div> */}
            <div className='imgcontainer'>
            <img src={img2} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img3} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img4} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img5} alt='eventimg'/>
            </div>
            {/* <div className='imgcontainer'>
            <img src={img6} alt='eventimg'/>
            </div> */}
            <div className='imgcontainer'>
            <img src={img7} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img8} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img9} alt='eventimg'/>
            </div>
            {/* <div className='imgcontainer'>
            <img src={img10} alt='eventimg'/>
            </div> */}
            <div className='imgcontainer'>
            <img src={img11} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img12} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img13} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img14} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img15} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img16} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img17} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img18} alt='eventimg'/>
            </div>
            {/* <div className='imgcontainer'>
            <img src={img19} alt='eventimg'/>
            </div> */}
            <div className='imgcontainer'>
            <img src={img20} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img21} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img22} alt='eventimg'/>
            </div>
          </Slider>
        </div>
      );
    }

export default ImgSlider

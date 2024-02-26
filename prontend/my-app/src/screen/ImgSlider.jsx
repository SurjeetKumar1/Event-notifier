import React from 'react'
// import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImgSlider.css";
import img5 from "./g7.jpg"
import img22 from "../components/EventImg/img22.jpeg";
import yoga from "./yoga.jpeg"
import im3 from "./Amarjeet.jpg"
import im6 from "./im6.jpg"
import img7 from "./conference_on_Womens.jpg"
import img8 from "./im8.jpg"
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
            <div className='imgcontainer'>
            <img src="https://contentstatic.techgig.com/photo/74969192/how-coding-competitions-are-significant-in-a-developers-career.jpg?798505" alt='eventimg'/>
            </div>
   
            <div className='imgcontainer'>
            <img src={yoga} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={im3} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img22} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img5} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={im6} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img7} alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src={img8} alt='eventimg'/>
            </div>
          </Slider>
        </div>
      );
    }

export default ImgSlider

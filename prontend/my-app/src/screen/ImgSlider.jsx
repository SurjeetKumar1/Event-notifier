import React from 'react'
// import  { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ImgSlider.css";


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
              <img src='https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src='https://images.unsplash.com/photo-1682687982298-c7514a167088?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw2fHx8ZW58MHx8fHx8' alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src='https://images.unsplash.com/photo-1707343848610-16f9afe1ae23?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D' alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src='https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src='https://images.unsplash.com/photo-1707345512638-997d31a10eaa?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxfHx8ZW58MHx8fHx8' alt='eventimg'/>
            </div>
            <div className='imgcontainer'>
            <img src='https://images.unsplash.com/photo-1707343845208-a20c56d2c8ba?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwyMXx8fGVufDB8fHx8fA%3D%3D' alt='eventimg'/>
            </div>
          </Slider>
        </div>
      );
    }

export default ImgSlider

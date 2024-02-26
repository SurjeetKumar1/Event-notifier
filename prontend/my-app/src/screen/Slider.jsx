import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider'; 
import img8 from "../components/EventImg/img8.jpeg";
import im1 from "./im1.jpeg"
import im2 from "./img1.jpg.png"
import im10 from "./3.jpg"
import im4 from "./im4.jpg"
import im5 from "./im5.jpg"

const images = [
  { url: "https://www.cuh.ac.in/admin/uploads/convocation/gallery/2023/B.Voc.%20Ind%20Waste%20Mgt.JPG" },
  // { url: im1}, 
  // { url: im3 },  
  { url: im2 },   
  { url: im4 },
  { url: im5 },
  { url: im10 },  
];

const Slider = () => {
  return (
    <div>
      <SimpleImageSlider
        width={"100%"}
        height={"95vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        backgroundSize={"contain"} // Changed to "contain"
        backgroundPosition={"center"}  // Changed to "center"
        interval={2000} // Auto-slide interval in milliseconds (e.g., 2000ms = 2 seconds)
      />
    </div>
  );
};

export default Slider;

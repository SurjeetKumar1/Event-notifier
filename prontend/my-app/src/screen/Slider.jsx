import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider'; // Fixed import statement
import img4 from "../components/EventImg/img4.jpeg";
import img5 from "../components/EventImg/img5.jpeg";
// import img6 from "../components/EventImg/img6.jpeg";
import img7 from "../components/EventImg/img7.jpeg";
import img8 from "../components/EventImg/img8.jpeg";
// import img9 from "../components/EventImg/img9.jpeg";

const images = [
  { url: "https://www.cuh.ac.in/admin/uploads/convocation/gallery/2023/B.Voc.%20Ind%20Waste%20Mgt.JPG" },
  { url: img4 }, 
  { url: img5 },  
  // { url: img6 },  
  { url: img7 },  
  { url: img8 },  
  // { url: img9 },  
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

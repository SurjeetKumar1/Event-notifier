import React from 'react';
import SimpleImageSlider from 'react-simple-image-slider'; // Fix the import statement

const images = [
  { url: "https://www.cuh.ac.in/admin/uploads/convocation/gallery/2023/B.Voc.%20Ind%20Waste%20Mgt.JPG" },
  { url: "https://assets.thehansindia.com/h-upload/2020/02/27/948982-science.webp" },
  
  { url: "https://d8it4huxumps7.cloudfront.net/uploads/images/festival/banner/63edc53452026_img.jpg?d=1920x396" },
];

const Slider = () => {
  return (
    <div >
      <SimpleImageSlider
        width={"100%"}
        height={"90vh"}
        images={images}
        showBullets={true}
        showNavs={true}
        backgroundSize={"cover"}  // Fix the typo in property name
  backgroundPosition={"center"}  // Fix the typo in property name and use double quotes

      />
    </div>
  );
};

export default Slider;

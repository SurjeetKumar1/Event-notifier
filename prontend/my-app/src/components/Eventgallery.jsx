import React, { useEffect, useState } from 'react'
import Text from '../screen/Text'
import "./EventGallery.css";
import { Typewriter } from 'react-simple-typewriter'
import Button from '@mui/material/Button';
import axios from "axios";
import AOS from "aos";
import 'aos/dist/aos.css';
import { Baseurl } from '../Utils/BaseUrl';

const Eventgallery = () => {
    const [getdata,setgetdata]=useState([])
    useEffect(()=>{
        Getimgdata();
    },[])


    useEffect(()=>{
        AOS.init({duration:2000});
      },[]);
    //get img data from the server
    const Getimgdata=async()=>{
      try{
        let getdata=await axios.get(`${Baseurl}/GalleryImg`);
        console.log("geeting img data from the server",getdata.data);
        setgetdata(getdata.data);
      }catch(e){
        console.error("error in getting data from the server",e);
      }
    }
    const Imagecategory = {
        names: ["Spandan", "Advik", "Youth Parliament", "Workshops", "Placement Drive","Coding Events","Cultural Events","NSS Events"]
    };

    return (
        <div>
            <Text />
            <div style={{ background: "#98c99d", textAlign: "center" }}>
                <div className="typing_text">
                    <h1 style={{ paddingTop: '5rem', margin: 'auto 0', fontWeight: 'normal' }}>
                        <span style={{ fontWeight: 400 }}>Welcome to CUH Event Gallery, <br></br></span>{' '}
                        <span style={{ color: ' rgb(3, 3, 41) ', fontWeight: '700', fontSize: '2rem' }}>
                            <Typewriter
                                words={['SPANDAN ', 'YOUTH PARLIAMENT', 'WORKSHOPS', 'ADVIK', 'CONFERENCE', 'PLACEMENT DRIVE', 'CULTURAL EVENT', 'CULTURAL EVENTS', 'NSS EVENTS',]}
                                loop={true}
                                cursor={true}
                                cursorStyle='|'
                                cursorColor="rgb(3, 3, 41)"
                                typeSpeed={70}
                                deleteSpeed={50}
                                delaySpeed={1000}

                            />
                        </span>
                    </h1>
                </div>
            </div>
            <div className='Allimages'>
                <div className='searchimage'>
                    <Button
                        variant="contained"
                        color="success"

                    > SPANDAN
                        
                    </Button>
                    <Button
                        variant="contained"
                        color="success"

                    >
                       ADVIK
                    </Button>
                    {/* <Button
                        variant="contained"
                        color="success"

                    >
                        PASHU MELA
                    </Button> */}
                    <Button
                        variant="contained"
                        color="success"

                    >
                        PLACEMENT DRIVE
                    </Button>
                    <Button
                        variant="contained"
                        color="success"

                    >
                        WORKSHOPS
                    </Button>
                    <Button
                        variant="contained"
                        color="success"

                    >
                        YOUTH PARLIAMENT
                    </Button>
                    <Button
                        variant="contained"
                        color="success"

                    >
                        CODING EVENTS
                    </Button>
                    <Button
                        variant="contained"
                        color="success"

                    >
                        IEEE EVENTS
                    </Button>
                    <Button
                        variant="contained"
                        color="success"

                    >
                        NSS EVENTS
                    </Button>
                </div>
                {Imagecategory.names.map((cat, index) => (
    <div key={index}>
    <div className='border'></div>
        <h1 style={{marginLeft:"30px",color:" rgb(3, 3, 41)"}}>{cat}</h1>
        
        <div className='imgbox' data-aos="fade-up">
        {getdata
            .filter((img) => img.GalleryImgName === cat)
            .map((data, dataIndex) => (
                <div key={dataIndex}>
                       
                        <div className='galleryimg'>
                        
                            <img src={require(`../image/${data.GalleryImg}`)} alt="Eventimg"/>
                        </div>
                    </div>
               
            ))
            
        }
        </div>
    </div>
))}

            </div>
   
        </div>
    )
}

export default Eventgallery

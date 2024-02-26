const mongoose=require("mongoose");
const validator=require("validator");

const Gallery_schema=new mongoose.Schema({
    GalleryImgName: {
        type:String,  
    },
    GalleryImg:{
      type:String,
      // data:Buffer,
      // contentType:String  
    } ,
    uploadedTime: {
        type: Date,
        default: Date.now()
      },
})

const Event_Gallery=mongoose.model("Event_Gallery",Gallery_schema);

module.exports =Event_Gallery;
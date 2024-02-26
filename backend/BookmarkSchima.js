const mongoose = require("mongoose");
const BookMarkSchema = new mongoose.Schema({
    bookmarkId:{
        type:String,
        required:true
    },
    eventName: {
        type: String,
        required: true,
    },
    EventDate: {
        type: Date,
        required: true,
    },
    EventVenue: {
        type: String,
        required: true
    },
    EventPoster: {
        type:"String"
        // data: Buffer,
        // contentType: String,
    },
    UploadDate:{
       type:Date,
       default:Date.now()
    }

});

const BookMark = mongoose.model("BookMark", BookMarkSchema);

module.exports = BookMark;

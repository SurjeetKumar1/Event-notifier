const mongoose = require("mongoose");
const validator = require("validator");

const event_Schema = new mongoose.Schema({
  Event_name: {
    type: String,
    required: true,
  },
  Description: {
    type: String, 
    required: true,
  },
  Departmen: {
    type: String, 
    required: true,
  },
  Event_date: {
    type: Date,
    required: true,
    validate: {
      validator: (date) => date >= new Date(), 
      message: "Event date cannot be in the past",
    },
  },
  
  Resistration_link: {
    type: String,
    required: true,
  },

  Poster_image: {
    data: Buffer,
    // contentType: String,
  },
  
});

const Event_Data = mongoose.model("Event_Data", event_Schema);

module.exports = Event_Data;
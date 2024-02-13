import React, { useState } from 'react';
import "./EventDetailsForm.css"; // Import the CSS file
import axios from 'axios';

export default function Department() {
  const [Event_name, set_event_name] = useState("");
  const [Description, set_event_des] = useState("");
  const [Departmen, set_event_Department] = useState("");
  const [Event_date, set_event_Date] = useState("");
  const [Resistration_link, set_event_link] = useState("");
  const [testImage, setSelectedImage] = useState("");
  const [venue,setvenue]=useState("");

  const handleChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Create a FormData object to encapsulate all form data
    const formData = new FormData();
    formData.append('Event_name', Event_name);
    formData.append('Description', Description);
    formData.append('Departmen', Departmen);
    formData.append('Event_date', Event_date);
    formData.append('venue', venue);
    formData.append('Resistration_link', Resistration_link);
    formData.append('testImage', testImage); // Append the file

    try {
      // Note: You must specify the 'Content-Type': 'multipart/form-data' in the headers,
      // but Axios will automatically set it correctly when you pass FormData as the post data
      const event_details = await axios.post("event-notifier-neon.vercel.app/upload", formData);

      // Reset state here to clear the form if needed
      set_event_name("");
      set_event_des("");
      set_event_Department("");
      set_event_Date("");
      set_event_link("");
      setSelectedImage("");
      setvenue("");

      console.log("Form submitted", event_details.data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <>
    <div className='event-form'>
      <form onSubmit={handleSubmit} className='f'>
      <h1>Event Details</h1>
      <label>Event Name</label>
        <input className='event-information'
          type='text'
          id='Event_name'
          name="Event_name"
          value={Event_name}
          placeholder='Event name'
          required
          onChange={(e) => handleChange(e, set_event_name)}
        />

        <label>Description</label>
        <input
        className='event-information'
          type='text'
          id='Description'
          name="event_describption"
          value={Description}
          placeholder='Write describtion about Event'
          required
          onChange={(e) => handleChange(e, set_event_des)}
        />
        <label>Department</label>
        <input
        className='event-information'
          type='text'
          id='text'
          name="Departmen"
          value={Departmen}
          placeholder='Department'
          required
          onChange={(e) => handleChange(e, set_event_Department)}
        />

        <label>Event Date</label>
        <input
        className='event-information'
          type='date'
          id='event_date'
          name='Event_date'
          placeholder='Enter event date'
          value={Event_date}
          required
          onChange={(e) => handleChange(e, set_event_Date)}
        />
        <label>Venue</label>
        <input
        className='event-information'
          type='venue'
          id='venue'
          name='venue'
          placeholder='Venue'
          value={venue}
          required
          onChange={(e) => handleChange(e, setvenue)}
        />

        <label>Event Registration(if any)</label>
        <input
        className='event-information'
          type='url'
          id='Resistration_link'
          name='Resistration_link'
          placeholder='Enter event URL'
          value={Resistration_link}
          required
          onChange={(e) => handleChange(e, set_event_link)}
        />

        <label>Event Poster</label>
        <input
  className='event-information'  // Add your existing class or apply styles directly
  type="file"
  name='testImage'
  accept='image/'
  placeholder="Choose file"
  onChange={(e) => setSelectedImage(e.target.files[0])}
  style={{

    // borderRadius: '5px',
    margin: 'auto',
    fontSize:"1.2rem",
    paddingTop: "5.5px",
    borderRadius:"10px"

  }}
/>
        <button type="submit" className='btn-submit'>Submit</button>
      </form>
      </div>
    </>
  );
}

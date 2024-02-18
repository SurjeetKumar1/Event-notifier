import './App.css';
import Navbar1 from "./components/Navbar1";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import Notification from './components/Notification';
import Login from "./components/Login";
import Signup from './components/Signup';
 import Home from './components/Home';
 import Admin from "./components/Admin";
 import Footer from "./components/Footer"
 import EventDetails from "./components/EventDetailsForm";
 import Button from '@mui/material/Button';
 import Bookmark from "./components/Bookmark"
 import Emailjs from "./components/Emailform";

function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar1/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route exact path='/bookmark' element={<Bookmark/>}/>
    <Route exact path='/notification' element={<Notification/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup'   element={<Signup/>}/>
    <Route exact path='/admin' element={<Admin/>}/>
    <Route exact path='/admin/eventdetails' element={<EventDetails/>}/>
    <Route exact path='/emailjs' element={<Emailjs/>}/>

   </Routes>
     <Footer/> 
   </BrowserRouter>
   </>
  );
}

export default App;
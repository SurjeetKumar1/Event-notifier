import './App.css';
import Navbar1 from "./components/Navbar1";
import { BrowserRouter,Routes,Route } from 'react-router-dom';
import About from './components/About';
import Event from './components/Event';
import Login from "./components/Login";
import Signup from './components/Signup';
 import Home from './components/Home';
 import Admin from "./components/Admin";
 import Footer from "./components/Footer"
 import EventDetails from "./components/EventDetailsForm";
 import Button from '@mui/material/Button';
function App() {
  return (
   <>
   <BrowserRouter>
   <Navbar1/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route exact path='/about' element={<About/>}/>
    <Route exact path='/event' element={<Event/>}/>
    <Route exact path='/login' element={<Login/>}/>
    <Route exact path='/signup'   element={<Signup/>}/>
    <Route exact path='/admin' element={<Admin/>}/>
    <Route exact path='/admin/eventdetails' element={<EventDetails/>}/>

   </Routes>
     <Footer/> 
   </BrowserRouter>
   </>
  );
}

export default App;
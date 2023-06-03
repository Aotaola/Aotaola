import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <Navbar/>
      <div Classname = "Nav-container">
        <Routes>
          <Route path = "/" element = {<Home/>} Classname = "Home_Route"/>
          <Route path = "/Contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Resume from './components/Resume.jsx'; 
import Blog from './components/Blog.jsx'; 
import Artwork from './components/Artwork.jsx';
import Contact from './components/Contact';
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <Navbar/>
      <div Classname = "Nav-container">
        <Routes>
          <Route path = "/" element = {<Home/>} Classname = "Home_Route"/>
          <Route path = "/Resume" element = {<Resume/>}/>
          <Route path = "/Blog" element = {<Blog/>}/>
          <Route path = "/Artwork" element = {<Artwork/>}/>
          <Route path = "/Contact" element = {<Contact/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Resume from './components/Resume.jsx'; 
import Blog from './components/Blog.jsx'; 
import Artwork from './components/Artwork.jsx';
import { Route, Routes } from "react-router-dom";
import { useState, useEffect } from "react";

function App() {

  const [resume, setResume] = useState([])

     const fetchResume = async() => {
        let req = await fetch("https://docs.google.com/document/d/1v8s37MeP5dstK6-kCPMwSw4j01qfs-GM9FEGYYoXAAk/edit?usp=sharing")
        let res = await req.json()
        console.log(res)
          setResume(res);
        }

      useEffect(() => {
        fetchResume()
      },[])


  return (
    <>
      <Navbar/>
      <div Classname = "Nav-container">
        <Routes>
          <Route path = "/" element = {<Home/>}/>
          <Route path = "/Resume" element = {<Resume/>}/>
          <Route path = "/Blog" element = {<Blog/>}/>
          <Route path = "/Artwork" element = {<Artwork/>}/>
        </Routes>
    
          {resume.map((cv) => {
            return (
              <Resume  key = {cv.id} cv = {cv }/>
          )}
              )  }
      </div>
    </>
  );
}

export default App;

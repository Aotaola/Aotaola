import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact';
import Demos from './components/Demos.jsx';
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <Navbar/>
      <div ClassName = "Nav-container">
        <Routes>
          <Route path = "/" element = {<Home/>} ClassName = "Home_Route"/>
          <Route path = "/Contact" element = {<Contact/>}/>
          <Route path = "/Demos" element = {<Demos/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

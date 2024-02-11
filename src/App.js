import './App.css';
import Home from './components/Home.jsx';
import Navbar from './components/Navbar.jsx';
import Contact from './components/Contact';
import DemoPage from './components/DemoPage.jsx';
import { Route, Routes } from "react-router-dom";


function App() {


  return (
    <>
      <Navbar/>
      <div ClassName = "Nav-container">
        <Routes>
          <Route path = "/" element = {<Home/>} ClassName = "Home_Route"/>
          <Route path = "/Contact" element = {<Contact/>}/>
          <Route path = "/DemoPage" element = {<DemoPage/>}/>
        </Routes>
      </div>
    </>
  );
}

export default App;

import React from "react";
import { Link } from "react-router-dom";
import Otaola_Alejandro_Resume_NY from "./files/Otaola_Alejandro_Resume_NY.pdf";


const Navbar = () => {
    return ( 
        <div className="navcontainer">
             <div className="Navbar">
                 <nav>
                     <button className="nav_buttn">
                         <Link to="/">Home</Link> 
                    </button> 
                             <br/>
                     <button className="nav_buttn">
                         < Link to = "/Contact">Contact</Link>
                      </button>
                             <br/>
                    <button className="nav_buttn">
                        <Link to = "/Demos"> Demos </Link>
                    </button>
                    
                 </nav>

                 </div>
        
             <div className="cv_container">

                    <button className="cv_buttn">
                      <a href={Otaola_Alejandro_Resume_NY} target = "_blank" rel="noopener noreferrer">Resume</a>
                    </button> 
             </div>
         
        </div>
     );
}
 
export default Navbar;
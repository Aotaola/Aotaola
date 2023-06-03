import React from "react";
import { Link } from "react-router-dom";
import Otaola_Alejandro_Resume_NY from "./files/Otaola_Alejandro_Resume_NY.pdf"
const Navbar = () => {
    return ( 
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
            </nav>

            <button className="cv_buttn">
                <a href = {Otaola_Alejandro_Resume_NY}>Resume</a>
            </button> 
         </div>
     );
}
 
export default Navbar;
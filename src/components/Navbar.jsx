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
            <button className="nav_buttn">
                <a href = {Otaola_Alejandro_Resume_NY}>Resume</a>
            </button> 
            <br/>
            <button className="nav_buttn">
               < Link to = "/Contact">Contact</Link>
            </button>
            <br/>
            {/* <Link to="/Resume">CV</Link>  */}
            {/* <button>
             <Link to="/Blog"> Blogs</Link> 
            </button> */}
            {/* <br/>  */}
            {/* <button>
             <Link to= "/artwork">Creative work</Link>
            </button> */}
            </nav>
         </div>
     );
}
 
export default Navbar;
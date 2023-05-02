import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <nav>
            <Link to="/Home">Home</Link> 
            <br/>
             <Link to="/Resume">CV</Link> 
            <br/>
             <Link to="/Blog"> Blogs</Link> 
            <br/> 
             <Link to= "/artwork">Creative work</Link>
            </nav>
         </div>
     );
}
 
export default Navbar;
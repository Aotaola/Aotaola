import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="Navbar">
            <nav>
           <button>
            <Link to="/">ALejandro Otaola</Link> 
            </button> 
            <br/>
            <button>
             <Link to="/Resume">CV</Link> 
            </button>
            <br/>
            <button>
             <Link to="/Blog"> Blogs</Link> 
            </button>
            <br/> 
            <button>
             <Link to= "/artwork">Creative work</Link>
            </button>
            </nav>
         </div>
     );
}
 
export default Navbar;
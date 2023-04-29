import React from "react";
import { useState } from "react";

const Navbar = () => {
    // const [dropdown, setDropdown] = useState[false]





    return ( 
        <div className="Navbar">
            <button> Demos </button>
            <br/>
            <button 
            // onClick = {() => setDropdown(!dropdown)}
            > Blogs </button>
            {/* {dropdown && <p>Toggle is true!</p>} */}
            <br/> 
            <button> creative work/hobbies </button>
         </div>
     );
}
 
export default Navbar;
import React from "react";
import Otaola_Alejandro_Resume_NY from "./files/Otaola_Alejandro_Resume_NY.pdf";
import PdfView from "./PdfView.jsx";


const Resume = () => {

    return ( 
      <>
        <br></br>
        <div className = "button_container">
        <button><a href={Otaola_Alejandro_Resume_NY}>Download Resume</a></button>
        </div>
            <br/>
        <div className = "cv_container">
            <div className = "Resume_container">
                <PdfView file = {Otaola_Alejandro_Resume_NY}/>
            </div>
        </div>
        <br></br>
        

        </>
      );
}
 
export default Resume;
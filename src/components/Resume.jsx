import React from "react";
import Otaola_Alejandro_Resume_FL from "./files/Otaola_Alejandro_Resume_FL.pdf";
import PdfView from "./PdfView.jsx";


const Resume = () => {

    return ( 
      <div>
        <br></br>
        <div className = "button_container">
        <button><a href={Otaola_Alejandro_Resume_FL}>Download Resume</a></button>
        </div>
            <br/>
        <div className = "cv_container">
            <div className = "Resume_container">
                <PdfView file = {Otaola_Alejandro_Resume_FL}/>
            </div>
        </div>
        <br></br>
        </div>
      );
}
 
export default Resume;
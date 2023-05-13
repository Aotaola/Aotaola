import React from "react";
import Otaola_Alejandro_Resume from "./files/Otaola_Alejandro_Resume.pdf";
import PdfView from "./PdfView.jsx";


const Resume = () => {

    return ( 
      <>

        <div className="Page-title">
            <h1> CV </h1>
            <br/>
        </div>
        <div className = "cv_container">

            <div className = "Resume_container">
                <PdfView file = {Otaola_Alejandro_Resume}/>
            </div>
        <div className = "button_container">
        <button><a href={Otaola_Alejandro_Resume}>Download Resume</a></button>
        </div>
        </div>
        

        <br></br>
        </>
      );
}
 
export default Resume;
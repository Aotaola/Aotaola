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
        <div className = "Resume_container">
            <PdfView file = {Otaola_Alejandro_Resume}/>
        </div>
        <br/>
        </>
      );
}
 
export default Resume;
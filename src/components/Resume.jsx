import React from "react";
import Otaola_resume from "./files/Otaola_resume..pdf";
import PdfView from "./PdfView.jsx";

const Resume = () => {

    return (
        <div className="Page-title">
            <h1> CV </h1>
            <br/>
            <div className = "Resume_container">
            <PdfView file = {Otaola_resume}/>
            </div>
        </div>
      );
}
 
export default Resume;
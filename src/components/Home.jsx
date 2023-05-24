import React from "react";
import profile_pic from "./images/profile_pic.png";
import RubyLogo from "./images/RubyLogo.png";
import javascriptLogo from "./images/javascriptLogo.png";
import sqlLOGO from "./images/sqlLOGO.png";
import htmlLOGO from "./images/htmlLOGO.png";
import cssLOGO from "./images/cssLOGO.png"; 
import RoR from "./images/RoR.png";
import ReactLOGO from "./images/ReactLOGO.png";
import OAuthLogo from "./images/OAuth.png";
import apiLOGO from "./images/apiLOGO.png";
import BASH_SHELL from "./images/BASH_SHELL.png";
import Github_LOGO from "./images/Github_LOGO.png";
import vscodeLOGO from "./images/vscodeLOGO.png";
import PostgreSQL_logo from "./images/PostgreSQL_logo.png";
import { useState, useEffect } from "react";



const Home = () => {

    const [readMore, setReadMore] = useState(false)

    const  handleSwitch = () => {
        setReadMore(readMore => !readMore);
    };



    return (

        <>

        <div className="Home">
         
             <div className="Content">

                <p className="Bio">
                    <h3>About Alejandro: </h3>
                 Hello, Im Alejandro Otaola. I am a Software Engineer based in the United states originally from Venezuela.
                 bellow you will find some of the technologies, languages and frameworks can succesfully use in software development. 
                 feel free to browse through and learn more about my journey and perhasps we shall collaborate in the future.
                </p>
                <button onClick={handleSwitch}> click for more ... </button>
                {readMore ? (
                <p> My experience outside of technology is quite varied, I started my proffesional journey by majoring in International Business administration & marketing
                    at Thomas Jefferson University, following my junior year, I decided to chase a dream of mine to become a career artist. Thanks to my background in business administration I was able to build an sustain a small business 
                    as an artist selling merchandise as well as large art works. after persuing my creative entreprise, Grayota.com, I felt a yearning for a more technical 
                    discipline, and through many friends in the field of software, I decided to sink my teeth into full-stack development, where I am currently pursuing a career.
                    my expereinces have lead me to become an extreamly resourcefull and wholly dedicated person once I have a goal in mind as well as a solidified my passion for the arts 
                    culture and most recently how AI will be influencing all mediums and alterning industries in the future. In my heart of hearts, I want to collaborate on something that moves society forward! </p>
                ) : ( <p> Click for more ... </p>)}
                    <br></br>
            </div>

            <div className="Profile-pic">
                <img src={profile_pic} alt="profile of Alejandro Otaola" />
            </div>
        </div>

        <div className = "language_technology_container">

            <div className="Language_Container">
                <h4 className = "content_title">Languages</h4>
                <div className="language_tech_content">

                    <img src={RubyLogo} alt="Ruby" title="Ruby" className="language_tools_block" />

                    <img src={javascriptLogo} alt="Javascript" title="Javascript" className="language_tools_block" />

                    <img src={sqlLOGO} alt="SQL" title="SQL" className="language_tools_block" />

                    <img src={htmlLOGO} alt="HTML" title="HTML" className="language_tools_block" />
                
                     <img src={cssLOGO} alt="CSS" title="CSS" className="language_tools_block" />

                 </div>
            </div>  

            <div className="Tech_Container">
                <h4 className = "content_title">Tools & Technologies</h4>
                <div className = "tech_content">
                    
                         <img src={RoR} alt="Rails" title="Rails" className="tech_tools_block" />

                         <img src={ReactLOGO} alt="React" title="React" className="tech_tools_block" />


                         <img src={OAuthLogo} alt="OAuth" title="OAuth" className="tech_tools_block" />

                         <img src={apiLOGO} alt="API" title="API" className="tech_tools_block" />

                         <img src={BASH_SHELL} alt="Bash/Shell" title="Bash/Shell" className="tech_tools_block" />

                         <img src={Github_LOGO} alt="Github" title="Github" className="tech_tools_block" />

                        <img src={vscodeLOGO} alt="VsCode" title="VsCode" className="language_tools_block" />

                        <img src={PostgreSQL_logo} alt="PostgreSQL_logo" title="PostgreSQL" className="language_tools_block"/>

                    </div>
                </div>
        </div>
        <br></br>
        
        </>
    
    );
 }
export default Home;
import React from "react";
import profile_pic from "./images/profile_pic.png";
import rubyLogo from "./images/rubyLogo.png";
import javascriptLogo from "./images/javascriptLogo.png";
import sqlLogo from "./images/sqlLogo.png";
import htmlLogo from "./images/htmlLogo.png";
import cssLogo from "./images/cssLogo.png"; 
import RoR from "./images/RoR.png";
import reactLogo from "./images/reactLogo.png";
import OAuthLogo from "./images/OAuthLogo.png";
import apiLogo from "./images/apiLogo.png";
import BASH_SHELL from "./images/BASH_SHELL.png";
import Github_LOGO from "./images/Github_LOGO.png";
import vscodeLogo from "./images/vscodeLogo.png";
import PostgreSQL_logo from "./images/PostgreSQL_logo.png";
import Agile_logo from "./images/Agile_logo.png";
import { useState } from "react";



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
                    Hello, I'm Alejandro Otaola. I am a Software Engineer from Venezuela, based in the United States. Below you will find some of the technologies, languages, and frameworks I can successfully use in software development. Please browse through and learn more about my journey, and perhaps we shall collaborate in the future. 
                <br/>
                <button onClick={handleSwitch} className="moreButton"> ... </button>
                {readMore ? (
                <p> My experience outside of technology is quite varied. I began my professional journey by majoring in International Business Administration & Marketing at Thomas Jefferson University. Following my junior year, I decided to chase a dream being a carreer fine artist. Thanks to my background in business administration, I built and sustained a small business, selling merchandise,  large artworks & designing events/experiences for an audience. After pursuing my creative enterprise, Grayota.com, I felt a yearning for a more technical discipline. Through many friends in the field of software, I decided to delve into full-stack development, where I am currently pursuing a career. My experiences have led me to become a resourceful and wholly dedicated person once I have a goal in mind. In my heart of hearts, I want to collaborate on something that moves society forward! </p>
                ) : null}
                    <br></br>
                </p>
            </div>

            <div className="Profile-pic">
                <img src={profile_pic} alt="profile of Alejandro Otaola" />
            </div>
        </div>

        <div className = "language_technology_container">

            <div className="Language_Container">
                <h4 className = "content_title">Languages</h4>
                <div className="language_tech_content">

                    <img src={rubyLogo} alt="Ruby" title="Ruby" className="language_tools_block" />

                    <img src={javascriptLogo} alt="Javascript" title="Javascript" className="language_tools_block" />

                    <img src={sqlLogo} alt="SQL" title="SQL" className="language_tools_block" />

                    <img src={htmlLogo} alt="HTML" title="HTML" className="language_tools_block" />
                
                     <img src={cssLogo} alt="CSS" title="CSS" className="language_tools_block" />

                 </div>
                 <br></br>
                 <h4 className = "content_title">Frameworks</h4>
                 <div className="language_tech_content">

                 <img src={RoR} alt="Rails" title="Rails" className="tech_tools_block" />

                 <img src={reactLogo} alt="React" title="React" className="tech_tools_block" />  

                 </div>
            </div>  

            <div className="Tech_Container">
                <h4 className = "content_title">Tools & Technologies</h4>
                <div className = "tech_content">
                    
                         <img src={OAuthLogo} alt="OAuth" title="OAuth" className="tech_tools_block" />

                         <img src={apiLogo} alt="API" title="API" className="tech_tools_block" />

                         <img src={BASH_SHELL} alt="Bash/Shell" title="Bash/Shell" className="tech_tools_block" />

                         <img src={Github_LOGO} alt="Github" title="Github" className="tech_tools_block" />

                        <img src={vscodeLogo} alt="VsCode" title="VsCode" className="language_tools_block" />

                        <img src={PostgreSQL_logo} alt="PostgreSQL_logo" title="PostgreSQL" className="language_tools_block"/>

                    </div>
                    <br/>
                    <h4 className = "content_title">Methodologies</h4>

                    <div className = "tech_content">

                    <img src={Agile_logo} alt="Agile" title="Agile" className="language_tools_block"/>

                    <img src="https://www.clipartmax.com/png/middle/285-2851044_restful-search-api-rest-web-services-logo.png" alt="Restful Search Api - Rest Web Services Logo@clipartmax.com" className="language_tools_block"></img>
        
                     </div>
                </div>
        </div>
        <br></br>
        
        </>
    
    );
 }
export default Home;
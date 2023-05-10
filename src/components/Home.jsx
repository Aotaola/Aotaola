import React from "react";
import profile_pic from "./images/profile_pic.png";
import rubyLogo from "./images/rubyLogo.png";
import javascriptLogo from "./images/javascriptLogo.png";
import sqlLogo from "./images/sqlLogo.png";
import htmlLogo from "./images/htmlLogo.png";
import cssLogo from "./images/cssLogo.png"; 
import RoR from "./images/RoR.png";
import reactLogo from "./images/reactLogo.png";
import OAuthLogo from "./images/OAuth.png";
import apiLogo from "./images/apiLogo.png";
import BsLogo from "./images/BsLogo.png";
import gitLogo from "./images/gitLogo.png";
import vscodeLogo from "./images/vscodeLogo.png";


const Home = () => {

    return (
        <>
         <div className="Page-title">
             <h1>About Alejandro </h1>
        </div>
        <div className="Home">
             <div className="Content">
                <p className="Bio">
                 Experienced Software Engineer with a demonstrated ability to build robust applications and create
                 comprehensive front-end and back-end functionality. Possesses strong entrepreneurial and management
                 skills that enable effective project management and seamless collaboration within teams.
                </p>
                    <br></br>
            </div>
            <div className="Profile-pic">
                <img src={profile_pic} alt="profile of Alejandro Otaola" />
            </div>
        </div>
        <div className="Language_Container">
            <h4 className = "languages">Languages & frameworks</h4>
            <div className="language_tech_content">
                 <img src={rubyLogo} alt="Ruby" title="Ruby" className="language_tools_block" />

                <img src={javascriptLogo} alt="Javascript" title="Javascript" className="language_tools_block" />

                <img src={sqlLogo} alt="SQL" title="SQL" className="language_tools_block" />

                <img src={htmlLogo} alt="HTML" title="HTML" className="language_tools_block" />
                
                 <img src={cssLogo} alt="CSS" title="CSS" className="language_tools_block" />
        </div>

            
        </div>

        <div className="tools_container">
            <h4 className = "ToolsAndTech">Tools & Technologies</h4>
                 <div className = "language_tech_content">
                    
                         <img src={RoR} alt="Rails" title="Rails" className="language_tools_block" />

                         <img src={reactLogo} alt="React" title="React" className="language_tools_block" />

                         <img src={OAuthLogo} alt="OAuth" title="OAuth" className="language_tools_block" />

                         <img src={apiLogo} alt="API" title="API" className="language_tools_block" />

                         <img src={BsLogo} alt="Bash/Shell" title="Bash/Shell" className="language_tools_block" />

                         <img src={gitLogo} alt="Github" title="Github" className="language_tools_block" />

                        <img src={vscodeLogo} alt="VsCode" title="VsCode" className="language_tools_block" />
                     </div>
                 </div>
        <br></br>
        
        </>
    
    );
 }
export default Home;
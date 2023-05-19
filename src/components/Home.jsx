import React from "react";
import profile_pic from "./images/profile_pic.png";
import RubyLogo from "./images/RubyLogo.png";
import javascriptLogo from "./images/javascriptLogo.png";
import sqlLOGO from "./images/sqlLOGO.png";
import htmlLOGO from "./images/htmlLOGO.png";
import cssLOGO from "./images/cssLOGO.png"; 
import RoR from "./images/RoR.png";
import reactLogo from "./images/reactLogo.png";
import OAuthLogo from "./images/OAuth.png";
import apiLogo from "./images/apiLogo.png";
import BsLogo from "./images/BsLogo.png";
import gitLogo from "./images/gitLogo.png";
import vscodeLogo from "./images/vscodeLogo.png";
import PostgreSQL_logo from "./images/PostgreSQL_logo.png";



const Home = () => {

    return (

        <>

        <div className="Home">
         
             <div className="Content">

                <p className="Bio">
                    <h3>About Alejandro: </h3>
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

        <div className = "language_technology_container">

            <div className="Language_Container">
                <h4 className = "content_title">Languages & frameworks</h4>
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

                         <img src={reactLogo} alt="React" title="React" className="tech_tools_block" />


                         <img src={OAuthLogo} alt="OAuth" title="OAuth" className="tech_tools_block" />

                         <img src={apiLogo} alt="API" title="API" className="tech_tools_block" />

                         <img src={BsLogo} alt="Bash/Shell" title="Bash/Shell" className="tech_tools_block" />

                         <img src={gitLogo} alt="Github" title="Github" className="tech_tools_block" />

                        <img src={vscodeLogo} alt="VsCode" title="VsCode" className="language_tools_block" />
                        
                        <img src={PostgreSQL_logo} alt="PostgreSQL_logo" title="PostgreSQL" className="language_tools_block"/>

                    </div>
                </div>
        </div>
        <br></br>
        
        </>
    
    );
 }
export default Home;
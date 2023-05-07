import React from "react";
import profile_pic from "./images/profile_pic.png";



const Home = () => {



    return ( 
        < >
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
            <div className = "language_tech_content">
            <span>Ruby</span> <br></br> <span>Rails</span>
            <br></br><span>JavaScript</span><br></br> <span>React.Js</span>
            <br></br><span>Html</span><br></br><span>SQL</span>
            </div>
        </div>
        <div className="tools_container">
            <h4 className = "ToolsAndTech">Tools & Technologies</h4>
            <div className = "tech_content">
                <span>APIs</span>
            </div>
        </div>
        <br></br>
  
        </>
     );
}
 
export default Home;
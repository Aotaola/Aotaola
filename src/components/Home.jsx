import React from "react";
import profile_pic from "./images/profile_pic.png";


const Home = () => {
    return ( 
        < >
          <div className="Page-title">
  <h1>Software Engineer</h1>
</div>
<div className="Home">
  <div className="Content">
    <p className="Bio">
      Experienced Software Engineer with a demonstrated ability to build robust applications and create
      comprehensive front-end and back-end functionality. Possesses strong entrepreneurial and management
      skills that enable effective project management and seamless collaboration within teams.
    </p>
    <span>Languages</span>
    <br></br>
    <span>Tools & Technologies</span>
  </div>
  <div className="Profile-pic">
    <img src={profile_pic} alt="profile of Alejandro Otaola" />
  </div>
</div>
  
        </>
     );
}
 
export default Home;
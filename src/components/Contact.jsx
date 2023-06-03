
import React from "react";

const Contact = () => {

    return ( 
        <div className="Contact-page">
            <br/>
            <div className="contact-container">
               <h1>Lets Connect!</h1>

                 <br/>
                    <div className="link-block">
                        <div className="email-block">

                         <h3> Preffered Email</h3> 

                            <a href = 'mailto:Alejandro@grayota.com'>

                                <img src="https://www.freepnglogos.com/uploads/logo-outlook-png/file-microsoft-office-outlook-logo-present-svg-wikipedia-1.png" width="200" alt="hd microsoft outlook logo brand icon png" className="link-img"/>

                            </a>
                        </div>
                            <br />
                         <div className="linkedin-block">
                                

                            <h3> My LinkedIn </h3> 

                                <a href = 'https://www.linkedin.com/in/aotaola'>

                                    <img src="https://www.freepnglogos.com/uploads/linkedin-logo-design-30.png" width="200" alt="linkedin logo design" className="link-img"/>

                                </a>
                        </div>
                            <br/>
                        <div className="github-block">

                            <h3> My Github </h3> 

                                <a href = 'https://github.com/Aotaola'>

                                    <img src="https://www.freepnglogos.com/uploads/512x512-logo/512x512-transparent-logo-github-logo-24.png" width="200" alt="512x512 transparent logo, github logo" className="link-img" />

                                </a>

                        </div>

                     </div>
            </div>
        </div>
     );
    }
    
    export default Contact;
    
 
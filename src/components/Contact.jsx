import React, { useState } from "react";

const Contact = () => {
    const [formState, setFormState] = useState({
        name: '',
        email: '',
        message: '',
    });

    const handleChange = (e) => {
        setFormState({
            ...formState,
            [e.target.name]: e.target.value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Submitted contact form:', formState);
       
    };

    return ( 
        <div className="Contact-page">
            <div className="contact-container">
               <h1>Lets Connect!</h1>

                 <br/>
                {/* <form className="ContactForm" onSubmit={handleSubmit}> */}
                {/* <input 
                    name="name" 
                    type="text" 
                    placeholder="Your name" 
                    value={formState.name} 
                    onChange={handleChange} 
                    />
                <input 
                    name="email" 
                    type="email" 
                    placeholder="Your email" 
                    value={formState.email} 
                    onChange={handleChange} 
                    />
                <textarea
                    name="message"
                    placeholder="Your message"
                    value={formState.message}
                    onChange={handleChange}
                    />
                <button type="submit">Submit</button>
                 </form> */}
                    <div className="link-block">
                        <div className="email-block">

                         <h3> preffered email</h3> 

                            <a href = 'Alejandro@grayota.com'>

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

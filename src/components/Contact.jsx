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
        <>
        <div className="contact-container">

        <br/>
            <form className="ContactForm" onSubmit={handleSubmit}>
               <h1>Contact me!</h1>
                <input 
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
            </form>
                    </div>
        </>
     );
}
 
export default Contact;

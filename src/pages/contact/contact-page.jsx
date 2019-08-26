import React from 'react';


const ContactPage =()=>(
    <div className='contact-page'>
        <h1>Contact Us</h1>
        <p>Please feel free to contact us anytime</p>
        <form>
            <input type='text' placeholder='First Name'></input>
            <input type='email' placeholder='Email'></input>
            <input type='number' placeholder='Contact Number'></input>
            <input type='text-area' placeholder='Your Message here...'></input>
            <input type='submit' placeholder='Submit'></input>

        </form>
    </div>
);

export default ContactPage;
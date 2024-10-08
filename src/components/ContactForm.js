import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [emailSent, setEmailSent] = useState(false);
    const submit = () => {
        if (name && email && message) {
            const serviceId = 'service_r63plup';
            const templateId = 'template_ijd8clx';
            const userId = 'Vk9H7QsaxPn_8i1fx';
            const templateParams = {
                name,
                email,
                message
            };

            emailjs.send(serviceId, templateId, templateParams, userId)
                .then(response => console.log(response))
                .then(error => console.log(error));

            setName('');
            setEmail('');
            setMessage('');
            setEmailSent(true);
        } else {
            alert('Please fill in all fields.');
        }
    };
    // Remove the declaration of the isValidEmail function
    return (
        <div id="contact-form">
            <input type="text" placeholder="Your Name" value={name} onChange={e => setName(e.target.value)} /><br />
            <input type="email" placeholder="Your email address" value={email} onChange={e => setEmail(e.target.value)} /><br />
            <textarea placeholder="Your message" value={message} onChange={e => setMessage(e.target.value)}></textarea><br />
            <button type="submitmail" onClick={submit}>Send Message</button><br />

            <span className={emailSent ? 'visible' : null}>Thank you for your message, we will be in touch in no time!</span>
        </div>
    );
};
  
export default ContactForm;
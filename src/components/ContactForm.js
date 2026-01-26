import React, { useState } from "react";
import emailjs from 'emailjs-com';

const ContactForm = () => {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [status, setStatus] = useState('');
    const [sending, setSending] = useState(false);

    const isValidEmail = (value) => /.+@.+\..+/.test(value);

    const submit = async (e) => {
        e.preventDefault();
        if (!name || !email || !message) {
            setStatus('Please fill in all fields.');
            return;
        }
        if (!isValidEmail(email)) {
            setStatus('Please provide a valid email address.');
            return;
        }

        setSending(true);
        setStatus('');

        const serviceId = 'service_r63plup';
        const templateId = 'template_ijd8clx';
        const userId = 'Vk9H7QsaxPn_8i1fx';
        const templateParams = { name, email, message };

        try {
            await emailjs.send(serviceId, templateId, templateParams, userId);
            setStatus('Thank you for your message! I will reply shortly.');
            setName('');
            setEmail('');
            setMessage('');
        } catch (err) {
            setStatus('Oops, something went wrong. Please try again later.');
            console.error(err);
        } finally {
            setSending(false);
        }
    };

    return (
        <section className="section contact-card" id="contact">
            <div className="section-header">
                <div>
                    <div className="section-kicker">Get in touch</div>
                    <h2 className="section-title">Contact</h2>
                </div>
            </div>

            <form onSubmit={submit}>
                <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input id="name" type="text" placeholder="Your name" value={name} onChange={(e) => setName(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input id="email" type="email" placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
                </div>
                <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea id="message" placeholder="How can I help?" value={message} onChange={(e) => setMessage(e.target.value)} />
                </div>
                <button type="submit" className="button-primary" disabled={sending}>
                    {sending ? 'Sending…' : 'Send message'}
                </button>
                {status && <div className="status-text">{status}</div>}
            </form>
        </section>
    );
};

export default ContactForm;
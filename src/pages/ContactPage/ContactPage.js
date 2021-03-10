import React from 'react';
import './ContactPage.css';

export default function ContactPage() {
    return (
        <>
            <h1 className="contact-header">Contact Us</h1>
            <p className="header-message">Send us a message and we'll get back to you as soon as possible. You can also reach us by phone at <a className="phone-number" href="tel:+15551234567">(555) 123-4567</a>. Looking forward to hearing from you.</p>
        <div className="contact-page">
            <div className="name">
            <input className="contact-input" placeholder="Name"></input>
            </div>
            <div className="email">
            <input className="contact-input" placeholder="Email"></input>
            </div>
            <div className="phone">
            <input className="contact-input" placeholder="Phone Number"></input>
            </div>
            <div className="message">
            <textarea className="contact-message" placeholder="Your Message"></textarea>
            </div>
            <div className="button">
                <button className="send-button">Send</button>
            </div>
        </div>
        </>
    )
}

import React, { useRef, useState } from 'react';
import Navbar from './Navbar'; // Import Navbar
import emailjs from '@emailjs/browser';
import './Css/Contact.css'; // Import the CSS file for styles

export const Contact = ({ user, onLogout }) => {
  const form = useRef();
  const [messageSent, setMessageSent] = useState(false);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_kjfi0vh', 'template_8qv9a34', form.current, {
        publicKey: '8rzE7jALuMRKTPRrd',
      })
      .then(
        () => {
          setMessageSent(true); // Show success message
          form.current.reset(); // Reset the form immediately after submission

          // Hide the success message after 5 seconds
          setTimeout(() => {
            setMessageSent(false);
          }, 5000);
        },
        (error) => {
          console.log('FAILED...', error.text);
        },
      );
  };

  return (
    <>
      {/* Render Navbar only on Contact page */}
      <Navbar user={user} onLogout={onLogout} />

      <div className="contact-container">
        {messageSent && (
          <div className="success-message">Your message has been sent successfully!</div>
        )}
        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <h2>Contact Us</h2>
          <label>Name</label>
          <input type="text" name="from_name" required />
          <label>Email</label>
          <input type="email" name="from_email" required />
          <label>Message</label>
          <textarea name="message" required />
          <input type="submit" value="Send" className="submit-btn" />
        </form>
      </div>
    </>
  );
};

export default Contact;

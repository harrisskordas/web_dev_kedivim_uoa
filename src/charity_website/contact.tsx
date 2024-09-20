import React, { useState } from 'react';
import './contact.css';

const Contact: React.FC = () => {
  const [messageSent, setMessageSent] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setMessageSent(true);
  };

  return (
    <div className="contact">
      <h1>Contact Us</h1>
      {messageSent ? (
        <p>We will respond to you shortly.</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" required />

          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" required />

          <label htmlFor="message">Message:</label>
          <textarea id="message" name="message" rows={4} required />

          <button type="submit">Send</button>
        </form>
      )}
      <div className="contact-info">
        <p>Phone: 588-888-8888</p>
        <p>Email: info@charity.org</p>
        <p>Address: 123 Charity Lane, Giving City, GC 45678</p>
      </div>
    </div>
  );
};

export default Contact;

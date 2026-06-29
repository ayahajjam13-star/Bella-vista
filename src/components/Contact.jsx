import React from 'react';
import './Contact.css';

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact Us</h2>
      <div className="contact-container">
        <form className="contact-form">
          <input type="text" placeholder="Your Name" />
          <input type="email" placeholder="Your Email" />
          <textarea placeholder="Your Message" rows="5"></textarea>
          <button type="submit" className="btn">Send Message</button>
        </form>
        <div className="contact-info">
          <p>📍 123 Main Street, City</p>
          <p>📞 +1 234 567 890</p>
          <p>✉️ info@bellavista.com</p>
        </div>
      </div>
    </section>
  );
}

export default Contact;
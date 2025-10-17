import React from "react";
import "./Contact.css";

function Contact() {
  return (
    <section id="contact" className="contact">
      <h2>Contact</h2>
      <p>Feel free to reach out via email or LinkedIn!</p>
      <div className="contact-links">
        <a href="mailto:aditya@example.com" className="btn">Email Me</a>
        <a href="https://linkedin.com/in/aditya" target="_blank" rel="noreferrer" className="btn">LinkedIn</a>
      </div>
    </section>
  );
}

export default Contact;

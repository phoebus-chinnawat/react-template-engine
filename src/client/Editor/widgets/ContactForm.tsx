// ContactForm.tsx
import React from 'react';

const ContactForm: React.FC = () => {
  return (
    <div>
      <h2>Contact Form</h2>
      <form>
        <input type="text" placeholder="Your Name" />
        <input type="email" placeholder="Your Email" />
        <textarea placeholder="Your Message"></textarea>
        <button type="submit">Submit</button>
      </form>
    </div>
  );
};

export default ContactForm;
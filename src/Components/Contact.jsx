import { useState } from 'react';
import contactLogo from '../assets/images/contactLogo.jpg';

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const email = 'piyush.khadka2233@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Let's%20work%20together&body=Hi%20there,%0A%0AI%20visited%20your%20portfolio...`;
    
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="contact-container">
      <img src={contactLogo} alt="Contact" className="contact-logo" />
      <h1>Get In Touch!</h1>
      <p>
        Whether you have an idea for a project or just want to chat,<br />
        feel free to shoot me an email!
      </p>
      <button 
        onClick={handleEmailClick} 
        className="email-button"
        aria-label="Email me"
      >
        SAY HELLO
        {copied && <span className="copied-tooltip">Email copied!</span>}
      </button>
    </div>
  );
};

export default Contact;
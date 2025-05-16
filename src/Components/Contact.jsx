import { useState } from 'react';
import contactLogo from '../assets/images/contactLogo.jpg';
import githubIcon from '../assets/images/github.svg';
import linkedinIcon from '../assets/images/linkedin.svg';

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
        <div className="social-links">
        <a href="https://github.com/piyush-gif" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
          <img src={githubIcon} alt="GitHub" style={{ width: '32px', height: '32px' }} />
        </a>
        <a href="www.linkedin.com/in/piyush-khadka-chhetri-5516602b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn" style={{ marginLeft: '15px' }}>
          <img src={linkedinIcon} alt="LinkedIn" style={{ width: '32px', height: '32px' }} />
        </a>
      </div>
    </div>
  );
};

export default Contact;
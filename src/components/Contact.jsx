import React, { useState } from 'react'
import emailIcon from '../assets/icons/email.png'
import linkedinIcon from '../assets/icons/linkedin.png'
import instagramIcon from '../assets/icons/instagram.png'
import githubIcon from '../assets/icons/github.png'

const Contact = () => {
  const [showEmail, setShowEmail] = useState(false)
  const email = 'patrick@patrickquayle.com' // Your email address

  const revealEmail = () => {
    setShowEmail(!showEmail) // Toggle the visibility of the email address
  };

  return (
    <div className="contact-container">
      <div className="email-icon" onClick={revealEmail}>
        <img src={emailIcon} alt="Email" />
      </div>
      {showEmail && <p className='email-address'>{email}</p>}
      <a href="https://www.linkedin.com/in/patrick-quayle-33560513/" target="_blank" rel="noopener noreferrer">
        <div className="linkedin-icon">
          <img src={linkedinIcon} alt="LinkedIn" />
        </div>
      </a>
      <a href="https://www.instagram.com/patrickq2010/" target="_blank" rel="noopener noreferrer">
        <div className="insta-icon">
          <img src={instagramIcon} alt="Instagram" />
        </div>
      </a>
      <a href="https://github.com/patrickq2023" target="_blank" rel="noopener noreferrer">
        <div className="github-icon">
          <img src={githubIcon} alt="GitHub" />
        </div>
      </a>
    </div>
  );
};

export default Contact;

import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/your-github" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" /> GitHub
        </a> | 
        <a href="https://linkedin.com/in/your-linkedin" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" /> LinkedIn
        </a>
      </p>
    </footer>
  );
}

export default Footer;

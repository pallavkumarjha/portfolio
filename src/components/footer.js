import React from 'react';
import './footer.css';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <footer className="footer">
      <p>
        <a href="https://github.com/pallav-sh" target="_blank" rel="noopener noreferrer">
          <FaGithub className="icon" />
        </a>
        <a href="https://www.linkedin.com/in/pallavkumarjha/" target="_blank" rel="noopener noreferrer">
          <FaLinkedin className="icon" />
        </a>
      </p>
    </footer>
  );
}

export default Footer;

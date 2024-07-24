import React from 'react';
import './resume.css';
import { FaDownload } from 'react-icons/fa';

function Resume() {
  return (
    <section className="resume">
      <h2>My Professional Resume</h2>
      <a className="download-link" href="/path-to-your-resume.pdf" target="_blank" rel="noopener noreferrer">
        <FaDownload className="icon" /> Download Resume
      </a>
    </section>
  );
}

export default Resume;

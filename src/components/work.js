import React from 'react';
import './work.css';
import { FaBriefcase } from 'react-icons/fa';

function WorkExperience() {
  return (
    <section className="work-experience">
      <h2>Work Experience</h2>
      <ul>
        <li><FaBriefcase className="icon" /> Senior software engineer, Propertyguru technologies (2023 - Present)</li>
        <li><FaBriefcase className="icon" /> Software engineer, Walmart (2021 - 2023)</li>
        <li><FaBriefcase className="icon" /> Software engineer, Two point one (2020 - 2021)</li>
        <li><FaBriefcase className="icon" /> Frontend Developer, Simplified automation (2018 - 2020)</li>
      </ul>
    </section>
  );
}

export default WorkExperience;

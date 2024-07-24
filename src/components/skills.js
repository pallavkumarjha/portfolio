import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";


import { FcCode, FcDatabase, FcDataConfiguration, FcCommandLine, FcLock } from 'react-icons/fc'; // Importing appropriate icons
import './skills.css';

function Skills() {
  const skillList = [
    {
      title: 'Programming',
      description: 'Expert in HTML, CSS, JavaScript, and TypeScript.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
    },
    {
      title: 'Backend Development',
      description: 'Experienced with Node.js and SQL/NoSQL databases.',
      icon: <FaCss3Alt size={60} />,
      color: '#f28e2b', // Soft orange
    },
    {
      title: 'DevOps',
      description: 'Proficient in deployment and CI/CD pipelines.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
    },
    {
      title: 'Command Line',
      description: 'Comfortable with Unix/Linux command line tools.',
      icon: <FaCss3Alt size={60} />,
      color: '#f28e2b', // Soft orange
    },
    {
      title: 'Security',
      description: 'Strong understanding of authentication and authorization.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
    },
    // Add more skills here
  ];

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skillList.map((skill, index) => (
          <div className="skill-item" key={index} style={{ borderColor: skill.color }}>
            <div className="skill-icon" style={{ color: skill.color }}>
              {skill.icon}
            </div>
            <div className="skill-info">
              <h3>{skill.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Skills;

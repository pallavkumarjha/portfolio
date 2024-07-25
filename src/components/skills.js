import React from 'react';
import { IoLogoHtml5 } from "react-icons/io5";
import { FaCss3Alt } from "react-icons/fa";


import { FcCode, FcDatabase, FcDataConfiguration, FcCommandLine, FcLock } from 'react-icons/fc'; // Importing appropriate icons
import './skills.css';

function Skills() {
  const skillList = [
    {
      title: 'Reactjs',
      description: 'Proficient in front-end development with React.js.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 3
    },
    {
      title: 'Javascript',
      description: 'Strong understanding of JavaScript and TypeScript.',
      icon: <FaCss3Alt size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 3
    },
    {
      title: 'HTML/CSS',
      description: 'Strong knowledge of HTML and CSS.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 3
    },
    {
      title: 'React native',
      description: 'Experience with mobile app development using React Native.',
      icon: <FaCss3Alt size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 2
    },
    {
      title: 'Nodejs',
      description: 'Some knowledge of back-end development with Node.js.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 1
    },
    {
      title: 'CI/CD',
      description: 'Experience with CI/CD pipelines using Vercel and netlify.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 1
    },
    {
      title: 'Firebase',
      description: 'Experience with Firebase for authentication and database.',
      icon: <IoLogoHtml5 size={60} />,
      color: '#f28e2b', // Soft orange
      skillLevel: 3
    },
    // Add more skills here
  ];

  const getSkillColor = (skillLevel) => {
    switch (skillLevel) {
      case 1:
        return '#F5E8E9';
      case 2:
        return '#D8A7B1'; 
      case 3:
        return '#A8858F'; 
      default:
        return '#D8A7B1'; 
    }
  }

  return (
    <div className="skills">
      <h2>Skills</h2>
      <div className="skill-list">
        {skillList.map((skill, index) => (
          <div className="skill-item" key={index} style={{ borderColor: skill.color, backgroundColor: getSkillColor(skill.skillLevel)  }}>
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

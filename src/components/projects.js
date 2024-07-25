import React from 'react';
import { IconName } from "react-icons/fc";
import { FcHome } from "react-icons/fc";
import { FcServices } from "react-icons/fc";
import { FcGlobe } from "react-icons/fc";



// import { FaMotorcycle, FaCode, FaMapMarkerAlt } from 'react-icons/fa'; // Importing appropriate icons
import './projects.css';

function Projects() {
  const projectList = [
    {
      title: 'Social Media App for Motorcycle Trips',
      description: 'An app for planning, sharing, and joining motorcycle trips.',
      link: '#',
      icon: <FcGlobe size={60} color="#4CAF50" />, // Icon for motorcycle trips
    },
    {
      title: 'Sendhelper Project',
      description: 'Managed iOS, Android, and web parts using Node.js backend.',
      link: '#',
      icon: <FcServices size={60} color="#4CAF50" />, // Icon for code-related projects
    },
    {
      title: 'Should I read it?',
      description: 'Read the book summary before reading the actual book',
      link: 'https://shouldireadit.netlify.app/',
      icon: <FcHome size={60} color="#4CAF50" />, // Icon for map/place
    },
    // Add more projects here
  ];

  return (
    <div className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projectList.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-icon">{project.icon}</div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p>{project.description}</p>
              <a href={project.link} target="_blank" rel="noopener noreferrer">Visit website</a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Projects;

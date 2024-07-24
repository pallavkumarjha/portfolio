import React from 'react';
import './header.css';
// import profilePhoto from '../assets/profile-photo.jpg'; // Make sure you have a profile photo in the specified path

function Header() {

    const profilePhoto = 'https://media.licdn.com/dms/image/D5603AQFNoO9BCK-7HA/profile-displayphoto-shrink_400_400/0/1673324022475?e=1727308800&v=beta&t=Q6NrXcBKMyxh34C66SNTOwSCdEhm4SON1C3SfBrOip0'
    return (
        <header className="header">
          <div className="header-content">
            <div className="profile-section">
              <img src={profilePhoto} alt="Profile" className="profile-photo" />
              <div className="bio">
                <h1>Pallav's Portfolio</h1>
                <p>
                  Hi, I'm Pallav, a seasoned Frontend Developer with nearly 6 years of experience specializing in creating websites and apps. My expertise includes HTML, CSS, JavaScript, TypeScript, responsive design, cross-browser compatibility, frameworks like React, React Native, and NestJS, and DevOps experience deploying apps on platforms like Netlify, Vercel.
                </p>
              </div>
            </div>
          </div>
        </header>
      );
}

export default Header;

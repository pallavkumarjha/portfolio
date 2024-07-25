import React from 'react';
import './header.css';
import { FaLocationDot, FaGithub, FaLinkedin, FaSquareXTwitter, FaMedium, FaInstagram } from "react-icons/fa6";
import { FcDisclaimer } from "react-icons/fc";


function Header() {

    const profilePhoto = 'https://media.licdn.com/dms/image/D5603AQFNoO9BCK-7HA/profile-displayphoto-shrink_400_400/0/1673324022475?e=1727308800&v=beta&t=Q6NrXcBKMyxh34C66SNTOwSCdEhm4SON1C3SfBrOip0'
    return (
        <header className="header">
          <div className="header-content">
            <div className="profile-section">
              <img src={profilePhoto} alt="Profile" className="profile-photo" />
              <div className="bio">
                <h1>Pallav Jha</h1>
                <div>
                  <span className='location'><FaLocationDot /> Bengaluru
                  </span>
                  <span></span>
                </div>
                <p>
                  Hey there! I'm Pallav, a Frontend Developer making the web sparkle. I wrangle <strong>HTML, CSS, JavaScript, TypeScript, and React </strong> like a pro. When I'm not coding, I'm zooming around on my motorcycle, pretending to be the next big <strong>travel</strong> vlogger. Let's build something cool and swap some epic travel stories!
                </p>
              </div>
              <div className='social-media'>
                <a href='https://medium.com/@learning2learn' target='_blank' rel="noreferrer"><FaMedium /></a>
                <a href='https://github.com/pallav-sh' target='_blank' rel="noreferrer"><FaGithub /></a>
                <a href="https://www.linkedin.com/in/pallavkumarjha/" target='_blank' rel="noreferrer"><FaLinkedin /></a>
                <a href="https://x.com/the_visutor" target='_blank' rel="noreferrer"><FaSquareXTwitter /></a>
                <a href="https://www.instagram.com/pallav_jha26/" target='_blank' rel="noreferrer"><FaInstagram /></a>
              </div>
              <div className='disclaimer-section'>
                <FcDisclaimer /> : I'm not a travel vlogger. Yet. And this website is mostly <strong> made with AI-generated content </strong>. Mostly. With littttleeee bit of human intervention.
                <p className='updated-on'>Last updated : 25th Jul '24</p>
              </div>
            </div>
          </div>
        </header>
      );
}

export default Header;

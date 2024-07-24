import React from 'react';
import './hobbies.css';
import { FaPlane, FaBook, FaPenFancy, FaBicycle } from "react-icons/fa";

function Hobbies() {
  return (
    <section className="hobbies">
      <h2>Explore My Passions!</h2>
      <div className="hobbies-grid">
        <div className="hobby-item">
          <FaPlane />
          <span>Traveling</span>
        </div>
        <div className="hobby-item">
          <FaBook />
          <span>Reading</span>
        </div>
        <div className="hobby-item">
          <FaPenFancy />
          <span>Writing</span>
        </div>
        <div className="hobby-item">
          <FaBicycle />
          <span>Biking</span>
        </div>
      </div>
    </section>
  );
}

export default Hobbies;

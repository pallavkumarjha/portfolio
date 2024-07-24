import React from 'react';
// import Navbar from './components/navbar';
import Header from './components/header';
import Footer from './components/footer';
import Projects from './components/projects';
import Skills from './components/skills';
import Hobbies from './components/hobbies';
import Education from './components/education';
import WorkExperience from './components/work';
import Certifications from './components/certification';
import Contact from './components/contact';
import Resume from './components/resume';
import './App.css';

function App() {
  return (
    <div className="App">
        {/* <Navbar /> */}
        <Header />
        <Projects />
        <Skills />
        <Hobbies />
        <Education />
        <WorkExperience />
        {/* <Certifications /> */}
        <Contact />
        <Resume />
        <Footer />
      </div>
  );
}

export default App;

import React from 'react';
import profileImage from '../assets/profileImage.jpeg';
import './about.css';

const About: React.FC = () => {
  return (
    <section id="about">
        <h2> / about me</h2>
        <div className="about-me-content">
          <p> i like cats and lando norris</p>
          <img src={profileImage} />
        </div>
        

    </section>
  );
};

export default About;
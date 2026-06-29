import React from 'react';
import chef from '../assets/chef.jpg';
import './About.css';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-image">
          <img src={chef} alt="Chef" />
        </div>
        <div className="about-text">
          <h2>About Us</h2>
          <p>
            Bella Vista is a family-owned Italian restaurant with over 20 years of experience.
            Our recipes are passed down through generations, using only the freshest ingredients.
          </p>
          <button className="btn">Learn More</button>
        </div>
      </div>
    </section>
  );
}

export default About;  // <-- هذا السطر هو المهم
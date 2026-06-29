import React from 'react';
import heroImage from '../assets/hero.png';
import './Hero.css';

function Hero() {
  const scrollToMenu = () => {
    document.getElementById('menu').scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section id="hero" className="hero">
      <img src={heroImage} alt="Bella Vista" className="hero-image" />
      <div className="hero-content">
        <h1>Welcome to Bella Vista</h1>
        <p>Authentic Italian cuisine in an elegant setting</p>
        <button className="btn" onClick={scrollToMenu}>View Menu</button>
      </div>
    </section>
  );
}

export default Hero;
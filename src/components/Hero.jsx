import React from 'react';
import './Hero.css';
import video from ".//video.mp4";

const Hero = () => {
  return (
    <section className="hero">
      <video autoPlay loop muted className="video">
        <source src={video} type="video/mp4"/>
      </video>
      <div className="hero-content">
        <h1><span className="titleSpan">SacredSteps</span> - Your Guide to Pilgrimage and Spiritual Journeys</h1>
        <p>Discover holy sites and enrich your spiritual journey.</p>
      </div>
    </section>
  );
}

export default Hero;

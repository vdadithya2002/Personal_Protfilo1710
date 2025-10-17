import React from "react";
import "./Hero.css";

function Hero() {
  return (
    <section className="hero">
      <div className="hero-content">
        <h1>Hi, I'm <span>Aditya</span></h1>
        <p>Aspiring Machine Learning Engineer & Android Developer</p>
        <a href="#projects" className="btn">View My Work</a>
      </div>
    </section>
  );
}

export default Hero;


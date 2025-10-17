import React from "react";
import "./Projects.css";

function Projects() {
  const projects = [
    {
      title: "30 Days of Fitness App",
      description: "A Jetpack Compose Android app featuring daily fitness tips.",
      link: "#"
    },
    {
      title: "AncientView",
      description: "A computer vision project to recognize and translate old inscriptions.",
      link: "#"
    },
    {
      title: "IPL 2025 Predictor",
      description: "Monte Carlo-based IPL simulation using machine learning probabilities.",
      link: "#"
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>Projects</h2>
      <div className="project-list">
        {projects.map((p, i) => (
          <div className="project-card" key={i}>
            <h3>{p.title}</h3>
            <p>{p.description}</p>
            <a href={p.link} className="btn">View</a>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

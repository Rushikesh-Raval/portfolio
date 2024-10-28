import React from "react";
import "./Projects.css";

const Projects = () => {
  return (
    <div className="projects" id="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {/* Project 1 */}
        <div className="project-card">
          <img
            src="https://picsum.photos/400/300?random=1"
            alt="Chat Application"
          />
          <div className="project-info">
            <h3>Chat Application</h3>
            <p>A real-time chat application built using MERN stack.</p>
          </div>
        </div>

        {/* Project 2 */}
        <div className="project-card">
          <img
            src="https://picsum.photos/400/300?random=2"
            alt="E-Commerce App"
          />
          <div className="project-info">
            <h3>E-Commerce App</h3>
            <p>
              A full-fledged e-commerce application with a user-friendly
              interface.
            </p>
          </div>
        </div>

        {/* Project 3 */}
        <div className="project-card">
          <img
            src="https://picsum.photos/400/300?random=3"
            alt="Portfolio Website"
          />
          <div className="project-info">
            <h3>Restaurent Management App</h3>
            <p>A application that keeps log of everything in restaurent</p>
          </div>
        </div>

        {/* Project 4 */}
        <div className="project-card">
          <img
            src="https://picsum.photos/400/300?random=4"
            alt="Task Manager"
          />
          <div className="project-info">
            <h3>Store Inventory Management App</h3>
            <p>Keeps book of all the inventory aspects</p>
          </div>
        </div>

        {/* Project 5 */}
        <div className="project-card">
          <img src="https://picsum.photos/400/300?random=5" alt="Weather App" />
          <div className="project-info">
            <h3>Weather App</h3>
            <p>A weather forecasting app providing real-time updates.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;

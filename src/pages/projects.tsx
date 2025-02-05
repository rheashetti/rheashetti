import React from 'react';
import './projects.css';

const Projects: React.FC = () => {

    return (
        <section id="projects">
            <h2> / projects</h2>
            <div className="project-container">
                <div className="project-item">
                    <h3>MediTracker</h3>
                    <p>Project description</p>
                    <a href="Link">Link to Devpost</a>
                </div>
                <div className="project-item">
                    <h3>PetrPlanner</h3>
                    <p>Project description</p>
                    <a href="Link">Link to Devpost</a>
                </div>
            </div>
        </section>
    )

};

export default Projects;
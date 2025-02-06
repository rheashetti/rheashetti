import React from 'react';
import './projects.css';

const Projects: React.FC = () => {

    return (
        <section id="projects">
            <h2> / projects</h2>
            <div className="project-container">
                <div className="project-item">
                    <h3>MediTracker</h3>
                    <p>Medication errors are among the leading causes of preventable harm in healthcare. From missed doses to dangerous drug interactions, these errors often stem from challenges in medication management. That’s why we created MediTracker, a medication tracker designed to prioritize patient safety and put users in control of their health.</p>
                    <a href="Link">Link to Devpost</a>
                </div>
                <div className="project-item">
                    <h3>PetrPlanner</h3>
                    <p>PetrPlanner extracts real-time course data from the UCI catalog and various API's to compile a sorted list of courses to take in order to complete the lower-division requirements of a B.S. in Computer Science. It displays lecture sections only, sorted based on "desirable" qualities such as a professor's RMP rating, the historic average gpa in the class, class difficulty, and more.</p>
                    <a href="Link">Link to Devpost</a>
                </div>
            </div>
        </section>
    )

};

export default Projects;
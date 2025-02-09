import React, { useEffect, useRef } from 'react';
import './projects.css';

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);
        
    useEffect(() => {
    const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
              } else {
                  entry.target.classList.remove('visible');
              }
            });
    },
    { threshold: 0.1 }
    );

    if (sectionRef.current) {
        observer.observe(sectionRef.current);
    }

    return () => {
        if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
        }
    }
    }, []);

    return (
        <section id="projects" ref={sectionRef} className="section">
            <h2> / projects</h2>
            <div className="project-container">
                <div className="project-item">
                    <h3>MediTracker</h3>
                    <p>Medication errors are among the leading causes of preventable harm in healthcare. From missed doses to dangerous drug interactions, these errors often stem from challenges in medication management. That’s why we created MediTracker, a medication tracker designed to prioritize patient safety and put users in control of their health.</p>
                </div>
                <div className="project-item">
                    <h3>PetrPlanner</h3>
                    <p>PetrPlanner extracts real-time course data from the UCI catalog and various API's to compile a sorted list of courses to take in order to complete the lower-division requirements of a B.S. in Computer Science. It displays lecture sections only, sorted based on "desirable" qualities such as a professor's RMP rating, the historic average gpa in the class, class difficulty, and more.</p>
                </div>
            </div>
        </section>
    )

};

export default Projects;
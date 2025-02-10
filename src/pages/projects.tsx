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
                    <p>A full-stack medication management app that provides users with a personalized medication schedule and a comprehensive medicine library. By integrating AI-powered insights using Gemini AI and APIs from the National Library of Medicine, the app offers safety warnings for incompatible medications.</p>
                    <div className="project-tag">
                        <p>Python (Flask)</p>
                        <p>React.js</p>
                        <p>Google Firebase</p>
                        <p>Gemini AI</p>
                        <p>Git</p>
                        <p>CSS</p>
                    </div>
                </div>
                <div className="project-item">
                    <h3>PetrPlanner</h3>
                    <p>A web app that helps UCI students generate personalized academic plans. By pulling real-time data from the UC Irvine catalogue, RateMyProfessor, and PeterPortal APIs, PetrPlanner uses an algorithm to rank courses based on factors like professor ratings and GPA averages, helping students create their ideal schedules.</p>
                    <div className="project-tag">
                        <p>Python (Flask, Pandas)</p>
                        <p>React.js</p>
                        <p>SQL</p>
                        <p>Git</p>
                        <p>CSS</p>
                        <p>HTML</p>
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Projects;
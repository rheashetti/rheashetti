import React, { useEffect, useRef } from 'react';
import './projects.css';

interface Project {
    title: string;
    description: string;
    tags: string[];
    githubLink: string;
    videoLink?: string;
}

const Projects: React.FC = () => {
    const sectionRef = useRef<HTMLDivElement>(null);

    const projectsData: Project[] = [
        {
            title: 'mentHER',
            description: 'A web application designed to connect women in tech to mentors through a smart recommendation system that matches users based on shared goals, interests, and preferences collected at sign-up. The platform automates the matching process to foster more meaningful and impactful mentorship connections.',
            tags: ['Python (Flask)', 'Next.js', 'Tailwind CSS', 'Google Firebase', 'Git'],
            githubLink: 'https://devpost.com/software/menther-kdh190',
            videoLink: '1r7QIvps1gouo3n8bF7vWTtYkKpSmLJYH'
        },
        {
            title: 'VR Cat Cafe',
            description: 'A virtual reality project offering an immersive and relaxing virtual experience developed using Unity. The simulation focuses on user interaction, ambient audio, and dynamic lighting to create a cozy and engaging café environment filled with playful virtual cats. The project explores key concepts in virtual reality development, including spatial design, intuitive interaction mechanics, and sensory immersion.',
            tags: ['Unity', 'C#'],
            githubLink: 'https://github.com/sharbearl/CS118_VR_Project',
            videoLink: '1MxYipv0Q08XbbASpnhq65h0PhksVLNhg'
        },
        {
            title: 'MediTracker',
            description: 'A full-stack medication management app that provides users with a personalized medication schedule and a comprehensive medicine library. By integrating AI-powered insights using Gemini AI and APIs from the National Library of Medicine, the app offers safety warnings for incompatible medications.',
            tags: ['Python (Flask)', 'React.js', 'Google Firebase', 'Gemini AI', 'Git', 'CSS'],
            githubLink: 'https://devpost.com/software/meditracker'
        },
        {
            title: 'PetrPlanner',
            description: 'A web app that helps UCI students generate personalized academic plans. By pulling real-time data from the UC Irvine catalogue, RateMyProfessor, and PeterPortal APIs, PetrPlanner uses an algorithm to rank courses based on factors like professor ratings and GPA averages, helping students create their ideal schedules.',
            tags: ['Python (Flask, Pandas)', 'React.js', 'SQL', 'Git', 'CSS', 'HTML'],
            githubLink: 'https://github.com/rheashetti/PetrPlanner'
        }
    ];
        
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
                {projectsData.map((project) => (
                    <div 
                        key={project.title}
                        className="project-item"
                        onClick={() => window.open(project.githubLink, '_blank')}
                        style={{ cursor: 'pointer' }}
                    >
                        <h3>{project.title}</h3>
                        <p>{project.description}</p>
                        <div className="project-tag">
                            {project.tags.map((tag) => (
                                <p key={tag}>{tag}</p>
                            ))}
                        </div>
                        {project.videoLink && (
                            <iframe
                                width="100%"
                                src={`https://drive.google.com/file/d/${project.videoLink}/preview`}
                                title={project.title}
                                frameBorder="0"
                                allow="autoplay"
                                style={{ marginTop: '40px', marginBottom: '20px', borderRadius: '12px', aspectRatio: '16/9', minHeight: '300px' }}
                            />
                        )}
                    </div>
                ))}
            </div>
        </section>
    )

};

export default Projects;
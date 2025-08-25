import React, { useEffect, useRef } from 'react';
import profileImage from '../assets/profileImage.jpeg';
import './about.css';

const About: React.FC = () => {
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
      { threshold: 0.3 }
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
    <section id="about" ref={sectionRef} className="section">
        <h2> / about me</h2>
        <div className="about-me-content">
          <p> As a junior at UCI, I’ve developed a solid foundation in programming languages such as Python, C++, and Java. I’m always seeking opportunities to learn, and these experiences have allowed me to explore a range of tools and frameworks. One of my key achievements is earning my AWS Developer Associate certification, which deepened my understanding of cloud computing and the tools that power modern, scalable applications. I’m driven by the desire to continue learning and growing in the tech field, and I’m excited to see how I can contribute to the world of technology through coding and innovation. When I’m not coding, I enjoy running and watching Formula One! </p>
          <img src={profileImage} />
        </div>
        

    </section>
  );
};

export default About;
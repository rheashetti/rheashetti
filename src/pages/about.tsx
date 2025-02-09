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
          <p> I’m current a 2nd year Computer Science student at UC Irvine. I’m passionate about full-stack development and solving real-life problems through technology. I have experience in developing from front to backend and recently earned the AWS Developer Associate certification. Outside of coding, I love to run and watch Formula One racing (I’m the biggest Lando Norris fan)!</p>
          <img src={profileImage} />
        </div>
        

    </section>
  );
};

export default About;
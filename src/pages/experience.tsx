import React from 'react';
import { useState , useEffect, useRef } from 'react';
import './experience.css';

const Experience : React.FC = () => {
    const [activeTab, setActiveTab] = useState('wics');
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
        <section id="experience" ref={sectionRef} className="section">
            <h2> / experience</h2>
            <div className="experience-content">
                <div className="rounded-container">
                    <div className="file-container">
                        <button 
                            className={`file-button ${activeTab === "wics" ? "active" : ""}`}
                            onClick={() => setActiveTab("wics")}
                        >
                            WICS at UCI
                        </button>
                        <button 
                            className={`file-button ${activeTab === "pinterest-engage" ? "active" : ""}`}
                            onClick={() => setActiveTab("pinterest-engage")}
                        >
                            Pinterest Engage
                        </button>
                        <button 
                            className={`file-button ${activeTab === "mongodb-wics-summit" ? "active" : ""}`}
                            onClick={() => setActiveTab("mongodb-wics-summit")}
                        >
                            MongoDB WiCS Summit
                        </button>
                    </div>
                    <div className={`file-content ${activeTab}`}>
                        {activeTab === "pinterest-engage" ? (
                            <p> As one of Pinterest's 30 Engage Scholars, I have the invaluable opportunity to learn from Pinterest employees and recruiters about working as a Software Engineer. This year-long program focuses on enhancing my technical, interview, and professional skills, while also providing mentorship and networking opportunities. Designed to promote diversity in Computer Science, Engage empowers scholars from underrepresented backgrounds to grow and thrive in tech. I look forward to developing my skills, connecting with industry professionals, and gaining insights that will shape my future career.</p> 
                        ) : activeTab === "wics" ? (
                            <p> Coming into UCI, I knew I wanted to be a part of WiCS because of their outreach program, which works with elementary to high school students to spark their passion for technology. In high school, I tutored students and wanted to continue that in college, especially since I would have benefited from connecting with other women in computer science when I first started taking CS classes. I began as a general member, attending weekly meetings, and eventually became a mentor for two first-year students. This year, I joined the Community Outreach committee, where I help organize workshops in web and mobile development for younger students. This has been one of the most rewarding experiences of my college journey so far—being able to share my path to a strong CS program has been valuable to others, and I hope to inspire them to continue pursuing their passion for technology. </p>
                        ) : (
                            <p>
                                In May 2025, I had the opportunity to attend MongoDB's Women in Computer Science Summit, a conference dedicated to empowering women in computer science through technical workshops, networking sessions, and inspiring talks from industry leaders. The summit provided hands-on experience with MongoDB technologies and offered valuable insights into database management, cloud solutions, and career development. Connecting with other passionate women in tech and learning from MongoDB engineers was an incredible opportunity that broadened my perspective and strengthened my commitment to diversity and innovation in the field of technology.
                            </p>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Experience;
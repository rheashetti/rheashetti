import React from 'react';
import { useState } from 'react';
import './experience.css';

const Experience : React.FC = () => {
    const [activeTab, setActiveTab] = useState('pinterest-engage');

    return (
        <section id="experience">
            <h2> / experience</h2>
            <div className="experience-content">
                <div className="rounded-container">
                    <div className="file-container">
                        <button 
                            className={`file-button ${activeTab === "pinterest-engage" ? "active" : ""}`}
                            onClick={() => setActiveTab("pinterest-engage")}
                        >
                            Pinterest Engage
                        </button>
                        <button 
                            className={`file-button ${activeTab === "wics" ? "active" : ""}`}
                            onClick={() => setActiveTab("wics")}
                        >
                            Women in Information & Computer Sciences
                        </button>
                    </div>
                    <div className={`file-content ${activeTab}`}>
                        {activeTab === "pinterest-engage" ? (
                            <p> As one of Pinterest's 30 Engage Scholars, I have the invaluable opportunity to learn from Pinterest employees and recruiters about working as a Software Engineer. This year-long program focuses on enhancing my technical, interview, and professional skills, while also providing mentorship and networking opportunities. Designed to promote diversity in Computer Science, Engage empowers scholars from underrepresented backgrounds to grow and thrive in tech. I look forward to developing my skills, connecting with industry professionals, and gaining insights that will shape my future career.</p> ) : (
                            <p> stuff about wics </p>
                        )
                        }
                    </div>
                </div>
            </div>
        </section>
    )

};

export default Experience;
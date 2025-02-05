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
                            <p> stuff about pinterst engage </p>
                        ) : (
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
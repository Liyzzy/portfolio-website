"use client";

import { experience } from "@/data/portfolio-data";

export default function Experience() {
    return (
        <section id="experience" className="section experience-section">
            <div className="container">
                <h2 className="section-title">Experience</h2>
                <p className="section-subtitle">
                    My professional journey and contributions
                </p>
                <div className="experience-timeline">
                    {experience.map((exp, index) => (
                        <div
                            key={exp.id}
                            className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}
                        >
                            <div className="timeline-content">
                                <div className="timeline-badge">
                                    {exp.type === "freelance" ? (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 7h-9"></path>
                                            <path d="M14 17H5"></path>
                                            <circle cx="17" cy="17" r="3"></circle>
                                            <circle cx="7" cy="7" r="3"></circle>
                                        </svg>
                                    ) : (
                                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"></path>
                                            <circle cx="9" cy="7" r="4"></circle>
                                            <path d="M23 21v-2a4 4 0 0 0-3-3.87"></path>
                                            <path d="M16 3.13a4 4 0 0 1 0 7.75"></path>
                                        </svg>
                                    )}
                                </div>
                                <span className={`experience-type ${exp.type}`}>
                                    {exp.type === "freelance" ? "Freelance" : "Volunteer"}
                                </span>
                                <h3 className="experience-title">{exp.title}</h3>
                                <h4 className="experience-company">{exp.company}</h4>
                                <span className="experience-period">{exp.period}</span>
                                <p className="experience-description">{exp.description}</p>
                                {exp.achievements && (
                                    <ul className="experience-achievements">
                                        {exp.achievements.map((achievement, i) => (
                                            <li key={i}>{achievement}</li>
                                        ))}
                                    </ul>
                                )}
                            </div>
                        </div>
                    ))}
                </div>

                {/* How to add more */}
    
            </div>
        </section>
    );
}

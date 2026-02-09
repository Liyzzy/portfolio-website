"use client";

import { useState } from "react";
import Image from "next/image";
import { achievements } from "@/data/portfolio-data";

export default function Achievements() {
    const [selectedCert, setSelectedCert] = useState<typeof achievements[0] | null>(null);

    return (
        <section id="achievements" className="section achievements-section">
            <div className="container">
                <h2 className="section-title">Achievements & Certifications</h2>
                <p className="section-subtitle">
                    Professional certifications and accomplishments
                </p>
                <div className="achievements-grid">
                    {achievements.map((achievement) => (
                        <div
                            key={achievement.id}
                            className="achievement-card"
                            onClick={() => setSelectedCert(achievement)}
                        >
                            <div className="achievement-image-wrapper">
                                <Image
                                    src={achievement.image}
                                    alt={achievement.title}
                                    width={300}
                                    height={200}
                                    className="achievement-image"
                                />
                                <div className="achievement-overlay">
                                    <span className="view-certificate">View Certificate</span>
                                </div>
                            </div>
                            <div className="achievement-content">
                                <h3 className="achievement-title">{achievement.title}</h3>
                                <p className="achievement-issuer">{achievement.issuer}</p>
                                <span className="achievement-date">{achievement.date}</span>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Modal for viewing certificate */}
                {selectedCert && (
                    <div className="cert-modal" onClick={() => setSelectedCert(null)}>
                        <div className="cert-modal-content" onClick={(e) => e.stopPropagation()}>
                            <button
                                className="cert-modal-close"
                                onClick={() => setSelectedCert(null)}
                                aria-label="Close modal"
                            >
                                ×
                            </button>
                            <Image
                                src={selectedCert.image}
                                alt={selectedCert.title}
                                width={800}
                                height={600}
                                className="cert-modal-image"
                            />
                            <div className="cert-modal-info">
                                <h3>{selectedCert.title}</h3>
                                <p>Issued by {selectedCert.issuer} • {selectedCert.date}</p>
                                {selectedCert.credentialUrl && (
                                    <a
                                        href={selectedCert.credentialUrl}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="btn btn-primary"
                                    >
                                        Verify Credential
                                    </a>
                                )}
                            </div>
                        </div>
                    </div>
                )}

                {/* How to add more */}
            </div>
        </section>
    );
}

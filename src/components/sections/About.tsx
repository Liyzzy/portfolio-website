"use client";

import Image from "next/image";
import { personalInfo } from "@/data/portfolio-data";

export default function About() {
    return (
        <section id="about" className="section about-section">
            <div className="container">
                <h2 className="section-title">About Me</h2>
                <div className="about-content">
                    <div className="about-image-wrapper">
                        <div className="about-image-container">
                            {/* Replace /profile.jpg with your actual profile image */}
                            <Image
                                src={personalInfo.profileImage}
                                alt="Profile"
                                width={300}
                                height={300}
                                className="about-image"
                                priority
                            />
                        </div>
                        <div className="about-image-decoration"></div>
                    </div>
                    <div className="about-text">
                        <h3 className="about-subtitle">Who am I?</h3>
                        <div className="about-bio">
                            {personalInfo.bio.split('\n\n').map((paragraph, index) => (
                                <p key={index}>{paragraph}</p>
                            ))}
                        </div>
                        <div className="about-info">
                            <div className="info-item">
                                <span className="info-label">Location:</span>
                                <span className="info-value">{personalInfo.location}</span>
                            </div>
                            <div className="info-item">
                                <span className="info-label">Email:</span>
                                <span className="info-value">{personalInfo.email}</span>
                            </div>
                        </div>
                        <a href="#contact" className="btn btn-primary">
                            Let&apos;s Connect
                        </a>
                    </div>
                </div>
            </div>
        </section>
    );
}

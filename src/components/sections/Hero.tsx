"use client";

import dynamic from "next/dynamic";
import { personalInfo } from "@/data/portfolio-data";

const Scene3D = dynamic(() => import("@/components/Scene3D"), { ssr: false });

export default function Hero() {
    return (
        <section id="home" className="hero-section">
            <div className="hero-container">
                {/* Left side - Text content */}
                <div className="hero-content">
                    <div className="hero-text">
                        <p className="hero-greeting">Hello, I&apos;m</p>
                        <h1 className="hero-name">{personalInfo.name}</h1>
                        <h2 className="hero-title">{personalInfo.title}</h2>
                        <p className="hero-tagline">{personalInfo.tagline}</p>
                        <div className="hero-buttons">
                            <a href="#projects" className="btn btn-primary">
                                View My Work
                            </a>
                            <a href="#contact" className="btn btn-secondary">
                                Get In Touch
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right side - 3D Scene */}
                <div className="hero-3d">
                    <Scene3D />
                </div>
            </div>

            {/* Centered scroll indicator */}
            <div className="scroll-indicator">
                <div className="mouse">
                    <div className="wheel"></div>
                </div>
                <p>Scroll Down</p>
            </div>
        </section>
    );
}

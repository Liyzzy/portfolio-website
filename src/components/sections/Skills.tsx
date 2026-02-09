"use client";

import { skills } from "@/data/portfolio-data";

const skillIcons: { [key: string]: string } = {
    JavaScript: "🟨",
    TypeScript: "🔷",
    Python: "🐍",
    Java: "☕",
    "C++": "⚡",
    React: "⚛️",
    "Next.js": "▲",
    "Vue.js": "💚",
    HTML5: "🌐",
    CSS3: "🎨",
    "Tailwind CSS": "💨",
    "Node.js": "💚",
    Express: "🚂",
    Django: "🎸",
    FastAPI: "⚡",
    "Spring Boot": "🍃",
    PostgreSQL: "🐘",
    MongoDB: "🍃",
    MySQL: "🐬",
    Redis: "🔴",
    Git: "📦",
    Docker: "🐳",
    AWS: "☁️",
    Firebase: "🔥",
    Figma: "🎨",
    "VS Code": "💻",
    "REST APIs": "🔌",
    GraphQL: "◼️",
    "CI/CD": "🔄",
    Agile: "🏃",
    Testing: "✅",
};

export default function Skills() {
    const skillCategories = [
        { name: "Languages", items: skills.languages, color: "#8b5cf6" },
        { name: "Frontend", items: skills.frontend, color: "#06b6d4" },
        { name: "Backend", items: skills.backend, color: "#10b981" },
        { name: "Databases", items: skills.databases, color: "#f59e0b" },
        { name: "Tools", items: skills.tools, color: "#ec4899" },
        { name: "Other", items: skills.other, color: "#6366f1" },
    ];

    return (
        <section id="skills" className="section skills-section">
            <div className="container">
                <h2 className="section-title">Skills & Technologies</h2>
                <p className="section-subtitle">
                    Technologies and tools I work with
                </p>
                <div className="skills-grid">
                    {skillCategories.map((category) => (
                        <div key={category.name} className="skill-category">
                            <h3 className="skill-category-title" style={{ borderColor: category.color }}>
                                {category.name}
                            </h3>
                            <div className="skill-items">
                                {category.items.map((skill) => (
                                    <div key={skill} className="skill-item">
                                        <span className="skill-icon">{skillIcons[skill] || "💡"}</span>
                                        <span className="skill-name">{skill}</span>
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}

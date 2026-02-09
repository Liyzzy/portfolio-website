// Portfolio Data Configuration
// Edit this file to update your portfolio content

export const personalInfo = {
    name: "Iyzman Daniel",
    title: "Computer Science Student",
    tagline: "Passionate in Software Development, Artificial Intelligence and Quantum Computing",
    bio: `I’m a software developer passionate about AI and machine learning, with particular interest in quantum machine learning. I focus on building clean, maintainable systems while exploring how quantum computing can enhance classical learning models and computational efficiency.`,
    profileImage: "/profile.jpg", // Add your profile image to public/profile.jpg
    email: "danieliyzman@gmail.com",
    phone: "+60 14 699 2664",
    linkedin: "https://www.linkedin.com/in/iyzman-daniel-a8ab25255/",
    github: "https://github.com/Liyzzy",
    location: "Sabah, Malaysia",
};

export const projects = [
    {
        id: 1,
        title: "Quantum Machine Learning Research",
        description: "A research study benchmarking the generalization performance of Quantum Support Vector Machines (QSVM) against Classical SVMs using Python and Qiskit.",
        image: "/projects/project1.jpeg",
        technologies: ["Python", "Qiskit", "Qiskit-Aer", "Qiskit-Machine-Learning", "Pandas", "Numpy", "Matplotlib"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project1",
    },
    {
        id: 2,
        title: "Real-time Drowsiness and Yawning Detection System",
        description: "Machine learning dashboard that provides predictive insights and data visualization for business intelligence.",
        image: "/projects/project2.jpg",
        technologies: ["OpenCV", "Python", "Scipy", "dlib"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project2",
    },
    {
        id: 3,
        title: "High-School Co-curriculum Management System",
        description: "Secure mobile banking application with biometric authentication and real-time transaction tracking.",
        image: "/projects/project3.png",
        technologies: ["PHP", "XAMPP", "Javascript", "Bootstrap", "MySQL"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project3",
    },
    {
        id: 4,
        title: "Online Shopping Website",
        description: "Full-stack e-commerce platform built with native PHP and MySQL, featuring a responsive storefront, shopping cart system, and an admin dashboard for inventory management.",
        image: "/projects/project4.png",
        technologies: ["PHP", "MySQL", "Bootstrap3", "Javascript", "JQuery"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project3",
    },
    {
        id: 5,
        title: "AI Medical Scribe",
        description: "Hackathon Project - Developed an AI Medical Scribe web application that converts clinical conversations into structured SOAP notes, enhancing documentation efficiency and supporting organized patient record management.",
        image: "/projects/project5.jpg",
        technologies: ["Python", "RAG", "Gemini"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project3",
    },
    {
        id: 6,
        title: "BarnaClean - AI Biofueling Prevention System",
        description: "Hackathon Project - Developed an AI Biofueling Prevention System, a technology-driven sustainability project aimed at tackling marine environmental issues while promoting ESG awareness and responsible innovation.",
        image: "/projects/project6_2.png",
        technologies: ["Python", "Scikit-Learn", "React", "Node.js", "MongoDB", "Tailwind CSS"],
        liveUrl: "https://example.com",
        githubUrl: "https://github.com/yourusername/project3",
    },

];

export const skills = {
    languages: ["Python", "Java", "PHP", "C++", "Javascript"],
    frontend: ["Next.js", "Three.js", "HTML5", "CSS3", "Bootstrap"],
    backend: ["Node.js", "FastAPI", "Spring Boot"],
    databases: ["MySQL"],
    tools: ["Qiskit", "Qiskit-Aer", "Qiskit-Machine-Learning", "Pandas", "Numpy", "Matplotlib", "Git", "Microsoft Azure", "Firebase", "Figma", "VS Code"],
    other: ["REST APIs", "CI/CD", "Agile", "Testing"],
};

export const experience = [
    {
        id: 1,
        title: "Freelance Web Developer",
        company: "Self-Employed",
        period: "July 2022 - October 2022",
        description: "Developed a custom web applications for Maktab Sabah High School for their co-curriculum management system.",
        type: "freelance", // "freelance" or "volunteer"
        achievements: [
            "Collaborated with SM Maktab Sabah",
            "Specialized in PHP, MySQL, Javascript, Bootstrap",
            "Improved data organization by implementing efficient attendance tracking, co-curriculum registration management, and reporting features."
        ],
    },
    {
        id: 2,
        title: "Techlympics Volunteer",
        company: "Local Community Center",
        period: "Sept 2024 & Aug 2025",
        description: "Assisted in organizing and facilitating the Techlympics event, guiding high school students in building and programming line-following robot cars and drones.",
        type: "volunteer",
        achievements: [
            "Provided technical mentoring, fostering students' interest and skill development in robotics and programming.",
            "Learn new technologies on the spot and mastered by teaching young students"
            
        ],
    },
    // Add more experience entries following the same format
    {
        id: 3,
        title: "ZUS Coffee Volunteer",
        company: "Local Community Center",
        period: "Sept 2026",
        description: "Provided technical support for community events.",
        type: "volunteer",
        achievements: [
            "Coordinated with team members to manage assigned booth responsibilities efficiently",
            "Contributed to smooth event operations through teamwork, communication, and customer engagement",
        ],
    },
];

export const achievements = [
    {
        id: 1,
        title: "IBM Basics Of Quantum Information",
        issuer: "IBM",
        date: "Aug 2025",
        image: "/certificates/cert1.png", // Add your certificate image
        credentialUrl: "https://www.credly.com/badges/bacad55f-0211-478e-9cdc-5752aa331bab/public_url",
    },
    {
        id: 2,
        title: "IBM Quantum Machine Learning",
        issuer: "IBM",
        date: "Sept 2025",
        image: "/certificates/cert2.png", // Add your certificate image
        credentialUrl: "https://www.credly.com/badges/a018f8fd-f91e-4f89-8b76-847b88782c3a/public_url",
    },
    // Add more certificates following the same format
    {
        id: 3,
        title: "CCNA: Introduction to Networks",
        issuer: "Cisco",
        date: "Sept 2023",
        image: "/certificates/cert3.png", // Add your certificate image
        credentialUrl: "https://www.credly.com/badges/bc837e46-4fe1-43aa-8291-6d1a1e9795b5/public_url",
    },
    {
        id: 4,
        title: "Cisco Junior Cybersecurity Analyst Career Path",
        issuer: "Cisco",
        date: "Jan 2026",
        image: "/certificates/cert4.png", // Add your certificate image
        credentialUrl: "https://www.credly.com/badges/7b6919c6-ec01-45c2-8c14-76c4b957bdb1/public_url",
    },
];

export const navLinks = [
    { name: "Home", href: "#home" },
    { name: "About", href: "#about" },
    { name: "Projects", href: "#projects" },
    { name: "Skills", href: "#skills" },
    { name: "Experience", href: "#experience" },
    { name: "Achievements", href: "#achievements" },
    { name: "Contact", href: "#contact" },
];

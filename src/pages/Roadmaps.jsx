



import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaPython, FaJava, FaCodeBranch, FaReact, FaDatabase, FaServer, FaCloud, FaRobot } from "react-icons/fa";
import { SiCplusplus, SiMongodb, SiTensorflow, SiKubernetes, SiTableau } from "react-icons/si";
import Footer from "../components/Footer";

const roadmaps = [
    {
        title: "Python",
        icon: <FaPython />,
        description: "Learn Python from basics to advanced concepts, including frameworks and applications.",
        steps: [
            "Learn Python Syntax and Basics",
            "Work with Data Structures & Algorithms",
            "Practice Object-Oriented Programming (OOP)",
            "Explore Web Development with Flask/Django",
            "Understand Database Integration",
            "Work with Automation and Scripting",
            "Introduction to AI & Data Science with Python"
        ]
    },
    {
        title: "Java",
        icon: <FaJava />,
        description: "Master Java from core concepts to enterprise-level applications.",
        steps: [
            "Learn Java Basics & OOP",
            "Understand Multithreading & Collections",
            "Work with JDBC & Databases",
            "Explore Spring Boot Framework",
            "Develop REST APIs",
            "Learn Java for Android (Optional)",
            "Understand Microservices & Deployment"
        ]
    },
    {
        title: "C++",
        icon: <SiCplusplus />,
        description: "Master C++ for system programming, game development, and competitive coding.",
        steps: [
            "Learn C++ Basics & Syntax",
            "Work with Pointers & Memory Management",
            "Practice STL & Algorithms",
            "Explore Object-Oriented Programming",
            "Understand Competitive Programming Techniques",
            "Learn Game Development with Unreal Engine (Optional)"
        ]
    },
    {
        title: "Frontend Development",
        icon: <FaReact />,
        description: "Learn to build interactive UI using modern frontend technologies.",
        steps: [
            "Master HTML, CSS, JavaScript",
            "Learn React.js / Vue.js / Angular",
            "Understand Responsive Design & CSS Frameworks",
            "State Management (Redux, Context API)",
            "Work with APIs & Backend Integration",
            "Deploy Websites using Netlify/Vercel"
        ]
    },
    {
        title: "Backend Development",
        icon: <FaServer />,
        description: "Learn how to build and manage server-side applications.",
        steps: [
            "Master Node.js / Django / Spring Boot",
            "Understand REST APIs & GraphQL",
            "Database Management (SQL & NoSQL)",
            "Authentication & Authorization",
            "Build Scalable Backend Services",
            "Deploy on Cloud (AWS, Heroku)"
        ]
    },
    {
        title: "Full Stack Development",
        icon: <FaCodeBranch />,
        description: "Become a complete web developer by mastering frontend & backend.",
        steps: [
            "Learn HTML, CSS, JavaScript, React.js",
            "Master Node.js / Express.js / Django",
            "Understand Databases (MongoDB, PostgreSQL)",
            "Build & Consume REST APIs",
            "Work with Authentication & Security",
            "Deploy Full Stack Apps"
        ]
    },
    {
        title: "Data Science",
        icon: <FaDatabase />,
        description: "Learn to work with data, analyze patterns, and build predictive models.",
        steps: [
            "Learn Python & Libraries (NumPy, Pandas)",
            "Understand Data Cleaning & Preprocessing",
            "Explore Machine Learning with Scikit-Learn",
            "Work with Deep Learning using TensorFlow/PyTorch",
            "Deploy AI Models with Flask/FastAPI",
            "Cloud Integration (AWS/GCP)"
        ]
    },
    {
        title: "Data Analyst",
        icon: <SiTableau />,
        description: "Analyze data and generate insights for business growth.",
        steps: [
            "Learn Excel & SQL",
            "Work with Python for Data Analysis",
            "Use Visualization Tools (Tableau, Power BI)",
            "Understand Business Intelligence",
            "Work with Big Data Tools (Hadoop, Spark)"
        ]
    },
    {
        title: "DevOps",
        icon: <SiKubernetes />,
        description: "Manage and deploy applications efficiently using DevOps practices.",
        steps: [
            "Understand Linux & Scripting",
            "Work with Docker & Kubernetes",
            "Automate CI/CD Pipelines (Jenkins, GitHub Actions)",
            "Infrastructure as Code (Terraform, Ansible)",
            "Monitor & Scale Applications",
            "Cloud Deployments (AWS, Azure)"
        ]
    },
    {
        title: "AI/ML",
        icon: <SiTensorflow />,
        description: "Learn AI & ML to build smart applications.",
        steps: [
            "Learn Python & ML Libraries",
            "Work with Supervised & Unsupervised Learning",
            "Deep Learning with TensorFlow & PyTorch",
            "Natural Language Processing (NLP)",
            "Deploy AI Models & Cloud Integration",
            "Work with Computer Vision"
        ]
    }
];

export default function Roadmaps() {
    const [selectedRoadmap, setSelectedRoadmap] = useState(null);

    return (
        <div className="min-h-screen flex flex-col bg-[#0f172a] text-[#E5E7EB]">
            
            {/* Gradient Heading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text">
                    🚀 IT Career Roadmaps
                </h1>

                {selectedRoadmap ? (
                    <div className="bg-[#1E293B]/80 backdrop-blur-lg text-[#E5E7EB] shadow-lg rounded-lg p-10 border border-gray-700 
                        transition hover:scale-105 hover:shadow-2xl hover:border-[#4F46E5]/50">

                        <button
                            onClick={() => setSelectedRoadmap(null)}
                            className="bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white font-bold py-2 px-4 rounded-lg
                            hover:from-[#3730A3] hover:to-[#7C3AED] transition mb-6">
                            🔙 Back
                        </button>

                        <h2 className="text-4xl font-bold flex items-center space-x-4">
                            {selectedRoadmap.icon}
                            <span>{selectedRoadmap.title}</span>
                        </h2>

                        <p className="text-gray-400 mt-4">{selectedRoadmap.description}</p>

                        <ul className="mt-8 space-y-4">
                            {selectedRoadmap.steps.map((step, index) => (
                                <li 
                                    key={index}
                                    className="bg-gray-700 p-4 rounded-lg text-gray-300 hover:bg-gray-600 transition">
                                    ⚡ {step}
                                </li>
                            ))}
                        </ul>
                    </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {roadmaps.map((roadmap, index) => (
                            <motion.div
                                key={index}
                                onClick={() => setSelectedRoadmap(roadmap)}
                                className="bg-[#1E293B]/80 backdrop-blur-lg text-[#E5E7EB] shadow-lg rounded-lg p-8 border border-gray-700
                                transition hover:scale-105 hover:shadow-2xl hover:border-[#4F46E5]/50 hover:bg-[#1E293B]/90 cursor-pointer"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="flex items-center space-x-4">
                                    <span className="text-4xl text-[#FACC15]">{roadmap.icon}</span>
                                    <h2 className="text-2xl font-semibold">{roadmap.title}</h2>
                                </div>
                                <p className="text-gray-400 mt-4">{roadmap.description}</p>
                            </motion.div>
                        ))}
                    </div>
                )}
            </div>
            <Footer/>
        </div>
    );
}

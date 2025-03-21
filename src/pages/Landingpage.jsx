import React from "react";
import { motion } from "framer-motion";
import { FaCode, FaRocket, FaLaptopCode } from "react-icons/fa";
import { useNavigate } from "react-router-dom"; 

export default function LandingPage() {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#0f172a] text-white flex flex-col items-center justify-center px-4 sm:px-8 md:px-12 lg:px-24">
            
            {/* Animated Header */}
            <motion.h1
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
                className="text-4xl sm:text-5xl md:text-6xl font-extrabold text-center bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text"
            >
                Welcome to <span className="text-[#FACC15]">Next Code Academy</span>
            </motion.h1>

            <motion.p
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 1.2 }}
                className="text-lg sm:text-xl text-gray-400 mt-6 max-w-3xl text-center leading-relaxed"
            >
                Empowering the next generation of coders with industry-ready skills.  
                Learn <strong>Full Stack Development, Data Science, AI/ML, and DevOps</strong> with real-world projects.  
            </motion.p>

            {/* Icon Section */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 mt-12 w-full max-w-6xl">
                
                {/* Full Stack */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center justify-center bg-[#1E293B] p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 transition hover:shadow-2xl"
                >
                    <FaCode className="text-5xl sm:text-6xl text-[#FACC15]" />
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">Full Stack Development</h3>
                    <p className="text-gray-400 text-sm mt-2 text-center">Learn MERN, Django, and more.</p>
                </motion.div>

                {/* AI/ML */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: -5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center justify-center bg-[#1E293B] p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 transition hover:shadow-2xl"
                >
                    <FaRocket className="text-5xl sm:text-6xl text-[#4F46E5]" />
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">AI & Machine Learning</h3>
                    <p className="text-gray-400 text-sm mt-2 text-center">Master AI with real-world projects.</p>
                </motion.div>

                {/* DevOps */}
                <motion.div
                    whileHover={{ scale: 1.1, rotate: 5 }}
                    whileTap={{ scale: 0.9 }}
                    className="flex flex-col items-center justify-center bg-[#1E293B] p-6 md:p-8 rounded-lg shadow-lg border border-gray-700 transition hover:shadow-2xl"
                >
                    <FaLaptopCode className="text-5xl sm:text-6xl text-[#9333EA]" />
                    <h3 className="text-lg sm:text-xl font-semibold mt-4">DevOps & Cloud</h3>
                    <p className="text-gray-400 text-sm mt-2 text-center">Deploy with AWS, Docker & Kubernetes.</p>
                </motion.div>
            </div>

            {/* Get Started Button */}
            <motion.button
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                className="mt-12 bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-white px-6 sm:px-8 py-3 rounded-lg text-lg font-semibold shadow-lg
                transition hover:from-[#3730A3] hover:to-[#7C3AED]"
                onClick={() => navigate("/home")} 
            >
                🚀 Let's Get Started
            </motion.button>

            {/* Footer */}
{/*             <footer className="text-center mt-12 text-gray-500 text-sm sm:text-base">
                <p>&copy; 2025 CodeNext | Empowering Coders 🚀</p>
            </footer> */}
        </div>
    );
}

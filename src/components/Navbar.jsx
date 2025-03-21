import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
    const navigate = useNavigate();
    const token = localStorage.getItem("adminToken");
    const [isOpen, setIsOpen] = useState(false);

    const handleLogout = () => {
        localStorage.removeItem("adminToken");
        navigate("/");
        setIsOpen(false);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <nav className="bg-[#0f172a] text-white shadow-md relative z-50">
            
            {/* Navbar Container */}
            <div className="container mx-auto flex justify-between items-center p-5">
                
                {/* Logo */}
                <Link to="/" className="text-3xl font-extrabold text-[#4F46E5]">
                    CodeInnovate
                </Link>

                {/* Mobile Menu Button */}
                <button
                    className="lg:hidden text-[#4F46E5] hover:text-[#9333EA] transition"
                    onClick={toggleMenu}
                >
                    {isOpen ? <FaTimes size={28} /> : <FaBars size={28} />}
                </button>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center space-x-8">
                    <Link to="/" className="text-gray-300 hover:text-[#9333EA] transition">Home</Link>
                    <Link to="/home" className="text-gray-300 hover:text-[#9333EA] transition">Job Posts</Link>
                    <Link to="/roadmaps" className="text-gray-300 hover:text-[#9333EA] transition">Roadmaps</Link>
                    <Link to="/careerpaths" className="text-gray-300 hover:text-[#9333EA] transition">Career Paths</Link>
                    <Link to='/leetcode' className="text-gray-300 hover:text-[#9333EA] transition">Problem Statements</Link>

                    {!token ? (
                        <button 
                            onClick={() => navigate("/admin")} 
                            className="bg-[#4F46E5] hover:bg-[#9333EA] px-4 py-2 rounded-lg text-white transition shadow-md">
                            Admin Login
                        </button>
                    ) : (
                        <>
                            <Link to="/dashboard" className="text-gray-300 hover:text-[#9333EA] transition">Dashboard</Link>
                            <button 
                                onClick={handleLogout} 
                                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white transition shadow-md">
                                Logout
                            </button>
                        </>
                    )}
                </div>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <>
                        {/* Normal Background Overlay */}
                        <motion.div
                            className="fixed inset-0 bg-black/80 z-20"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            onClick={toggleMenu}
                        />

                        {/* Sliding Menu */}
                        <motion.div
                            initial={{ x: "-100%" }}
                            animate={{ x: 0 }}
                            exit={{ x: "-100%" }}
                            transition={{ duration: 0.4, ease: "easeInOut" }}
                            className="fixed top-0 left-0 w-72 h-full bg-gray-900 shadow-lg z-30"
                        >
                            <div className="p-6">

                                {/* Close Button */}
                                <button
                                    onClick={toggleMenu}
                                    className="text-[#9333EA] hover:text-[#4F46E5] transition mb-4"
                                >
                                    <FaTimes size={28} />
                                </button>

                                <nav className="flex flex-col space-y-6">
                                    <Link 
                                        to="/" 
                                        className="text-gray-300 hover:text-[#9333EA] transition"
                                        onClick={toggleMenu}
                                    >
                                        Home
                                    </Link>
                                    <Link 
                                        to="/roadmaps" 
                                        className="text-gray-300 hover:text-[#9333EA] transition"
                                        onClick={toggleMenu}
                                    >
                                        Roadmaps
                                    </Link>
                                    <Link 
                                        to="/careerpaths" 
                                        className="text-gray-300 hover:text-[#9333EA] transition"
                                        onClick={toggleMenu}
                                    >
                                        Career Paths
                                    </Link>

                                    {!token ? (
                                        <button 
                                            onClick={() => {
                                                navigate("/admin");
                                                toggleMenu();
                                            }} 
                                            className="bg-[#4F46E5] hover:bg-[#9333EA] px-4 py-2 rounded-lg text-white transition shadow-md"
                                        >
                                            Admin Login
                                        </button>
                                    ) : (
                                        <>
                                            <Link 
                                                to="/dashboard" 
                                                className="text-gray-300 hover:text-[#9333EA] transition"
                                                onClick={toggleMenu}
                                            >
                                                Dashboard
                                            </Link>
                                            <button 
                                                onClick={() => {
                                                    handleLogout();
                                                    toggleMenu();
                                                }} 
                                                className="bg-red-600 hover:bg-red-500 px-4 py-2 rounded-lg text-white transition shadow-md"
                                            >
                                                Logout
                                            </button>
                                        </>
                                    )}
                                </nav>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </nav>
    );
}

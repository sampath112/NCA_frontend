// import React, { useState } from "react";
// import { motion } from "framer-motion";
// import { FaCode, FaPlay, FaTimes, FaCheckCircle } from "react-icons/fa";
// import Footer from "../components/Footer";

// // Mock Problems Data
// const problems = [
//     { id: 1, title: "Two Sum", difficulty: "Easy", tags: ["Array", "Hash Table"] },
//     { id: 2, title: "Longest Substring Without Repeating", difficulty: "Medium", tags: ["String", "Sliding Window"] },
//     { id: 3, title: "Merge Intervals", difficulty: "Hard", tags: ["Sorting", "Greedy"] },
//     { id: 4, title: "Binary Tree Level Order Traversal", difficulty: "Medium", tags: ["Tree", "BFS"] },
//     { id: 5, title: "Reverse Linked List", difficulty: "Easy", tags: ["Linked List", "Recursion"] }
// ];

// export default function LeetcodePage() {
//     const [selectedProblem, setSelectedProblem] = useState(problems[0]);
//     const [code, setCode] = useState("// Write your code here...");
//     const [output, setOutput] = useState("");
//     const [language, setLanguage] = useState("javascript");
//     const [isRunning, setIsRunning] = useState(false);

//     const handleExecute = () => {
//         setIsRunning(true);
//         setTimeout(() => {
//             setOutput(`✅ Output: Hello, World! in ${language}`);
//             setIsRunning(false);
//         }, 1500);
//     };

//     return (
//         <div className="min-h-screen bg-[#0f172a] text-white flex flex-col">
            
//             {/* Sidebar Navigation */}
//             <div className="flex">
//                 <aside className="w-72 bg-[#1E293B] p-6 border-r border-gray-700 min-h-screen">
//                     <h2 className="text-2xl font-bold mb-6">Problems</h2>
//                     {problems.map((problem) => (
//                         <div 
//                             key={problem.id}
//                             onClick={() => setSelectedProblem(problem)}
//                             className={`p-4 rounded-lg mb-4 cursor-pointer hover:bg-blue-600 transition ${
//                                 selectedProblem.id === problem.id ? "bg-blue-500" : "bg-gray-700"
//                             }`}
//                         >
//                             <h3 className="text-lg font-semibold">{problem.title}</h3>
//                             <div className="flex justify-between text-sm mt-2">
//                                 <span className={
//                                     problem.difficulty === "Easy" ? "text-green-400" :
//                                     problem.difficulty === "Medium" ? "text-yellow-400" :
//                                     "text-red-400"
//                                 }>
//                                     {problem.difficulty}
//                                 </span>
//                                 <span className="text-gray-400">{problem.tags.join(", ")}</span>
//                             </div>
//                         </div>
//                     ))}
//                 </aside>

//                 {/* Main Content */}
//                 <div className="flex-1 p-8">
                    
//                     {/* Problem Details */}
//                     <div className="bg-[#1E293B] p-6 rounded-lg shadow-md mb-6">
//                         <h1 className="text-3xl font-bold">{selectedProblem.title}</h1>
//                         <p className="text-gray-400 mt-4">
//                             Solve the problem using the programming language of your choice.
//                         </p>
//                         <div className="flex items-center mt-4">
//                             <span className={`px-3 py-1 rounded-full text-sm ${
//                                 selectedProblem.difficulty === "Easy" ? "bg-green-600" :
//                                 selectedProblem.difficulty === "Medium" ? "bg-yellow-600" :
//                                 "bg-red-600"
//                             }`}>
//                                 {selectedProblem.difficulty}
//                             </span>
//                             <span className="ml-4 text-gray-300">{selectedProblem.tags.join(", ")}</span>
//                         </div>
//                     </div>

//                     {/* Code Editor */}
//                     <div className="bg-[#1E293B] rounded-lg shadow-md overflow-hidden">
//                         <div className="flex justify-between items-center bg-[#374151] p-4">
//                             <div>
//                                 <select
//                                     value={language}
//                                     onChange={(e) => setLanguage(e.target.value)}
//                                     className="bg-gray-800 text-white px-4 py-2 rounded-lg"
//                                 >
//                                     <option value="javascript">JavaScript</option>
//                                     <option value="python">Python</option>
//                                     <option value="cpp">C++</option>
//                                 </select>
//                             </div>

//                             <button
//                                 onClick={handleExecute}
//                                 className={`flex items-center bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg transition ${
//                                     isRunning && "opacity-50 cursor-not-allowed"
//                                 }`}
//                                 disabled={isRunning}
//                             >
//                                 <FaPlay className="mr-2" /> 
//                                 {isRunning ? "Running..." : "Run Code"}
//                             </button>
//                         </div>

//                         <textarea
//                             value={code}
//                             onChange={(e) => setCode(e.target.value)}
//                             className="w-full h-64 bg-[#111827] text-white p-4 outline-none resize-none"
//                         />

//                         {/* Output Section */}
//                         <div className="bg-gray-900 p-4">
//                             <h2 className="text-lg font-bold">Output:</h2>
//                             <pre className="text-green-400 whitespace-pre-wrap">{output || "Run your code to see output"}</pre>
//                         </div>
//                     </div>
//                 </div>
//             </div>

//             <Footer />
//         </div>
//     );
// }


import React from "react";
import { motion } from "framer-motion";
import { FaChevronRight } from "react-icons/fa";

const problems = [
    {
        id: 1,
        title: "Two Sum",
        difficulty: "Easy",
        tags: ["Array", "Hash Table"],
        link: "https://leetcode.com/problems/two-sum/"
    },
    {
        id: 2,
        title: "Longest Substring Without Repeating Characters",
        difficulty: "Medium",
        tags: ["String", "Sliding Window"],
        link: "https://leetcode.com/problems/longest-substring-without-repeating-characters/"
    },
    {
        id: 3,
        title: "Merge Intervals",
        difficulty: "Hard",
        tags: ["Sorting", "Greedy"],
        link: "https://leetcode.com/problems/merge-intervals/"
    },
    {
        id: 4,
        title: "Binary Tree Level Order Traversal",
        difficulty: "Medium",
        tags: ["Tree", "BFS"],
        link: "https://leetcode.com/problems/binary-tree-level-order-traversal/"
    },
    {
        id: 5,
        title: "Reverse Linked List",
        difficulty: "Easy",
        tags: ["Linked List", "Recursion"],
        link: "https://leetcode.com/problems/reverse-linked-list/"
    },
    {
        id: 6,
        title: "Valid Parentheses",
        difficulty: "Easy",
        tags: ["Stack", "String"],
        link: "https://leetcode.com/problems/valid-parentheses/"
    },
    {
        id: 7,
        title: "Climbing Stairs",
        difficulty: "Easy",
        tags: ["Dynamic Programming"],
        link: "https://leetcode.com/problems/climbing-stairs/"
    },
    {
        id: 8,
        title: "Container With Most Water",
        difficulty: "Medium",
        tags: ["Two Pointers", "Greedy"],
        link: "https://leetcode.com/problems/container-with-most-water/"
    },
    {
        id: 9,
        title: "Coin Change",
        difficulty: "Medium",
        tags: ["Dynamic Programming"],
        link: "https://leetcode.com/problems/coin-change/"
    },
    {
        id: 10,
        title: "Word Break",
        difficulty: "Medium",
        tags: ["Dynamic Programming", "Backtracking"],
        link: "https://leetcode.com/problems/word-break/"
    }
];

export default function LeetcodeProblems() {
    return (
        <div className="min-h-screen bg-[#0f172a] text-white p-8">
            
            {/* Header */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-extrabold bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text">
                    🚀  Problem Statement
                </h1>
                <p className="text-gray-400 mt-4">
                    Click on any problem to open it on <span className="text-blue-400">LeetCode</span>.
                </p>
            </div>

            {/* Problem Grid */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {problems.map((problem) => (
                    <motion.a
                        key={problem.id}
                        href={problem.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className={`block p-6 rounded-lg shadow-lg border transition ${
                            problem.difficulty === "Easy" ? "border-green-500 hover:bg-green-600" :
                            problem.difficulty === "Medium" ? "border-yellow-500 hover:bg-yellow-600" :
                            "border-red-500 hover:bg-red-600"
                        } bg-[#1E293B] hover:text-white cursor-pointer`}
                    >
                        <div className="flex justify-between items-center">
                            <h2 className="text-2xl font-bold">{problem.title}</h2>
                            <FaChevronRight className="text-gray-400" />
                        </div>
                        <div className="flex justify-between items-center mt-4">
                            <span 
                                className={`px-3 py-1 rounded-full text-sm font-semibold ${
                                    problem.difficulty === "Easy" ? "bg-green-600" :
                                    problem.difficulty === "Medium" ? "bg-yellow-600" :
                                    "bg-red-600"
                                }`}
                            >
                                {problem.difficulty}
                            </span>
                            <div className="flex space-x-2">
                                {problem.tags.map((tag, index) => (
                                    <span key={index} className="text-gray-400 text-sm">
                                        #{tag}
                                    </span>
                                ))}
                            </div>
                        </div>
                    </motion.a>
                ))}
            </div>
        </div>
    );
}




// import { useEffect, useState } from "react";
// import Footer from "../components/Footer";

// export default function Home() {
//     const [jobs, setJobs] = useState([]);
//     const [loading, setLoading] = useState(true);
//     const [error, setError] = useState(null);

//     useEffect(() => {
//         fetch("https://nca-backend.onrender.com/api/jobs")
//             .then((res) => {
//                 if (!res.ok) {
//                     throw new Error("Failed to fetch jobs");
//                 }
//                 return res.json();
//             })
//             .then((data) => {
//                 if (!Array.isArray(data)) {
//                     throw new Error("Invalid data format from API");
//                 }
//                 const sortedJobs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
//                 setJobs(sortedJobs);
//                 setLoading(false);
//             })
//             .catch((err) => {
//                 console.error("Error fetching jobs:", err);
//                 setError(err.message);
//                 setLoading(false);
//             });
//     }, []);

//     if (loading) return <p className="text-center text-lg text-blue-600">Loading jobs...</p>;
//     if (error) return <p className="text-center text-lg text-red-600">Error: {error}</p>;

//     return (
//         <div className="min-h-screen flex flex-col">
//             <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 flex-grow">
//                 <h1 className="text-3xl md:text-4xl font-bold text-center text-yellow-400 mb-8">
//                      Latest Job Notifications
//                 </h1>

//                 {jobs.length === 0 ? (
//                     <p className="text-center text-gray-400 text-lg">No job postings available. Check back later!</p>
//                 ) : (
//                     <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//                         {jobs.map((job) => (
//                             <div 
//                                 key={job._id} 
//                                 className="bg-gray-800 text-white shadow-md rounded-lg p-5 border border-gray-700 
//                                 transition-all transform hover:scale-105 hover:shadow-xl overflow-hidden"
//                             >
//                                 {/* Job Title */}
//                                 <h2 className="text-2xl font-semibold text-yellow-400 break-words">{job.title || "Untitled Job"}</h2>

//                                 {/* Job Description */}
//                                 <p className="text-gray-300 mt-2 line-clamp-3 overflow-hidden">
//                                     {job.description || "No description available."}
//                                 </p>

//                                 {/* Job Details */}
//                                 <p className="text-blue-400 font-medium mt-2">📍 {job.location || "Unknown Location"}</p>
//                                 <p className="text-gray-300 mt-1">🏢 {job.company || "Unknown Company"}</p>
//                                 <p className="text-green-500 font-medium mt-1">💰 Salary: ${job.salary || "Not specified"}</p>
//                                 <p className="text-gray-300 mt-1">🛠 Type: {job.jobType || "Not mentioned"}</p>
//                                 <p className="text-gray-300 mt-1">🎓 Experience: {job.experience || "Not mentioned"}</p>

//                                 {/* Job Requirements */}
//                                 {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
//                                     <ul className="text-gray-300 mt-2 list-disc list-inside">
//                                         {job.requirements.map((req, index) => (
//                                             <li key={index} className="text-sm">{req}</li>
//                                         ))}
//                                     </ul>
//                                 ) : (
//                                     <p className="text-gray-500 text-sm mt-2">No specific requirements.</p>
//                                 )}

//                                 {/* Job Posted Date */}
//                                 <p className="text-gray-500 text-sm mt-3">🕒 Posted on: {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "Unknown"}</p>

//                                 {/* Apply Button - Only show if there's a valid link */}
//                                 {job.applicationLink ? (
//                                     <a 
//                                         href={job.applicationLink} 
//                                         target="_blank" 
//                                         rel="noopener noreferrer"
//                                         className="mt-4 inline-block px-4 py-2 bg-yellow-400 text-white font-semibold rounded-md hover:bg-yellow-300 transition"
//                                     >
//                                         📝 Apply Now
//                                     </a>
//                                 ) : (
//                                     <p className="text-gray-500 text-sm mt-2">No application link provided.</p>
//                                 )}
//                             </div>
//                         ))}
//                     </div>
//                 )}
//             </div>
//             {/* <footer className="bg-gray-800 text-white text-center py-4 mt-auto">
//                 <p className="text-sm">© 2025 JobBoard. All rights reserved.</p>
//             </footer> */}
//             <Footer/>
//         </div>
//     );
// }



import { useEffect, useState } from "react";
import Footer from "../components/Footer";

export default function Home() {
    const [jobs, setJobs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        fetch("https://nca-backend.onrender.com/api/jobs")
            .then((res) => {
                if (!res.ok) {
                    throw new Error("Failed to fetch jobs");
                }
                return res.json();
            })
            .then((data) => {
                if (!Array.isArray(data)) {
                    throw new Error("Invalid data format from API");
                }
                const sortedJobs = data.sort((a, b) => new Date(b.createdAt) - new Date(a.createdAt));
                setJobs(sortedJobs);
                setLoading(false);
            })
            .catch((err) => {
                console.error("Error fetching jobs:", err);
                setError(err.message);
                setLoading(false);
            });
    }, []);

    if (loading) return <p className="text-center text-lg text-blue-500">Loading jobs...</p>;
    if (error) return <p className="text-center text-lg text-red-500">Error: {error}</p>;

    return (
        <div className="min-h-screen flex flex-col bg-[#0f172a] text-[#E5E7EB]">
            
            {/* Gradient Heading */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <h1 className="text-5xl font-extrabold text-center mb-12 bg-gradient-to-r from-[#4F46E5] via-[#9333EA] to-[#FACC15] text-transparent bg-clip-text">
                    🚀 Latest Job Notifications
                </h1>

                {jobs.length === 0 ? (
                    <p className="text-center text-gray-400 text-lg">No job postings available. Check back later!</p>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
                        {jobs.map((job) => (
                            <div 
                                key={job._id}
                                className="bg-[#1E293B]/80 backdrop-blur-lg text-[#E5E7EB] shadow-lg rounded-lg p-8 border border-gray-700 
                                transition-all transform hover:scale-105 hover:shadow-2xl 
                                hover:border-[#4F46E5]/50 hover:bg-[#1E293B]/90"
                            >
                                {/* Job Title */}
                                <h2 className="text-3xl font-semibold text-[#FACC15] break-words">
                                    {job.title || "Untitled Job"}
                                </h2>

                                {/* Job Description */}
                                <p className="text-gray-300 mt-3 line-clamp-3 overflow-hidden">
                                    {job.description || "No description available."}
                                </p>

                                {/* Job Details */}
                                <div className="mt-4">
                                    <p className="text-[#4F46E5] font-medium">📍 {job.location || "Unknown Location"}</p>
                                    <p className="text-gray-400">🏢 {job.company || "Unknown Company"}</p>
                                    <p className="text-green-500 font-medium">💰 Salary: ${job.salary || "Not specified"}</p>
                                    <p className="text-gray-400">🛠 Type: {job.jobType || "Not mentioned"}</p>
                                    <p className="text-gray-400">🎓 Experience: {job.experience || "Not mentioned"}</p>
                                </div>

                                {/* Job Requirements */}
                                {Array.isArray(job.requirements) && job.requirements.length > 0 ? (
                                    <ul className="text-gray-400 mt-3 list-disc list-inside">
                                        {job.requirements.map((req, index) => (
                                            <li key={index} className="text-sm">{req}</li>
                                        ))}
                                    </ul>
                                ) : (
                                    <p className="text-gray-500 text-sm mt-3">No specific requirements.</p>
                                )}

                                {/* Job Posted Date */}
                                <p className="text-gray-500 text-sm mt-3">
                                    🕒 Posted on: {job.createdAt ? new Date(job.createdAt).toLocaleDateString() : "Unknown"}
                                </p>

                                {/* Apply Button with Gradient */}
                                {job.applicationLink ? (
                                    <a 
                                        href={job.applicationLink} 
                                        target="_blank" 
                                        rel="noopener noreferrer"
                                        className="mt-6 inline-block px-6 py-3 rounded-lg text-white font-semibold
                                        bg-gradient-to-r from-[#4F46E5] to-[#9333EA] hover:from-[#3730A3] hover:to-[#7C3AED] transition"
                                    >
                                        📝 Apply Now
                                    </a>
                                ) : (
                                    <p className="text-gray-500 text-sm mt-3">No application link provided.</p>
                                )}
                            </div>
                        ))}
                    </div>
                )}
            </div>

            {/* Footer with Glow */}
            <Footer />
        </div>
    );
}

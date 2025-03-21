import React from 'react';
import { FaInstagram, FaTwitterSquare, FaGithubSquare, FaDribbbleSquare, FaFacebookSquare } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer className="w-full bg-[#0f172a] text-[#E5E7EB] py-12 px-4 shadow-inner relative overflow-hidden">
      
      {/* Gradient Glow Effect */}
      <div className="absolute inset-0 bg-gradient-to-r from-[#4F46E5]/20 to-[#9333EA]/20 opacity-30 blur-3xl"></div>

      <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-12 relative z-10">
        
        {/* Left Section */}
        <div className="flex flex-col">
          <h1 className="text-4xl font-extrabold bg-gradient-to-r from-[#4F46E5] to-[#9333EA] text-transparent bg-clip-text mb-4">
            CodeInnovate
          </h1>
          <p className="text-gray-400 text-sm">
            Empowering developers with cutting-edge coding resources and real-world projects.
          </p>

          <div className="flex space-x-6 mt-6">
            <FaInstagram className="text-3xl hover:text-[#E4405F] cursor-pointer transition transform hover:scale-110" />
            <FaTwitterSquare className="text-3xl hover:text-[#1DA1F2] cursor-pointer transition transform hover:scale-110" />
            <FaGithubSquare className="text-3xl hover:text-gray-100 cursor-pointer transition transform hover:scale-110" />
            <FaDribbbleSquare className="text-3xl hover:text-[#EA4C89] cursor-pointer transition transform hover:scale-110" />
            <FaFacebookSquare className="text-3xl hover:text-[#1877F2] cursor-pointer transition transform hover:scale-110" />
          </div>
        </div>

        {/* Right Section */}
        <div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">

          {/* Column 1 */}
          <div>
            <h6 className="text-lg font-semibold text-[#9333EA]">Resources</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Tutorials</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Code Snippets</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Open Source</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Documentation</li>
            </ul>
          </div>

          {/* Column 2 */}
          <div>
            <h6 className="text-lg font-semibold text-[#9333EA]">Courses</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Full-Stack Development</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Data Structures & Algorithms</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Machine Learning</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Blockchain</li>
            </ul>
          </div>

          {/* Column 3 */}
          <div>
            <h6 className="text-lg font-semibold text-[#9333EA]">Company</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">About Us</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Careers</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Partners</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Contact</li>
            </ul>
          </div>

          {/* Column 4 */}
          <div>
            <h6 className="text-lg font-semibold text-[#9333EA]">Support</h6>
            <ul>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Help Center</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">FAQs</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Community Forum</li>
              <li className="py-2 text-sm hover:text-[#4F46E5] transition cursor-pointer">Report an Issue</li>
            </ul>
          </div>

        </div>

      </div>

      {/* Bottom Section */}
      <div className="mt-12 text-center text-gray-500 text-sm relative z-10">
        © {new Date().getFullYear()} CodeInnovate. All rights reserved.
      </div>

    </footer>
  );
};

export default Footer;

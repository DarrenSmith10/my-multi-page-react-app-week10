import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-8 animate-fade-in text-center">
      {/* Profile Picture */}
      <div className="flex flex-col items-center mb-6">
        <img
          src="../assets/images/DarrenNewProfile.jpg"
          alt="Profile"
          className="w-36 h-36 rounded-full shadow-lg object-cover mb-4"
        />
        <h1 className="text-3xl font-bold text-gray-800">Hey, I create beauty</h1>
        <p className="text-gray-600 mt-2">
          I'm a passionate designer who loves crafting beautiful, functional products. I enjoy working with modern tools and am always learning to grow my skills.
        </p>
      </div>

      {/* Contact Section */}
      <div className="mt-8">
        <h2 className="text-2xl font-semibold text-gray-800 mb-2">Get in Touch</h2>
        <p className="text-gray-600 mb-4">Connect with me on the platforms below:</p>

        <div className="flex justify-center gap-6 text-2xl text-gray-600">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-black transition">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700 transition">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-red-500 transition">
            <FaEnvelope />
          </a>
        </div>
      </div>
      
    </div>
  );
}

export default About;

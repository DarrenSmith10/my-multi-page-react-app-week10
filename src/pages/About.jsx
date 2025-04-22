
import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';

function About() {
  return (
      <div className="text-center max-w-2xl mx-auto px-4 py-8 animate-fade-in">
        {/* Profile Picture Page */}
        <div className="flex flex-col item-center mb-8">
        <img
          src="../assets/images/DarrenNewProfile.jpg" // Replace with your profile picture URL
          alt="Profile"
          className="w-36 h-36 rounded-full shadow-lg object-cover mb-4"
        />

        {/* Bio Section */}
        <h1 className="text-3xl font-bold text-gray-800">Hey I create beauty</h1>
        <p className="text-center text-gray-600 mt-2 max-w-lg">
          Hello! I'm a passionate designer with a love for creating beautiful products. I enjoy working with modern technologies and continuously learning new skills to enhance my craft.
        </p>
        

        {/* Contact Section */}
        
          <h2 className="text-2xl font-semibold text-gray-800">Get in Touch</h2>
          <p className="text-gray-600 mt-2">Feel free to reach out to me through any of the platforms below:</p>
       

        <div className="flex justify-center space-x-4 mt-6">
          <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer" className="hover:text-black">
            <FaGithub />
          </a>
          <a href="https://linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer" className="hover:text-blue-700">
            <FaLinkedin />
          </a>
          <a href="mailto:youremail@example.com" className="hover:text-red-500">
            <FaEnvelope />
          </a>
        </div>
      </div>
    </div>
  );
}

export default About;
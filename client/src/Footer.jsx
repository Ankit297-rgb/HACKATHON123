import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-10">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-start md:items-center space-y-8 md:space-y-0">
        
        {/* Logo and Company Name */}
        <div className="flex flex-col items-start md:items-center md:flex-row space-y-4 md:space-y-0 md:space-x-4">
          {/* Logo */}
          <img
            src="/path-to-your-logo.png" // Replace with the path to your logo
            alt="Param-Sanskrit Logo"
            className="h-16 w-16 object-cover"
          />
          {/* Company Name */}
          <span className="text-3xl font-bold text-yellow-400">Param-Sanskrit</span>
        </div>

        {/* Contact Information */}
        <div className="text-sm md:text-base text-gray-400">
          <h3 className="text-xl font-semibold text-yellow-400 mb-3">Contact Us</h3>
          <p className="mb-1">Phone: <a href="tel:+919876543210" className="hover:text-white">+91 9876543210</a></p>
          <p className="mb-1">Phone: <a href="tel:+911234567890" className="hover:text-white">+91 1234567890</a></p>
          <p>Email: <a href="mailto:info@param-sanskrit.com" className="hover:text-white">info@param-sanskrit.com</a></p>
        </div>

        {/* Social Media Links */}
        <div className="flex space-x-6">
          <a
            href="https://facebook.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faFacebookF} size="lg" />
          </a>
          <a
            href="https://twitter.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faTwitter} size="lg" />
          </a>
          <a
            href="https://instagram.com"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-400 hover:text-white transition duration-300"
          >
            <FontAwesomeIcon icon={faInstagram} size="lg" />
          </a>
        </div>
      </div>

      {/* Divider Line */}
      <div className="border-t border-gray-700 mt-8 pt-4 text-center">
        <p className="text-gray-500 text-sm">© 2024 Param-Sanskrit. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer;
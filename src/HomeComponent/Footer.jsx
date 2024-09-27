// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-blue-600 text-white py-4">
      <div className="container mx-auto text-center">
        <p>&copy; 2024 TokenSite. All rights reserved.</p>
        <p>
          <Link to="#contact" className="text-white underline">
            Contact Us
          </Link>
          <Link to="#privacy" className="text-white underline ml-2">
            Privacy Policy
          </Link>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

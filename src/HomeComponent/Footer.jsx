// src/components/Footer.js
import React from "react";
import { Link } from "react-router-dom";
import {
  faFacebook,
  faXTwitter,
  faInstagram,
  faLinkedin,
} from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Footer = () => {
  return (
    <footer className="bg-[#1f2937] text-white py-4 px-4">
      <div className="footer-wrapper block md:flex justify-around ">
        <div className="info md:w-[250px]">
          <p className="py-3 text-[14px]">
            Providing a reliable booking service for sports and education
            trainers, and their customers
          </p>
          <div className="socials flex gap-3 my-3">
            <FontAwesomeIcon icon={faFacebook} />
            <FontAwesomeIcon icon={faXTwitter} />
            <FontAwesomeIcon icon={faInstagram} />
            <FontAwesomeIcon icon={faLinkedin} />
          </div>
        </div>
        <div className="company-wrapper  mt-3 md:mt-0 text-[14px]">
          <h3 className="py-2 font-bold ">Company</h3>
          <ul>
            <li className="py-2">
              <Link to="/">Privacy Policy</Link>
            </li>
            <li className="py-2">
              <Link to="/">Terms and conditions</Link>
            </li>
            <li className="py-2">
              <Link to="/About">About us</Link>
            </li>
          </ul>
        </div>
        <div className="resource-wrapper  mt-3 md:mt-0 text-[14px]">
          <h3 className="py-2 font-bold ">Resources</h3>
          <ul>
            <li className="py-2">
              <Link to="/">Help Centers</Link>
            </li>
            <li className="py-2">
              <Link to="/">Video Tips</Link>
            </li>
          </ul>
        </div>
        <div className="help-wrapper mt-3 md:mt-0 text-[14px]">
          <h3 className="py-2 font-bold ">Help & Support</h3>
          <ul>
            <li className="py-2 font-semibold">
              <Link to="/Contact">Contact us</Link>
            </li>
            <span>+2349-000-000-000</span>

            <li className="py-2">
              <Link to="mailto:recipient@info@mytpage.com">
                info@mytpage.com
              </Link>
            </li>
            <li className="py-2">
              <Link to="/">FAQs</Link>
            </li>
          </ul>
        </div>
      </div>
      <p className="py-3 text-center mt-3 text-[14px]">
        &copy; 2024 TokenSite. All rights reserved.
      </p>
    </footer>
  );
};

export default Footer;

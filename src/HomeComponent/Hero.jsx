// src/components/Hero.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Hero = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="bg-[#e5eeee] text-white h-screen flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-5xl font-bold mb-4">
          Secure Your Future with TokenSite
        </h1>
        <p className="text-lg mb-6">
          The leading platform for token management and secure transactions.
        </p>

        {isAuthenticated ? (
          <p className="bg-[#025951] text-white capitalize mx-auto w-[50%] px-8 py-3 rounded-full">
            <Link to="/DashBoard">explore</Link>
          </p>
        ) : (
          <p className="bg-[#025951] text-white capitalize mx-auto w-[50%] px-8 py-3 rounded-full">
            <Link to="/signUp">Get Started</Link>
          </p>
        )}
      </div>
    </div>
  );
};

export default Hero;

// src/components/About.js
import React from "react";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-200">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center mb-8">About Us</h2>
        <div className="flex flex-wrap justify-center">
          <div className="w-full md:w-1/2 lg:w-1/3 px-4 mb-6">
            <img
              src="https://source.unsplash.com/800x600/?technology,blockchain"
              alt="Token technology"
              className="rounded-lg shadow-lg"
            />
          </div>
          <div className="w-full md:w-1/2 lg:w-2/3 px-4">
            <p className="text-lg mb-4">
              At TokenSite, we provide cutting-edge solutions for token security
              and blockchain integration. Our platform ensures that your digital
              assets remain safe and accessible at all times. With a dedicated
              team of blockchain experts, we have developed a robust and
              user-friendly platform for managing, trading, and securing your
              tokens.
            </p>
            <p className="text-lg">
              Our mission is to empower individuals and businesses to securely
              manage their digital assets with confidence, while staying ahead
              in the rapidly evolving world of blockchain technology.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;

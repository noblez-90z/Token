// src/components/Hero.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import couple from "../assets/couple on bike.svg";
import football from "../assets/Playing football.svg";
import check from "../assets/CheckCircle.svg";

const Hero = () => {
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="">
      <div className="bg-[#e6efef] text-white h-screen block md:flex items-center justify-center">
        <div className="text-center py-4 px-3">
          <h1 className="text-5xl font-bold mb-4 py-3">
            Find the ideal Learning Path for you
          </h1>
          <p className="text-lg mb-6">
            Providing a reliable booking service for sports and education
            trainers, and their customers.
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
        <div className="hero-pic mt-16 w-full h-[300px]  ">
          <img src={couple} alt="couple" />
        </div>
      </div>
      <div className="section block md:flex justify-center gap-6 px-4 py-3 mt-6">
        <div className="section-pic">
          <img src={football} alt="playing football" />
        </div>
        <div className="section-list">
          <h3 className="py-3 font-bold text-2xl">
            We'll put you in touch with the ideal Trainee in less than 24 hours.
          </h3>
          <p className="py-2">
            Myt.Page gets to provide a platform that helps connects you with
            your trainee, and help form meaningful relationship with them. We
            are there, every step of the way.
          </p>
          <ul>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              By sorting, classifying, and categorizing the endless pool of
              trainees, we help you overcome the difficulties of recruiting and
              selecting the perfect fits for your teaching capacity.
            </li>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              You needless crawl through endless pool of potential clients, we
              give you a selection of people who are ready for a good
              relationship with your course.
            </li>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              Our method eliminates the conventional trainee and trainer
              process, and quickly locates determined trainee that are most
              ready to jump on your course
            </li>
            <li className="flex gap-2 py-2 items-start">
              <img src={check} alt="" />
              On Myt.page, you should be sure to find options that will meet
              your schedule and session needs.
            </li>
          </ul>
          <button className="py-2 px-4 my-4 ml-2 rounded-full font-medium bg-[#025951] text-white">
            FIND TRAINERS
          </button>
          <button className="py-2 px-4 my-4 ml-2 rounded-full font-medium  text-[#025951 border">
            LERAN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

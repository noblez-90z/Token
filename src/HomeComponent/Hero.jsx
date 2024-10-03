// src/components/Hero.js
import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
// import couple from "../assets/couple on bike.svg";
// import group from "../assets/Group1000003674.svg";
import hero from "../assets/hero.png";
import football from "../assets/Playing football.svg";
import check from "../assets/CheckCircle.svg";

const Hero = () => {
  const items = [
    {
      icon: check,
      text: "By sorting, classifying, and categorizing the endless pool of trainees, we help you overcome the difficulties of recruiting and selecting the perfect fits for your teaching capacity.",
    },
    {
      icon: check,
      text: "You needless crawl through endless pool of potential clients, we give you a selection of people who are ready for a good relationship with your course.",
    },
    {
      icon: check,
      text: "Our method eliminates the conventional trainee and trainer process, and quickly locates determined trainee that are most  ready to jump on your course",
    },
    {
      icon: check,
      text: " On Myt.page, you should be sure to find options that will meet your schedule and session needs.",
    },
  ];
  const { isAuthenticated, user } = useSelector((state) => state.user);
  return (
    <div className="">
      <div className="bg-[#e6efef] text-white h-screen block md:flex items-center justify-center">
        <div className=" py-4 px-6 md:px-16 flex-1">
          <h1 className="text-[24px] md:text-[64px] font-bold mb-4 py-3 text-black md:leading-[60px] tracking-tighter">
            Find <span className="text-[#055555]">the ideal</span> Learning Path
            for you
          </h1>
          <p className="text-[18px] mb-6 text-black">
            Providing a reliable booking service for sports and education
            trainers, and their customers.
          </p>

          {isAuthenticated ? (
            <p className="bg-[#025951] text-[16px] font-medium text-center  text-white capitalize  w-fit  px-8 py-3 rounded-lg">
              <Link to="/DashBoard">explore</Link>
            </p>
          ) : (
            <p className="bg-[#025951] text-[16px] font-medium text-center text-white capitalize  w-fit px-8 py-3 rounded-lg">
              <Link to="/signUp">Get Started</Link>
            </p>
          )}
        </div>
        <div className=" hero-pic mt-16 md:mt-0 flex-1 px-6  ">
          <img
            src={hero}
            alt="couple"
            className=" object-fit object-cover  object-center text-center "
          />
        </div>
      </div>
      <div className="section block md:flex justify-center gap-6 px-4 py-3 mt-6">
        <div className="section-pic flex-1">
          <img src={football} alt="playing football" />
        </div>
        <div className="section-list flex-1">
          <h3 className="py-3 font-bold text-[24px]">
            We'll put you in touch with the ideal Trainee in less than 24 hours.
          </h3>
          <p className="py-2 text-[18px]">
            Myt.Page gets to provide a platform that helps connects you with
            your trainee, and help form meaningful relationship with them. We
            are there, every step of the way.
          </p>

          <div className="py-6">
            {items.map((item, index) => (
              <li
                key={index}
                className="flex gap-2 py-2 items-start font-normal text-[14px]"
              >
                <img src={item.icon} alt="" />
                {item.text}
              </li>
            ))}
          </div>

          <button className="py-2 px-4 my-4 ml-2 rounded-lg text-[14px] font-medium bg-[#025951] text-white">
            FIND TRAINERS
          </button>
          <button className="py-2 px-4 my-4 ml-4 rounded-lg text-[14px] font-medium  text-[#025951] border border-[#055555]">
            LERAN MORE
          </button>
        </div>
      </div>
    </div>
  );
};

export default Hero;

// src/components/About.js
import React from "react";
import regtangle from "../assets/heading box.svg";
import people from "../assets/pple runing.svg";
import girl from "../assets/girl with bike.svg";
import VideoLearning from "./Video";
import Layout from "./Layout";

const About = () => {
  return (
    <Layout>
      <section id="about" className=" ">
        <div className="about-wrapper">
          <div className="about bg-[#e5eeee] px-6 py-5">
            <div className="about-head flex justify-center items-center py-2">
              <h1 className="font-semibold text-[24px]  ">WHAT IS MY-Tpage?</h1>
              <img src={regtangle} alt="" className="w-20 h-20" />
            </div>
            <p className="py-3 text-center text-[16px]">
              The My-Tpage is aimed to provide a booking service for sports and
              education trainers, and their customers. Once the user visits the
              website, they can find the activity type they want to train in and
              find the best suited trainer for that activity
            </p>
          </div>
          <div className="about-main block md:flex justify-around items-center px-6 mt-5 md:mt-0">
            <img src={people} alt="people runing" className="flex-1" />
            <div className="about-main-text flex-1">
              <h5 className="font-medium text-[16px] py-2">
                Everything you would want for a good training platform, you can
                do with Mytpage
              </h5>
              <h2 className="font-bold text-[16px] py-2">Core Values</h2>
              <p className="text-[14px]">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
                illum velit, corrupti asperiores numquam repudiandae quae
                facilis et, blanditiis officiis quibusdam est autem quisquam
                perferendis inventore laudantium, deserunt repellendus! Eaque.
              </p>
            </div>
          </div>
          <div className="about-section block md:flex justify-around items-center px-6 mt-5 md:mt-0">
            <img src={girl} alt="girl with bycicle" className="flex-1" />
            <div className="about-section-text flex-1">
              <h3 className="font-bold text-[16px] py-2">Core Values</h3>
              <p className="py-3 mt-3 text-[14px]">
                Lorem ipsum dolor sit amet consectetur. Nibh semper bibendum
                neque molestie sagittis sagittis diam. Risus blandit aliquam
                pretium phasellus. Porttitor hendrerit elementum gravida id ut
                mauris amet tempor neque. Gravida in.
              </p>
            </div>
          </div>
          <div className="video-wrapper">
            <VideoLearning />
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;

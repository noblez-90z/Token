// src/components/About.js
import React from "react";
import regtangle from "../assets/heading box.svg";
import people from "../assets/pple runing.svg";
import girl from "../assets/girl with bike.svg";
import VideoLearning from "./Video";

const About = () => {
  return (
    <section id="about" className="py-16 bg-gray-200 px-6">
      <div className="about-wrapper">
        <div className="about">
          <div className="about-head flex justify-center items-center py-2">
            <h1 className="font-bold text-2xl z-10 ">WHAT IS MY-Tpage?</h1>
            <img src={regtangle} alt="" className="" />
          </div>
          <p className="py-3 text-center">
            The My-Tpage is aimed to provide a booking service for sports and
            education trainers, and their customers. Once the user visits the
            website, they can find the activity type they want to train in and
            find the best suited trainer for that activity
          </p>
        </div>
        <div className="about-main">
          <img src={people} alt="people runing" />
          <div className="about-main-text">
            <h5 className="font-semibold py-2">
              Everything you would want for a good training platform, you can do
              with Mytpage
            </h5>
            <h2 className="font-semibold text-2xl py-2">Core Values</h2>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Atque
              illum velit, corrupti asperiores numquam repudiandae quae facilis
              et, blanditiis officiis quibusdam est autem quisquam perferendis
              inventore laudantium, deserunt repellendus! Eaque.
            </p>
          </div>
        </div>
        <div className="about-section">
          <img src={girl} alt="girl with bycicle" />
          <div className="about-section-text">
            <h3 className="font-semibold text-2xl py-2">Core Values</h3>
            <p className="py-3 mt-3">
              Lorem ipsum dolor sit amet consectetur. Nibh semper bibendum neque
              molestie sagittis sagittis diam. Risus blandit aliquam pretium
              phasellus. Porttitor hendrerit elementum gravida id ut mauris amet
              tempor neque. Gravida in.
            </p>
          </div>
        </div>
        <div className="video-wrapper">
          <VideoLearning />
        </div>
      </div>
    </section>
  );
};

export default About;

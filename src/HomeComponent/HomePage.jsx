// components/HomePage.js
import React from "react";
import { useSelector } from "react-redux";
import Header from "./Header";
import Hero from "./Hero";
import About from "./About";
import Layout from "./Layout";

const HomePage = () => {
  return (
    <Layout>
      <div className=" ">
        <Hero />
        <About />
      </div>
    </Layout>
  );
};

export default HomePage;

// components/HomePage.js
import React from "react";

import Hero from "./Hero";

import Layout from "./Layout";
import HeroTwo from "./HeroTwo";

const HomePage = () => {
  return (
    <Layout>
      <div className=" ">
        <Hero />
        <HeroTwo />
      </div>
    </Layout>
  );
};

export default HomePage;

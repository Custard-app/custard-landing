import React from "react";
import Foot from "./Foot";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Faq from "./Faq";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import FormAnimation from "./FormAnimation";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalScrollCarousel />
      <FormAnimation />
      <Faq />
      <Foot />
    </>
  );
};

export default Home;
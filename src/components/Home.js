import React from "react";
import Foot from "./Foot";
import Navbar from "./Navbar";
import Hero from "./Hero";
import Faq from "./Faq";
import HorizontalScrollCarousel from "./HorizontalScrollCarousel";
import FormAnimation from "./FormAnimation";
// import Accordion from "./Accordions/Accordion";

const Home = () => {
  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalScrollCarousel />
      <FormAnimation />
      <Faq />
      {/* <Accordion /> */}
      <Foot />
    </>
  );
};

export default Home;

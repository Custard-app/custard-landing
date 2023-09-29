import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import Foot from "./components/Foot";
import About from "./components/About";
import FormAnimation from "./components/FormAnimation";
import { useEffect } from "react";

function App() {

  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalScrollCarousel />
      <FormAnimation />
      <Foot />
      <About />
    </>
  );
}

export default App;

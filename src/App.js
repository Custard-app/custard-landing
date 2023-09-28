import "./App.css";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import HorizontalScrollCarousel from "./components/HorizontalScrollCarousel";
import Foot from "./components/Foot";
import FormAnimation from "./components/FormAnimation";

function App() {
  return (
    <>
      <Navbar />
      <Hero />
      <HorizontalScrollCarousel />
      <FormAnimation />
      <Foot />
    </>
  );
}

export default App;

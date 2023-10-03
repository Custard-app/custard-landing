import "./App.css";

import Home from "./components/Home";

import About from "./components/About";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Discover from "./components/Discover";
import Feature from "./components/Feature";
import Blog from "./components/Blog";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/feature" element={<Feature />} />
          <Route path="/discover" element={<Discover />} />
          <Route path="/about" element={<About />} />
          <Route path="/blog" element={<Blog />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
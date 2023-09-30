import React from "react";
import "../css/hero.css";
import front from "../assests/front.png";

const Hero = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="star row min-vh-100 align-items-center text-md-left">
            <div className="col-md-6 pr-md-5">
              <img src={front} width="100%" alt="doctor image" />
            </div>
            <div className="col-md-6 pl-md-5 content">
              <h1>Custard grow Your</h1>
              <h1>
                <span>Community </span>full time
              </h1>
              <p>Beautiful Doodles to Tell Your Story</p>
              <a href="">
                <button className="test-btn">Download Now</button>
              </a>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;

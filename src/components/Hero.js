import React from "react";
import "../css/hero.css";
import front from "../assets/hero.webp";

const Hero = () => {
  return (
    <>
      <section className="home" id="home">
        <div className="container">
          <div className="star row min-vh-100 align-items-center text-md-left">
            <div className="col-md-6 pl-md-5 content">
              <h1 className="test" >Custard </h1>
              <h1> Connect with your city, communicate with passion </h1>
              <a href="">
                <button className="hero-btn">JOIN WAITLIST</button>
              </a>
            </div>
            <div className="col-md-6 pr-md-5 mage">
              <img src={front} width="80%" alt="doctor image" />
            </div>
          </div>
        </div>
        <div className="extra-content">
          <h1 className="etitle">Stay connected and informed - Join the Custard community!</h1>
          <h3 className="econtent">Custard provides a platform for people in cities to communicate and connect with their local communities. Whether it's connecting with like-minded people or being part of something big, Custard enables passionate conversations that make a difference.</h3>
        </div>
      </section>
    </>
  );
};

export default Hero;

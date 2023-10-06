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
              <h1 className="hero-h1" >Grow your <span >community</span><div className="underline"> full time</div></h1>
              <svg version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 823 83" xmlSpace="preserve"> <path class="svgPath" fill="none" stroke="rgba(255, 206, 89, 1)" stroke-width="16" d="M20.5,60.5c0,0,103-70,772-17"></path>  </svg>
              <a href="">
              <button className="hero-btn" data-tf-popup="sRBt3843" data-tf-opacity="100" data-tf-size="70" data-tf-iframe-props="title=Join the waitlist to use the community management platform" data-tf-transitive-search-params data-tf-medium="snippet" >Join the Waitlist</button>
              </a>
            </div>
            <div className="col-md-6 pr-md-5 mage">
              <img src={front} width="100%" alt="doctor image" />
            </div>
          </div>
        </div>
      </section>
      <section>
        <div className="extra-content">
          <h1 className="etitle">Stay connected and informed - Join the Custard community!</h1>
          <svg className="svgPath2" version="1.0" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0px" y="0px" viewBox="0 0 396 88" xmlSpace="preserve"> <path  fill="none" stroke="rgba(245,36,95,1)" stroke-width="10" d="M11.5,65.5c60.52-50.99,95.7-59.88,104-53c12.95,10.74-25.64,45.22-17,50c9.47,5.25,49.31-48.32,67-38 	c12,7,2.06,15.82,17,29c17,15,48.37-9.36,94-15c32.7-4.04,64.14-2.97,105-1"></path> 
</svg>
          <h3 className="econtent">Custard provides a platform for people in cities to communicate and connect with their local communities. Whether it's connecting with like-minded people or being part of something big, Custard enables passionate conversations that make a difference.</h3>
        </div>
        </section>
    </>
  );
};

export default Hero;

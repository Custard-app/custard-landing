import React from "react";
import front from "../assets/doodle1.png";
import "../css/About.css";
import Navbar from "./Navbar";
import Foot from "./Foot";

const Contain = () => {
  return (
    <>
      <section>
        <h1 className="heading">ABOUT</h1>
        <div class="about">
          <div className="imag">
            <img src={front} alt="" />
          </div>
          <div className="content">
            <p>
              You are an average of people around you Community is the best
              placebo The right community is the path to success.
              <br />
              Custard is the community platform that adapts to you.
              <br />
              We provide a platform for all community creators to run their
              community. Run their community in a way that allows community
              creators to earn through their community, go full time into
              community creation allowing them to uplift the community
              experience to new heights.
              <br />
              Seamless onboarding, content segregation, event listing, easy
              ticketing, valuable feedback, social media simplified to a new
              level and personalisation to make your community unique. These
              features make up the tip of the iceberg that is Custard. Custard’s
              community support makes sure there is a constant flow of good
              content, innovated events and weekly challenges for the experience
              to reach the new high repetitively.
            </p>
          </div>
        </div>
        <div class="about2">
          <div className="content">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim
              quisquam consectetur alias nihil eligendi iure modi sequi
              aspernatur, nemo, quae eveniet? Nostrum eligendi architecto
              deserunt reprehenderit voluptate inventore totam.
            </p>
          </div>
          <div className="imag">
            <img src={front} alt="" />
          </div>
        </div>
      </section>
    </>
  );
};

const About = () => {
  return (
    <div className="about-body">
      <Navbar />
      <Contain />
      <Foot />
    </div>
  );
};

export default About;

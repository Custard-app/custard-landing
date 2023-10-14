import React from "react";
import "./fullpage.css";
import Second from "./cards/Second";
import Third from "./cards/Third";
import First from "./cards/First";
import Fifth from "./cards/Fifth";
import Forth from "./cards/Forth";
import Sixth from "./cards/Sixth";
const Fullpage = () => {
  return (
    <div className="st-container">
      <div className="st-slides st-slides1">
        <div className="backg_1"></div>
        <div className="try">
          <First />
        </div>
      </div>
      <div className="st-slides st-slides2">
        <div className="backg_2"></div>
        <div className="try">
          <Second />
        </div>
      </div>
      <div className="st-slides st-slides3">
        <div className="backg_3"></div>
        <div className="try">
          <Third />
        </div>
      </div>
      <div className="st-slides st-slides4">
        <div className="backg_4"></div>
        <div className="try">
          <Forth />
        </div>
      </div>
      <div className="st-slides st-slides5">
        <div className="backg_5"></div>
        <div className="try">
          <Fifth />
        </div>
      </div>
      <div className="st-slides st-slides6">
        <div className="backg_6"></div>
        <div className="try">
          <Sixth />
        </div>
      </div>
    </div>
  );
};

export default Fullpage;

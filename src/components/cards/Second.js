import React from "react";
import "./first.css";
import D1 from "../../assets/doodle2.png";

import { color, motion } from "framer-motion";

const cardVariants = {
  offscreen: {
    y: 500,
  },
  onscreen: {
    y: 10,
    transition: {
      type: "spring",
      bounce: 0.2,
      duration: 1.0,
    },
  },
};

const Second = () => {
  return (
    <section>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card2" variants={cardVariants}>
          <div className="heading heading2">
            <h4>You = Stories + Stories +...</h4>
          </div>
          <div className="sec-img">
            <img src={D1} alt="" />
          </div>
          <div className="content sub-heading2">
            <h4 style={{ color: "black" }}>
              If not for (legacy+stories+beliefs) the cultural formed and spread
              through communities.
              <br />
              The World would have looked much different, different in a way
              we'll never find out.
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Second;

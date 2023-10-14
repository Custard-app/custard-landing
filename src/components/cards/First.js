import React from "react";
import "./first.css";
import D1 from "../../assets/doodle3.png";

import { motion } from "framer-motion";

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

const First = () => {
  return (
    <section>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card1" variants={cardVariants}>
          <div className="heading1 heading">
            <h4>What if you were never born?</h4>
          </div>
          <div className="doodle-img">
            <img src={D1} alt="" />
          </div>
          <div className="content">
            <h4>
              The First communities ensured survival of the Homo Sapiens. People
              came together and found common goals.
              <span className="sub-heading1">
                You, the awesome people around you, are here because communities
                formed.
              </span>
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default First;

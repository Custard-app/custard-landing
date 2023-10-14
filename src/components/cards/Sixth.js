import React from "react";
import "./first.css";
import D1 from "../../assets/doodle 6.png";

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

export default function Sixth() {
  return (
    <section>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card1 card6" variants={cardVariants}>
          <div className="heading">
            <h4>Let's save the world</h4>
          </div>
          <div className="six-img">
            <img src={D1} alt="" />
          </div>
          <div className="content ">
            <h4>
              We live in strange times. Communities promise an easy switch to a
              healthier lifesttyle.
              <br />
              The right environment to let the passion flow.
              <br />
              <br />
              <span className="sharp-head">Take the steps</span>
              <span>Custard is here to support you.</span>
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

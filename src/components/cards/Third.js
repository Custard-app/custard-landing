import React from "react";
import "./first.css";
import D1 from "../../assets/earth12.png";
import "./third.css";
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

export default function Third() {
  return (
    <section>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card3" variants={cardVariants}>
          <div className="heading">
            <h4>TimeSkip</h4>
          </div>
          <div className="ter-img">
            <img src={D1} alt="" />
          </div>
          <div className="content">
            <h4>
              Fast forward ~40,000 years to 2023. Communities are rising again
              with help of technology.
              <br />
              <span>
                Presenting Shun (passionate community creator ) and the Social
                Dance Tribe.
              </span>
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

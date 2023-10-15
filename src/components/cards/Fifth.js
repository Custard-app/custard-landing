import React from "react";
import "./first.css";
import D1 from "../../assets/doodle5.png";

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

export default function Fifth() {
  return (
    <section>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card5" variants={cardVariants}>
          <div className="heading">
            <h4>Custard's Evil Motives</h4>
          </div>
          <div className="sec-img">
            <img src={D1} alt="" />
          </div>
          <div className="content">
            <h4>
              Shun wants to focus on the experience of his community members.{" "}
              <br />
              He wants to create a safe space for them.
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

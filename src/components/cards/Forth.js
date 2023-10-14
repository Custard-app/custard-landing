import React from "react";
import "./first.css";
import D1 from "../../assets/doodle 4.png";
import "./forth.css";
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

export default function Forth() {
  return (
    <section>
      <motion.div
        className="card-container"
        initial="offscreen"
        whileInView="onscreen"
        viewport={{ once: true, amount: 0.8 }}
      >
        <motion.div className="card4" variants={cardVariants}>
          <div className="heading">
            <h4>A Community Just For You</h4>
          </div>
          <div className="for-img">
            <img src={D1} alt="" />
          </div>
          <div className="content">
            <h4>
              Shun created a dance community he loves <br />
              He teaches latin dance forms and organises socials for them.
              <br />
              What he hates is the hassle that comes with creating and running a
              community.
            </h4>
          </div>
        </motion.div>
      </motion.div>
    </section>
  );
}

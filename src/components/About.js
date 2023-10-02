import React from 'react'
import front from "../assets/doodle1.png";
import "../css/About.css";

const Contain = () => {
  return (
    <section>
      <h1 className='heading'>ABOUT</h1>
      <div class="about">
        <div className="imag">
          <img src={front} alt="" />
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim quisquam consectetur alias nihil eligendi iure modi sequi aspernatur, nemo, quae eveniet? Nostrum eligendi architecto deserunt reprehenderit voluptate inventore totam.
          </p>
        </div>
      </div>
      <div class="about2">
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim quisquam consectetur alias nihil eligendi iure modi sequi aspernatur, nemo, quae eveniet? Nostrum eligendi architecto deserunt reprehenderit voluptate inventore totam.
          </p>
        </div>
        <div className="imag">
          <img src={front} alt="" />
        </div>
      </div>
    </section>
  )
}



const About = () => {
  return (
    <div>
      <Contain />
    </div>
  )
}

export default About

import React from 'react'
import "../css/About.css";

const Contain = () => {
  return (
    <>
      <h1>ABOUT</h1>
      <div class="about">
        <div className="imag">
          <img src="" alt="" />
        </div>
        <div className="content">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Ex enim quisquam consectetur alias nihil eligendi iure modi sequi aspernatur, nemo, quae eveniet? Nostrum eligendi architecto deserunt reprehenderit voluptate inventore totam.
          </p>
        </div>
      </div>
    </>
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

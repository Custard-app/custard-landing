import React from "react";
import "../css/navbar.css";

const Navbar = () => {
  return (
    <header>
      <div className="container">
        <a href="#" className="nav-logo">
          CUSTARD
        </a>
        <nav className="nav">
          <ul>
            <li>
              <a href="#">About</a>
            </li>
            <li>
              <a href="#">Blogs</a>
            </li>
            <li>
              <a href="#">Discover</a>
            </li>
            <li>
              <a href="#">Features</a>
            </li>

            <li className="list">
              <button className="test-btn">Join The WaitList</button>
            </li>
          </ul>
        </nav>

        <div className="fas fa-bars "></div>
      </div>
    </header>
  );
};

export default Navbar;

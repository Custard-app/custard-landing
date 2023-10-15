import React, { Component } from "react";
import "../css/navbar.css";
import { Link } from "react-router-dom";
class Navbar extends Component {
  state = { clicked: false };
  handleClick = () => {
    this.setState({
      clicked: !this.state.clicked,
    });
  };
  render() {
    return (
      <section>
        <header>
          <div className="container">
            <Link to="/" className="nav-logo home">
              CUSTARD
            </Link>
            <nav
              id="nav"
              className={this.state.clicked ? "nav nav-toggle" : "nav"}
            >
              <ul>
                <li>
                  <Link to="/about" className="about">
                    About
                  </Link>
                </li>
                <li>
                  <Link to="/blog" className="blog">
                    Blogs
                  </Link>
                </li>
                <li>
                  <Link to="/discover" className="discover">
                    Discover
                  </Link>
                </li>
                <li>
                  <Link to="/feature" className="feature">
                    Features
                  </Link>
                </li>

                <li className="list">
                  <a href="#form">
                    <button className="test-btn" id="tbtn">
                      Join The WaitList
                    </button>
                  </a>
                </li>
              </ul>
              <div className="address-custard">
                <h3>Get In Touch</h3>
                <h4>555-555-5555</h4>
                <h4>mymail@mailservice.com</h4>
              </div>
            </nav>

            <div id="mobile" onClick={this.handleClick}>
              <i
                className={this.state.clicked ? "fas fa-times" : "fas fa-bars"}
              ></i>
            </div>
          </div>
        </header>
      </section>
    );
  }
}

export default Navbar;
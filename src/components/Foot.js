import React from "react";
import "../css/Foot.css";
const Foot = () => {
  return (
    <section>
      <footer className="footer-07">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-12 text-center">
              <h2 className="footer-heading">CUSTARD</h2>
              <p className="menu">
                <span>Phone:+917894512345</span>
                <span>Email : abc@gmail.com</span>
                <span>Address : Jaipur , Rajasthan</span>
              </p>
              <ul className="ftco-footer-social p-0">
                <li className="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Twitter"
                  >
                    <span className="ion-logo-twitter"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Facebook"
                  >
                    <span className="ion-logo-facebook"></span>
                  </a>
                </li>
                <li className="ftco-animate">
                  <a
                    href="#"
                    data-toggle="tooltip"
                    data-placement="top"
                    title="Instagram"
                  >
                    <span className="ion-logo-instagram"></span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="row mt-5">
            <div className="col-md-12 text-center">
              <p className="copyright">
                Copyright &copy; All rights reserved | This template is made
                with
                <i className="ion-ios-heart" aria-hidden="true"></i> by
                <a href="https://custard.com" target="_blank">
                  Custard.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </footer>
    </section>
  );
};

export default Foot;

import React from "react";
import "../css/form.css";

const Form = () => {
  return (
    <>
      <div className="form-container-main">
        <div className="form-container">
          <div className="form-container-1">
            <h1 className="form-text">JOIN THE WAITLIST</h1>
            <p>Custard will get back to you soon.</p>
          </div>
          <div className="form-container-2">
            <form className="form">
              <div className="flex">
                <label>
                  <input
                    className="input"
                    type="text"
                    placeholder=""
                    size="28"
                    required=""
                  />
                  <span>Firstname</span>
                </label>

                <label>
                  <input
                    className="input"
                    type="text"
                    size="28"
                    placeholder=""
                    required=""
                  />
                  <span>Lastname</span>
                </label>
              </div>

              <label>
                <input
                  className="input"
                  type="email"
                  placeholder=""
                  required=""
                />
                <span>Email</span>
              </label>

              <label>
                <input
                  className="input"
                  type="password"
                  placeholder=""
                  required=""
                />
                <span>Password</span>
              </label>
              <label>
                <input
                  className="input"
                  type="password"
                  placeholder=""
                  required=""
                />
                <span>Confirm password</span>
              </label>
              <button
                className="submit
              "
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Form;

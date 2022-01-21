import React from "react";
import "./contact.css";
const Contact = () => {
  return (
    <section id="contact" className="fullForm">
      <div>
        <h1 className="aboutMe">Contact me</h1>
        <p className="aContent">
          <h5>Email:rahulreddy.adasada@gmail.com</h5>
          <h5>Phone:9133392000</h5>
        </p>
        <div className="form">
          <form action="">
            <div className="fContent">
              <div>
                <label htmlFor="myName" className="headings">
                  Name
                </label>
              </div>
              <span>
                <input type="text" id="myName" className="nameInput" />

                <label htmlFor="lname"></label>
                <input type="text" name="" id="lanme" className="lnameInput" />
              </span>
              <br />
              <span>
                <label htmlFor="myName" className="subHeading">
                  first
                </label>
                <label htmlFor="myName" className="lSubHeading">
                  last
                </label>
              </span>
              <div>
                {" "}
                <label htmlFor="myEmail" className="headings">
                  Email
                </label>
              </div>
              <div>
                <input type="text" id="myEmail" className="emailInput" />
              </div>
              <label htmlFor="myText" className="headings">
                {" "}
                comment or message
              </label>
              <div>
                <textarea
                  name="mytext"
                  id="myText"
                  cols="30"
                  rows="10"
                  className="commentInput"
                ></textarea>
              </div>
              <div>
                <button type="submit" className="submitButton">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

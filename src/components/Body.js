import React from "react";
import About from "./About";
import "./body.css";
import Contact from "./Contact";
import Experiences from "./Experiences";
import Work from "./Work";
const Body = () => {
  return (
    <div>
      <h4 className="fLine">Hi,my name is</h4>
      <br />

      <h1 className="mainName">Rahul Reddy</h1>
      <br />
      <h1 className="fs">A React.js developer builds things for the web</h1>
      <hr className="hr" />
      <p className="intro">
        I'm a Intern at Newton School bangalore. My current working location is
        bangalore, India and I am specializing in building Single Page
        Applications using ReactJs
      </p>
      <button className="bodyButton"> Get in touch</button>
      <About />
      <Experiences />
      <Work />
      <Contact />
      <br />
      <br />
    </div>
  );
};

export default Body;

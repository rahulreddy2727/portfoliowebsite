import React from "react";
import "./body.css";
import { useState } from "react";
import First from "./First";
import "./body.css";

const Experiences = () => {
  const [state, setstate] = useState(false);

  return (
    <section id="exp">
      <h1 className="aboutMe">Experiences</h1>
      <div className="exp1" className="bExp">
        <div className="ie1">
          <button className="eBtn" onClick={() => setstate(!state)}>
            <h3> reactJs Web-development</h3>
          </button>
        </div>
        <div className="ie2">{state ? <First /> : null}</div>
      </div>
    </section>
  );
};

export default Experiences;

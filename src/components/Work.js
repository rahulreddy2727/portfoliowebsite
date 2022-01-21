import React, { useState } from "react";
import "./body.css";
const Work = () => {
  const [work, setWork] = useState(false);
  const [work1, setWork1] = useState(false);
  return (
    <section id="work">
      <div>
        <h1 className="aboutMe">Works</h1>
        <button
          className="wbtn1"
          onClick={() => {
            setWork(!work);
          }}
        >
          <h3> Todolist-React.js</h3>
        </button>
        <button
          className="wbtn1"
          onClick={() => {
            setWork1(!work1);
          }}
        >
          <h3>Guess the hidden number </h3>
        </button>
        {work1 ? (
          <p>
            Responsive
            <br />
            Single player game
            <br />
            Feature: random numbers are generated and we have to guess the
            number if the guess is greater/lesser than the actual number "too
            high/low will give hint", highest scores get updated which decide
            the winner!
            <br />
            Role:Developer | Tech Stack:HTML,CSS,JavaScript
          </p>
        ) : null}
        {work ? (
          <p className="aContent">
            A To-do-list where one can keep track of their list of tasks to be
            completed
            <br />
            The web application is Responsive, and created using react.js
            <br />
            Features: single page application, Add task, Delete task, About
            page.
            <br />
            Role: Developer |Tech Stack: Reacts.JS, HTML, CSS, JavaScript,
            Bootstrap.
          </p>
        ) : null}
      </div>
    </section>
  );
};

export default Work;

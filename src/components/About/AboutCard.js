import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight, ImBooks } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0"  style={{ textAlign: "left" }}>
            <p>
              Hello everyone, I am <span className="purple">Juan Villarreal </span>
              from <span className="purple"> Texas.</span>
            </p>
            <br />
            <p>
              I am currently employed as an IT Support Specialist at Edinburg CISD.
            </p>
            <br />
              
            <p>
              I have completed:
            </p>
            <ul>
              <li  className="about-activity" >
                <span class="bullet"><ImBooks /></span> An Associates in Computer Science
              </li>
              <li  className="about-activity" >
                <span class="bullet"><ImBooks /></span> An Bachelors in Computer & Information Technologies
              </li>
              <li  className="about-activity" >
                <span class="bullet"><ImBooks /></span> An intensive Software Engineering course with Springboard
              </li>
            </ul>
            <br />
            <p>
              Apart from coding, some other activities that I love to do!
            </p>
          <ul>
            <li className="about-activity">
            <span class="bullet"><ImPointRight /></span> Taking care of my wonderful cat 🐈 Toast
            </li>
            <li className="about-activity">
            <span class="bullet"><ImPointRight /></span> Playing Games & Watching Shows
            </li>
            <li className="about-activity">
            <span class="bullet"><ImPointRight /></span> Drawing
            </li>
          </ul>

          <div style={{ textAlign: "right" }}>
            <p style={{ color: "rgb(155 126 172)" }} >
              "Identify, Innovate, and Resolve."{" "}
            </p>
            <footer className="blockquote-footer" >Juan</footer>
          </div>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

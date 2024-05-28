import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";

import pkmngssr from "../../Assets/Projects/pkmngssr.png";
import magidekt from "../../Assets/Projects/magidekt.png";
import jobly from "../../Assets/Projects/jobly.png";
import warbler from "../../Assets/Projects/warbler.png";
import giCalc from "../../Assets/Projects/gi-calculator.png";


function Projects() {

  
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          
        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={warbler}
              isBlog={false}
              title="Warbler"
              description="Twitter clone built with Flask, WTForms, PostgresSQL and Flask SQLAlchemy."
              ghLink="https://github.com/jvill171/warbler"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={giCalc}  
              isBlog={false}
              title="GI-Calculator"
              description="A tool for the popular game Genshin Impact. A user can use this to calculate how many resources are required to level up their characters!"
              ghLink="https://github.com/jvill171/gi-calculator"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={magidekt}
              isBlog={false}
              title="Magidekt"
              description="A simple deck builder tool meant to help user's build a deck to show friends or simply brainstorm a deckbuild. Authentication is required, but a demo user is provided in the GitHub for those who would like to try it out without signing up."
              ghLink="https://github.com/jvill171/magidekt-frontend"
              demoLink="https://magidekt.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={jobly}
              isBlog={false}
              title="Jobly"
              description="A mock app where users can view job postings and apply for open positions. An account is required, but a demo account is provided in the Github."
              ghLink="https://github.com/jvill171/react-jobly-frontend"
              demoLink="https://jvill171-react-jobly.surge.sh/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={pkmngssr}
              isBlog={false}
              title="Pkmn-Gssr"
              description="A pokemon guessing game similar to Squirdle, a parody of Wordle. Has optional authentication for access to a leaderboard, a time-attack mode, and some simple profile customization."
              ghLink="https://github.com/jvill171/Pkmn-Gssr"
              demoLink="https://pkmn-gssr.onrender.com/"
            />
          </Col>

        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Col, Row } from "react-bootstrap";
import TechIcon from "./TechIcon"
import { CgCPlusPlus } from "react-icons/cg";
import {
  DiJavascript1,
  DiReact,
  DiNodejs,
  DiPython,
  DiGit,
  // DiMongodb,
  // DiJava,
} from "react-icons/di";
import {
  SiFirebase,
  SiVuedotjs,
  SiFlask,
  // SiRedis,
  // SiNextdotjs,
  // SiSolidity,
} from "react-icons/si";
import { BiLogoPostgresql } from "react-icons/bi";
// import { TbBrandGolang } from "react-icons/tb";

function Techstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      
      
      <TechIcon icon={DiJavascript1}
        text="JavaScript"
        hoverColor="F7DF1E"
      />

      <TechIcon icon={DiPython}
        text="Python"
        hoverColor="FFD43B"
      />
      <TechIcon icon={CgCPlusPlus}
        text="C++"
        hoverColor="5E97D0"
      />
      <TechIcon icon={SiFlask}
        text="Flask"
        hoverColor="000000"
      />
      <TechIcon icon={DiNodejs}
        text="NodeJS"
        hoverColor="7DBD00"
      />
      <TechIcon icon={SiVuedotjs}
        text="VueJS"
        hoverColor="009E60"
      />
      <TechIcon icon={DiReact}
        text="ReactJS"
        hoverColor="05D5FA"
      />
      <TechIcon icon={DiGit}
        text="Git"
        hoverColor="F25A3A"
      />
      <TechIcon icon={SiFirebase}
        text="Firebase"
        hoverColor="FFA611"
      />
      <TechIcon icon={BiLogoPostgresql}
        text="PostgreSQL"
        hoverColor="33658D"
      />
      
      {/* <Col xs={4} md={2} className="tech-icons">
        <SiRedis />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <TbBrandGolang />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiNextdotjs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiSolidity />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiMongodb />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <DiJava />
      </Col> */}

    </Row>
  );
}

export default Techstack;

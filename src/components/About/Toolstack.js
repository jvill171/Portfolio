import React from "react";
import { Row } from "react-bootstrap";
import TechIcon from "./TechIcon"
import {
  SiVisualstudiocode,
  SiInsomnia, 
  SiSlack,
  SiWindows10,
  SiUbuntu,
  SiVercel
} from "react-icons/si";

function Toolstack() {

  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>

      <TechIcon icon={SiWindows10}
        text="Windows"
        hoverColor="00A1F1"
      />
      <TechIcon icon={SiUbuntu}
        text="WSL Ubuntu"
        hoverColor="E95420"
      />
      <TechIcon icon={SiVisualstudiocode}
        text="VS Code"
        hoverColor="0078D7"
      />
      <TechIcon icon={SiInsomnia}
        text="Insomnia"
        hoverColor="6649E1"
      />
      <TechIcon icon={SiSlack}
        text="Slack"
        hoverColor="56154F"
      />
      <TechIcon icon={SiVercel}
        text="Vercel"
        hoverColor="000000"
      />
    </Row>
  );
}

export default Toolstack;

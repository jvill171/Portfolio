import React, { useState } from "react";
import { Col } from "react-bootstrap";

function TechIcon({ icon: Icon, text="", defaultColor="FFFFFF", hoverColor="FFFFFF" }) {
  const [isHovered, setIsHovered] = useState(false);

  const handleMouseEnter = () => { setIsHovered(true); };
  const handleMouseLeave = () => { setIsHovered(false); };

  return (
    <Col xs={4} md={2}
      className="tech-icons"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{backgroundColor: isHovered ? `rgba(255,255,255,0.9)` : `rgba(255,255,255,0.1)`}}
    >
      <Icon style={{ color: isHovered ? hoverColor : defaultColor }} />{" "}
      <h5 style={isHovered ? {color:"#000000", fontWeight: "bold"} : {color:"#FFFFFF"}}>{text}</h5>
    </Col>
  );
}

export default TechIcon;

import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";
import { SiGamebanana } from "react-icons/si";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        
        {/* Always include a Github link */}
        <Button
          variant="primary"
          href={props.ghLink}
          target="_blank"
          style={{ margin: "10px" }}
        >
          <BsGithub /> &nbsp;
          {"GitHub"}
        </Button>

        {/* If component contains a demo link */}
        {props.demoLink && (
          <Button
            variant="primary"
            href={props.demoLink}
            target="_blank"
            style={{ margin: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Demo"}
          </Button>
        )}

        {/* If component contains a gamebanana link */}
        {props.bananaLink && (
          <Button
            variant="primary"
            href={props.bananaLink}
            target="_blank"
            style={{ margin: "10px" }}
          >
            <SiGamebanana /> &nbsp;
            {"GameBanana"}
          </Button>
        )}
        
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

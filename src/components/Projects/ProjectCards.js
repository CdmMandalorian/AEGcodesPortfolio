import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      <Card.Img variant="top" src={props.imgPath} alt="card-img" />
      <Card.Body>
        <Card.Title>{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description} 
        </Card.Text>
        <Button className="repoButton" variant="primary" href={props.repo} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Repo"}
        </Button>
        <br>
        </br>
        <br>
        </br>
        <Button className="deployButton"
         variant="primary" href={props.link} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          {props.isBlog ? "View Blog" : "View Deploy"}
        </Button>
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;

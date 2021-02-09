import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function BlogsCards(props) {
  return (
    <a
      className="blog-link"
      href={props.link}
      target="_blank"
      rel="noreferrer"
      style={{ fontSize: "1.2em" }}
    >
      <Card className="blog-card-view">
        <Card.Img variant="top" src={props.imgPath} className="blog-img" />
        <Card.Footer>
          <i className="fas fa-external-link-square-alt">&nbsp;</i>
          {props.title}
          <hr></hr>

          <Button variant="primary" href={props.repo} target="_blank">
          <i className="cil-external-link">&nbsp;</i>
          View Repo
          </Button>

        </Card.Footer>
      </Card>
    </a>
  );
}

export default BlogsCards;

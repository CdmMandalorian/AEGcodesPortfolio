import React from "react";
import Card from "react-bootstrap/Card";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Welcome Everyone, I am <span className="green">  Armando  E  Galindo  </span>
                   from 
            <br></br>
            <span className="green"> ✨Los Angeles, California 🌙 </span>
            <br />A Full Stack Web Developer, graduate from UCR.  Persuing my passion, of learning, forging, and innovating with my creativity, dynamic based: Full Web Applications.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Building Computers, and Playing Games 🖥💻 
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Spectating, and Participating in the Beautiful Game ⚽
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Star Gazing 🌃
            </li>
          </ul>

          <p style={{ marginBlockEnd: 0, color: "rgb(20 123 65)" }}>
            "On A Quest to Build the Future!"{" "}
          </p>
          <footer className="blockquote-footer">Galindo</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

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
            <span className="green"> ✨Los Angeles, California🌙 </span>
            <br />A Software Engineer, Graduate from the University of California, Riverside.  Continuously Experimenting and Building a Better Understanding of Programming Tools and Languages.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
          <li className="about-activity">
            <i class="fas fa-meteor"></i> Astronomy and Astrophotography 📸🌕🌃
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Visiting Scenic Routes, and National Parks 🏔️🌲
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> Building Computers, Playing and Streaming Games 💻 
            </li>
            <li className="about-activity">
            <i class="fas fa-meteor"></i> The Beautiful Game ⚽
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

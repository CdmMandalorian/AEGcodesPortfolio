import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/aeg-profile-pic.png";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Tilt from "react-parallax-tilt";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
               <span className="purple"> INTRODUCTION </span> 
            </h1>
            <p className="home-about-body">
              Having grown within such a Technological era in life. A spark of interest has always been lit, for a better understanding of technology, computers, and programs.
              <br />
              <br />Consistently striving in building a better understanding of Programming Languages like:
              <i>
                <b className="green"> HTML-5, CSS, C++, Javascript, JQuery, ES+6, Bootstrap. </b>
              </i>
              <br />
              <br />
              Future ambitions fall under researching&nbsp;
              <i>
                <b className="green">
                  Gulp, Haskell, Homebridge, Perl, Phyton, and Rails
                </b>
              </i>
              <br />
              <br />
              Whenever possible, I also apply my passion for developing into my personal
              <i>
                <b className="green"> Magic Mirror</b>
              </i>
              &nbsp; This Mirror, reflects an ongoing update of data to display via a
              <i>
                <b className="green"> Raspberry Pi  </b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1>FIND ME</h1>
            <p>
            <span className="green"> Connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/CdmMandalorian"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-github"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://twitter.com/MandolorCodes"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-twitter"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/armando-galindo/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <i className="fab fa-linkedin-in"></i>
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/aegcodes/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <i className="fab fa-instagram"></i>
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;

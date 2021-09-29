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
               <span className="green"> INTRODUCTION </span> 
            </h1>
            <p className="home-about-body">
                A Spark of Interest has Always been Lit, To Further Understand Technology, Computers, and Coding.
              <br />
              <br />While Consistently Striving in Building A Better Understanding of Programming Tools and Languages Like:
              <i>
                <b className="green"> HTML-5, CSS, C++, Javascript, JQuery, ES+6, Bootstrap. </b>
              </i>
              <br />
              <br />
              Football Coach, Training the Culture of &nbsp;
              <i>
                <b className="green">
                  YOUTH, COURAGE, SUCESS
                </b>
              </i>
              <br />
              <br />
              Whenever Possible, I also Apply my Passion into Developing my Personal Projects
              <i>
                <b className="green"> The Magic Mirror</b>
              </i>
              &nbsp; A Double-Sided Mirror that Reflects an Ongoing stream of Data via A
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

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Github from "./Github";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/about.png";

function About() {
  return (
    <Container fluid className="about-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col
            md={7}
            style={{
              justifyContent: "center",
              paddingTop: "30px",
              paddingBottom: "50px",
            }}
          >
            <h1 style={{ fontSize: "2.1em", paddingBottom: "20px" }}>
              About <strong className="green">ME</strong>
            </h1>
            <Aboutcard />
          </Col>
          <Col
            md={5}
            style={{ paddingTop: "120px", paddingBottom: "50px" }}
            className="about-img"
          >
            <img src={laptopImg} alt="about" className="img-fluid" />
          </Col>
        </Row>
        <h1 className="project-heading">
          Professional <strong className="green">Skillset </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="devicon-mongodb-plain-wordmark" />
          <Techstack iconName="devicon-express-original-wordmark" />
          <Techstack iconName="devicon-react-original-wordmark" />
          <Techstack iconName="devicon-nodejs-plain-wordmark " />
          <Techstack iconName='devicon-raspberrypi-plain' />
          <Techstack iconName='devicon-photoshop-plain' />
          <Techstack iconName="devicon-c-line" />
          <Techstack iconName="devicon-cplusplus-plain" />
          <Techstack iconName='devicon-csharp-plain'/>
          <Techstack iconName="devicon-javascript-plain " />
          <Techstack iconName='devicon-html5-plain-wordmark' />
          <Techstack iconName='devicon-css3-plain-wordmark' />
          <Techstack iconName='devicon-handlebars-original-wordmark' />
          <Techstack iconName='devicon-nextjs-original-wordmark' />
          <Techstack iconName='devicon-json-plain' />

          <Techstack iconName="devicon-mysql-plain-wordmark" />
          <Techstack iconName='devicon-sqldeveloper-plain' />
          
          
          <Techstack iconName='devicon-reactbootstrap-original' />
          <Techstack iconName="devicon-bootstrap-plain-wordmark" />
          <Techstack iconName="devicon-jquery-plain-wordmark" />
          <Techstack iconName="devicon-materialui-plain" />
          
        </Row>
        <h1 className="project-heading">
          <strong className="green">Tools</strong> I use
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
          <Techstack iconName="cib-visual-studio-code" />
          <Techstack iconName="devicon-git-plain-wordmark" />
          <Techstack iconName="devicon-github-original" />
          <Techstack iconName='devicon-gitlab-plain' />
          <Techstack iconName='devicon-vercel-original' />
          <Techstack iconName="devicon-netlify-plain" />
          <Techstack iconName="cib-heroku" />
          <Techstack iconName='cib-shopify' />
          <Techstack iconName='devicon-eslint-plain' />
          <Techstack iconName="cib-postman" />
          <Techstack iconName="devicon-amazonwebservices-plain-wordmark" />
          <Techstack iconName="cib-google-cloud" />
        </Row>
        <Github />
      </Container>
    </Container>
  );
}

export default About;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/wd-Resume2020.pdf";

function Resume() {
  

  return (
    <Container fluid className="resume-section">
      <Particle />
      <Container>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
        <Row className="resume">
          <Col md={6} className="resume-left">
            <h3 className="resume-title">Experience</h3>
            <Resumecontent
              title="Project Manager | Continuous Improvement [ Ruskin ]"
              date="February 2019 - March 2020"
              content={[
                "The oversaw and analyzation of all the company’s work procedures to a determination, that is best safe and work efficient as possible. ",
                "Adapted an elementary understanding of ISO 9001 Quality Management systems, to serve the customer with best service while understanding and overcoming obstacles that might hinge on customer satisfaction.",
                "Ran construction development team, that produced a conference room, within a warehouse.",
              ]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Football Coach [ Ontario United 2010 - 2016 ]"
              content={[
                "Victoriously ran the operations, and coached a succesful youth club football team.  Travelling abroad participating in tournaments while triumphantly representing the city.",
              ]}
            />
            <Resumecontent
              title="Ground Control  [ Insomniac 2016-2018 ]"
              content={[
                "Group of Guardian Angels, we are endlessly committed  in ensuring everyone safety at an Insomniac event. Ground Control's sole purpose is to guarantee everyone, to have a safe festival experience from the moment you arrive, to the moment you are assured a safe passage home.",
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title="University [ University of California, Riverside ]"
              date="2020 - 2021"
              content={["Full Stack Web Development"]}
            />
            <Resumecontent
              title="College [ Chaffey College, Rancho Cucamonga Ca ]"
              date="2010 - 2018"
              content={["Associate of Science in Mathematics, University Studies"]}
            />
            <Resumecontent
              title="High School [ Ontario High School, Ontario Ca ] "
              date="2004 - 2008"
              content={["Diploma"]}
            />
            <h3 className="resume-title">Coaching</h3>
            <Resumecontent
              title="AYSO Region 66 [ Ontario / Montclair ] "
              date="2011 - 2016 | 2021 - "
              content={[
                "Coach of the Year: 2012, 2013, 2014",
                "Select Coach: U12 Boys 2012",
                "Select Coach: U14 Boys 2014",
                "Assistant Coach U16 Boys 2016"
              ]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
                "Class Rank #1 - Senior Year High School - 4.20 GPA",
                "Treasury - Foreign Language Club - Ontario High School"
              ]}
            />
          </Col>
        </Row>
        <Row style={{ justifyContent: "center", position: "relative" }}>
          <Button variant="primary" href={pdf} target="_blank">
            <i className="fas fa-download">&nbsp;</i>Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default Resume;

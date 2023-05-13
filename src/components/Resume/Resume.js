import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Particle from "../Particle";
import Resumecontent from "./ResumeContent";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import pdf from "../../Assets/AEGTechCodesResume23.5.pdf";

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
              title="Manager | Price Coordinator [ Staples ]"
              date="February 2022 - "
              content={[
                "Monitor, track, appropriate prices in the store according to sales and corporate. Secure accuracy of prices. ",
                "Oversee operations in store, maintaining daily responsibilities, ensuring efficient workflow. ",
                "Nurtured employee confidence, and strong credibility",
                "Recognized for achieving optimal results in Sales and Customer Service ",
              ]}
            />
            <Resumecontent
              title="Project Manager | Continuous Improvement [ Ruskin ]"
              date="February 2019 - March 2020"
              content={[
                "Analyzation of work procedures, to a determination, for the best safety protocols. ",
                "Adapted an elementary understanding of ISO 9001 Quality Management systems, to serve the customer with best service while understanding and overcoming obstacles that might hinge on customer satisfaction. ",
                "Effectively formulate strategies, tactics and action plans to achieve results. ",
                "Provide high productive output while maintaining high morale . ",
              ]}
            />
            <Resumecontent
              title="Manager | Front End [ Kmart ]"
              date="September 2012 - December 2018"
              content={[
                "Lead, organized, and trained cashiers to the highest of customer ratings. ",
                "Manage employees to maintain a clean and friendly work environment. ",
                "Resolve all customer complaints " ,
              ]}
            />
          </Col>
          <Col md={6} className="resume-right">
            <h3 className="resume-title">Education</h3>
            <Resumecontent
              title=" [ University of California, Riverside ]"
              date="2020 - 2021"
              content={["Full Stack Web Development"]}
            />
            <Resumecontent
              title=" [ Chaffey College, Rancho Cucamonga ]"
              date="2010 - 2018"
              content={["Associate of Science in Mathematics, University Studies"]}
            />
            <Resumecontent
              title=" [ Ontario High School ] "
              date="2004 - 2008"
              content={["Diploma"]}
            />
            <h3 className="resume-title">Extracurricular Activities</h3>
            <Resumecontent
              title="Soccer Coach | Manager [ Ontario United ]"
              date="2011 - 2016"
              content={[
                "Managed operations, and victoriously coached a succesful youth club soccer team. Traveling abroad participating in tournaments while triumphantly representing the city of Ontario. Achieving proper resources needed to attain maximum team results. Hosting the enviroment to develop and obtain the ultimate impact for each individual. Excel in obtaining full parental support. Adhere and maintain high ethical standards and policies for all involved.",
              ]}
            />
            <Resumecontent
              title="Ground Control  [ Insomniac ]"
              date="2016 - 2018"
              content={[
                " Often described as a group of Guardian Angels, endlessly committed  in ensuring everyone's safety at Insomniacs' events. Ground Control's sole purpose is to assure everyone, a safe festival experience from the moment you arrive, to the moment you are warrant a safe passage home. ",
              ]}
            />
            <h3 className="resume-title">Coaching</h3>
            <Resumecontent
              title="AYSO Region 66 [ Ontario / Montclair ] "
              date="2011 - 2016 | 2021 "
              content={[
                "Coach of the Year: 2012, 2013, 2014",
                "Select Coach: U12 Boys 2012",
                "Select Coach: U14 Boys 2014",
                "Select Assistant Coach: U16 Boys 2016"
              ]}
            />
            <h3 className="resume-title">Achivements</h3>
            <Resumecontent
              title=""
              content={[
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

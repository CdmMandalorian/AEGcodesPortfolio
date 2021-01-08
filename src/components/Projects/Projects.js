import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import BlogCard from "./BlogsCards";
import Particle from "../Particle";
import "../../style.css";
import "bootstrap/dist/css/bootstrap.min.css";

import burger from "../../Assets/Projects/burger.png";
import mirror from "../../Assets/Projects/mirror.png";
import Notetaker from "../../Assets/Projects/Notetaker.png";
import employee from "../../Assets/Projects/employee.png";
import scheduler from "../../Assets/Projects/scheduler.png";
import fitness from "../../Assets/Projects/fitness.png";
import LongCut from "../../Assets/Projects/LongCut.jpg";
import wildlife from "../../Assets/Projects/wildlife.PNG";
import discover from "../../Assets/Projects/discover.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Portfolio
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={burger}
              isBlog={false}
              title="Astros Burgers"
              description="Created my dream Burger Stand, using MySQL, Node, Express, and Handlebars, and a self personalized ORM. Combining all the basics to receive, post, update, and display data. A connecting bugers database, supplied, as well as User input accessible."
              link="https://github.com/CdmMandalorian/astros-burgers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mirror}
              isBlog={false}
              title="Magic Mirror"
              description="MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant."
              link=""
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={scheduler}
              isBlog={false}
              title="Dynamic Day Scheduler"
              description="Developed A page that will has 12 generated slots for A full working Day from 7am till 7 pm

              Each row will be assigened to an Hour, and have open input container to, manually input info.
              
              Each row will also be provided a save button that will save info into LocalStorage
              
              If slot shaded grey (past hours), the text typed in the text area will not be saved.
              
              Data will stay in text area even if hours have past and the box turns grey. *Each Text Area is Color coded due to the hour of the day:
              
              Text Area Color Meaning:
              
              ---Green = Current hour
              
              ---Red = Hours to come
              
              ---Grey = Hours that have past"
              link="https://github.com/CdmMandalorian/dynamicDayScheduler.github.io"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Eminent Employee Directory"
              description="Created an employee direcotry with React. Eminently Search through established API employee database, Sidebar Component contains search results in Card form with ID, Name, Image, Number, Email, DOB. "
              link="https://github.com/CdmMandalorian/Eminent-EmployeeDirectory"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notetaker}
              isBlog={false}
              title="Express Note Taker"
              description="This is a note-taking application that allows a user to write, save, access, and edit notes to and from a JSON file. The front end uses JavaScript and jQuery, and the back end uses Node.js and Express routing."
              link="https://github.com/CdmMandalorian/ExpressNoteTaker"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Finesse Fitness Tracker"
              description="This application is to create a Nosql, Workout Tracker; with a Mongo Database/Schema, and the utilization of Express Handle Bars routes"
              link="https://github.com/CdmMandalorian/finesse-fitness-tracker"
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          My Recent <strong className="purple">Group </strong> Projects
        </h1>
        <p style={{ color: "white" }}></p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={LongCut}
              link="https://github.com/Tbonexas/longcut"
              title="The Long Cut"
              site="https://tbonexas.github.io/longcut/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={wildlife}
              link="https://github.com/CdmMandalorian/Project-02"
              title="Wildlife Observers"
              site="https://project-wildlife-observer.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={discover}
              link="https://github.com/gfranco19/finalProject"
              title="ReDiscover"
              site=""
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

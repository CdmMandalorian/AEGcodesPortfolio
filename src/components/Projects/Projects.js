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
import discover from "../../Assets/Projects/rediscover.gif";
import electric from "../../Assets/Projects/electric.png";
import youvend from "../../Assets/Projects/youvend.png";
import EMP from "../../Assets/Projects/empHomeCityScape1920x1080Final.png"
import ArtisanOtomiE from '../../Assets/Projects/ArtisanOtomiEcommerceMernHome.png'
import ArtisanOtomiS from '../../Assets/Projects/AOShopifyHome.png'


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
        <strong className="green">Works </strong> Portfolio
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard 
              link="https://astros-burgers.herokuapp.com/"
              imgPath={burger}
              isBlog={false}
              title="Astros Burgers"
              description="Created my dream Burger Stand, using MySQL, Node, Express, and Handlebars, and a self personalized ORM. Combining all the basics to receive, post, update, and display data. A connecting bugers database, supplied, as well as User input accessible"
              repo="https://github.com/CdmMandalorian/astros-burgers"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={mirror}
              isBlog={false}
              title="Magic Mirror"
              description="MagicMirror² is an open source modular smart mirror platform. With a growing list of installable modules, the MagicMirror² allows you to convert your hallway or bathroom mirror into your personal assistant
              "
              repo="https://github.com/CdmMandalorian/MagicMirror.git"
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
              repo="https://github.com/CdmMandalorian/dynamicDayScheduler.github.io"
              link="https://cdmmandalorian.github.io/dynamicDayScheduler/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={employee}
              isBlog={false}
              title="Eminent Employee Directory"
              description="Created an employee direcotry with React. Eminently Search through established API employee database, Sidebar Component contains search results in Card form with ID, Name, Image, Number, Email, DOB "
              repo="https://github.com/CdmMandalorian/Eminent-EmployeeDirectory"
              link="https://cdmmandalorian.github.io/Eminent-EmployeeDirectory/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Notetaker}
              isBlog={false}
              title="Express Note Taker"
              description="This is a note-taking application that allows a user to write, save, access, and edit notes to and from a JSON file. The front end uses JavaScript and jQuery, and the back end uses Node.js and Express routing"
              repo="https://github.com/CdmMandalorian/ExpressNoteTaker"
              link="https://express-notetaker-1.herokuapp.com/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={fitness}
              isBlog={false}
              title="Finesse Fitness Tracker"
              description="This application is to create a Nosql, Workout Tracker; with a Mongo Database/Schema, and the utilization of Express Handle Bars routes"
              repo="https://github.com/CdmMandalorian/finesse-fitness-tracker"
              link=""
            />
          </Col>

        </Row>
        <h1 className="project-heading">
          <strong className="green">Group </strong> Projects
        </h1>
        <p style={{ color: "white" }}></p>
        <Row style={{ justifyContent: "center" }}>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={LongCut}
              repo="https://github.com/Tbonexas/longcut"
              title="The Long Cut"
              link="https://tbonexas.github.io/longcut/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={wildlife}
              repo="https://github.com/CdmMandalorian/Project-02"
              title="Wildlife Observers"
              link="https://project-wildlife-observer.herokuapp.com/"
            />
          </Col>
          <Col md={4} className="blog-card">
            <BlogCard
              imgPath={discover}
              repo="https://github.com/gfranco19/finalProject"
              title="ReDiscover"
              link="https://rediscoverapp.netlify.app"
            />
          </Col>
        </Row>
        <h1 className="project-heading">
         <strong className="green">Development </strong> Projects
        </h1>
        <Row style={{ justifyContent: "center" }}>
        <Col md={4} className="development-card"> 
        <BlogCard
              imgPath={EMP}
              repo='https://github.com/CdmMandalorian/ExactMatchPersonnel'
              title='Exact Match Personnel'
              link='https://exactmatchpersonnel.com/'
            />
          </Col>  
          <Col md={4} className="development-card">
          <BlogCard
              imgPath={electric}
              repo="https://github.com/CdmMandalorian/JsElectric"
              title="J'S Electric"
              link="https://cdmmandalorian.github.io/JsElectric/"
            />
          </Col>
          <Col md={4} className="development-card">
          <BlogCard
              imgPath={youvend}
              repo="https://github.com/Tbonexas/youvend"
              title="YouVend"
            />
          </Col>
        </Row>
         <h1 className="project-heading">
         <strong className="green">Ecommerce | Shopify </strong> Projects
        </h1>
        <Row style={{ justifyContent: "center" }}>
        <Col md={4} className="development-card"> 
        <BlogCard
              imgPath={ArtisanOtomiE}
              repo='https://github.com/CdmMandalorian/ArtisanOtomi'
              title='Artisan Otomi'
              link='https://artisan-otomi.vercel.app/'
            />
          </Col>  
          <Col md={4} className="development-card">
          <BlogCard
              imgPath={ArtisanOtomiS}
              repo="https://github.com/CdmMandalorian/ArtisanOtomi.Shopify"
              title="Artisan Otomi Shopify App"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import agg from "../../Assets/Projects/agg.png";
import tun from "../../Assets/Tennis.png";
import editor from "../../Assets/Projects/taquin.png";

import chatify from "../../Assets/Projects/projet-ete-1.PNG";

import dash from "../../Assets/Projects/F2G.jpg";
import rub from "../../Assets/rubiks.png";

import web from "../../Assets/Projects/nb1.1.1.png"

import bitsOfCode from "../../Assets/Projects/connect-the-dots.PNG";
import Poster from "./Posterresearch" // change
function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>

        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={dash}
              isBlog={false}
              title="Mobile Application:Fournitures2Give"          
              description="Design and development of an application for collecting and distributing school supplies."
              
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatify}
              isBlog={false}
              title="Mobile Application "
              description="A versatile educational game designed for various age groups, offering insights into mathematics,
              experimental sciences, geography, and history. It includes additional games, like memory cards"
              
          
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={bitsOfCode}
              isBlog={false}
              title="Serious Game (Connect the dots)"
              description="An educational project focused on the creation of a C++-based game."
              
            />
          </Col>

         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={web}
              isBlog={false}
              title="web platform (EMN AI)"
              description="Development of a web platform where users can create an account and enjoy free
              and easy access to AI features such as text generation, text translation, and summarization."
              
            />
          </Col>
        </Row>
      </Container>
      <Poster />
    </Container>
  );
  
}

export default Projects;


import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import Particle from "../Particle";
import Techstack from "./Techstack";
import Aboutcard from "./AboutCard";
import laptopImg from "../../Assets/me222.png";
import in1 from "../../Assets/Projects/Indaba/jobscertificate.PNG";
import in2 from "../../Assets/Projects/Indaba/jobs1.PNG";
import in3 from "../../Assets/Projects/Indaba/jobs2.PNG";
import in4 from "../../Assets/Projects/Indaba/jobs3.PNG";

import t1 from "../../Assets/Projects/Talan/IEEEcertificate.PNG"
import t2 from "../../Assets/Projects/Talan/IEEExtreme.jpg"
import t3 from "../../Assets/Projects/Talan/377679136_1682404768924400_6875803359216567253_n.png"

import a1 from "../../Assets/Projects/ARE/volunteer1.PNG"
import a2 from "../../Assets/Projects/ARE/volunteer2.PNG"
import a3 from "../../Assets/Projects/ARE/volunteer3.PNG"
import a4 from "../../Assets/Projects/ARE/cps1.PNG"
import a5 from "../../Assets/Projects/ARE/cps2.PNG"
import a6 from "../../Assets/Projects/ARE/cps3.PNG"
import a7 from "../../Assets/Projects/ARE/volun44.jpg"


import Toolstack from "./Toolstack";
import Projects from "./Projects";

import Carousel from 'react-bootstrap/Carousel';

 
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
              Know Who <strong className="purple">I Am</strong>
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
          Professional <strong className="purple">Skillset </strong>
        </h1>


        <Techstack />

        <h1 className="project-heading">
          <strong className="purple">Tools</strong> I use
        </h1>
        <Toolstack />

        <h1 className="project-heading">
          <strong className="purple">JOBS 2022</strong>
        </h1>

        <p style={{ textAlign: "center" }}>

          JOBS is the largest event organized by <span className="purple"> JET (Junior Enterprises of Tunisia),</span> <br /> 
          where members from different junior enterprises in Tunisia can meet. <br/>
          Members from each enterprise get to know the members of other junior enterprises,<br/>
          allows them to create <span className="purple">new professional relationships</span> and consequently improve<br/>
           the external relations of their junior enterprise. This grand event provides students<br/>
            with a <span className="purple">professional experience </span>through challenges and events, allowing them to gain<br/>
             insight into the professional world. They also have access to free training sessions <br/>
             conducted by specialists and experts in various fields in groups, which facilitates communication among them.
        </p>

        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={in3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={in4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          
        </Carousel>
        <br />
        <h1 className="project-heading">
          <strong className="purple">IEEExtreme & IEEE SYP</strong>  </h1>
        <p style={{ textAlign: "center" }}>
        IEEEXtreme 15.0 is a programming competition that hosted over <span className="purple"> 12,900 participants</span> <br/>
         on October 23, 2021. In this competition, all IEEE associations from around the world<br/>
          participated in this <span className="purple">international coding challenge</span>, with each association representing<br/>
          its corresponding school or even the original association.<br/>
          <span className="purple">I also participated in the IEEE SYP event, where I worked within a group for four continuous hours on a project. Afterwards, we gave a presentation in English, during which we explained our idea. We secured the 4th place in the challenge.</span>
        </p>


        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={t3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={t2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={t1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>

        </Carousel>
       
        

      

        
        <br />
        <h1 className="project-heading">
          <strong className="purple">Volunteer Experience</strong>
        </h1>
        <p style={{ textAlign: "center" }}>
          I was the <span className="purple"> Marketing Mission Leader</span> of <span className="purple"> ENSI Junior Entreprise</span> mandate 2022-2023. 
          <br />EJE established in 2006, Established in 2006, EJE's mission is to prepare students for the business world. We have been successful in gaining the satisfaction of our members through educational training, technical projects, and events.
          <br/>I was also among the organizing members of the annual forum at ENSI, which is one of the largest forums in Tunisia. Over 30 companies were present, providing opportunities for numerous students and employees to find jobs and even conduct interviews at our school under our organization. Additionally, I served as a committee member in the RoboCup, which is also a significant event. I was an active member in CPS (Positive and Sociable Citizens) whose aim is to assist orphaned children and others facing challenging circumstances
        </p>
        <Carousel>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a1}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a2}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block"
                src={a3}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a4}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a5}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a6}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="d-flex justify-content-center">
              <img
                className="d-block "
                src={a7}
                alt="First slide"
                width="auto"
                height="600"
              />
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>
    </Container>
  );
}

export default About;

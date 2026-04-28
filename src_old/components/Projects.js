import { Container, Row, Col, Tab, Nav } from "react-bootstrap";
import { ProjectCard } from "./ProjectCard";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg3 from "../assets/img/project3.png";
import projImg4 from "../assets/img/project4.png";
import projImg5 from "../assets/img/project5.png";
import projImg6 from "../assets/img/project6.png";

import expImg1 from "../assets/img/experience1.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Projects = () => {
  const projects = [
    {
      title: "Fruits Blocks",
      description: "Android Game Development",
      imgUrl: projImg6,
      linkUrl: "https://play.google.com/store/apps/details?id=com.CodeConstruct.FruitBlocks&pcampaignid=web_share",
    },
    {
      title: "Generative AI",
      description: "Hallucinations in LLMs",
      imgUrl: projImg3,
      linkUrl: "https://github.com/obedjam/genai_project_d23cse004_m23csa025.git",
    },
    {
      title: "Firstpick App",
      description: "Android App Development",
      imgUrl: projImg4,
      linkUrl: "https://play.google.com/store/apps/details?id=com.firstpick.store&pcampaignid=web_share",
    },
    {
      title: "Firstpick.co.in",
      description: "Web Development",
      imgUrl: projImg1,
      linkUrl: "https://firstpick.co.in",
    },
    {
      title: "FarOrbit",
      description: "Game Development",
      imgUrl: projImg2,
      linkUrl: "https://obed-jamir.itch.io/far-orbit",
    },
    {
      title: "Student Management System",
      description: "Software Development",
      imgUrl: projImg5,
      linkUrl: "https://github.com/obedjam/student_management_system_python.git",
    },
  ];

  const experiences = [
    {
      title: "BankBazaar.com",
      description: "Software Developer Intern",
      imgUrl: expImg1,
      linkUrl: "https://www.bankbazaar.com",
    },
  ];

  return (
    <section className="project" id="projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) =>
                <div className={isVisible ? "" : ""}>
                  <Tab.Container id="projects-tabs" defaultActiveKey="first">
                    <Nav variant="pills" className="nav-pills mb-5 justify-content-center align-items-center" id="pills-tab">
                      <Nav.Item>
                        <Nav.Link eventKey="first">Projects</Nav.Link>
                      </Nav.Item>
                      <Nav.Item>
                        <Nav.Link eventKey="second">Experience</Nav.Link>
                      </Nav.Item>
                    </Nav>
                    <Tab.Content id="slideInUp" className={isVisible ? "" : ""}>
                      <Tab.Pane eventKey="first">
                        <Row>
                          {projects.map((project, index) => (
                            <ProjectCard key={index} {...project} />
                          ))}
                        </Row>
                      </Tab.Pane>
                      <Tab.Pane eventKey="second">
                        <Row>
                          {experiences.map((experience, index) => (
                            <ProjectCard key={index} {...experience} />
                          ))}
                        </Row>
                      </Tab.Pane>
                    </Tab.Content>
                  </Tab.Container>
                </div>
              }
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

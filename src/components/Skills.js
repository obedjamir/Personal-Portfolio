import meter1 from "../assets/img/c++.png";
import meter2 from "../assets/img/java.png";
import meter3 from "../assets/img/python.png";
import meter4 from "../assets/img/cs.png";
import meter5 from "../assets/img/react.png";
import meter6 from "../assets/img/spring.png";
import meter7 from "../assets/img/pytorch.png";
import meter8 from "../assets/img/php.png";
import meter9 from "../assets/img/unity.png";
import meter10 from "../assets/img/android.png";
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';
import { useState } from 'react';
import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

const AnimateOnce = ({ children }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <TrackVisibility once>
      {({ isVisible }) => {
        if (isVisible && !hasAnimated) setHasAnimated(true);
        return (
          <div className={hasAnimated ? "animate__animated animate__fadeIn" : ""}>
            {children}
          </div>
        );
      }}
    </TrackVisibility>
  );
};

export const Skills = () => {
  const responsive = {
    superLargeDesktop: { breakpoint: { max: 4000, min: 3000 }, items: 5 },
    desktop: { breakpoint: { max: 3000, min: 1024 }, items: 4 },
    tablet: { breakpoint: { max: 1024, min: 464 }, items: 2 },
    mobile: { breakpoint: { max: 464, min: 0 }, items: 1 },
  };

  const skillCategories = [
    {
      title: "AI / ML",
      skills: ["PyTorch", "TensorFlow", "Federated Learning", "GradCAM", "GANs"],
      color: "#00d4ff",
    },
    {
      title: "Languages",
      skills: ["Python", "C/C++", "Java", "JavaScript", "C#", "PL/SQL"],
      color: "#7b61ff",
    },
    {
      title: "Web & Mobile",
      skills: ["React.js", "Spring Boot", "Android SDK", "PHP", "HTML/CSS"],
      color: "#ff6b6b",
    },
    {
      title: "Game Dev & Tools",
      skills: ["Unity 3D", "Blender", "AWS", "GCP", "Photoshop"],
      color: "#ffa726",
    },
  ];

  const allSkills = [
    { img: meter7, name: "PyTorch" },
    { img: meter3, name: "Python" },
    { img: meter1, name: "C++" },
    { img: meter2, name: "Java" },
    { img: meter5, name: "React JS" },
    { img: meter6, name: "Spring Boot" },
    { img: meter9, name: "Unity 3D" },
    { img: meter10, name: "Android" },
    { img: meter4, name: "C#" },
    { img: meter8, name: "PHP" },
  ];

  return (
    <section className="skill" id="skills">
      <Container>
        <Row>
          <Col size={12}>
                <div className="section-header">
                  <span className="section-tag">Technical Proficiency</span>
                  <h2>Skills & Expertise</h2>
                  <p className="section-subtitle">
                    A versatile skill set spanning deep learning research, full-stack development, 
                    mobile applications, and interactive media.
                  </p>
                </div>

                <div className="skill-categories">
                  {skillCategories.map((cat, idx) => (
                    <div className="skill-cat-card" key={idx}>
                      <div className="cat-accent" style={{ background: cat.color }}></div>
                      <h4>{cat.title}</h4>
                      <div className="cat-skills">
                        {cat.skills.map((s, i) => (
                          <span key={i} className="cat-skill-tag" style={{ borderColor: cat.color, color: cat.color }}>
                            {s}
                          </span>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="skill-carousel-wrap">
                  <Carousel responsive={responsive} infinite={true} className="skill-slider">
                    {allSkills.map((skill, idx) => (
                      <div className="item" key={idx}>
                        <img src={skill.img} alt={skill.name} />
                        <h5>{skill.name}</h5>
                      </div>
                    ))}
                  </Carousel>
                </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { useState, useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import headerImg from "../assets/img/header-img.png";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

/* We wrap TrackVisibility so the animation fires exactly once */
const AnimateOnce = ({ children, animationClass }) => {
  const [hasAnimated, setHasAnimated] = useState(false);
  return (
    <TrackVisibility once>
      {({ isVisible }) => {
        if (isVisible && !hasAnimated) setHasAnimated(true);
        return (
          <div className={hasAnimated ? `animate__animated ${animationClass}` : ""}>
            {children}
          </div>
        );
      }}
    </TrackVisibility>
  );
};

export const Banner = () => {
  const [loopNum, setLoopNum] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [text, setText] = useState('');
  const [delta, setDelta] = useState(300 - Math.random() * 100);
  const toRotate = ["AI Researcher", "Software Engineer", "Game Developer"];
  const period = 2000;

  useEffect(() => {
    let ticker = setInterval(() => {
      tick();
    }, delta);
    return () => { clearInterval(ticker) };
  }, [text]);

  const tick = () => {
    let i = loopNum % toRotate.length;
    let fullText = toRotate[i];
    let updatedText = isDeleting ? fullText.substring(0, text.length - 1) : fullText.substring(0, text.length + 1);
    setText(updatedText);
    if (isDeleting) {
      setDelta(prevDelta => prevDelta / 2);
    }
    if (!isDeleting && updatedText === fullText) {
      setIsDeleting(true);
      setDelta(period);
    } else if (isDeleting && updatedText === '') {
      setIsDeleting(false);
      setLoopNum(loopNum + 1);
      setDelta(500);
    }
  };

  return (
    <section className="banner" id="home">
      <Container>
        <Row className="align-items-center">
          <Col xs={12} md={6} xl={7}>
            <AnimateOnce animationClass="animate__fadeIn">
                  <div className="banner-label">
                    <span className="label-icon">◆</span>
                    <span>M.Tech-PhD CSE · IIT Jodhpur</span>
                  </div>
                  <h1>
                    Obed Jamir
                    <span className="txt-rotate">
                      <span className="wrap">{text}</span>
                    </span>
                  </h1>
                  <p className="banner-bio">
                    Researching <strong>Heterogeneous Federated Learning</strong>, <strong>Machine Unlearning</strong>, and <strong>Privacy-Preserving Medical Image Analysis</strong> at IIT Jodhpur.
                    I build production-grade applications spanning mobile platforms, game development, and full-stack web — with 5+ published apps on the Google Play Store.
                  </p>
                  <div className="banner-stats">
                    <div className="stat-item">
                      <span className="stat-number">5+</span>
                      <span className="stat-label">Published Apps</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <span className="stat-number">1</span>
                      <span className="stat-label">Journal Paper</span>
                    </div>
                    <div className="stat-divider"></div>
                    <div className="stat-item">
                      <span className="stat-number">IIT</span>
                      <span className="stat-label">Jodhpur</span>
                    </div>
                  </div>
            </AnimateOnce>
          </Col>
          <Col xs={12} md={6} xl={5}>
            <AnimateOnce animationClass="animate__zoomIn">
                  <img src={headerImg} alt="Obed Jamir" className="banner-portrait" />
            </AnimateOnce>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

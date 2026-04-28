import { Container, Row, Col } from "react-bootstrap";
import navIcon1 from "../assets/img/nav-icon1.svg";
import navIcon2 from "../assets/img/nav-icon2.svg";
import navIcon3 from "../assets/img/nav-icon3.svg";

export const Footer = () => {
  return (
    <footer className="footer">
      <Container>
        <Row className="align-items-center">
          <Col size={12} sm={4}>
            <span className="footer-brand">OJ<span className="brand-dot">.</span></span>
          </Col>
          <Col size={12} sm={4} className="text-center">
            <div className="social-icon footer-social">
              <a href="https://www.linkedin.com/in/obed-jamir-596152148" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/obedjam" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Scholar" /></a>
            </div>
          </Col>
          <Col size={12} sm={4} className="text-center text-sm-end">
            <p>© {new Date().getFullYear()} Obed Jamir. All Rights Reserved.</p>
          </Col>
        </Row>
      </Container>
    </footer>
  );
};

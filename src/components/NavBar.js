import { useState, useEffect } from "react";
import { Navbar, Container, Nav } from "react-bootstrap";
import navIcon1 from '../assets/img/nav-icon1.svg';
import navIcon2 from '../assets/img/nav-icon2.svg';
import navIcon3 from '../assets/img/nav-icon3.svg';

export const NavBar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const onUpdateActiveLink = (value) => {
    setActiveLink(value);
  };

  const links = [
    { id: 'home', label: 'Home', href: '#home' },
    { id: 'skills', label: 'Skills', href: '#skills' },
    { id: 'publications', label: 'Publications', href: '#publications' },
    { id: 'ai-projects', label: 'Research', href: '#ai-projects' },
    { id: 'games', label: 'Games & Apps', href: '#games' },
    { id: 'experience', label: 'Experience', href: '#experience' },
  ];

  return (
    <Navbar expand="lg" className={scrolled ? "scrolled" : ""}>
      <Container>
        <Navbar.Brand href="#home" className="nav-brand-text">
          OJ<span className="brand-dot">.</span>
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="basic-navbar-nav">
          <span className="navbar-toggler-icon"></span>
        </Navbar.Toggle>

        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto">
            {links.map(link => (
              <Nav.Link
                key={link.id}
                href={link.href}
                className={activeLink === link.id ? 'active navbar-link' : 'navbar-link'}
                onClick={() => onUpdateActiveLink(link.id)}
              >
                {link.label}
              </Nav.Link>
            ))}
          </Nav>
          <span className="navbar-text">
            <div className="social-icon">
              <a href="https://www.linkedin.com/in/obed-jamir-596152148" target="_blank" rel="noopener noreferrer"><img src={navIcon1} alt="LinkedIn" /></a>
              <a href="https://github.com/obedjam" target="_blank" rel="noopener noreferrer"><img src={navIcon2} alt="GitHub" /></a>
              <a href="https://scholar.google.com" target="_blank" rel="noopener noreferrer"><img src={navIcon3} alt="Scholar" /></a>
            </div>
          </span>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

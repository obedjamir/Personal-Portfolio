import { Container, Row, Col } from "react-bootstrap";
import projImg1 from "../assets/img/project1.png";
import projImg2 from "../assets/img/project2.png";
import projImg4 from "../assets/img/project4.png";
import projImg6 from "../assets/img/project6.png";
import projImg7 from "../assets/img/project7.png";
import projImg8 from "../assets/img/project8.png";
import projImg9 from "../assets/img/project9.png";
import TrackVisibility from 'react-on-screen';

export const GamesDev = () => {
  const games = [
    {
      title: "Fruit Blocks — Cube Puzzle",
      platform: "Android · Google Play",
      description: "3D block puzzle game with fruit-matching mechanics across layers. Vibrant visuals, progressive difficulty, and multi-layer puzzle-solving.",
      tech: ["Unity 3D", "C#", "Android"],
      imgUrl: projImg6,
      link: "https://play.google.com/store/apps/details?id=com.CodeConstruct.FruitBlocks",
      badge: "50+ Downloads",
    },
    {
      title: "Rubik's Master",
      platform: "Android · Google Play",
      description: "Virtual 3D Rubik's Cube with intuitive touch controls, progress tracking, and a user-friendly interface for casual and experienced solvers.",
      tech: ["Unity 3D", "C#", "Android"],
      imgUrl: projImg7,
      link: "https://play.google.com/store/apps/details?id=com.Jamir.RubiksMaster",
      badge: "5K+ Downloads",
    },
    {
      title: "Peaceful Hanoi",
      platform: "Android · Google Play",
      description: "Serene Tower of Hanoi puzzle with ambient soundscapes, calming visuals, and trivia rewards after completing each level. 1K+ downloads.",
      tech: ["Unity 3D", "C#", "Android"],
      imgUrl: projImg8,
      link: "https://play.google.com/store/apps/details?id=com.Jamir.PeacefulHanoi",
      badge: "1K+ Downloads",
    },
    {
      title: "FarOrbit",
      platform: "Web · itch.io",
      description: "Sci-fi 3D action platformer with physics-based movement, enemy AI, and level progression. Published on itch.io.",
      tech: ["Unity 3D", "C#", "Game Design"],
      imgUrl: projImg2,
      link: "https://obed-jamir.itch.io/far-orbit",
      badge: "Published",
    },
  ];

  const apps = [
    {
      title: "Firstpick App & Website",
      platform: "Android · Google Play + Web",
      description: "Affiliate e-commerce aggregator with an Android cashback app and full-stack web platform. Curated gadgets, electronics, and household accessories from trusted retailers.",
      tech: ["Android SDK", "Java", "React.js", "Full-stack"],
      imgUrl: projImg4,
      link: "https://play.google.com/store/apps/details?id=com.firstpick.store",
      badge: "Published",
    },
    {
      title: "MedISA Lab Website",
      platform: "Web · GitHub Pages",
      description: "Designed and developed the official website for the MedISA Lab (Medical Image Synthesis & Analysis) at IIT Jodhpur under Prof. Angshuman Paul.",
      tech: ["Web Development", "GitHub Pages"],
      imgUrl: projImg9,
      link: "https://medisalab.github.io/MedISA",
      badge: "Live",
    },
  ];

  const renderGameCard = (item, idx) => (
    <Col md={6} lg={3} key={idx}>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="game-card">
        {item.imgUrl && (
          <div className="game-card-img">
            <img src={item.imgUrl} alt={item.title} />
          </div>
        )}
        <div className="game-card-body">
          <span className="game-badge">{item.badge}</span>
          <span className="game-platform">{item.platform}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="game-tech-tags">
            {item.tech.map((t, i) => (
              <span key={i} className="tech-tag-alt">{t}</span>
            ))}
          </div>
        </div>
      </a>
    </Col>
  );

  const renderAppCard = (item, idx) => (
    <Col md={6} key={idx}>
      <a href={item.link} target="_blank" rel="noopener noreferrer" className="game-card">
        {item.imgUrl && (
          <div className="game-card-img">
            <img src={item.imgUrl} alt={item.title} />
          </div>
        )}
        <div className="game-card-body">
          <span className="game-badge">{item.badge}</span>
          <span className="game-platform">{item.platform}</span>
          <h3>{item.title}</h3>
          <p>{item.description}</p>
          <div className="game-tech-tags">
            {item.tech.map((t, i) => (
              <span key={i} className="tech-tag-alt">{t}</span>
            ))}
          </div>
        </div>
      </a>
    </Col>
  );

  return (
    <section className="games-dev" id="games">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header">
                    <span className="section-tag">Interactive Media</span>
                    <h2>Games & Android Apps</h2>
                    <p className="section-subtitle">
                      Published games and production Android applications — from puzzle games with 5K+ 
                      downloads to full e-commerce platforms on the Google Play Store.
                    </p>
                  </div>

                  <h3 className="subsection-title">
                    <span className="subsection-icon">🎮</span> Game Development
                  </h3>
                  <Row className="mb-5">
                    {games.map(renderGameCard)}
                  </Row>

                  <h3 className="subsection-title">
                    <span className="subsection-icon">📱</span> Web & Mobile Apps
                  </h3>
                  <Row>
                    {apps.map(renderAppCard)}
                  </Row>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Publications = () => {
  const publications = [
    {
      title: "Feature-Driven Layer Specialization for Label Heterogeneous Federated Learning",
      venue: "Neurocomputing, Vol. 670, 14 March 2026, 132620 (Elsevier)",
      year: "2026",
      authors: "Obed Jamir, Angshuman Paul",
      type: "Journal Article",
      description: "Designed a feature-driven layer specialization mechanism that selectively freezes or updates model layers by analysing salient regions in Class Activation Maps (CAMs), preserving client-specific representations while enabling global knowledge sharing. Evaluated across CIFAR-10, CIFAR-100, CINIC-10, NIH ChestX-ray14, CheXpert, and MIMIC-CXR under varying non-IID label distributions.",
      tags: ["Federated Learning", "Non-IID", "CAMs", "Layer Specialization", "Medical Imaging"],
      link: "https://doi.org/10.1016/j.neucom.2026.132620",
    },
  ];

  return (
    <section className="publications" id="publications">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "" : ""}>
                  <div className="section-header">
                    <span className="section-tag">Academic Work</span>
                    <h2>Publications & Research</h2>
                    <p className="section-subtitle">
                      My research focuses on heterogeneous federated learning, machine unlearning, and
                      privacy-preserving medical image analysis at IIT Jodhpur under the MedISA Lab.
                    </p>
                  </div>

                  <div className="pub-list">
                    {publications.map((pub, idx) => (
                      <a href={pub.link} target="_blank" rel="noopener noreferrer" className="pub-card" key={idx}>
                        <div className="pub-year-badge">{pub.year}</div>
                        <div className="pub-content">
                          <span className="pub-type">{pub.type}</span>
                          <h3 className="pub-title">{pub.title}</h3>
                          <p className="pub-authors">{pub.authors}</p>
                          <p className="pub-venue">{pub.venue}</p>
                          <p className="pub-desc">{pub.description}</p>
                          <div className="pub-tags">
                            {pub.tags.map((tag, i) => (
                              <span key={i} className="pub-tag">{tag}</span>
                            ))}
                          </div>
                        </div>
                        <div className="pub-arrow">→</div>
                      </a>
                    ))}
                  </div>

                  <div className="pub-cta">
                    <p>Currently working on further research in federated learning and privacy-preserving medical image analysis.</p>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

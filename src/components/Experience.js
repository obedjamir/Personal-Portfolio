import { Container, Row, Col } from "react-bootstrap";
import TrackVisibility from 'react-on-screen';

export const Experience = () => {
  const education = [
    {
      institution: "Indian Institute of Technology, Jodhpur",
      degree: "M.Tech-PhD in Computer Science & Engineering",
      period: "2023 – 2027 (Expected)",
      focus: "Research: Heterogeneous Federated Learning, Machine Unlearning, Privacy-Preserving Medical Image Analysis",
      marker: "edu",
    },
    {
      institution: "Lovely Professional University, Phagwara",
      degree: "B.Tech (Hons) in Computer Science & Engineering",
      period: "Graduated Aug 2021",
      focus: "",
      marker: "edu",
    },
  ];

  const experiences = [
    {
      company: "MedISA Lab, IIT Jodhpur",
      role: "Graduate Research Assistant",
      period: "2023 – Present",
      description: "Working under Prof. Angshuman Paul on medical image synthesis, analysis, and quality enhancement. Published in Neurocomputing (Elsevier, 2026). Designed and developed the lab website at medisalab.github.io/MedISA.",
      tech: ["PyTorch", "Federated Learning", "Medical Imaging", "GradCAM"],
      link: "https://medisalab.github.io/MedISA",
      marker: "exp",
    },
    {
      company: "BankBazaar.com, Chennai",
      role: "Software Developer Intern",
      period: "2022",
      description: "Developed and maintained CRM software features using Java Spring Boot and Groovy. Delivered strong performance resulting in a full-time Software Developer offer. Commended for code quality and delivery speed.",
      tech: ["Java", "Spring Boot", "Groovy", "CRM"],
      link: "https://www.bankbazaar.com",
      marker: "exp",
    },
  ];

  const hackathons = [
    {
      name: "Nagaland Police Hackathon 2021",
      result: "Runner-Up · Top 2, State-Level",
      description: "Designed an integrated check gate management system using computer vision on live CCTV feeds, with a central dashboard for district-level vehicle data logistics.",
    },
    {
      name: "Smart India Hackathon 2019",
      result: "Participant",
      description: "Built a mental health diagnostic tool using ML algorithms to analyse behavioural data and flag potential issues for clinical referral.",
    },
    {
      name: "Microsoft Hackathon 1.0 (2018)",
      result: "University Level Finalist",
      description: "Built a real-time blood donor-recipient matching Android app using Firebase, reducing emergency search time.",
    },
  ];

  return (
    <section className="experience" id="experience">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header light-header">
                    <span className="section-tag tag-light">Background</span>
                    <h2>Experience & Education</h2>
                  </div>

                  <div className="timeline">
                    <h3 className="timeline-section-title">Education</h3>
                    {education.map((edu, idx) => (
                      <div className="timeline-item" key={`edu-${idx}`}>
                        <div className="timeline-marker edu-marker"></div>
                        <div className="timeline-content">
                          <span className="timeline-period">{edu.period}</span>
                          <h3>{edu.institution}</h3>
                          <p className="timeline-role">{edu.degree}</p>
                          {edu.focus && <p className="timeline-desc">{edu.focus}</p>}
                        </div>
                      </div>
                    ))}

                    <h3 className="timeline-section-title">Professional Experience</h3>
                    {experiences.map((exp, idx) => (
                      <a href={exp.link} target="_blank" rel="noopener noreferrer" className="timeline-item timeline-link" key={`exp-${idx}`}>
                        <div className="timeline-marker exp-marker"></div>
                        <div className="timeline-content">
                          <span className="timeline-period">{exp.period}</span>
                          <h3>{exp.company}</h3>
                          <p className="timeline-role">{exp.role}</p>
                          <p className="timeline-desc">{exp.description}</p>
                          <div className="timeline-tags">
                            {exp.tech.map((t, i) => (
                              <span key={i} className="tech-tag">{t}</span>
                            ))}
                          </div>
                        </div>
                      </a>
                    ))}

                    <h3 className="timeline-section-title">Hackathons</h3>
                    {hackathons.map((hack, idx) => (
                      <div className="timeline-item" key={`hack-${idx}`}>
                        <div className="timeline-marker hack-marker"></div>
                        <div className="timeline-content">
                          <span className="timeline-period hackathon-badge">{hack.result}</span>
                          <h3>{hack.name}</h3>
                          <p className="timeline-desc">{hack.description}</p>
                        </div>
                      </div>
                    ))}
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

import { Container, Row, Col } from "react-bootstrap";
import projImg3 from "../assets/img/project3.png";
import TrackVisibility from 'react-on-screen';

export const AIProjects = () => {
  const projects = [
    {
      title: "Federated Learning with Feature-Driven Layer Specialization",
      category: "Published Research · Neurocomputing 2026",
      year: "2025–2026",
      description: "Designed a feature-driven layer specialization mechanism that selectively freezes or updates model layers by analysing salient regions in Class Activation Maps (CAMs). Evaluated across CIFAR-10, CIFAR-100, CINIC-10, NIH ChestX-ray14, CheXpert, and MIMIC-CXR with consistent improvements over FedAvg and FedProx baselines.",
      tech: ["PyTorch", "Federated Learning", "CAMs", "Medical Imaging"],
      link: "https://github.com/obedjamir/FD-Fed.git",
    },
    {
      title: "Explainable AI — GradCAM on Chest X-Ray Pathology Detection",
      category: "Deep Learning · IIT Jodhpur",
      year: "2025",
      description: "Fine-tuned EfficientNet-B0 on NIH ChestX-ray14 (112K+ X-rays, 14 pathology labels) for multi-label thoracic pathology classification. Implemented GradCAM to generate localization heatmaps and validated alignment against radiologist-annotated bounding boxes.",
      tech: ["PyTorch", "EfficientNet", "GradCAM", "NIH ChestX-ray14"],
      link: "https://github.com/obedjam",
    },
    {
      title: "Skin Lesion Synthesis from Boundary Sketches — Conditional GAN",
      category: "Deep Learning · IIT Jodhpur",
      year: "2024",
      description: "Built a boundary sketch-conditioned Conditional GAN that synthesises realistic dermoscopic lesion images from sketches with one-hot class conditioning across ISIC categories. Evaluated with FID and CNN classifier accuracy benchmarks.",
      tech: ["PyTorch", "Conditional GAN", "FID", "ISIC Dataset"],
      link: "https://github.com/obedjam",
    },
    {
      title: "LLM Hallucination Detection & Mitigation Pipeline",
      category: "Generative AI · IIT Jodhpur",
      year: "2024",
      description: "Built a hallucination detection pipeline for LLaMA-3 using token-level logit analysis. Implemented self-validation, external Bing Search API grounding, and HHEM model-based validation. Significantly reduced hallucination rate on TruthfulQA while maintaining fluency.",
      tech: ["Python", "LLaMA-3", "Bing API", "HHEM", "TruthfulQA"],
      link: "https://github.com/obedjam/genai_project_d23cse004_m23csa025.git",
      imgUrl: projImg3,
    },
    {
      title: "Transformer vs. CNN for Audio Classification (ESC-10)",
      category: "Deep Learning · IIT Jodhpur",
      year: "2024",
      description: "Implemented AudioCNN and Multi-Head Self-Attention Transformer on raw 16kHz waveforms from ESC-10. Benchmarked under 4-fold cross-validation with multiclass ROC-AUC, demonstrating attention's advantage in capturing global temporal context.",
      tech: ["PyTorch", "Transformers", "CNN", "Audio Classification"],
      link: "https://github.com/obedjam",
    },
  ];

  return (
    <section className="ai-projects" id="ai-projects">
      <Container>
        <Row>
          <Col size={12}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header light-header">
                    <span className="section-tag tag-light">Deep Learning (PyTorch)</span>
                    <h2>Research & AI Projects</h2>
                    <p className="section-subtitle">
                      Applied deep learning research spanning federated learning, explainable AI, 
                      generative models, and NLP — all built with PyTorch.
                    </p>
                  </div>

                  <div className="ai-grid">
                    {projects.map((project, idx) => (
                      <a href={project.link} target="_blank" rel="noopener noreferrer" className="ai-card" key={idx}>
                        <div className="ai-card-header">
                          <span className="ai-card-year">{project.year}</span>
                          <span className="ai-card-category">{project.category}</span>
                        </div>
                        <div className="ai-card-body">
                          <h3>{project.title}</h3>
                          <p>{project.description}</p>
                          <div className="ai-tech-tags">
                            {project.tech.map((t, i) => (
                              <span key={i} className="tech-tag">{t}</span>
                            ))}
                          </div>
                        </div>
                      </a>
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

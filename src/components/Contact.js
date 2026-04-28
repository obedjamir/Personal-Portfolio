import { useState } from "react";
import { Container, Row, Col } from "react-bootstrap";
import contactImg from "../assets/img/contact-img.svg";
import 'animate.css';
import TrackVisibility from 'react-on-screen';

export const Contact = () => {
  const formInitialDetails = {
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    message: ''
  };
  const [formDetails, setFormDetails] = useState(formInitialDetails);
  const [buttonText, setButtonText] = useState('Send Message');
  const [status, setStatus] = useState({});

  const onFormUpdate = (category, value) => {
    setFormDetails({ ...formDetails, [category]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setButtonText("Sending...");
    try {
      let response = await fetch("http://localhost:5000/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json;charset=utf-8" },
        body: JSON.stringify(formDetails),
      });
      let result = await response.json();
      setFormDetails(formInitialDetails);
      if (result.code === 200) {
        setStatus({ success: true, message: 'Message sent successfully' });
      } else {
        setStatus({ success: false, message: 'Something went wrong, please try again later.' });
      }
    } catch (err) {
      setStatus({ success: false, message: 'Could not connect to server.' });
    }
    setButtonText("Send Message");
  };

  return (
    <section className="contact" id="connect">
      <Container>
        <Row className="align-items-center">
          <Col size={12} md={5}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <img src={contactImg} alt="Contact" className="contact-illustration" />
                  <div className="contact-info-cards">
                    <div className="contact-info-item">
                      <span className="contact-info-label">Email</span>
                      <span className="contact-info-value">obedjamir123@gmail.com</span>
                    </div>
                    <div className="contact-info-item">
                      <span className="contact-info-label">Location</span>
                      <span className="contact-info-value">IIT Jodhpur, Rajasthan, India</span>
                    </div>
                    <div className="contact-info-item">
                      <span className="contact-info-label">Hometown</span>
                      <span className="contact-info-value">Nagaland, India</span>
                    </div>
                  </div>
                </div>
              )}
            </TrackVisibility>
          </Col>
          <Col size={12} md={7}>
            <TrackVisibility>
              {({ isVisible }) => (
                <div className={isVisible ? "animate__animated animate__fadeIn" : ""}>
                  <div className="section-header">
                    <span className="section-tag">Let's Connect</span>
                    <h2>Get In Touch</h2>
                    <p className="section-subtitle">
                      Interested in collaboration, research opportunities, or just want to say hello? 
                      I'd love to hear from you.
                    </p>
                  </div>
                  <div className="contact-form-wrap">
                    <form onSubmit={handleSubmit}>
                      <Row>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.firstName} placeholder="First Name" onChange={(e) => onFormUpdate('firstName', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="text" value={formDetails.lastName} placeholder="Last Name" onChange={(e) => onFormUpdate('lastName', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="email" value={formDetails.email} placeholder="Email Address" onChange={(e) => onFormUpdate('email', e.target.value)} />
                        </Col>
                        <Col size={12} sm={6} className="px-1">
                          <input type="tel" value={formDetails.phone} placeholder="Phone No." onChange={(e) => onFormUpdate('phone', e.target.value)} />
                        </Col>
                        <Col size={12} className="px-1">
                          <textarea rows="6" value={formDetails.message} placeholder="Your Message" onChange={(e) => onFormUpdate('message', e.target.value)}></textarea>
                          <button type="submit"><span>{buttonText}</span></button>
                        </Col>
                        {status.message && (
                          <Col>
                            <p className={status.success === false ? "danger" : "success"}>{status.message}</p>
                          </Col>
                        )}
                      </Row>
                    </form>
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

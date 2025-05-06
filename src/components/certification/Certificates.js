import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import CertificateCard from "./CertificateCard";
import Particle from "../Particle";
import cert1 from "../../Assets/Certificates/cert1.jpg";
import cert2 from "../../Assets/Certificates/cert2.jpg";
import cert3 from "../../Assets/Certificates/cert3.jpg";
import cert4 from "../../Assets/Certificates/cert4.jpg";
import cert5 from "../../Assets/Certificates/cert5.jpg";
import cert6 from "../../Assets/Certificates/cert6.jpg";
import cert7 from "../../Assets/Certificates/cert7.jpg";
import cert8 from "../../Assets/Certificates/cert8.jpg";
import cert9 from "../../Assets/Certificates/cert9.jpg";
import cert10 from "../../Assets/Certificates/cert10.jpg";
import cert11 from "../../Assets/Certificates/cert11.jpg";
import cert12 from "../../Assets/Certificates/cert12.png";

function Certificates() {
  return (
    <Container fluid className="certificate-section bg-dark py-5">
      <Particle />
      <Container>
        <h1 className="text-center text-white mb-4 mt-5">
          My Recent <strong className="text-primary">Certificates</strong>
        </h1>
        <p className="text-center text-light mb-5">
          Here are a few certificates I’ve earned recently.
        </p>
        <Row className="g-4 justify-content-center">
          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert1}
              title="Nptel - Fundamentals of Artificial Intelligence"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert2}
              title="Nptel - Management Information Systems"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert3}
              title="Machine Learning Specialization"
            />
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert4}
              title="Data Science Internship"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert5}
              title="Web Development Internship"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert6}
              title="Data Analyst Internship"
            />
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert7}
              title="JavaScript Algorithms"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert8}
              title="Nasscom - Big Data"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert9}
              title="AI for everyone"
            />
          </Col>
        </Row>

        <Row className="g-4 justify-content-center">
          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert10}
              title="Business Pitch"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert11}
              title="Paper Presentation"
            />
          </Col>

          <Col md={4} className="d-flex align-items-stretch">
            <CertificateCard
              imgPath={cert12}
              title="Engineering Graphics And Design"
            />
          </Col>
        </Row>
        
      </Container>
    </Container>
  );
}

export default Certificates;

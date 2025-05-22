import React from "react";
import { Col, Row } from "react-bootstrap";
import { DiGit } from "react-icons/di";
import { SiGithub, SiMicrosoftoffice } from "react-icons/si";
import { GiSettingsKnobs } from "react-icons/gi"; // using a settings icon for Fusion 360 as no direct icon available
import { IoLogoTableau } from "react-icons/io5";

function Toolstack() {
  return (
    <Row style={{ justifyContent: "center", paddingBottom: "50px" }}>
      <Col xs={4} md={2} className="tech-icons">
        <DiGit />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiGithub />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <SiMicrosoftoffice />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <GiSettingsKnobs />
      </Col>
      <Col xs={4} md={2} className="tech-icons">
        <IoLogoTableau />
      </Col>
    </Row>
  );
}

export default Toolstack;

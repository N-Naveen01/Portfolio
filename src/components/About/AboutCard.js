import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hello everyone! I am <span className="purple">Naveen N</span> from the{" "}
            <span className="purple">
              Computer Science and Business Systems department at KPR Institute of Engineering and Technology, Coimbatore
            </span>.
            <br />
            I completed my schooling at Vidhya Vikashini Matric Higher Secondary School, Tiruppur.
            <br />
            10th Grade: <span className="purple">92.2%</span>
            <br />
            12th Grade: <span className="purple">98%</span>
            <br />
            College CGPA: <span className="purple">8.89</span>
            <br />
            <br />
            I am a dedicated and motivated individual with a passion for web technology, and software development.
            My enthusiasm for applying analytical and technical skills to real-world projects drives me to constantly learn and improve.
            <br />
            I enjoy collaborating with teams and actively contributing to achieving shared objectives.
          </p>

          <ul>
            <li className="about-activity">
              <ImPointRight /> Email: nnaveenofficial01@gmail.com
            </li>
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Strive to build things that make a difference!"
          </p>
          <footer className="blockquote-footer">Naveen N</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

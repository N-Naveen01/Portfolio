import React from "react";
import Card from "react-bootstrap/Card";
import { FaCertificate } from "react-icons/fa";
import Button from "react-bootstrap/Button";

function CertificateCard({ imgPath, title }) {
  return (
    <Card className="bg-dark text-white rounded-4 shadow-lg p-3 w-100 border-0 hover-card" >
      <Card.Img
        variant="top"
        src={imgPath}
        alt="certificate-img"
        className="rounded-3"
        style={{ height: "250px", objectFit: "cover" }}
      />
      <Card.Body className="d-flex flex-column justify-content-between">
        <Card.Title className="text-center">{title}</Card.Title>
        <Button
          variant="primary"
          href={imgPath}
          target="_blank"
          className="mt-3 w-100"
        >
          <FaCertificate /> &nbsp; View Certificate
        </Button>
      </Card.Body>
    </Card>
  );
}

export default CertificateCard;

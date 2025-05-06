import React from "react";
import { Container, Row, Col, Form, Button } from "react-bootstrap";
import Particle from "./Particle";

function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();
    
    const form = e.target;
    const iframe = document.createElement("iframe");
    
    // Make the iframe hidden
    iframe.style.display = "none";
    iframe.name = "hidden_iframe";
    
    document.body.appendChild(iframe);
    
    form.target = "hidden_iframe"; // Set the form target to the hidden iframe
    
    // Submit the form as usual, it will send the email without redirecting
    form.submit();

    // Show a popup message after a short delay
    setTimeout(() => {
      alert("Message sent successfully!");
      // Reset the form after submission
      form.reset();
    }, 2000); // 2 seconds delay (adjust as needed)
  };

  return (
    <Container fluid className="contact-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          <strong className="purple">Contact</strong> Me
        </h1>
        <p style={{ color: "white" }}>
          Feel free to reach out to me by filling the form below!
        </p>
        <Row style={{ justifyContent: "center", padding: "10px" }}>
          <Col md={6}>
            <form
              action="https://formsubmit.co/nnaveenofficial01@gmail.com" // Your FormSubmit email URL
              method="POST"
              onSubmit={handleSubmit}
            >
              <Form.Group className="mb-3" controlId="formBasicName">
                <Form.Control
                  type="text"
                  name="name"
                  placeholder="Your Name"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicEmail">
                <Form.Control
                  type="email"
                  name="email"
                  placeholder="Your Email"
                  required
                />
              </Form.Group>

              <Form.Group className="mb-3" controlId="formBasicMessage">
                <Form.Control
                  as="textarea"
                  rows={5}
                  name="message"
                  placeholder="Your Message"
                  required
                />
              </Form.Group>

              {/* Optional hidden settings for FormSubmit */}
              <input type="hidden" name="_captcha" value="false" />
              <input
                type="hidden"
                name="_next"
                value="http://localhost:3000/thank-you"
              />

              <Button variant="primary" type="submit">
                Send Message
              </Button>
            </form>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Contact;

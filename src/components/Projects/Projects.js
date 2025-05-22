import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import imdb from "../../Assets/Projects/imdb.png";
import chatbot from "../../Assets/Projects/chatbot.png";
import insta from "../../Assets/Projects/insta.png";
import expense from "../../Assets/Projects/expense.png";
import weather from "../../Assets/Projects/weather.png";
import image from "../../Assets/Projects/image.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={imdb}
              isBlog={false}
              title="Movify"
              description="Developed a movie recommendation platform using the IMDb API and React.js. Features include dynamic search, fetching real-time movie data, and personalized movie suggestions based on user preferences for an engaging browsing experience."
              ghLink="https://github.com/N-Naveen01/Movie_Recommendation"
              //demoLink="https://movie-recommendation-blond.vercel.app/"
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={image}
              isBlog={false}
              title="Image Generator"
              description="Developed an AI-powered image generation platform using the Clipdrop API for high-quality AI image creation. Integrated Razorpay payment gateway to enable secure and seamless payments before generating premium images. Users can input prompts, complete the payment via Razorpay, and receive generated images instantly. Ensured smooth backend integration and asynchronous processing for real-time response. The system supports multiple image styles and formats with a user-friendly interface."
              ghLink="https://github.com/N-Naveen01/Image-Generator"
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot}
              isBlog={false}
              title="ChatBot"
              description="Developed an interactive chatbot application utilizing the Gemini API and JavaScript. The bot engages with users in real-time, providing automated responses based on user input and delivering personalized conversations. Integrated advanced natural language processing (NLP) capabilities from the Gemini API to enhance user interaction and improve the bot's accuracy in understanding and responding to queries. Designed to offer a smooth and responsive user experience with a user-friendly interface."
              ghLink="https://github.com/N-Naveen01/ChatBot"
              // demoLink="https://www.youtube.com/watch?v=dQw4w9WgXcQ&ab_channel=RickAstley" <--------Please include a demo link here
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={insta}
              isBlog={false}
              title="Instagram Clone"
              description="Developed an Instagram-inspired social media application using React.js. Supports user authentication, image uploading, real-time posts display, likes, and comments functionality. Focused on delivering a seamless and responsive UI with dynamic content updates to mimic real Instagram user experience."
              ghLink="https://github.com/N-Naveen01/Instagram_Clone"
              //demoLink="https://blogs.soumya-jit.tech/"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={weather}
              isBlog={false}
              title="Weather Forecast"
              description="Built a responsive weather forecasting application using JavaScript and the OpenWeather API. Fetches real-time weather data based on user location or city search and displays 5-day forecasts with dynamic visuals for temperature, humidity, and weather conditions. Designed for an interactive and seamless user experience across all devices."
              ghLink="https://github.com/N-Naveen01/weather-prediction"
              //demoLink="https://editor.soumya-jit.tech/"              
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={expense}
              isBlog={false}
              title="Expense Tracker"
              description="Built a full-stack expense tracker application using the MERN stack (MongoDB, Express.js, React, Node.js). Allows users to securely add, track, and manage personal expenses with real-time data synchronization. Users can categorize their expenses, set budgets, and view detailed insights with visualizations for better financial management. Designed for a responsive and intuitive user experience across all devices, ensuring seamless performance and ease of use."
              ghLink="https://github.com/N-Naveen01/expense_tracker"
              //demoLink="https://plant49-ai.herokuapp.com/"
            />
          </Col>

          

          
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

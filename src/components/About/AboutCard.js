import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="grey">Shivang Srivastava </span>
            from <span className="purple"> Lucknow, Uttar Pradesh, India.</span>
            <br /> I am a Pre-final year student pursuing BTech in Computer Science with Specialization in Artificial Intelligence and Machine learning From GLA University.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <ImPointRight /> Listening Podcast
            
            </li>
            <li className="about-activity">
              <ImPointRight /> Travelling
            </li>   
          </ul>

          <p style={{ color: "rgb(155 126 172)" }}>
            "Patience is the silent architect of resilience, constructing strength in the quiet moments of waiting"{" "}
          </p>
          <footer className="blockquote-footer">Shivang Srivastava</footer>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;

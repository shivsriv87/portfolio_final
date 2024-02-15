import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import todo from "../../Assets/Projects/todo.png"
import emotion from "../../Assets/Projects/emotion.png";
import watches from "../../Assets/Projects/watches.png";
import travel from "../../Assets/Projects/travel.png";
import gym from   "../../Assets/Projects/gym.png"
import prompt from "../../Assets/Projects/prompt.png"
import chatbot1 from "../../Assets/Projects/chatbot1.png"
import medimage from "../../Assets/Projects/medimage.png"
import PriceWise from "../../Assets/Projects/PriceWise.png"

function Projects() {
  return (
    <Container fluid className="project-section">
       <div>
              <div className="staranim">
                <div id="stars" />
                <div id="stars2" />
                <div id="stars3" />
              </div>
              <div className="waveWrapper waveAnimation">
                <div className="waveWrapperInner bgTop">
                  <div className="wave waveTop" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-top.png")'}} />
                </div>
                <div className="waveWrapperInner bgMiddle">
                  <div className="wave waveMiddle" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-mid.png")'}} />
                </div>
                <div className="waveWrapperInner bgBottom">
                  <div className="wave waveBottom" style={{backgroundImage: 'url("http://front-end-noobs.com/jecko/img/wave-bot.png")'}} />
                </div>
              </div>
            </div>

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
              imgPath={PriceWise}
              isBlog={false}
              title="PriceWise"
              description="I developed a web application using Next.js, incorporating a scraper that extracts product prices from various e-commerce platforms. The application seamlessly displays these prices on its interface, enhancing user convenience. By leveraging Next.js for robust web development and implementing a versatile scraper, the project achieves a dynamic and user-friendly experience, providing real-time product pricing information from diverse online retailers."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={prompt}
              isBlog={false}
              title="Promptopia "
              description="Promptopia is a Next.js-based full-stack application designed for AI enthusiasts to share and discover prompts for various AI tools. Users can submit prompts, engage with a community through features like comments and likes, and seamlessly integrate prompts into AI tools. The platform prioritizes user authentication, security, and responsive design, offering a user-friendly interface for prompt display. Regular testing, performance optimization, and comprehensive documentation enhance the reliability and usability of this innovative AI prompt-sharing platform."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>


          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={travel}
              isBlog={false}
              title="Travel website Frontend "
              description="Created a front-end application, Hi Link, for a travel website, employing cutting-edge technologies such as Next.js and Tailwind CSS. The project not only demonstrated proficiency in utilizing the latest frameworks but also involved hands-on experience in prototype development. Hi Link stands out with its responsive design and dynamic user interface, providing an immersive experience for users exploring travel options. The use of Next.js ensures optimal performance, while Tailwind CSS enhances the project's styling and aesthetic appeal."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>


          
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={medimage}
              isBlog={false}
              title="Virtual MedImaging "
              description="Built a comprehensive MERN Stack application enabling disease prediction by analyzing MRI and CT scan images. The application employs advanced algorithms to determine if a person is suffering from a specified disease through image scanning. Additionally, it provides enhanced versions of the MRI and CT scan images, offering a detailed and improved visual representation for medical professionals. This innovative solution merges technology and healthcare, enhancing diagnostic capabilities for more accurate and efficient patient care."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>





        <Col md={4} className="project-card">
            <ProjectCard
              imgPath={emotion}
              isBlog={false}
              title="Face Recognition and Emotion Detection"
              description="Developed a Convolutional Neural Network (CNN) classifier using Keras and TensorFlow backend, trained on the 'FER-2013 dataset' to predict human emotions. Achieved a highest accuracy of 60.1% with the model. Integrated OpenCV for face detection in images, allowing the classifier to analyze and predict emotions based on recognized faces. This innovative system combines deep learning and computer vision to accurately identify and interpret human emotions from facial expressions, offering potential applications in emotion recognition technology."
              // demoLink="https://blogs.soumya-jit.tech/"      <--------Please include a demo link here 
            />
          </Col>


         

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={todo}
              isBlog={false}
              title="TO-DO List"
              description=
              "Introducing our React-based To-Do List App, your go-to organizer for efficient task management. Experience seamless task creation and tracking with our user-friendly interface. Stay organized effortlessly as you add, edit, and complete tasks in real-time. Elevate your productivity with our responsive and intuitive To-Do List App, making daily planning a breeze."
              // ghLink="https://github.com/shivsriv87/ToDoList-Using-React-and-Next-Js"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={chatbot1}
              isBlog={false}
              title="University Chatbot"
              description="Our university chatbot offers a convenient and efficient solution for all queries related to the institution. Acting as a one-stop hub, it delivers instant assistance, streamlining information access and significantly enhancing the overall student experience. With its responsiveness and efficiency, the chatbot provides users with effortless access to answers, making it a valuable tool for seamless communication within the university community."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={watches}
              isBlog={false}
              title="Ecommerce for Watches "
              description="I developed a visually appealing e-commerce website frontend dedicated to watches, utilizing HTML, CSS, and JavaScript. The design prioritizes user-friendliness and incorporates responsive elements for optimal viewing across devices. The website ensures a seamless shopping experience with intuitive navigation and interactive features, allowing users to explore and purchase a diverse array of watches effortlessly. The combination of HTML, CSS, and JavaScript contributes to a dynamic online platform, enhancing both the presentation and functionality of the e-commerce website, thereby elevating the overall user experience."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>
         
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={gym}
              isBlog={false}
              title="GYM WESBITE"
              description="I created a dynamic gym website using HTML, CSS, and JavaScript, featuring an engaging user interface with responsive design for seamless navigation across devices. The site incorporates interactive elements such as class schedules, membership details, and contact forms, improving overall user experience. Utilizing JavaScript enables real-time updates and user-friendly interactions, enhancing functionality. The platform provides an aesthetically pleasing and dynamic space for gym enthusiasts, allowing them to explore services and engage with the fitness community effectively. The combination of technologies results in a visually appealing, feature-rich website catering to the diverse needs of fitness enthusiasts."
              // ghLink="https://github.com/shivsriv87/bot-pyrates"
      
            />
          </Col>


        


           


           
          



          




          

          

          
          
          
           
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;

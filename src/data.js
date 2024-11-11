// src/data.js

import img1 from "./images/DBQueryAIAssistant.png";
import img2 from "./images/Resume Insight Pro.png";
import img3 from "./images/ATM- Simulator system.png";
import img4 from "./images/AERS.png";
import img6 from "./images/Artimacy.png";
import img7 from "./images/ShareUp.png";

export const Experience = [
  {
    id: 1,
    date: "June 2024",
    icon: "IoCodeWorking",
    title: "Futerense Technologies Pvt. Ltd",
    location: "AI/ML Intern",
    description:
      "During my time at Futurense Technologies Pvt. Ltd., I enhanced my Python and SQL skills through hands-on assignments and real-world case studies, gaining expertise in machine learning algorithms and model deployment. I developed a sentiment analysis model to classify tweets, achieving 95% accuracy using Multinomial Naive Bayes on a sentiment-labeled dataset, solidifying my understanding of NLP and machine learning applications.",
  },
  {
    id: 2,
    date: "April 2024",
    icon: "IoCodeWorking",
    title: "Honeywell Hackathon",
    description:
      "In the 24-hour Honeywell Hackathon, my team and I developed a Retrieval-Augmented Generation (RAG) chatbot to assist users with hospital-related queries, such as charges, room rents, and pre-admission form filling. We fine-tuned a T5 model by extracting questions and answers from the AIIMS user manual and used the Pinecone vector database to store vectors. The chatbot also featured a pre-admission form submission, with data stored in MongoDB for seamless patient admission.",
  },
  {
    id: 3,
    date: "April 2024",
    icon: "IoCodeWorking",
    title: "ZIGBEE Club JGI",
    location: "Workshop on Robotics and Automation!",
    description:
      "The Robotics Workshop was a two-day, hands-on experience in which we developed four robotic projects using Arduino Uno. We built an Obstacle Avoidance Robot equipped with ultrasonic sensors for autonomous navigation, a Line Follower Robot using IR sensors to track paths, a Bluetooth Controlled Robot operable via smartphone, and a Human Follower Robot with IR and ultrasonic sensors to detect and follow a person.",
  },
];

export const Projects = [
  {
    id: 1,
    name: "ShareUp",
    imageSrc: img7,
    techs: "Python, Django, Bootstrap, SQLite, Amazon S3",
    github: "https://github.com/sadikashrafi07/ShareUp",
  },
  {
    id: 2,
    name: "Resume Insight Pro",
    imageSrc: img2,
    techs: "Python, Streamlit, Html, Css, Crew AI, gpt-4-0125-preview, LinguaLogic, EC2, Web3 Forms",
    github: "https://github.com/sadikashrafi07/Resume-Insight-Pro",
  },
  {
    id: 3,
    name: "DBQuery AI Assistant",
    imageSrc: img1,
    techs: "Python, Streamlit, LangChain, SQLAlchemy, SQLite, MySQL, ChatGroq",
    github: "https://github.com/sadikashrafi07/DBQuery-AI-Assistant",
  },
  {
    id: 4,
    name: "Banking Management System",
    imageSrc: img3,
    techs: "Java, MySQL, JDBC, NetBeans",
    github: "https://github.com/sadikashrafi07/ATM--Simulator-System",
  },
  {
    id: 5,
    name: "AERS",
    imageSrc: img4,
    techs: "Python, VGG16, Custom CNNs, OpenCV, Keras, TensorFlow, PIL",
    github: "https://github.com/sadikashrafi07/Advanced-Emotion-Recognition-System-AERS-",
  },
  {
    id: 6,
    name: "Artimacy",
    imageSrc: img6,
    techs: "JavaScript, HTML, CSS, Bootstrap, PHP, phpMyAdmin",
    github: "https://github.com/sadikashrafi07/Artimacy-Ecommerce",
  },
];

export const SocialLinks = [
  {
    id: 1,
    icon: "IoLogoGithub",
    name: "GitHub",
    link: "http://github.com/sadikashrafi07",
  },
  {
    id: 2,
    icon: "IoLogoTwitter",
    name: "Twitter",
    link: "https://x.com/AMohammadSadiq1",
  },
  {
    id: 3,
    icon: "IoLogoLinkedin",
    name: "LinkedIn",
    link: "http://linkedin.com/in/angadi-mohammad-sadiq",
  },
];

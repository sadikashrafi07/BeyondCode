import React from "react";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Skills from "./components/Skills"; 
import Timeline from "./components/Timeline";
import ProjectsComponent from "./components/Projects";
import Certifications from "./components/Certifications";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; 

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <Navbar />
      <main className="w-80% mt-5">
        <About />
        <Skills /> 
        <Timeline />
        <ProjectsComponent />
        <Certifications />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton /> 
    </div>
  );
}

export default App;

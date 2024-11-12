import Navbar from "./components/Navbar";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ProjectsComponent from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import ScrollToTopButton from "./components/ScrollToTopButton"; // Import the Scroll-to-Top Button

function App() {
  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-primary">
      <Navbar />
      <main className="w-80% mt-5">
        <About />
        <Timeline />
        <ProjectsComponent />
        <Contact />
      </main>
      <Footer />
      <ScrollToTopButton /> {/* Add the Scroll-to-Top Button */}
    </div>
  );
}

export default App;

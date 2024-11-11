import { AnimatePresence } from "framer-motion";
import Navbar from "./components/Navbar";
import About from "./components/About";
import Timeline from "./components/Timeline";
import ProjectsComponent from "./components/Projects";
import Contact from "./components/Contact";

function App() {
  return (
    <AnimatePresence initial={false}>
      <div className="flex w-screen min-h-screen flex-col items-center justify-center relative bg-primary pb-20 p-4">
        <Navbar />
        <main className="w-80% mt-5">
          <About />
          <Timeline />
          <ProjectsComponent />
          <Contact />
        </main>
      </div>
    </AnimatePresence>
  );
}

export default App;

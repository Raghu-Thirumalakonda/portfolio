import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

import "./App.css";

import Navbar from "./Components/Navbar";
import Hero from "./Components/Hero";
import About from "./Components/About";
import Education from "./Components/Education";
import Skills from "./Components/Skills";
import Projects from "./Components/Projects";
import Certifications from "./Components/Certifications";
import Contact from "./Components/Contact";
import Footer from "./Components/Footer";
import ScrollTop from "./Components/ScrollTop";

function App() {
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
      offset: 100,
    });
  }, []);

  return (
    <div className="app">
      {/* Navbar */}
      <Navbar />

      {/* Main Content */}
      <main>
        <Hero />

        <About />

        <Education />

        <Skills />

        <Projects />

        <Certifications />

        <Contact />
      </main>

      {/* Footer */}
      <Footer />

      {/* Scroll To Top Button */}
      <ScrollTop />
    </div>
  );
}

export default App;

import { useState } from "react";
import "./Navbar.css";

function Navbar() {

  const [darkMode, setDarkMode] = useState(true);

  const toggleTheme = () => {

    setDarkMode(!darkMode);

    if (darkMode) {
      document.body.classList.add("light-theme");
    } else {
      document.body.classList.remove("light-theme");
    }
  };

  return (

    <nav className="navbar">

      <h2 className="logo">
        Raghu.
      </h2>

      <ul>

        <li><a href="#home">Home</a></li>

        <li><a href="#about">About</a></li>

        <li><a href="#education">Education</a></li>

        <li><a href="#skills">Skills</a></li>

        <li><a href="#projects">Projects</a></li>

        <li><a href="#certifications">Certificates</a></li>

        <li><a href="#contact">Contact</a></li>

      </ul>

      <div className="nav-right">

        <a
          href="/Raghu Resume.pdf"
          target="_blank"
          rel="noopener noreferrer"
          className="resume-btn"
        >
          Resume
        </a>

        <button
          className="theme-btn"
          onClick={toggleTheme}
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

      </div>

    </nav>

  );
}

export default Navbar;
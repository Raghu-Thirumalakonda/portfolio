import { useState, useEffect } from "react";
import "./Navbar.css";

function Navbar() {

  const [menuOpen, setMenuOpen] = useState(false);
  const [darkMode, setDarkMode] = useState(true);

  useEffect(() => {

    if (darkMode) {
      document.body.classList.remove("light-theme");
    } else {
      document.body.classList.add("light-theme");
    }

  }, [darkMode]);

  const toggleTheme = () => {
    setDarkMode(!darkMode);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (

    <nav className="navbar">

      {/* Logo */}

      <h2
        className="logo"
        onClick={closeMenu}
      >
        Raghu.
      </h2>

      {/* Navigation Links */}

      <ul className={menuOpen ? "nav-links active" : "nav-links"}>

        <li>
          <a href="#home" onClick={closeMenu}>
            Home
          </a>
        </li>

        <li>
          <a href="#about" onClick={closeMenu}>
            About
          </a>
        </li>

        <li>
          <a href="#education" onClick={closeMenu}>
            Education
          </a>
        </li>

        <li>
          <a href="#skills" onClick={closeMenu}>
            Skills
          </a>
        </li>

        <li>
          <a href="#projects" onClick={closeMenu}>
            Projects
          </a>
        </li>

        <li>
          <a href="#certifications" onClick={closeMenu}>
            Certifications
          </a>
        </li>

        <li>
          <a href="#contact" onClick={closeMenu}>
            Contact
          </a>
        </li>

        {/* Resume */}

        <li>

          <a
            href="/Ressume..pdf"
            target="_blank"
            rel="noopener noreferrer"
            className="resume-btn"
            onClick={closeMenu}
          >
            Resume
          </a>

        </li>

      </ul>

      {/* Right Side */}

      <div className="nav-right">

        <button
          className="theme-btn"
          onClick={toggleTheme}
          aria-label="Toggle Theme"
        >
          {darkMode ? "☀️" : "🌙"}
        </button>

        <div
          className={menuOpen ? "hamburger active" : "hamburger"}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Menu"
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

      </div>

    </nav>

  );
}

export default Navbar;
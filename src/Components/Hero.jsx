import "./Hero.css";
import { Typewriter } from "react-simple-typewriter";

function Hero() {
  return (
    <section id="home" className="hero">
      {/* Left Side */}

      <div className="hero-content" data-aos="fade-right">
        <p className="hero-greeting">👋 Hello, Welcome to my Portfolio</p>

        <h1 className="hero-name">
          I'm <span>Raghu Thirumalakonda</span>
        </h1>

        {/* Typing Animation */}

        <h3 className="hero-role">
          <Typewriter
            words={[
              "Java Full Stack Developer",
              "Spring Boot Developer",
              "React JS Developer",
              "Open To Work",
            ]}
            loop={0}
            cursor
            cursorStyle="|"
            typeSpeed={70}
            deleteSpeed={50}
            delaySpeed={1800}
          />
        </h3>

        <p className="hero-desc">
          Passionate Java Full Stack Developer with strong knowledge in Java,
          Spring Boot, React JS, MySQL, HTML, CSS, and JavaScript. I enjoy
          building scalable, responsive, and user-friendly web applications
          while continuously learning modern technologies.
        </p>

        {/* Buttons */}

        <div className="hero-buttons">
          <a href="#projects" className="btn">
            🚀 View Projects
          </a>

          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="btn-outline"
          >
            📄 Download Resume
          </a>
        </div>

        {/* Social Links */}

        <div className="hero-social">
          <a
            href="https://github.com/Raghu-Thirumalakonda"
            target="_blank"
            rel="noreferrer"
          >
            GitHub
          </a>

          <a
            href="https://www.linkedin.com/in/raghu-thirumalakonda-669b35349/"
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn
          </a>

          <a href="mailto:raghuthirumalakonda808@gmail.com">Gmail</a>
        </div>
      </div>

      {/* Right Side */}

      <div className="hero-image" data-aos="fade-left">
        <div className="image-circle">
          <img src="/o1 - Copy.jpeg" alt="Raghu Thirumalakonda" />
        </div>
      </div>
    </section>
  );
}

export default Hero;

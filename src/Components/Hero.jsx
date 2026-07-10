import "./Hero.css";

function Hero() {
  return (
    <section id="home" className="hero">

      <div className="hero-content">

        <p className="hero-greeting">Hello, I'm</p>

<h1 className="hero-name">
  Raghu <span>Thirumalakonda</span>
</h1>

<h2 className="hero-role">Java Full Stack Developer</h2>

<p className="hero-desc">
  Passionate about building scalable, secure, and responsive web applications
  using Java, Spring Boot, React JS, MySQL, and REST APIs.
</p>
        <div className="hero-buttons">
          <a href="#contact" className="btn">
            Hire Me
          </a>

          <a href="#projects" className="btn-outline">
  View Projects
</a>
        </div>

      </div>

      <div className="hero-image">
        <img
          src="o1 - Copy.jpeg"
          alt="Raghu"
        />
      </div>

    </section>
  );
}

export default Hero;
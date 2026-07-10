import "./About.css";

function About() {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>

      <div className="about-container">

        <div className="about-card">
          <h3>Java Full Stack Developer</h3>

          <p>
            I am Raghu Thirumalakonda, a Computer Science Engineering
            student passionate about building modern web applications
            using Java, Spring Boot, React JS, MySQL, and REST APIs.
          </p>

          <p>
            I enjoy solving real-world problems, learning new technologies,
            and developing scalable applications with clean and efficient code.
          </p>

          <div className="about-stats">

            <div className="stat-box">
              <h4>2026</h4>
              <span>Graduate</span>
            </div>

            <div className="stat-box">
              <h4>7.5</h4>
              <span>CGPA</span>
            </div>

            <div className="stat-box">
              <h4>5+</h4>
              <span>Technologies</span>
            </div>

          </div>

        </div>

      </div>
    </section>
  );
}

export default About;
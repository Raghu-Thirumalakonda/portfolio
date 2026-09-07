import "./About.css";

function About() {
  return (
    <section id="about">
      <h2 className="title">About Me</h2>

      <div className="about-container">
        {/* Content */}

        <div className="about-content">
          <h3>Java Full Stack Developer</h3>

          <p>
            I am a passionate Computer Science Engineering graduate with strong
            knowledge in Java, Spring Boot, React JS, MySQL, HTML, CSS and
            JavaScript.
          </p>

          <p>
            I enjoy solving real-world problems by building scalable, responsive
            and user-friendly web applications. I continuously improve my skills
            by learning new technologies and developing practical projects.
          </p>

          <div className="about-info">
            <div className="info-card">
              <h4>🎓 Degree</h4>
              <span>B.Tech - CSE</span>
            </div>

            <div className="info-card">
              <h4>🏫 College</h4>
              <span>Audisankara Institute of Technology</span>
            </div>

            <div className="info-card">
              <h4>📍 Location</h4>
              <span>Nellore, Andhra Pradesh</span>
            </div>

            <div className="info-card">
              <h4>💼 Experience</h4>
              <span>Fresher</span>
            </div>
          </div>

          <div className="about-stats">
            <div className="stat-card">
              <h2>3+</h2>
              <p>Projects</p>
            </div>

            <div className="stat-card">
              <h2>9+</h2>
              <p>Skills</p>
            </div>

            <div className="stat-card">
              <h2>100%</h2>
              <p>Dedication</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

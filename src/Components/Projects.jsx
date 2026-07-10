import "./Project.css";

function Projects() {
  return (
    <section id="projects">

      <h2 className="title">My Projects</h2>

      <div className="project-grid">

        {/* ================= FOOD HUB ================= */}

        <div className="project-card">

          <h3>🍔 Food Hub - Food Ordering Website</h3>

          <p>
            A responsive food ordering web application developed using
            React JS. Users can browse food categories, search items,
            manage their cart, and place orders through a modern,
            user-friendly interface.
          </p>

          <div className="tech-stack">
            <span>React JS</span>
            <span>Redux</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>

          <div className="project-buttons">

            <a
              href="https://food-project-bay-five.vercel.app/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Raghu-thirumalakonda"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

        {/* ================= HEALTH INSURANCE ================= */}

        <div className="project-card">

          <h3>🏥 Health Insurance Management System</h3>

          <p>
            Developed a Health Insurance Management System using Java,
            Spring Boot, Spring Data JPA, Hibernate, and MySQL.
            The application allows administrators to manage customers,
            insurance policies, claims, and policy details through
            REST APIs following a layered architecture.
          </p>

          <div className="tech-stack">
            <span>Java</span>
            <span>Spring Boot</span>
            <span>REST API</span>
            <span>JPA</span>
            <span>Hibernate</span>
            <span>MySQL</span>
          </div>

          <div className="project-buttons">

            <a
              href="#"
            >
              Coming Soon
            </a>

            <a
              href="https://github.com/Raghu-Thirumalakonda/Health-insurence-management-system"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

        {/* ================= PORTFOLIO ================= */}

        <div className="project-card">

          <h3>💼 Personal Portfolio Website</h3>

          <p>
            Designed and developed a premium responsive portfolio using
            React JS. It showcases my skills, education, certifications,
            projects, and contact details with modern UI, dark/light
            themes, smooth scrolling, and responsive layouts.
          </p>

          <div className="tech-stack">
            <span>React JS</span>
            <span>JavaScript</span>
            <span>HTML5</span>
            <span>CSS3</span>
          </div>

          <div className="project-buttons">

            <a
              href="https://raghu-thirumalakonda.github.io/Portfolio/"
              target="_blank"
              rel="noreferrer"
            >
              Live Demo
            </a>

            <a
              href="https://github.com/Raghu-thirumalakonda"
              target="_blank"
              rel="noreferrer"
            >
              GitHub
            </a>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Projects;
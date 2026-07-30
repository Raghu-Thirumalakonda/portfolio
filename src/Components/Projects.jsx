import "./Project.css";

function Projects() {
  const projects = [
    {
      title: "🍔 Food Hub",

      description:
        "A modern food ordering web application developed using React JS. Features include category filtering, cart management, responsive UI, Redux state management, and smooth navigation.",

      tech: ["React JS", "Redux", "JavaScript", "CSS"],

      live: "https://food-project-bay-five.vercel.app/",

      github: "https://github.com/Raghu-Thirumalakonda/Food-Project",
    },

    {
      title: "🏥 Health Insurance Management System",

      description:
        "A full-stack Health Insurance Management System developed using Spring Boot, MySQL, JPA and Thymeleaf. The system manages Patients, Doctors, Vendors and Insurance Policies with secure CRUD operations.",

      tech: ["Java", "Spring Boot", "MySQL", "JPA", "Thymeleaf"],

      live: "#",

      github:
        "https://github.com/Raghu-Thirumalakonda/Health-Insurance-Management-System",
    },

    {
      title: "💼 Portfolio Website",

      description:
        "Personal portfolio website developed using React JS with premium UI, dark/light theme, responsive design, EmailJS integration and smooth animations.",

      tech: ["React JS", "CSS3", "JavaScript"],

      live: "https://portfolio-qf8l.vercel.app",

      github: "https://github.com/Raghu-Thirumalakonda",
    },
  ];

  return (
    <section id="projects">
      <h2 className="title">My Projects</h2>

      <div className="project-grid">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <div className="project-image">
              <span>🚀</span>
            </div>

            <h3>{project.title}</h3>

            <p>{project.description}</p>

            <div className="tech-stack">
              {project.tech.map((tech, i) => (
                <span key={i}>{tech}</span>
              ))}
            </div>

            <div className="project-buttons">
              <a href={project.live} target="_blank" rel="noreferrer">
                Live Demo
              </a>

              <a href={project.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;

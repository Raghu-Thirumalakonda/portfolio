import "./Certification.css";

function Certifications() {
  return (
    <section id="certifications">

      <h2 className="title">Certifications</h2>

      <div className="cert-grid">

        <div className="cert-card">

          <h3>Java Full Stack Development</h3>

          <h4>JSpiders Training Institute</h4>

          <p>
            Successfully completed intensive training in Java,
            Spring Boot, React JS, MySQL, HTML, CSS,
            JavaScript and REST APIs with hands-on projects.
          </p>

          <span className="cert-badge">
            ✔ Completed
          </span>

        </div>

        <div className="cert-card">

          <h3>React JS Development</h3>

          <h4>Self Learning & Projects</h4>

          <p>
            Built responsive web applications using React JS,
            React Router, Redux, Hooks and modern UI design
            principles.
          </p>

          <span className="cert-badge">
            ✔ Completed
          </span>

        </div>

        <div className="cert-card">

          <h3>SQL & Database Management</h3>

          <h4>MySQL</h4>

          <p>
            Gained practical experience in database design,
            SQL queries, joins, normalization, stored procedures,
            and CRUD operations.
          </p>

          <span className="cert-badge">
            ✔ Completed
          </span>

        </div>

      </div>

    </section>
  );
}

export default Certifications;
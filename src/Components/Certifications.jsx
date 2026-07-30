import "./Certification.css";

function Certifications() {
  const certificates = [
    {
      title: "Java Programming",
      provider: "Infosys Springboard",
      year: "2025",
    },

    {
      title: "React JS",
      provider: "Udemy",
      year: "2025",
    },

    {
      title: "SQL & Database",
      provider: "HackerRank",
      year: "2025",
    },

    {
      title: "Java Full Stack",
      provider: "Self Learning",
      year: "2026",
    },
  ];

  return (
    <section id="certifications">
      <h2 className="title">Certifications</h2>

      <div className="cert-grid">
        {certificates.map((item, index) => (
          <div className="cert-card" key={index}>
            <div className="cert-icon">🏆</div>

            <h3>{item.title}</h3>

            <p>{item.provider}</p>

            <span>{item.year}</span>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Certifications;

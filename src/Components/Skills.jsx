import "./Skills.css";

const skills = [
  {
    name: "Java",
    level: "90%",
    icon: "☕",
  },
  {
    name: "Spring Boot",
    level: "85%",
    icon: "🌱",
  },
  {
    name: "React JS",
    level: "85%",
    icon: "⚛️",
  },
  {
    name: "JavaScript",
    level: "80%",
    icon: "🟨",
  },
  {
    name: "HTML5",
    level: "95%",
    icon: "🌐",
  },
  {
    name: "CSS3",
    level: "90%",
    icon: "🎨",
  },
  {
    name: "MySQL",
    level: "80%",
    icon: "🗄️",
  },
  {
    name: "Git",
    level: "85%",
    icon: "🔧",
  },
  {
    name: "GitHub",
    level: "90%",
    icon: "💻",
  },
];

function Skills() {
  return (
    <section id="skills">

      <h2 className="title">
        Technical Skills
      </h2>

      <div className="skills-grid">

        {skills.map((skill, index) => (

          <div className="skill-card" key={index}>

            <div className="skill-icon">
              {skill.icon}
            </div>

            <h3>{skill.name}</h3>

            <div className="progress">

              <div
                className="progress-bar"
                style={{ width: skill.level }}
              >
              </div>

            </div>

            <span>{skill.level}</span>

          </div>

        ))}

      </div>

    </section>
  );
}

export default Skills;
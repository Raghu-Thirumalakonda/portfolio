import "./Skills.css";

function Skills() {

 const skills = [
  "☕ Java",
  "🌱 Spring Boot",
  "⚛️ React JS",
  "🟨 JavaScript",
  "🌐 HTML5",
  "🎨 CSS3",
  "🗄️ MySQL",
  "🔧 Git",
  "🚀 GitHub"
];

  return (
    <section id="skills">

      <h2 className="title">Skills</h2>

      <div className="skills-grid">

        {skills.map((skill,index)=>(
          <div className="skill-card" key={index}>
            {skill}
          </div>
        ))}

      </div>

    </section>
  );
}

export default Skills;
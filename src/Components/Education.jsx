import "./Education.css";

function Education() {
  return (
    <section id="education">

      <h2 className="title">
        Education
      </h2>

      <div className="timeline">

        {/* B.Tech */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="edu-card">

            <span className="year">
              2022 - 2026
            </span>

            <h3>
              Bachelor of Technology (CSE)
            </h3>

            <h4>
              Audisankara Institute of Technology
            </h4>

            <p>
              Computer Science Engineering
            </p>

            <p>
              CGPA : <strong>7.5</strong>
            </p>

          </div>

        </div>

        {/* Intermediate */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="edu-card">

            <span className="year">
              2020 - 2022
            </span>

            <h3>
              Intermediate (MPC)
            </h3>

            <h4>
              Krishanmurthy junior collage 
            </h4>

            <p>
              Mathematics, Physics & Chemistry
            </p>

          </div>

        </div>

        {/* SSC */}

        <div className="timeline-item">

          <div className="timeline-dot"></div>

          <div className="edu-card">

            <span className="year">
              2019 - 2020
            </span>

            <h3>
              Secondary School (SSC)
            </h3>

            <h4>
              MJPAPBCWRIES SCHOOL
            </h4>

            <p>
              Completed Secondary Education
            </p>

          </div>

        </div>

      </div>

    </section>
  );
}

export default Education;
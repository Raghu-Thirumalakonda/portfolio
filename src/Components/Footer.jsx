import "./Footer.css";

import {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaTwitter,
  FaEnvelope,
} from "react-icons/fa";

function Footer() {
  return (
    <footer className="footer">

      <h1>Raghu Thirumalakonda</h1>

      <p>
        Java Full Stack Developer |
        Spring Boot |
        React JS |
        MySQL |
        REST APIs
      </p>

      <div className="social-icons">

        <a
          href="https://www.linkedin.com/in/YOUR-LINKEDIN"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin />
        </a>

        <a
          href="https://github.com/YOUR-GITHUB"
          target="_blank"
          rel="noreferrer"
        >
          <FaGithub />
        </a>

        <a
          href="https://www.instagram.com/YOUR-INSTAGRAM"
          target="_blank"
          rel="noreferrer"
        >
          <FaInstagram />
        </a>

        <a
          href="https://twitter.com/YOUR-TWITTER"
          target="_blank"
          rel="noreferrer"
        >
          <FaTwitter />
        </a>

        <a href="mailto:yourmail@gmail.com">
          <FaEnvelope />
        </a>

      </div>

      <hr />

      <p className="copyright">
        © 2026 Raghu Thirumalakonda. All Rights Reserved.
      </p>

    </footer>
  );
}

export default Footer;
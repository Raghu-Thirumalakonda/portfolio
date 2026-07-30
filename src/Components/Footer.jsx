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
    href="https://linkedin.com/in/raghu-thirumala-konda-669b35349"
    target="_blank"
    rel="noreferrer"
    aria-label="LinkedIn"
  >
    <FaLinkedin />
  </a>

  <a
    href="https://github.com/Raghu-Thirumalakonda"
    target="_blank"
    rel="noreferrer"
    aria-label="GitHub"
  >
    <FaGithub />
  </a>

  <a
    href="https://www.instagram.com/_raghu.05._/?hl=en"
    target="_blank"
    rel="noreferrer"
    aria-label="Instagram"
  >
    <FaInstagram />
  </a>

  <a
    href="https://x.com"
    target="_blank"
    rel="noreferrer"
    aria-label="X (Twitter)"
  >
    <FaTwitter />
  </a>

  <a
    href="mailto:raghuthirumalakonda808@gmail.com"
    aria-label="Email"
  >
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
import "./Contact.css";
import emailjs from "@emailjs/browser";
import { useRef, useEffect } from "react";

function Contact() {
  const form = useRef();

  useEffect(() => {
    emailjs.init("eipEz2dq_PAqLldof");
  }, []);

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_i8ifzeq", "template_a1mon2u", form.current)
      .then(() => {
        alert("Message Sent Successfully ✅");
        form.current.reset();
      })
      .catch((error) => {
        console.log(error);
        alert("Failed to send message ❌");
      });
  };

  return (
    <section id="contact">
      <h2 className="title">Contact Me</h2>

      <div className="contact-container">
        {/* Left Side */}

        <div className="contact-info">
          <h3>Get In Touch</h3>

          <p>
            Feel free to contact me for job opportunities, internships,
            freelance projects, or collaborations.
          </p>

          <div className="info-box">
            <h4>Email</h4>
            <span>raghuthirumalakonda808@gmail.com</span>
          </div>

          <div className="info-box">
            <h4>Phone</h4>
            <span>+91 8374075410</span>
          </div>

          <div className="info-box">
            <h4>LinkedIn</h4>
            <span>
              https://www.linkedin.com/in/raghu-thirumalakonda-669b35349/
            </span>
          </div>

          <div className="info-box">
            <h4>GitHub</h4>
            <span>https://github.com/Raghu-Thirumalakonda</span>
          </div>
        </div>

        {/* Right Side */}

        <form ref={form} onSubmit={sendEmail} className="contact-form">
          <input
            type="text"
            name="user_name"
            placeholder="Full Name"
            required
          />

          <input
            type="email"
            name="user_email"
            placeholder="Email Address"
            required
          />

          <input type="text" name="company" placeholder="Company Name" />

          <textarea
            rows="6"
            name="message"
            placeholder="Write Your Message..."
            required
          ></textarea>

          <button type="submit">Send Message 🚀</button>
        </form>
      </div>
    </section>
  );
}

export default Contact;

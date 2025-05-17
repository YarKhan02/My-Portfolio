"use client"

import { useRef } from "react"
import "./App.css"

import { FaLinkedin, FaGithub, FaTools } from "react-icons/fa";

import { 
  SiPython,
  SiCplusplus,
  SiGo,
  SiReact,
  SiPostgresql,
  SiFastapi,
  SiFlask,
  SiGit,
  SiDocker,
  SiAmazon,
  SiPostman,
  SiWireshark,
  SiBurpsuite 
} from 'react-icons/si';

import emailjs from 'emailjs-com'

const skills = [
  { name: "Python", icon: <SiPython />, className: "python-icon" },
  { name: "C/C++", icon: <SiCplusplus />, className: "cpp-icon" },
  { name: "Go", icon: <SiGo />, className: "go-icon" },
  { name: "React", icon: <SiReact />, className: "react-icon" },
  { name: "SQL", icon: <SiPostgresql />, className: "sql-icon" },
  { name: "FastAPI", icon: <SiFastapi />, className: "fastapi-icon" },
  { name: "Flask", icon: <SiFlask />, className: "flask-icon" },
  { name: "Git", icon: <SiGit />, className: "git-icon" },
  { name: "Docker", icon: <SiDocker />, className: "docker-icon" },
  { name: "AWS", icon: <SiAmazon />, className: "aws-icon" },
  { name: "Postman", icon: <SiPostman />, className: "postman-icon" },
  { name: "Metasploitable", icon: <FaTools />, className: "metasploitable-icon" },
  { name: "Wireshark", icon: <SiWireshark />, className: "wireshark-icon" },
  { name: "Burpsuite", icon: <SiBurpsuite />, className: "burpsuite-icon" },
  { name: "Wazuh", icon: <FaTools />, className: "wazuh-icon" }
];

function App() {
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)

  const scrollToSection = (ref) => {
    if (ref.current) {
      ref.current.scrollIntoView({ behavior: "smooth" })
    }
  }

  const nameRef = useRef(null)
  const emailRef = useRef(null)
  const messageRef = useRef(null)

  const sendEmail = () => {
    const templateParams = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      message: messageRef.current.value,
    }

    emailjs
      .send(
        'service_148wq3q',
        'template_d1g6el6',
        templateParams,
        'Rc9XOXsam9fo6ysJK'
      )
      .then(
        () => {
          alert('Message sent successfully!')
          nameRef.current.value = ''
          emailRef.current.value = ''
          messageRef.current.value = ''
        },
        (error) => {
          console.error(error)
          alert('Failed to send message.')
        }
      )
  }

  return (
    <div className="app">
      {/* Navigation */}
      <nav className="navbar">
        <div className="container">
          <a href="#" className="logo">
            Wali Yar Khan
          </a>
          <div className="nav-links">
            <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="nav-link">
              Home
            </button>
            <button onClick={() => scrollToSection(aboutRef)} className="nav-link">
              Tech Stack
            </button>
            <button onClick={() => scrollToSection(projectsRef)} className="nav-link">
              Projects
            </button>
            <button onClick={() => scrollToSection(contactRef)} className="nav-link">
              Contact
            </button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="section hero-section">
        <div className="container section-container">
          <div className="section-content">
            <div className="hero-content">
              <div className="profile-image">
                <img src="/me.jpeg" alt="Profile" className="profile-img" />
              </div>

              <div className="hero-text">
                <h1 className="main-heading">Wali Yar Khan</h1>
                <h2 className="sub-heading">Computer Science at FAST University</h2>

                <p className="bio">
                  I am a junior at FAST University majoring in Computer Science on the Cybersecurity Track.
                  Hands-on experience in penetration testing, backend development, and cloud-native apps. 
                  Built AI-driven threat detection for web attacks, deployed an AI-integrated honeypot, 
                  developed a containerized hospital management system, and created a network tool for real-time threat monitoring.
                </p>

                <div className="hero-buttons">
                  <button onClick={() => scrollToSection(aboutRef)} className="primary-button">
                    Tech Stack
                  </button>
                  <button onClick={() => scrollToSection(projectsRef)} className="primary-button">
                    Projects
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section ref={aboutRef} className="section about-section">
        <div className="container section-container">
          <div className="section-content">
            <h1 className="section-heading">My Tech Stack</h1>
            <div className="about-content">
                <div className="about-column">
                  <ul className="skill-list">
                    {skills.map((skill, index) => (
                      <li className={`skill-item ${skill.className}`} key={index}>
                        <div className="tooltip-container">
                          {skill.icon}
                          <span className={`tooltip-text ${skill.className}`}>
                            {skill.name}
                          </span>
                        </div>
                      </li>
                    ))}
                  </ul>
                </div>
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section ref={projectsRef} className="section projects-section">
        <div className="container section-container">
          <div className="section-content">
            <h1 className="section-heading">My Projects</h1>

            <div className="projects-grid">
              {/* Project 1 */}
              <div className="project-item">
                <img
                  src="https://via.placeholder.com/600x600"
                  alt="Stanford University Campus"
                  className="project-img"
                />
              </div>

              {/* Project 2 */}
              <div className="project-item">
                <img src="https://via.placeholder.com/600x600" alt="Sky with clouds" className="project-img" />
              </div>

              {/* Project 3 */}
              <div className="project-item">
                <img src="https://via.placeholder.com/600x600" alt="Computer RAM modules" className="project-img" />
              </div>

              {/* Project 4 */}
              <div className="project-item">
                <img
                  src="https://via.placeholder.com/600x600"
                  alt="Digital globe with tech elements"
                  className="project-img"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section ref={contactRef} className="section contact-section">
        <div className="container section-container">
          <div className="section-content">
            <h1 className="section-heading">Contact Me</h1>

            <div className="contact-box">
              <div className="contact-form">
                <div className="form-group">
                  <label htmlFor="name" className="form-label">Name</label>
                  <input id="name" type="text" className="form-input" ref={nameRef} required />
                </div>

                <div className="form-group">
                  <label htmlFor="email" className="form-label">Email</label>
                  <input id="email" type="email" className="form-input" ref={emailRef} required />
                </div>

                <div className="form-group">
                  <label htmlFor="message" className="form-label">Message</label>
                  <textarea id="message" className="form-textarea" ref={messageRef} required></textarea>
                </div>

                <button onClick={sendEmail} className="send-button">
                  Send Message
                </button>
              </div>

              <div className="contact-info">
                <div className="info-group">
                  <h3 className="info-heading">Email:</h3>
                  <p className="info-text">
                    <a href="mailto:yarkhan025@gmail.com" className="email-link">yarkhan025@gmail.com</a>
                  </p>
                </div>

                <div className="info-group">
                  <h3 className="info-heading">Based in:</h3>
                  <p className="info-text">Karachi, Pakistan</p>
                </div>

                <div className="social-links">
                  <a href="https://www.linkedin.com/in/wali-yar-khan" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon linkedin-icon">
                      <FaLinkedin size={24} />
                    </span>
                  </a>
                  <a href="https://github.com/YarKhan02" className="social-link" target="_blank" rel="noopener noreferrer">
                    <span className="social-icon github-icon">
                      <FaGithub size={24} />
                    </span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Scroll to top button */}
      <div className="scroll-top">
        <button
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          className="scroll-top-button"
          aria-label="Scroll to top"
        >
          ↑
        </button>
      </div>
    </div>
  )
}

export default App

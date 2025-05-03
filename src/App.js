import { useEffect, useState } from 'react';
import './index.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun, FaBars, FaTimes } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiScikitlearn, SiPlotly, SiPandas, SiNumpy } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  const projects = [
    {
      title: "AI Chatbot",
      description: "A conversational AI chatbot that answers user queries using NLP models.",
      tech: ["Python", "NLP", "TensorFlow"],
      image: "/chatbot.png",
      link: "https://github.com/PADDYMAN-CLIFFORD/AI-Chatbot"
    },
    {
      title: "Data Dashboard",
      description: "Interactive dashboard visualizing educational data trends with Python & Plotly.",
      tech: ["Python", "Plotly", "Pandas"],
      image: "/dashboard.png",
      link: "https://github.com/PADDYMAN-CLIFFORD/Data-Dashboard"
    },
    {
      title: "ML Prediction App",
      description: "A machine learning web app predicting student performance using Scikit-learn.",
      tech: ["Python", "Scikit-learn", "Flask"],
      image: "/ml-app.png",
      link: "https://github.com/PADDYMAN-CLIFFORD/ML-Prediction-App"
    }
  ];

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className={`navbar ${isMenuOpen ? 'menu-open' : ''}`}>
        <div className="container nav-container">
          <div className="navbar-brand">PADDY CLIFFORD</div>
          
          <button 
            className="dark-mode-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>

          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            aria-label="Toggle navigation menu"
          >
            {isMenuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <ul className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
            <li><a href="#about" onClick={() => setIsMenuOpen(false)}>About</a></li>
            <li><a href="#skills" onClick={() => setIsMenuOpen(false)}>Skills</a></li>
            <li><a href="#projects" onClick={() => setIsMenuOpen(false)}>Projects</a></li>
            <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>Contact</a></li>
          </ul>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1 className="hero-title">Hi, I'm <span>Paddy Clifford</span></h1>
          <p className="hero-subtitle">AI/ML Enthusiast • Data Scientist • Creative Thinker</p>
          <div className="hero-buttons">
            <a href="#projects" className="btn">View Projects</a>
            <a href="#contact" className="btn btn-outline">Contact Me</a>
          </div>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/clifford-paddy-22954b2a0/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/PADDYMAN-CLIFFORD/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:paddy@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </header>

      <main>
        {/* About Section */}
        <section className="about-section" id="about" data-aos="fade-up">
          <div className="container about-container">
            <div className="image-slot" data-aos="zoom-in">
              <img src="/paddy.jpeg" alt="Paddy Clifford" loading="lazy" />
            </div>
            <div className="about-text" data-aos="fade-left">
              <h2>About Me</h2>
              <p>I am a Level 200 student at the University of Education, Winneba, studying ICT Education. I specialize in Python programming and have deep interest in Artificial Intelligence, Machine Learning and Data Analytics.</p>
              <p>I enjoy solving real-world problems with data-driven insights and developing intelligent solutions through innovative algorithms and data visualization techniques.</p>
              <a 
                className="cta-button" 
                href="/resume.pdf" 
                download
                aria-label="Download resume"
              >
                Download Resume
              </a>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="skills-section" id="skills" data-aos="fade-up">
          <div className="container">
            <h2>Technical Skills</h2>
            <div className="skills-grid">
              <div className="skill-category" data-aos="fade-right">
                <h3>Languages</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <SiPython /> Python
                  </div>
                  <div className="skill-item">
                    <i className="fab fa-js-square"></i> C++
                  </div>
                  <div className="skill-item">
                    <i className="fas fa-database"></i> SQL
                  </div>
                </div>
              </div>
              
              <div className="skill-category" data-aos="fade-left">
                <h3>Frameworks & Tools</h3>
                <div className="skills-list">
                  <div className="skill-item">
                    <SiTensorflow /> TensorFlow
                  </div>
                  <div className="skill-item">
                    <SiScikitlearn /> EXCEL
                  </div>
                  <div className="skill-item">
                    <SiPlotly /> POWER-BI
                  </div>
                  <div className="skill-item">
                    <SiPandas /> Pandas
                  </div>
                  <div className="skill-item">
                    <SiNumpy /> NumPy
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="projects-section" id="projects" data-aos="fade-up">
          <div className="container">
            <h2>Featured Projects</h2>
            <div className="projects-grid">
              {projects.map((project, index) => (
                <div 
                  key={index} 
                  className="project-card" 
                  data-aos="zoom-in"
                  onClick={() => {
                    setSelectedProject(project);
                    setIsModalOpen(true);
                  }}
                >
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>
                  <div className="project-tech">
                    {project.tech.map((tech, i) => (
                      <span key={i} className="tech-tag">{tech}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section className="contact-section" id="contact" data-aos="fade-up">
          <div className="container">
            <h2>Get In Touch</h2>
            <div className="contact-container">
              <div className="contact-info" data-aos="fade-right">
                <p>Interested in collaborating or have questions about my work?</p>
                <div className="contact-methods">
                  <div className="contact-item">
                    <FaEnvelope /> cpaddy937@gmail.com
                  </div>
                  <div className="social-links">
                    <a href="https://www.linkedin.com/in/clifford-paddy-22954b2a0/" target="_blank" rel="noreferrer">
                      <FaLinkedin /> LinkedIn
                    </a>
                    <a href="https://github.com/PADDYMAN-CLIFFORD/" target="_blank" rel="noreferrer">
                      <FaGithub /> GitHub
                    </a>
                  </div>
                </div>
              </div>
              
              <form 
                className="contact-form" 
                data-aos="fade-left"
                action="https://formspree.io/f/YOUR_FORM_ID" 
                method="POST"
              >
                <input type="text" name="name" placeholder="Your Name" required />
                <input type="email" name="email" placeholder="Your Email" required />
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" className="btn">Send Message</button>
              </form>
            </div>
          </div>
        </section>
      </main>

      {/* Project Modal */}
      {isModalOpen && selectedProject && (
        <div className="modal-overlay" onClick={() => setIsModalOpen(false)}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={() => setIsModalOpen(false)}>
              <FaTimes />
            </button>
            <h2>{selectedProject.title}</h2>
            <img src={selectedProject.image} alt={selectedProject.title} />
            <p>{selectedProject.description}</p>
            <div className="modal-tech">
              <strong>Technologies used:</strong>
              {selectedProject.tech.map((tech, i) => (
                <span key={i} className="tech-tag">{tech}</span>
              ))}
            </div>
            <a 
              href={selectedProject.link} 
              target="_blank" 
              rel="noreferrer" 
              className="btn btn-outline"
            >
              View Project
            </a>
          </div>
        </div>
      )}

      <footer>
        <div className="container">
          <p>&copy; 2025 PADDY CLIFFORD. All rights reserved.</p>
          <div className="footer-socials">
            <a href="https://www.linkedin.com/in/clifford-paddy-22954b2a0/" target="_blank" rel="noreferrer" aria-label="LinkedIn">
              <FaLinkedin />
            </a>
            <a href="https://github.com/PADDYMAN-CLIFFORD/" target="_blank" rel="noreferrer" aria-label="GitHub">
              <FaGithub />
            </a>
            <a href="mailto:paddy@example.com" aria-label="Email">
              <FaEnvelope />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}

export default App;
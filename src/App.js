import { useEffect, useState } from 'react';
import './index.css';
import { FaLinkedin, FaGithub, FaEnvelope, FaMoon, FaSun } from 'react-icons/fa';
import { SiPython, SiTensorflow, SiScikitlearn, SiPlotly, SiPandas, SiNumpy } from 'react-icons/si';
import AOS from 'aos';
import 'aos/dist/aos.css';

function App() {
  const [darkMode, setDarkMode] = useState(false);

  // Initialize AOS and detect system preference
  useEffect(() => {
    AOS.init({ duration: 1000 });
    if (window.matchMedia('(prefers-color-scheme: dark)').matches) {
      setDarkMode(true);
    }
  }, []);

  // Apply dark mode class
  useEffect(() => {
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <div className={`app ${darkMode ? 'dark' : ''}`}>
      {/* Navigation */}
      <nav className="navbar">
        <div className="container nav-container">
          <div className="navbar-brand">PADDY CLIFFORD</div>
          
          <button 
            className="dark-mode-toggle" 
            onClick={() => setDarkMode(!darkMode)}
            aria-label={darkMode ? "Switch to light mode" : "Switch to dark mode"}
          >
            {darkMode ? <FaSun /> : <FaMoon />}
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <header className="hero">
        <div className="container">
          <h1 className="hero-title">Hi, I'm <span>Paddy Clifford</span></h1>
          <p className="hero-subtitle">AI/ML Enthusiast • Data Scientist • Tech Educator</p>
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
          <div className="container">
            <div className="about-content">
              <div className="image-slot" data-aos="zoom-in">
                <img src={process.env.PUBLIC_URL + "/paddy.jpeg"} alt="Paddy Clifford" />
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
                    C++
                  </div>
                  <div className="skill-item">
                    SQL
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
                    <SiScikitlearn /> POWER-BI
                  </div>
                  <div className="skill-item">
                    <SiPlotly /> EXCEL
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
      </main>


      {/* Footer */}
      <footer>
        <div className="container">
          <p>&copy; 2025 PADDYMAN_CLIFFORD. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

export default App;
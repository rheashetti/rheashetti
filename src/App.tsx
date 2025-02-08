import './App.css'
import './index.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons';
import About from './pages/about.tsx'
import Experience from './pages/experience.tsx'
import Projects from './pages/projects.tsx'
import Home from './pages/home.tsx'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons';

function App() {

  return (
    <>
      <div className="top-nav-bar">
        <div className="top-nav-bar-logo">
          <h1>Rhea Shetti</h1>
          </div>
        <div className="top-nav-bar-links">
          <a href="#home">Home</a>
          <a href="#about">About</a>
          <a href="#experience">Experience</a>
          <a href="#projects">Projects</a>
        </div>
      </div>
      <div id="root">
        <Home />
        <About />
        <Experience />
        <Projects />
      </div>
      <div className="footer">
        <div className="footer-links">
          <a href="www.linkedin.com/in/rhea-shetti">
            <FontAwesomeIcon icon={faLinkedin} style={{color:"#dbdbdb"}} size="2x" />
          </a>
          <a href="https://github.com/rheashetti">
            <FontAwesomeIcon icon={faGithub} style={{color:"#dbdbdb"}} size="2x"/>
          </a>
          <a href="mailto:shettir@uci.edu">
            <FontAwesomeIcon icon={faEnvelope} style={{color:"#dbdbdb"}} size="2x"/>
          </a>
        </div>
        <p>© 2025 Rhea Shetti</p>
      </div>
    </>
  )
}

export default App

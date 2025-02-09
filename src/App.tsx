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

  const handleScroll = (event: React.MouseEvent<HTMLAnchorElement, MouseEvent>, targetId: string) => {
    event.preventDefault();
    const targetElement = document.getElementById(targetId);
    if (targetElement) {
      let offset = 70;
      if(targetElement.id === 'about'){
        offset = 150;
      }
      const elementPosition = targetElement.getBoundingClientRect().top + window.pageYOffset;
      const offsetPosition = elementPosition - offset;

      window.scrollTo({
        top: offsetPosition,
        behavior: "smooth"
      });
    }
  };

    return (
    <>
      <div className="top-nav-bar">
        <div className="top-nav-bar-logo">
          <h1>Rhea Shetti</h1>
          </div>
        <div className="top-nav-bar-links">
          <a href="#home" onClick={(e) => handleScroll(e, 'home')}>Home</a>
          <a href="#about" onClick={(e) => handleScroll(e, 'about')}>About</a>
          <a href="#experience" onClick={(e) => handleScroll(e, 'experience')}>Experience</a>
          <a href="#projects" onClick={(e) => handleScroll(e, 'projects')}>Projects</a>
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
            <FontAwesomeIcon icon={faLinkedin} style={{color:"#ffd1d1"}} size="2x" />
          </a>
          <a href="https://github.com/rheashetti">
            <FontAwesomeIcon icon={faGithub} style={{color:"#ffd1d1"}} size="2x"/>
          </a>
          <a href="mailto:shettir@uci.edu">
            <FontAwesomeIcon icon={faEnvelope} style={{color:"#ffd1d1"}} size="2x"/>
          </a>
        </div>
        <p>© 2025 Rhea Shetti</p>
      </div>
    </>
  )
}

export default App

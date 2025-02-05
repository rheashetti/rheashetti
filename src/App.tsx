import './App.css'
import './index.css'
import About from './pages/about.tsx'
import Experience from './pages/experience.tsx'
import Projects from './pages/projects.tsx'
import Home from './pages/home.tsx'

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
          <a href="Link">LinkedIn</a>
          <a href="Link">GitHub</a>
          <a href="Link">Email</a>
        </div>
        <p>© 2025 Rhea Shetti</p>
      </div>
    </>
  )
}

export default App

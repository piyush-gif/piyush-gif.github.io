import './styles/NavBar.css';
import './styles/Body.css';
import './styles/Projects.css';
import './styles/Certification.css';
import './styles/Contact.css';
import './styles/Card.css';
import './styles/Experience.css';
import './styles/Parallax.css';
import './styles/Footer.css';
import NavBar from './Components/NavBar';
import Card from './Components/Card';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Parallax from './Components/Parallax';
import Footer from './Components/Footer';

function Home() {
  return (
    <>
      <div className="hero-background">
        <NavBar />
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Piyush, a passionate programmer and web developer.</p>
        </div>
      </div>
      <div id="about">
        <Card/>
      </div>
      <div id="experience">
        <Experience/>
        </div>
        <Parallax/>
      <div id="projects">
        <Project/>
      </div>
      <div id="certifications">
        <Certification/>
      </div>
      <div id="contacts">
        <Contact/>
      </div>
        <Footer/>
    </>
  )
}

export default Home

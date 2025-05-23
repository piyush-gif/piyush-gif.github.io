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
import { Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

function HomePageContent() {
  const location = useLocation();

  useEffect(() => {
    if (location.hash) {
      const element = document.querySelector(location.hash);
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  }, [location]);

  return (
    <>
      <div className="hero-background">
        <div className="hero-content">
          <h1>Welcome to My Portfolio</h1>
          <p>I'm Piyush, a passionate programmer and web developer.</p>
        </div>
      </div>
      <div id="about">
        <Card />
      </div>
      <div id="experience">
        <Experience />
      </div>
      <Parallax />
    </>
  );
}


function Home() {
  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<HomePageContent />} />
        <Route path="/projects" element={<Project />} />
        <Route path="/certifications" element={<Certification />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
      <Footer />
    </>
  );
}

export default Home;

import NavBar from './Components/NavBar';
import Card from './Components/Card';
import Project from './Components/Project';
import Certification from './Components/Certification';
import Contact from './Components/Contact';
import Experience from './Components/Experience';
import Footer from './Components/Footer';
import { Router, Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import backgroundPic from './assets/images/backgroundpic.jpg';

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
      {/* Hero Section */}
      <div className="relative flex flex-col items-center justify-center min-h-[80vh] bg-cover bg-no-repeat w-screen text-white text-center" style={{backgroundImage: `url(${backgroundPic})`}}>
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/60 to-gray-900/80 z-10"></div>
        <div className="relative z-20 flex flex-col items-center justify-center w-full pt-32 pb-16">
          <h1 className="text-5xl md:text-6xl font-extrabold mb-4 text-green-400 drop-shadow-lg">Piyush Khadka</h1>
          <p className="text-2xl md:text-3xl text-gray-200 mb-8">Passionate Developer & Lifelong Learner</p>
          <div className="flex flex-col md:flex-row gap-4 justify-center mb-8">
            <a href="/PiyushKhadkaResume.pdf" className="bg-green-500 text-white px-8 py-3 rounded font-semibold hover:bg-green-400 transition">Download CV</a>
            <a href="#contact" className="bg-blue-500 text-white px-8 py-3 rounded font-semibold hover:bg-blue-400 transition">Contact Me</a>
            <a href="https://github.com/piyush-gif" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 px-4 py-3 rounded hover:bg-gray-700 transition">
              <FaGithub className="w-6 h-6 text-white" />
            </a>
            <a href="https://www.linkedin.com/in/piyush-khadka-chhetri-5516602b9" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center bg-gray-800 px-4 py-3 rounded hover:bg-gray-700 transition">
              <FaLinkedin className="w-6 h-6 text-white" />
            </a>
          </div>
          <span className="text-gray-400 text-lg animate-bounce mt-4">↓ Scroll down to know more</span>
        </div>
      </div>
      <div id="about">
        <Card />
      </div>
      <div id="experience">
        <Experience />
      </div>
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

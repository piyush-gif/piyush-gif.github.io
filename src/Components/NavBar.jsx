import { Link } from 'react-router-dom';
import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { useState } from 'react';

const NavBar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { to: '/#about', label: 'About' },
    { to: '/#experience', label: 'Experience' },
    { to: '/projects', label: 'Projects' },
    { to: '/certifications', label: 'Certifications' },
    { to: '/contact', label: 'Contact' },
  ];

  return (
    <nav className="bg-gray-950 sticky top-0 z-50 w-full shadow-lg border-b border-green-500">
      <div className="max-w-7xl mx-auto px-4 flex items-center justify-between h-16">
        {/* Left: Name/Logo */}
        <Link to="/" className="text-2xl font-extrabold tracking-wide text-green-400 hover:text-green-300 transition-colors duration-200">
          Piyush Khadka
        </Link>
        {/* Desktop Nav Links */}
        <div className="hidden md:flex items-center gap-2 lg:gap-6">
          {navLinks.map((link) => (
            <Link
              key={link.to}
              to={link.to}
              className="px-4 py-2 text-white font-medium hover:text-green-400 hover:underline underline-offset-8 transition-colors duration-200"
            >
              {link.label}
            </Link>
          ))}
        </div>
        {/* Social Icons */}
        <div className="hidden md:flex items-center gap-4 ml-4">
          <a href="https://github.com/piyush-gif" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
            <FaGithub className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
          </a>
          <a href="https://www.linkedin.com/in/piyush-khadka-chhetri-5516602b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
            <FaLinkedin className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
          </a>
        </div>
        {/* Hamburger for Mobile */}
        <button
          className="md:hidden flex items-center text-white focus:outline-none ml-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <svg className="w-7 h-7" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
          </svg>
        </button>
      </div>
      {/* Mobile Dropdown */}
      {menuOpen && (
        <div className="md:hidden bg-gray-950 border-t border-green-500 shadow-lg">
          <div className="flex flex-col items-center gap-2 py-4">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className="px-4 py-2 text-white font-medium hover:text-green-400 hover:underline underline-offset-8 transition-colors duration-200"
                onClick={() => setMenuOpen(false)}
              >
                {link.label}
              </Link>
            ))}
            <div className="flex gap-4 mt-2">
              <a href="https://github.com/piyush-gif" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
                <FaGithub className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
              </a>
              <a href="https://www.linkedin.com/in/piyush-khadka-chhetri-5516602b9" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
                <FaLinkedin className="w-6 h-6 text-white hover:text-green-400 transition-colors duration-200" />
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
 
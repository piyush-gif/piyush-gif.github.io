// Parallax.jsx
import { useRef, useEffect } from 'react';
import '../styles/Parallax.css';

function Parallax() {
  const parallaxRef = useRef();

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.pageYOffset;
      parallaxRef.current.style.backgroundPositionY = `${scrollPosition * 0.5}px`;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="parallax-container" ref={parallaxRef}>
      <div className="parallax-content">
        <h2>CHECK OUT MY RESUME:</h2>
        <a href="/PiyushkhadkaResume.pdf" target="_blank" rel="noreferrer">
          GRAB A COPY!
        </a>
      </div>
    </div>
  );
}

export default Parallax;
import { Link } from 'react-router-dom';

const NavBar = () =>{
  return (
      <nav>
        <div className="nav">
        <p>PIYUSH KHADKA CHHETRI</p>
        <div className="bar">
          <Link to="/#about">ABOUT</Link>
          <Link to="/#experience">EXPERIENCE</Link>
          <Link to="/projects">PROJECTS</Link>
          <Link to="/certifications">CERTIFICATIONS</Link>
          <Link to="/contact">CONTACTS</Link>
        </div>
      </div>
      </nav>
  )
}
export default NavBar;
 
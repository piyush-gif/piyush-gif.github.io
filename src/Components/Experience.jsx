import htmlLogo from '../assets/images/html.png';
import cssLogo from '../assets/images/css.png';
import jsLogo from '../assets/images/javaScript.png';
import reactLogo from '../assets/images/react.png';
import javaLogo from '../assets/images/java.png';
import pythonLogo from '../assets/images/python.png';
import githubLogo from '../assets/images/git.png';
import powerBiLogo from '../assets/images/pb.png';
import sqlLogo from '../assets/images/sql.png';
import MachineLearning from '../assets/images/ml.png';

const Experience = () =>{
  const technologies = [
    { logo: htmlLogo },
    { logo: cssLogo },
    { logo: jsLogo },
    { logo: reactLogo },
    { logo: javaLogo },
    { logo: pythonLogo },
    { logo: githubLogo },
    { logo: powerBiLogo},
    { logo: sqlLogo},
    { logo:MachineLearning}  

  ];
return (
  <>
    <div className="expIntr">
      <h1>EXPERIENCE</h1>
      <p>I've been doing web development for about 3 years now, and I'm always eager to<br/> learn more in this fast paced industry.</p>
    </div>
    <div className="exp1">
      <h2>Some technologies I've worked with:</h2>
      <div className="tech-grid">
        {technologies.map((tech,index) =>(
          <div className="tech-item" key={index}>
            <img 
              src={tech.logo} 
              alt={tech.name} 
              className="tech-logo" 
            />
          </div>
        ))}
      </div>
    </div>
  </>
)}

export default Experience;
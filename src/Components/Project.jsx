import pneumoniaImg from '../assets/images/pneumonia.jpg'
import Dashboard from '../assets/images/power.png'
import amazon from '../assets/images/amazon.png'
const projects=[{
       title: 'PNEUMONIA RECOGNITION',
       image: pneumoniaImg,
       github:'https://github.com/piyush-gif/Pneumonia-Recognition-using-Monai-PRM-',
       id: 1,
  },
   {title: 'AMAZON CLONE',
       image: amazon,
       github: 'https://github.com/piyush-gif/AmazonJS',
       id: 2,
      }
      , {title: 'DATA PROFFESIONAL SURVEY',
       image: Dashboard,
       github: 'https://github.com/piyush-gif/PorfolioProjects',
       id: 2,
      }];

const Project =() => {
  return (
    <div className='mainProject'>
      <h1>Projects</h1>
      <p>(more coming soon)</p>
      <div className="projects">
        {projects.map((proj) => (
          <div className="singleProject" key={proj.id}>
             <div className="imageContainer">
              <img src={proj.image} alt={proj.title}/>
              <a
                href={proj.github}
                className="projectTitle"
                target="_blank"
                rel="noopener noreferrer"
              >
                {proj.title}
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
)}

export default Project;
import pneumoniaImg from '../assets/images/pneumonia.jpg'

const projects=[{
       title: 'Pneumonia Recognition using MONAI',
       description: 'Pneumonia Recognition using MONAI is a deep learning project...',
       image: pneumoniaImg,
       id: 1,
  } , {title: 'Pneumonia Recognition using MONAI',
       description: 'Pneumonia Recognition using MONAI is a deep learning project...',
       image: pneumoniaImg,
       id: 2,}
      , {title: 'Pneumonia Recognition using MONAI',
       description: 'Pneumonia Recognition using MONAI is a deep learning project...',
       image: pneumoniaImg,
       id: 2,}];

const Project =() => {
  return (
    <div className='mainProject'>
      <h1>Projects</h1>
      <div className="projects">
        {projects.map((proj,id) => (
          <div className="singleProject" key={id}>
            <img src={proj.image}/>
            <h2>{proj.title}</h2>
            <p>{proj.description}</p>
          </div>
        ))}
      </div>
    </div>
)}

export default Project;
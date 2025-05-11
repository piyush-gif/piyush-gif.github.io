import pneumoniaImg from '../assets/images/pneumonia.jpg'

const projects=[{
       title: 'Pneumonia Recognition using MONAI',
       description: 'Pneumonia Recognition using MONAI is a deep learning project...',
       image: pneumoniaImg,
       id: 1,
  }];

const Project =() => {
  return (
    <div className="projects">
      <h1>Projects</h1>
        {projects.map((proj,id) => (
          <div className="singleProject" key={id}>
            <img src={proj.image}/>
            <h1>{proj.title}</h1>
            <p>{proj.description}</p>
          </div>
        ))}
    </div>
)}

export default Project;
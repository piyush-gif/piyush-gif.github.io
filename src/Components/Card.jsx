import computerImg from '../assets/images/computer.png';
import codetagImg from '../assets/images/codetag.png';
import bulbImg from '../assets/images/bulb.png';
const Card =() =>{

  const dos=[{
    image: computerImg,
    title: "DESIGN",
    text: "Design isn’t just about aesthetics — it’s about function, clarity, and user experience. I believe in creating intuitive and efficient interfaces that not only look good but feel natural to use. Whether it’s a dashboard, a mobile app, or a full-stack web app, I focus on delivering solutions that enhance usability across all devices and platforms.",
    id: 1,
  },{
    image: codetagImg,
    title: "DEVELOPMENT",
    text: "With a strong foundation in computer science and hands-on experience in both frontend and backend technologies, I enjoy bringing ideas to life through code. From building machine learning models to developing web and mobile apps, I aim to write clean, maintainable code and continuously improve my skills across tools, languages, and frameworks.",
    id: 2,
  },{
    image: bulbImg,
    title: "Involvement",
    text: "I’ve contributed to various academic and personal projects including hospital systems, AI-based image diagnostics, and data dashboards. I enjoy collaborating on GitHub, participating in project-based learning, and constantly pushing myself through real-world challenges. Outside of development, I’m always exploring ways to bridge design, data, and technology.",
    id: 3,
  }]
  return (
    <div className="abouts">
    <div className="aboutMe">
      <h2>A Little Bit About Me</h2>
      <p>Hey! My name is Piyush and I am a Computer Science Graduate<br/> from <a href="https://www.leedsbeckett.ac.uk/courses/computer-science-bsc" target="_blank">Leeds Beckett University</a>. Currently I'm enhancing<br/> my portfolio with projects like a React-based personal website<br/> and a MONAI-powered medical imaging tool, aiming to bridge innovation with user-centric design.</p>
      </div>
      <div className="card">
        <h1>WHAT I DO</h1>
        <div className="card1">
          {dos.map((data) => (
            <div className="card2" key={data.id}>
              <img src={data.image} />
              <h3>{data.title}</h3>
              <p>{data.text}</p>
            </div>
          ))}
        </div>
      </div>
  </div>
  )
} 

export default Card;
 
 
import computerImg from '../assets/images/computer.png';
import codetagImg from '../assets/images/codetag.png';
import bulbImg from '../assets/images/bulb.png';
const Card =() =>{

  const dos=[{
    image: computerImg,
    title: "DESIGN",
    text: "Design isn't just what a product looks like and feels like on the outside. Design encompasses the internal functionality of a product as well as the overall user experience. I strive to design interfaces and experiences that people can enjoy on all digital mediums.",
    id: 1,
  },{
    image: codetagImg,
    title: "DEVELOPMENT",
    text: "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
    id: 2,
  },{
    image: bulbImg,
    title: "Involvement",
    text: "With a strong foundation in computer science, I'm passionate about web design and development, and interested in mobile app development. As I grow as a developer, I hope to write clean, readable code that can be used by others and leveraged to create beautiful software.",
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
 
 
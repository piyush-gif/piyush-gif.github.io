const Card =() =>{

  return (
    <>
    <div className="aboutMe">
      A Little Bit About Me
      <p>Hey! My name is Piyush and I am a Computer Science Graduate from <a href="">Leeds Beckett University</a>. Currently I'm <br/>enhancing my portfolio with projects like a React-based personal website and a MONAI-powered medical imaging tool, aiming to bridge innovation with user-centric design.</p>
      </div>
    <div className="card">
      <div className="card1">
        <h1>PIYUSH KHADKA CHHETRI</h1>
        <p>Passionate programmer graduated from Leeds Beckett University. I love building interactive and responsive web applications with React.</p>
      </div>
      <div className="card2">
        <h1>Skills</h1>
          <span>Python</span>
          <span>JavaScript</span>
          <span>SQL</span>
          <span>React</span>
          <span>HTML</span>
          <span>CSS</span>
          <div>
            <button>
              <a href="/Piyushkhadkacv.pdf" download>
                Download CV
              </a>
            </button>
          </div>
      </div>
  </div>
  
  </>
  )
} 

export default Card;
 
 
import { FaPalette, FaCode, FaLightbulb } from 'react-icons/fa';

const Card =() =>{

  const dos=[{
    icon: <FaPalette className="text-6xl text-purple-400" />,
    title: "DESIGN",
    text: "Design isn't just about aesthetics — it's about function, clarity, and user experience. I believe in creating intuitive and efficient interfaces that not only look good but feel natural to use. Whether it's a dashboard, a mobile app, or a full-stack web app, I focus on delivering solutions that enhance usability across all devices and platforms.",
    id: 1,
  },{
    icon: <FaCode className="text-6xl text-blue-400" />,
    title: "DEVELOPMENT",
    text: "With a strong foundation in computer science and hands-on experience in both frontend and backend technologies, I enjoy bringing ideas to life through code. From building machine learning models to developing web and mobile apps, I aim to write clean, maintainable code and continuously improve my skills across tools, languages, and frameworks.",
    id: 2,
  },{
    icon: <FaLightbulb className="text-6xl text-yellow-400" />,
    title: "Involvement",
    text: "I've contributed to various academic and personal projects including hospital systems, AI-based image diagnostics, and data dashboards. I enjoy collaborating on GitHub, participating in project-based learning, and constantly pushing myself through real-world challenges. Outside of development, I'm always exploring ways to bridge design, data, and technology.",
    id: 3,
  }]
  return (
    <div className="py-16 px-4 max-w-7xl mx-auto bg-gray-900">
      <div className="text-center mb-16">
        <h2 className="text-3xl font-bold mb-6 text-green-400">A Little Bit About Me</h2>
        <p className="text-lg text-gray-300 leading-relaxed">
          Hey! My name is Piyush and I am a Computer Science Graduate<br/> from <a href="https://www.leedsbeckett.ac.uk/courses/computer-science-bsc" target="_blank" className="text-green-400 hover:text-green-300 underline">Leeds Beckett University</a>. Currently I'm enhancing<br/> my portfolio with projects like a React-based personal website<br/> and a MONAI-powered medical imaging tool, aiming to bridge innovation with user-centric design.
        </p>
      </div>
      <div className="text-center">
        <h1 className="text-4xl font-bold mb-12 text-white">WHAT I DO</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {dos.map((data) => (
            <div
              key={data.id}
              className="bg-gradient-to-br from-gray-800 to-gray-900 rounded-2xl shadow-lg p-8 border border-gray-700 hover:border-green-400 hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col items-center"
            >
              <div className="mb-4 hover:scale-110 transition-transform duration-300">
                {data.icon}
              </div>
              <h3 className="text-xl font-semibold mb-4 text-green-400">{data.title}</h3>
              <p className="text-gray-300 leading-relaxed">{data.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
} 

export default Card;
 
 
import { FaNodeJs, FaReact, FaPython, FaGithub, FaJs, FaAws } from 'react-icons/fa';
import { SiExpress, SiMongodb } from 'react-icons/si';

const technologies = [
  { icon: <SiExpress className="text-gray-200" />, name: 'Express' },
  { icon: <FaNodeJs className="text-green-500" />, name: 'Node.js' },
  { icon: <FaReact className="text-cyan-400" />, name: 'React' },
  { icon: <FaPython className="text-blue-400" />, name: 'Python' },
  { icon: <FaGithub className="text-gray-300" />, name: 'GitHub' },
  { icon: <FaJs className="text-yellow-400" />, name: 'JavaScript' },
  { icon: <FaAws className="text-orange-400" />, name: 'AWS' },
  { icon: <SiMongodb className="text-green-600" />, name: 'MongoDB' },
];

const Experience = () =>{
return (
  <>
    <div className="text-center py-16 px-4 bg-gray-900">
      <h1 className="text-4xl font-bold mb-6 text-green-400">EXPERIENCE</h1>
      <p className="text-lg text-gray-300 mb-12">
        I thrive on learning — whether it's exploring a new JavaScript framework, <br/>diving into SQL optimization, or deploying modern web solutions, I'm always pushing to grow in this ever-evolving industry.
      </p>
    </div>
    <div className="max-w-6xl mx-auto px-4 pb-16 bg-gray-900">
      <h2 className="text-2xl font-semibold text-center mb-8 text-white">Some technologies I've worked with:</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-8 bg-black rounded-xl p-8">
        {technologies.map((tech, index) => (
          <div className="flex flex-col items-center" key={index}>
            <div className="text-5xl hover:scale-110 transition-transform duration-300">{tech.icon}</div>
            <span className="mt-2 text-white text-sm">{tech.name}</span>
          </div>
        ))}
      </div>
    </div>
  </>
)
}
export default Experience;
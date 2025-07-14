import pneumoniaImg from '../assets/images/pneumonia.jpg'
import Dashboard from '../assets/images/power.png'
import amazon from '../assets/images/amazon.png'
import mart from '../assets/images/mart.png'
import { FaShoppingCart } from 'react-icons/fa';

const projects = [
  {
    title: 'MART',
    description: 'Full-stack e-commerce platform with modern UI/UX, featuring user authentication, product management, shopping cart functionality, and secure payment processing.',
    image: mart,
    github: 'https://github.com/piyush-gif/mart', // Update with actual GitHub link
    live: null,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript', 'Tailwind CSS'],
    status: 'Completed',
    id: 1,
  },
  {
    title: 'PNEUMONIA RECOGNITION',
    description: 'AI-powered medical imaging tool using MONAI framework for automated pneumonia detection from chest X-rays. Implements advanced deep learning models for accurate diagnosis.',
    image: pneumoniaImg,
    github: 'https://github.com/piyush-gif/Pneumonia-Recognition-using-Monai-PRM-',
    live: null,
    tech: ['Python', 'MONAI', 'Deep Learning', 'Medical Imaging', 'PyTorch'],
    status: 'Completed',
    id: 2,
  },
  {
    title: 'AMAZON CLONE',
    description: 'Full-stack e-commerce platform replicating Amazon\'s core features including user authentication, product catalog, shopping cart, and payment integration.',
    image: amazon,
    github: 'https://github.com/piyush-gif/AmazonJS',
    live: null,
    tech: ['React', 'Node.js', 'Express', 'MongoDB', 'JavaScript'],
    status: 'Completed',
    id: 3,
  },
  {
    title: 'DATA PROFESSIONAL SURVEY',
    description: 'Interactive data visualization dashboard analyzing professional survey responses with comprehensive analytics and insights presentation.',
    image: Dashboard,
    github: 'https://github.com/piyush-gif/PorfolioProjects',
    live: null,
    tech: ['Power BI', 'SQL', 'Data Analysis', 'Visualization'],
    status: 'Completed',
    id: 4,
  }
];

const Project = () => {
  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Projects</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Here are some of my recent projects. Each one represents a unique challenge and learning opportunity.
          </p>
        </div>

        {/* Projects Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project) => (
            <div
              key={project.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-green-500"
            >
              {/* Project Image */}
              <div className="relative h-48 overflow-hidden bg-gray-700 flex items-center justify-center">
                {typeof project.image === 'string' ? (
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform duration-300 hover:scale-110"
                  />
                ) : (
                  <div className="text-6xl transition-transform duration-300 hover:scale-110">
                    {project.image}
                  </div>
                )}
                <div className="absolute top-4 right-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
                    project.status === 'Completed' ? 'bg-green-500 text-white' : 'bg-yellow-500 text-black'
                  }`}>
                    {project.status}
                  </span>
                </div>
              </div>

              {/* Project Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold text-white mb-3">{project.title}</h3>
                <p className="text-gray-300 text-sm leading-relaxed mb-4">
                  {project.description}
                </p>

                {/* Tech Stack */}
                <div className="flex flex-wrap gap-2 mb-6">
                  {project.tech.map((tech, index) => (
                    <span
                      key={index}
                      className="px-3 py-1 bg-gray-700 text-green-400 text-xs rounded-full font-medium"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Project Links */}
                <div className="flex gap-3">
                  <a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-600 transition-colors duration-200"
                  >
                    View Code
                  </a>
                  {project.live && (
                    <a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-green-500 transition-colors duration-200"
                    >
                      Live Demo
                    </a>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">More projects coming soon...</p>
          <a
            href="https://github.com/piyush-gif"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
              <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
            </svg>
            View All Projects
          </a>
        </div>
      </div>
    </div>
  );
};

export default Project;
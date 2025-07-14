import data from '../assets/certificates/dataAna.pdf'
import sql from '../assets/certificates/sql.pdf'
import python from '../assets/certificates/python.pdf'
import { useState } from 'react';
import { FaCertificate, FaDownload, FaPython, FaDatabase, FaChartBar } from 'react-icons/fa';

const Certification = () => {
  const certificates = [
    { 
      title: 'Python Essential Training', 
      description: 'Comprehensive Python programming course covering data analysis, visualization, and analytics fundamentals.',
      skills: ['Data Analysis', 'Data Visualization', 'Data Analytics', 'Python Programming'],
      link: python, 
      icon: <FaPython className="text-4xl text-blue-500" />,
      issuer: 'LinkedIn Learning',
      date: '2024',
      id: 1 
    },
    { 
      title: 'SQL for Data Analysis', 
      description: 'Advanced SQL course focusing on data analysis techniques and database query optimization.',
      skills: ['Data Analysis', 'SQL', 'Database Management', 'Query Optimization'],
      link: sql, 
      icon: <FaDatabase className="text-4xl text-green-500" />,
      issuer: 'LinkedIn Learning',
      date: '2024',
      id: 2 
    },
    { 
      title: 'Career Essentials in Data Analysis', 
      description: 'Professional data analysis certification covering industry best practices and tools.',
      skills: ['Data Analysis', 'Python', 'Statistical Analysis', 'Business Intelligence'],
      link: data, 
      icon: <FaChartBar className="text-4xl text-purple-500" />,
      issuer: 'LinkedIn Learning',
      date: '2024',
      id: 3 
    }
  ];

  const [open, setOpen] = useState(null);

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-7xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Certifications</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            Professional certifications and training that demonstrate my commitment to continuous learning and skill development.
          </p>
        </div>

        {/* Certificates Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8">
          {certificates.map((cert) => (
            <div
              key={cert.id}
              className="bg-gray-800 rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-700 hover:border-green-500"
            >
              {/* Certificate Header */}
              <div className="p-6 border-b border-gray-700">
                <div className="flex items-center gap-4 mb-4">
                  <div className="flex-shrink-0">
                    {cert.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-bold text-white mb-1">{cert.title}</h3>
                    <p className="text-gray-400 text-sm">{cert.issuer} • {cert.date}</p>
                  </div>
                </div>
                <p className="text-gray-300 text-sm leading-relaxed">
                  {cert.description}
                </p>
              </div>

              {/* Certificate Content */}
              <div className="p-6">
                {/* Skills Section */}
                <div className="mb-6">
                  <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                    <FaCertificate className="text-green-400" />
                    Skills Covered
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {cert.skills.map((skill, index) => (
                      <span
                        key={index}
                        className="px-3 py-1 bg-gray-700 text-green-400 text-xs rounded-full font-medium"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-3">
                  <button
                    onClick={() => setOpen(open === cert.id ? null : cert.id)}
                    className="flex-1 bg-gray-700 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-gray-600 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <span>View Details</span>
                  </button>
                  <a
                    href={cert.link}
                    target="_blank"
                    rel="noreferrer"
                    className="flex-1 bg-green-600 text-white px-4 py-2 rounded-lg text-center text-sm font-medium hover:bg-green-500 transition-colors duration-200 flex items-center justify-center gap-2"
                  >
                    <FaDownload className="text-sm" />
                    <span>Download</span>
                  </a>
                </div>

                {/* Expanded Details */}
                {open === cert.id && (
                  <div className="mt-4 p-4 bg-gray-700 rounded-lg border border-gray-600">
                    <h5 className="text-white font-semibold mb-2">Certificate Details</h5>
                    <ul className="text-gray-300 text-sm space-y-1">
                      <li>• Issued by: {cert.issuer}</li>
                      <li>• Date: {cert.date}</li>
                      <li>• Skills: {cert.skills.join(', ')}</li>
                    </ul>
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>

        {/* Call to Action */}
        <div className="text-center mt-16">
          <p className="text-gray-400 text-lg mb-4">More certifications coming soon...</p>
          <a
            href="https://www.linkedin.com/in/piyush-khadka-chhetri-5516602b9"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-800 text-white px-6 py-3 rounded-lg hover:bg-gray-700 transition-colors duration-200"
          >
            <FaCertificate className="w-5 h-5" />
            View All Certifications
          </a>
        </div>
      </div>
    </div>
  );
};

export default Certification;
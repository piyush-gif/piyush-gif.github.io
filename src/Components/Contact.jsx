import { useState } from 'react';
import { FaEnvelope, FaGithub, FaLinkedin, FaMapMarkerAlt, FaPhone } from 'react-icons/fa';

const Contact = () => {
  const [copied, setCopied] = useState(false);

  const email = 'piyush.khadka2233@gmail.com';

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}?subject=Let's%20work%20together&body=Hi%20there,%0A%0AI%20visited%20your%20portfolio...`;
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const contactMethods = [
    {
      icon: <FaEnvelope className="text-2xl text-green-400" />,
      title: 'Email',
      value: email,
      action: handleEmailClick,
      description: 'Send me an email directly'
    },
    {
      icon: <FaMapMarkerAlt className="text-2xl text-blue-400" />,
      title: 'Location',
      value: 'Wakefield, United Kingdom',
      action: null,
      description: 'Based in Wakefield, UK'
    },
    {
      icon: <FaPhone className="text-2xl text-purple-400" />,
      title: 'Phone',
      value: '+44 07448595793',
      action: null,
      description: 'Available for calls'
    }
  ];

  const socialLinks = [
    {
      icon: <FaGithub className="text-xl" />,
      name: 'GitHub',
      url: 'https://github.com/piyush-gif',
      color: 'hover:text-gray-400'
    },
    {
      icon: <FaLinkedin className="text-xl" />,
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/piyush-khadka-chhetri-5516602b9',
      color: 'hover:text-blue-400'
    }
  ];

  return (
    <div className="min-h-screen bg-gray-900 py-16 px-4">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">Get In Touch</h1>
          <p className="text-xl text-gray-300 max-w-3xl mx-auto">
            I'm always open to discussing new opportunities, interesting projects, or just having a chat about technology and development.
          </p>
        </div>

        {/* Contact Methods */}
        <div className="space-y-6 mb-12">
          {contactMethods.map((method, index) => (
            <div
              key={index}
              className="bg-gray-800 rounded-xl p-6 border border-gray-700 hover:border-green-500 transition-colors duration-200"
            >
              <div className="flex items-center gap-4">
                <div className="flex-shrink-0">
                  {method.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-white font-semibold mb-1">{method.title}</h3>
                  <p className="text-gray-400 text-sm mb-2">{method.description}</p>
                  {method.action ? (
                    <button
                      onClick={method.action}
                      className="text-green-400 hover:text-green-300 transition-colors duration-200 text-sm font-medium"
                    >
                      {method.value}
                    </button>
                  ) : (
                    <p className="text-gray-300 text-sm">{method.value}</p>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Social Links */}
        <div className="text-center">
          <h3 className="text-xl font-semibold text-white mb-4">Follow Me</h3>
          <div className="flex justify-center gap-4">
            {socialLinks.map((social, index) => (
              <a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className={`bg-gray-800 p-4 rounded-xl border border-gray-700 text-gray-300 ${social.color} transition-all duration-200 hover:border-green-500 hover:scale-105`}
                aria-label={social.name}
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
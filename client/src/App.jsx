import React, { useEffect, useState } from 'react'
import { Github, Linkedin, Mail, ExternalLink, ChevronDown, Code, Database, Globe } from 'lucide-react';

const App = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isScrolled, setIsScrollled] = useState(false);


  useEffect(() => {
    const handleScroll = () => {
      setIsScrollled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return() => window.removeEventListener('scroll', handleScroll);
  },[])


  const projects = [
    {
      title: "NOTE TAKING APP",
      description: "Full-stack web application with React, Node.js, and MongoDB. A personal project in pursue of learning MERN Stack.",
      technologies: ["React JS","Express JS", "Node.js", "MongoDB", "DaisyUI", "Tailwind CSS"],
      github: "https://github.com/M4j1m4/NoteApp-MERN",
      demo: "https://noteappnikhen.onrender.com/"
    },
    {
      title: "INTERNSHIP - RoundTable",
      description: "A fully functional booking management system tailored for seamless meetings in Cultural Center of the Philippines",
      technologies: ["PHP", "Laravel", "Tailwind CSS", "Blade"],
      github: "https://github.com/M4j1m4/round_table"
    },
    {
      title: "Inventory Management System",
      description: "An academic project tailored for the company clarklane co. to make their sales and product tracking more fast and reliable",
      technologies: ["Vanilla PHP"],
      github: "https://github.com/M4j1m4/SAISystem"
    }
  ];

  const skills = [  
    {
      category: "Frontend",
      icon: <Code className="w-6 h-6" />,
      technologies: ["React JS", "HTML", "CSS", "Tailwind CSS", "DaisyUI"]
    },
    {
      category: "Backend",
      icon: <Database className="w-6 h-6" />,
      technologies: ["Node.js", "Python", "MySQL", "MongoDB", "Express.js", "XAMPP", "PHP"]
    },
    {
      category: "Tools & Others",
      icon: <Globe className="w-6 h-6" />,
      technologies: ["Git", "REST APIs", "Laravel", "MERN Stack", "LAMP Stack"]
    }
  ];

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId);
    element?.scrollIntoView({behavior:'smooth'});
    setActiveSection(sectionId)
  };


  return (
    <div className='min-h-screen bg-white text-gray-900'>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isScrolled ? 'bg-white/80 backdrop-blur-md shadow-sm' : 'bg-transparent'
      }`}>
        <div className='max-w-6xl mx-auto px-6 py-4'>
          <div className='flex justify-between items-center'>
            <div className='text-xl font-bold'>
              Portfolio
            </div>
            <div className='hidden md:flex space-x-8'>
              {['home', 'about', 'projects', 'contact'].map((section) => {
                <button 
                  key={section}
                  onClick={() => scrollToSection(section)}
                  className={`capitalize hover:text-blue-600 transition-colors ${
                    activeSection === section ? 'text-blue-600' : 'text-gray-600'
                  }`}
                >
                  {section}
                </button>
              })}
            </div>
          </div>
        </div>

      </nav>

      {/* Hero Section */}
      <section id="home" className="min-h-screen flex items-center justify-center px-6">
        <div className="max-w-4xl text-center">
          <h1 className="text-5xl md:text-7xl font-light mb-6 tracking-tight">
            Khen <span className="font-bold">Abesamis</span>
          </h1>
          <p className="text-xl md:text-2xl text-gray-600 mb-8 font-light">
            Full-Stack Developer crafting digital experiences with clean code and modern technologies
          </p>
          <div className="flex justify-center space-x-6 mb-12">
            <a href="https://github.com/M4j1m4" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Github className="w-6 h-6" />
            </a>
            <a href="https://www.linkedin.com/in/khen-abesamis-b08522366/" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="abesamiskheni@gmail.com" className="text-gray-600 hover:text-blue-600 transition-colors">
              <Mail className="w-6 h-6" />
            </a>
          </div>
          <button
            onClick={() => scrollToSection('about')}
            className="animate-bounce text-gray-400 hover:text-gray-600 transition-colors"
          >
            <ChevronDown className="w-8 h-8" />
          </button>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">About Me</h2>
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                I'm a recent graduate of Bachelor of Science in Computer Engineering and a passionate full-stack developer. 
                I love turning complex problems into simple, beautiful designs that provide exceptional user experiences.
              </p>
              <p className="text-lg text-gray-600 leading-relaxed">
                When I'm not coding, you can find me exploring new technologies.
              </p>
            </div>
            <div className="space-y-8">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-start space-x-4">
                  <div className="text-blue-600 mt-1">
                    {skill.icon}
                  </div>
                  <div>
                    <h3 className="font-semibold mb-2">{skill.category}</h3>
                    <div className="flex flex-wrap gap-2">
                      {skill.technologies.map((tech, techIndex) => (
                        <span
                          key={techIndex}
                          className="bg-gray-200 text-gray-700 px-3 py-1 rounded-full text-sm"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="py-20 px-6">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-light mb-12 text-center">Featured Projects</h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {projects.map((project, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-lg p-6 hover:shadow-lg transition-shadow duration-300"
              >
                <h3 className="text-xl font-semibold mb-3">{project.title}</h3>
                <p className="text-gray-600 mb-4 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.technologies.map((tech, techIndex) => (
                    <span
                      key={techIndex}
                      className="bg-blue-100 text-blue-800 px-2 py-1 rounded text-sm"
                    >
                      {tech}
                    </span>
                  ))}
                </div>
                <div className="flex space-x-4">
                  <a
                    href={project.github}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <Github className="w-4 h-4 mr-1" />
                    Code
                  </a>
                  <a
                    href={project.demo}
                    className="flex items-center text-gray-600 hover:text-blue-600 transition-colors"
                  >
                    <ExternalLink className="w-4 h-4 mr-1" />
                    Demo
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20 px-6 bg-gray-50">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-light mb-8">Let's Work Together</h2>
          <p className="text-lg text-gray-600 mb-12 leading-relaxed">
            I'm always interested in new opportunities and exciting projects. 
            Whether you have a question or just want to say hi, feel free to reach out!
          </p>
          <div className="flex justify-center space-x-8">
            <a
              href="mailto:john@example.com"
              className="bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors font-medium"
            >
              Send Email
            </a>
            <a
              href="#"
              className="border border-gray-300 text-gray-700 px-8 py-3 rounded-lg hover:border-gray-400 transition-colors font-medium"
            >
              Download CV
            </a>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="py-8 px-6 text-center text-gray-500">
        <p>&copy; 2024 John Developer. Built with React & Tailwind CSS.</p>
      </footer>
    </div>
  )
}

export default App
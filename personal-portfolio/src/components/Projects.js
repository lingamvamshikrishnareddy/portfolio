import React from 'react';

const Projects = () => {
  const projects = [
    {
      title: "Project 1",
      description: "Detailed description of your first project",
      technologies: ["React", "Tailwind", "Three.js"],
      link: "#"
    },
    {
      title: "Project 2", 
      description: "Detailed description of your second project",
      technologies: ["Node.js", "Express", "MongoDB"],
      link: "#"
    },
    {
      title: "Project 3",
      description: "Detailed description of your third project",
      technologies: ["Python", "Django", "React"],
      link: "#"
    }
  ];

  return (
    <section id="projects" className="py-16">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Projects</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-4 text-white">{project.title}</h3>
              <p className="text-gray-300 mb-4">{project.description}</p>
              <div className="flex flex-wrap gap-2 mb-4">
                {project.technologies.map((tech, techIndex) => (
                  <span 
                    key={techIndex} 
                    className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <a 
                href={project.link} 
                className="inline-block bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
              >
                View Project
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
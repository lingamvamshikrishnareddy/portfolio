import React, { useState } from 'react';
import { ExternalLink, Github, Youtube } from 'lucide-react';

const ProjectsShowcase = () => {
  const [selectedCategory, setSelectedCategory] = useState('All');

  // Project data array
  const projectsData = [
    // E-Commerce & Food
    {
      title: 'VegEats',
      category: 'E-Commerce',
      description: 'Online vegetarian food ordering and delivery platform with real-time order tracking, multiple payment options, and restaurant partner dashboard',
      technologies: ['React', 'Node.js', 'MongoDB', 'Redux', 'Socket.io'],
      githubLink: 'https://github.com/username/vegeats',
      liveLink: 'https://vegeats-demo.com',
      demoVideo: 'https://youtube.com/watch?v=vegeats-demo'
    },
    {
      title: 'QuickMart',
      category: 'E-Commerce',
      description: 'Quick commerce platform with 15-minute delivery promise, inventory management, and delivery partner tracking',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
      githubLink: 'https://github.com/username/quickmart',
      liveLink: 'https://quickmart-demo.com',
      demoVideo: 'https://youtube.com/watch?v=quickmart-demo'
    },
  
    // Enterprise Management
    {
      title: 'EnterpriseHub',
      category: 'Enterprise',
      description: 'Comprehensive enterprise management solution with modules for HR, finance, inventory, CRM, and business intelligence. Features include employee management, payroll processing, resource planning, and advanced analytics dashboard',
      technologies: ['React', 'Java Spring Boot', 'PostgreSQL', 'Elasticsearch', 'Docker', 'Kubernetes'],
      githubLink: 'https://github.com/username/enterprisehub',
      liveLink: 'https://enterprisehub-demo.com',
      demoVideo: 'https://youtube.com/watch?v=enterprisehub-demo'
    },
  
    // Real Estate & Property
    {
      title: 'Remis',
      category: 'Real Estate',
      description: 'No-broker property management system with document verification, virtual tours, and automated rent collection',
      technologies: ['React', 'Django', 'PostgreSQL', 'AWS'],
      githubLink: 'https://github.com/username/remis',
      liveLink: 'https://remis-demo.com',
      demoVideo: 'https://youtube.com/watch?v=remis-demo'
    },
  
    // Event Management
    {
      title: 'WeddingPro',
      category: 'Event Management',
      description: 'Comprehensive wedding planning platform with vendor management, guest list tracking, budget planning, and timeline management',
      technologies: ['Vue.js', 'Laravel', 'MySQL', 'Firebase'],
      githubLink: 'https://github.com/username/weddingpro',
      liveLink: 'https://weddingpro-demo.com',
      demoVideo: 'https://youtube.com/watch?v=weddingpro-demo'
    },
  
    // Finance
    {
      title: 'FinSecure',
      category: 'Finance',
      description: 'Digital lending platform for secured loans with automated credit scoring, KYC verification, and loan management',
      technologies: ['Angular', 'Spring Boot', 'PostgreSQL', 'Elasticsearch'],
      githubLink: 'https://github.com/username/finsecure',
      liveLink: 'https://finsecure-demo.com',
      demoVideo: 'https://youtube.com/watch?v=finsecure-demo'
    },
  
    // Streaming & Entertainment
    {
      title: 'PixelStream',
      category: 'Entertainment',
      description: 'Video streaming platform with content recommendation engine, subscription management, and adaptive streaming',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS CloudFront'],
      githubLink: 'https://github.com/username/pixelstream',
      liveLink: 'https://pixelstream-demo.com',
      demoVideo: 'https://youtube.com/watch?v=pixelstream-demo'
    },
  
    // Health & Wellness
    {
      title: 'YogaFit',
      category: 'Health',
      description: 'Fasting and yoga tracking app with meditation timer, pose library, and progress tracking',
      technologies: ['React Native', 'Firebase', 'Node.js'],
      githubLink: 'https://github.com/username/yogafit',
      liveLink: 'https://yogafit-demo.com',
      demoVideo: 'https://youtube.com/watch?v=yogafit-demo'
    },
    {
      title: 'TeleMed',
      category: 'Healthcare',
      description: 'Telemedicine platform with video consultations, prescription management, and electronic health records',
      technologies: ['React', 'Node.js', 'MongoDB', 'WebRTC'],
      githubLink: 'https://github.com/username/telemed',
      liveLink: 'https://telemed-demo.com',
      demoVideo: 'https://youtube.com/watch?v=telemed-demo'
    },
  
    // Environmental & Management
    {
      title: 'EcoTrack',
      category: 'Environment',
      description: 'Waste management tracking system with recycling analytics and sustainability metrics',
      technologies: ['React', 'Python', 'PostgreSQL', 'TensorFlow'],
      githubLink: 'https://github.com/username/ecotrack',
      liveLink: 'https://ecotrack-demo.com',
      demoVideo: 'https://youtube.com/watch?v=ecotrack-demo'
    },
    {
      title: 'ManufacturePro',
      category: 'Manufacturing',
      description: 'Manufacturing process management system with inventory tracking, quality control, and production planning',
      technologies: ['Angular', 'Java Spring', 'Oracle', 'Docker'],
      githubLink: 'https://github.com/username/manufacturepro',
      liveLink: 'https://manufacturepro-demo.com',
      demoVideo: 'https://youtube.com/watch?v=manufacturepro-demo'
    },
  
    // Transportation
    {
      title: 'VayuRide',
      category: 'Transportation',
      description: 'Ride-hailing and fleet management platform with carpooling features and driver verification',
      technologies: ['React Native', 'Node.js', 'PostgreSQL', 'Redis'],
      githubLink: 'https://github.com/username/vayuride',
      liveLink: 'https://vayuride-demo.com',
      demoVideo: 'https://youtube.com/watch?v=vayuride-demo'
    },
  
    // Professional Networking
    {
      title: 'BlueCollar',
      category: 'Professional Network',
      description: 'Job platform for skilled workers with video profiles, skill verification, and direct hiring',
      technologies: ['React', 'Node.js', 'MongoDB', 'AWS'],
      githubLink: 'https://github.com/username/bluecollar',
      liveLink: 'https://bluecollar-demo.com',
      demoVideo: 'https://youtube.com/watch?v=bluecollar-demo'
    },
  
    // Social Media
    {
      title: 'Nexora',
      category: 'Social Media',
      description: 'Social media platform focused on short-form video content with AI-powered content recommendations',
      technologies: ['React Native', 'Node.js', 'MongoDB', 'TensorFlow'],
      githubLink: 'https://github.com/username/nexora',
      liveLink: 'https://nexora-demo.com',
      demoVideo: 'https://youtube.com/watch?v=nexora-demo'
    },
  
    // Productivity
    {
      title: 'WebExcel',
      category: 'Productivity',
      description: 'Browser-based spreadsheet application with real-time collaboration and advanced formulas',
      technologies: ['React', 'Node.js', 'MongoDB', 'Socket.io'],
      githubLink: 'https://github.com/username/webexcel',
      liveLink: 'https://webexcel-demo.com',
      demoVideo: 'https://youtube.com/watch?v=webexcel-demo'
    },
  
    // AI & Machine Learning
    {
      title: 'AICodeBuddy',
      category: 'AI',
      description: 'AI-powered code and text generation chatbot trained on 7B parameters with specialized programming assistance',
      technologies: ['React', 'Python', 'PyTorch', 'FastAPI'],
      githubLink: 'https://github.com/username/aicodebuddy',
      liveLink: 'https://aicodebuddy-demo.com',
      demoVideo: 'https://youtube.com/watch?v=aicodebuddy-demo'
    },
  
    // Weather
    {
      title: 'Weather Forecast App',
      category: 'Weather',
      description: 'Real-time weather information with location tracking and severe weather alerts',
      technologies: ['React', 'Node.js', 'OpenWeatherMap API'],
      githubLink: 'https://github.com/username/weather-app',
      liveLink: 'https://weather-forecast-demo.com',
      demoVideo: 'https://youtube.com/watch?v=weather-app-demo'
    }
  ];
  

  // Get unique categories
  const categories = ['All', ...new Set(projectsData.map(project => project.category))];

  // Filter projects based on selected category
  const filteredProjects = selectedCategory === 'All' 
    ? projectsData 
    : projectsData.filter(project => project.category === selectedCategory);

  // Project card component
  const ProjectCard = ({ project }) => (
    <div className="bg-gray-800 rounded-xl p-6 flex flex-col h-full transform transition-all duration-300 hover:scale-105 hover:shadow-xl border border-gray-700">
      <h3 className="text-2xl font-semibold mb-3 text-white">
        {project.title}
      </h3>
      <p className="text-gray-300 mb-4 flex-grow">
        {project.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {project.technologies.map((tech, index) => (
          <span
            key={index}
            className="bg-blue-500/20 text-blue-300 px-2 py-1 rounded-md text-sm"
          >
            {tech}
          </span>
        ))}
      </div>

      <div className="flex gap-3 mt-auto">
        {project.liveLink && (
          <a
            href={project.liveLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700 transition-colors"
          >
            <ExternalLink size={16} />
            Live Demo
          </a>
        )}
        {project.githubLink && (
          <a
            href={project.githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-gray-700 text-white px-4 py-2 rounded-md hover:bg-gray-600 transition-colors"
          >
            <Github size={16} />
            Code
          </a>
        )}
        {project.demoVideo && (
          <a
            href={project.demoVideo}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-md hover:bg-red-700 transition-colors"
          >
            <Youtube size={16} />
            Video
          </a>
        )}
      </div>
    </div>
  );

  return (
    <section id="projects" className="py-16 min-h-screen bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-white">My Projects</h2>
        
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-4 py-2 rounded-full transition-colors ${
                selectedCategory === category
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-700 text-gray-300 hover:bg-gray-600'
              }`}
            >
              {category}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project, index) => (
            <ProjectCard key={index} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ProjectsShowcase;
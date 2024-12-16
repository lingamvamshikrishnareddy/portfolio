import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Experience() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  const experiences = [
    {
      title: "Freelancer - Upwork",
      role: "Full Stack Web and Mobile Developer",
      period: "Aug 2023 – Present",
      responsibilities: [
        "Developed web and mobile applications using React, Node.js, Django, and Flutter",
        "Enhanced user engagement through improved application performance and user interface design",
        "Delivered customized solutions for diverse client needs across various industries",
      ],
    },
    {
      title: "Tata Consultancy Services",
      role: "Developer",
      period: "Sep 2020 – Sep 2021",
      location: "Hyderabad, India",
      responsibilities: [
        "Contributed to large-scale projects using Spring, Spring Boot, and Java",
        "Improved system performance through code optimization and rigorous testing",
        "Assisted in data migration projects to AWS, enhancing data accessibility and security",
        "Developed REST APIs using Node.js and MySQL for enterprise-level applications",
        "Gained experience in the complete lifecycle of backend services from ideation to deployment",
      ],
    }
  ];

  useEffect(() => {
    // Three.js snowfall background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / 200, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ alpha: true });
    renderer.setSize(window.innerWidth, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Snowflakes
    const snowflakes = [];
    const snowflakeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const snowflakeMaterial = new THREE.MeshBasicMaterial({ color: 0xffffff, transparent: true, opacity: 0.7 });

    for (let i = 0; i < 100; i++) {
      const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
      snowflake.position.set(
        Math.random() * 20 - 10,
        Math.random() * 10,
        Math.random() * -10
      );
      scene.add(snowflake);
      snowflakes.push(snowflake);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      snowflakes.forEach(snowflake => {
        snowflake.position.y -= 0.02;
        if (snowflake.position.y < -5) {
          snowflake.position.y = 10;
        }
      });
      renderer.render(scene, camera);
    };

    animate();
    sceneRef.current = scene;

    // Cleanup
    return () => {
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
    };
  }, []);

  return (
    <section 
      id="experience" 
      className="relative py-16 overflow-hidden"
    >
      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 opacity-20"
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-800">
          Professional Experience
        </h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <div 
              key={index} 
              className="bg-white/70 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-gray-200/50 transition-all duration-300 hover:scale-[1.02]"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-gray-900">{exp.title}</h3>
                  <h4 className="text-xl text-gray-700">{exp.role}</h4>
                </div>
                <span className="text-gray-500 font-medium">{exp.period}</span>
              </div>
              
              {exp.location && (
                <p className="text-gray-600 mb-4 italic">{exp.location}</p>
              )}
              
              <ul className="space-y-2 text-gray-700">
                {exp.responsibilities.map((resp, i) => (
                  <li 
                    key={i} 
                    className="flex items-start"
                  >
                    <svg 
                      className="w-4 h-4 text-blue-500 mr-2 mt-1 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    {resp}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
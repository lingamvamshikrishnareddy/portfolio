import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { motion } from 'framer-motion';

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
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setPixelRatio(window.devicePixelRatio);
    renderer.setSize(window.innerWidth, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Snowflakes with more varied movement
    const snowflakes = [];
    const snowflakeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const snowflakeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.7 
    });

    for (let i = 0; i < 150; i++) {
      const snowflake = new THREE.Mesh(snowflakeGeometry, snowflakeMaterial);
      
      // More randomized initial positioning
      snowflake.position.set(
        Math.random() * 30 - 15,  // Wider horizontal spread
        Math.random() * 15,       // More vertical variation
        Math.random() * -15        // Deeper z-axis positioning
      );
      
      // Add custom properties for more natural movement
      snowflake.userData = {
        velocity: {
          x: Math.random() * 0.02 - 0.01,  // Slight horizontal drift
          y: Math.random() * 0.03 + 0.02,  // Varied falling speed
          z: Math.random() * 0.01 - 0.005  // Minimal depth variation
        }
      };
      
      scene.add(snowflake);
      snowflakes.push(snowflake);
    }

    camera.position.z = 5;

    const animate = () => {
      requestAnimationFrame(animate);
      snowflakes.forEach(snowflake => {
        // More natural falling with slight horizontal movement
        snowflake.position.y -= snowflake.userData.velocity.y;
        snowflake.position.x += snowflake.userData.velocity.x;
        snowflake.position.z += snowflake.userData.velocity.z;

        // Reset position when out of view with more randomization
        if (snowflake.position.y < -5) {
          snowflake.position.y = 15;
          snowflake.position.x = Math.random() * 30 - 15;
          snowflake.position.z = Math.random() * -15;
        }
      });
      renderer.render(scene, camera);
    };

    animate();
    sceneRef.current = scene;

    // Responsive resize
    const handleResize = () => {
      camera.aspect = window.innerWidth / 200;
      camera.updateProjectionMatrix();
      renderer.setSize(window.innerWidth, 200);
    };
    window.addEventListener('resize', handleResize);

    // Cleanup
    return () => {
      window.removeEventListener('resize', handleResize);
      mountRef.current.removeChild(renderer.domElement);
      renderer.dispose();
      snowflakes.forEach(snowflake => {
        scene.remove(snowflake);
        snowflake.geometry.dispose();
        snowflake.material.dispose();
      });
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
        <motion.h2 
          initial={{ opacity: 0, y: -50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="section-title text-white"
        >
          Professional Experience
        </motion.h2>
        
        <div className="space-y-8">
          {experiences.map((exp, index) => (
            <motion.div 
              key={index} 
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              transition={{ 
                duration: 0.5, 
                delay: index * 0.2 
              }}
              viewport={{ once: true }}
              className="bg-white/10 backdrop-blur-lg rounded-2xl shadow-2xl p-6 border border-white/20 transition-all duration-300 hover:scale-[1.02] hover:bg-white/20"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{exp.title}</h3>
                  <h4 className="text-xl text-gray-300">{exp.role}</h4>
                </div>
                <span className="text-gray-400 font-medium">{exp.period}</span>
              </div>
              
              {exp.location && (
                <p className="text-gray-300 mb-4 italic">{exp.location}</p>
              )}
              
              <ul className="space-y-2 text-gray-200">
                {exp.responsibilities.map((resp, i) => (
                  <li 
                    key={i} 
                    className="flex items-start"
                  >
                    <svg 
                      className="w-5 h-5 text-blue-400 mr-3 mt-1 flex-shrink-0" 
                      fill="currentColor" 
                      viewBox="0 0 20 20"
                    >
                      <path 
                        fillRule="evenodd" 
                        d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" 
                        clipRule="evenodd" 
                      />
                    </svg>
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Experience;
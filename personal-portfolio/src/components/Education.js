import React, { useRef, useEffect } from 'react';
import * as THREE from 'three';

function Education() {
  const mountRef = useRef(null);
  const sceneRef = useRef(null);

  const educationHistory = [
    {
      institution: "Sri Mrinstitute of Science and Technology",
      degree: "B.Tech in Electronics and Communication Engineering",
      graduationYear: "2020",
      percentage: "77.18%",
      highlights: [
        "Completed Bachelor's degree in Electronics and Communication Engineering",
        "Developed strong technical skills in communication systems and signal processing",
        "Participated in multiple technical workshops and seminars"
      ]
    },
    {
      institution: "Sri Chaitanya Junior College",
      degree: "12th Grade - MPC (Mathematics, Physics, Chemistry)",
      graduationYear: "2016",
      percentage: "94.8%",
      highlights: [
        "Excellent academic performance in science and mathematics",
        "Active participant in science exhibitions and mathematics Olympiads",
        "Developed strong foundation in core science subjects"
      ]
    },
    {
      institution: "Raos Techno International School",
      degree: "10th Grade",
      graduationYear: "2014",
      percentage: "95%",
      highlights: [
        "Outstanding academic achievement",
        "Balanced academic and extracurricular activities",
        "Built fundamental skills and knowledge base"
      ]
    }
  ];

  useEffect(() => {
    // Three.js snowfall background
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true,
      antialias: true 
    });
    renderer.setSize(window.innerWidth, 200);
    mountRef.current.appendChild(renderer.domElement);

    // Snowflakes
    const snowflakes = [];
    const snowflakeGeometry = new THREE.SphereGeometry(0.1, 8, 8);
    const snowflakeMaterial = new THREE.MeshBasicMaterial({ 
      color: 0xffffff, 
      transparent: true, 
      opacity: 0.7 
    });

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
      id="education" 
      className="relative py-16 overflow-hidden"
    >
      {/* Three.js Background */}
      <div 
        ref={mountRef} 
        className="absolute inset-0 z-0 opacity-20"
      />
      
      <div className="relative z-10 container mx-auto px-4">
        <h2 className="section-title">
          Educational Journey
        </h2>
        
        <div className="space-y-8">
          {educationHistory.map((edu, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-2xl shadow-xl p-6 transition-all duration-300 hover:scale-[1.02] three-object"
            >
              <div className="flex justify-between items-start mb-4">
                <div>
                  <h3 className="text-2xl font-semibold text-white">{edu.degree}</h3>
                  <h4 className="text-xl text-gray-300">{edu.institution}</h4>
                </div>
                <div className="text-right">
                  <span className="text-gray-400 font-medium block">{edu.graduationYear}</span>
                  <span className="text-green-400 font-semibold">{edu.percentage}</span>
                </div>
              </div>
              
              <ul className="space-y-2 text-gray-200">
                {edu.highlights.map((highlight, i) => (
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
                    {highlight}
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

export default Education;
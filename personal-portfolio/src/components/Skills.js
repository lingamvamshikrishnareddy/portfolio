import React from 'react';

const Skills = () => {
  const skillCategories = [
    {
      category: "Frontend",
      skills: [
        { name: "React", level: 90 },
        { name: "Tailwind CSS", level: 85 },
        { name: "JavaScript", level: 85 }
      ]
    },
    {
      category: "Backend",
      skills: [
        { name: "Node.js", level: 75 },
        { name: "Python", level: 70 },
        { name: "Express", level: 65 }
      ]
    },
    {
      category: "Tools",
      skills: [
        { name: "Git", level: 80 },
        { name: "Docker", level: 60 },
        { name: "AWS", level: 55 }
      ]
    }
  ];

  return (
    <section id="skills" className="py-16 bg-black/10">
      <div className="container mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skillCategories.map((category, index) => (
            <div 
              key={index} 
              className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-300 hover:scale-105"
            >
              <h3 className="text-2xl font-semibold mb-6 text-white">{category.category}</h3>
              {category.skills.map((skill, skillIndex) => (
                <div key={skillIndex} className="mb-4">
                  <div className="flex justify-between text-white mb-2">
                    <span>{skill.name}</span>
                    <span>{skill.level}%</span>
                  </div>
                  <div className="w-full bg-gray-700 rounded-full h-2.5">
                    <div 
                      className="bg-blue-600 h-2.5 rounded-full" 
                      style={{width: `${skill.level}%`}}
                    ></div>
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
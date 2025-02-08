import React from 'react';

const skillsData = {
  frontend: [
    'React',
    'TypeScript',
    'JavaScript',
    'HTML5',
    'CSS3',
    'TailwindCSS',
    'Material-UI',
    'Redux',
    'Flutter',
    'Jetpack Compose',
  ],
  backend: [
    'Node.js',
    'Go',
    'Java',
    'Spring Boot',
    'Python',
    'Django',
    'FastAPI',
    'GraphQL',
    'REST APIs'
  ],
  mobile: [
    'Flutter/Dart',
    'Kotlin',
    'Kotlin Multiplatform Mobile (KMM)',
    'Android Jetpack',
    'MVVM Architecture',
    'Room Database',
  ],
  database: [
    'PostgreSQL',
    'MySQL',
    'MongoDB',
    'Firebase',
    'Supabase',
    'Redis',
    'Oracle'
  ],
  devops: [
    'Docker',
    'Kubernetes',
    'AWS',
    'Git',
    'CI/CD',
    'Jenkins',
    'Terraform'
  ],
  architecture: [
    'Monolithic',
    'MVVM',
    'Clean Architecture',
    'Event-Driven',
    'Domain-Driven Design'
  ]
};

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

const Skills = () => {
  const SkillCard = ({ title, skills }) => (
    <div className="bg-white/5 backdrop-blur-sm rounded-xl p-6">
      <h3 className="text-xl font-semibold mb-4 text-white">{title}</h3>
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, index) => (
          <span
            key={index}
            className="bg-white/10 text-white px-3 py-1 rounded-full text-sm"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );

  const SkillBar = ({ category, skills }) => (
    <div className="bg-white/10 backdrop-blur-md rounded-xl p-6 transform transition-all duration-300 hover:scale-105">
      <h3 className="text-2xl font-semibold mb-6 text-white">{category}</h3>
      {skills.map((skill, skillIndex) => (
        <div key={skillIndex} className="mb-4">
          <div className="flex justify-between text-white mb-2">
            <span>{skill.name}</span>
            <span>{skill.level}%</span>
          </div>
          <div className="w-full bg-gray-700 rounded-full h-2.5">
            <div
              className="bg-blue-600 h-2.5 rounded-full transition-all duration-500 ease-out"
              style={{ width: `${skill.level}%` }}
            ></div>
          </div>
        </div>
      ))}
    </div>
  );

  return (
    <section id="skills" className="py-16 bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">My Skills</h2>
        
        {/* Skill Bars Section */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {skillCategories.map((category, index) => (
            <SkillBar
              key={index}
              category={category.category}
              skills={category.skills}
            />
          ))}
        </div>

        {/* Detailed Skills Section */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {Object.entries(skillsData).map(([category, skills]) => (
            <SkillCard
              key={category}
              title={category.charAt(0).toUpperCase() + category.slice(1)}
              skills={skills}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
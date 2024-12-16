import React from 'react';

const Footer = () => {
  // GitHub stats (you'll want to replace with actual GitHub username)
  const githubUsername = 'yourusername';

  return (
    <footer className="bg-dark-gradient px-6 py-12 text-white">
      <div className="container mx-auto">
        {/* Social Links Section */}
        <div className="flex justify-center space-x-6 mb-8">
          <SocialLink 
            href={`https://github.com/${githubUsername}`} 
            iconPath="/path/to/github-icon.svg"
            name="GitHub" 
          />
          <SocialLink 
            href="https://www.linkedin.com/in/yourusername" 
            iconPath="/path/to/linkedin-icon.svg"
            name="LinkedIn" 
          />
          <SocialLink 
            href="https://www.geeksforgeeks.org/user/yourusername" 
            iconPath="/path/to/geeksforgeeks-icon.svg"
            name="GeeksforGeeks" 
          />
          <SocialLink 
            href="https://leetcode.com/yourusername" 
            iconPath="/path/to/leetcode-icon.svg"
            name="LeetCode" 
          />
          <SocialLink 
            href="https://www.codechef.com/users/yourusername" 
            iconPath="/path/to/codechef-icon.svg"
            name="CodeChef" 
          />
          <SocialLink 
            href="https://codeforces.com/profile/yourusername" 
            iconPath="/path/to/codeforces-icon.svg"
            name="Codeforces" 
          />
        </div>

        {/* GitHub Stats Section */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">GitHub Profile Stats</h3>
          <div className="flex justify-center space-x-6">
            <img 
              src={`https://github-readme-stats.vercel.app/api?username=${githubUsername}&show_icons=true&theme=dark`} 
              alt="GitHub Stats" 
              className="max-w-xs rounded-lg shadow-lg"
            />
            <img 
              src={`https://github-readme-streak-stats.herokuapp.com/?user=${githubUsername}&theme=dark`} 
              alt="GitHub Streak" 
              className="max-w-xs rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Hobbies and Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Hobbies & Interests</h3>
          <div className="flex justify-center space-x-4">
            {['Programming', 'Machine Learning', 'Chess', 'Photography', 'Travel'].map((hobby) => (
              <span 
                key={hobby} 
                className="bg-white/10 px-4 py-2 rounded-full text-sm"
              >
                {hobby}
              </span>
            ))}
          </div>
        </div>

        {/* Certifications */}
        <div className="text-center mb-8">
          <h3 className="text-2xl font-semibold mb-4">Certifications</h3>
          <div className="flex justify-center space-x-4">
            {[
              'AWS Cloud Practitioner',
              'Google Data Analytics',
              'Deep Learning Specialization'
            ].map((cert) => (
              <span 
                key={cert} 
                className="bg-white/10 px-4 py-2 rounded-full text-sm"
              >
                {cert}
              </span>
            ))}
          </div>
        </div>

        {/* Made with Love */}
        <div className="text-center">
          <p className="text-sm flex items-center justify-center">
            Made with 
            <span className="text-red-500 mx-2 inline-block">❤️</span>
            by Your Name
          </p>
        </div>
      </div>
    </footer>
  );
};

// Social Link Component
const SocialLink = ({ href, iconPath, name }) => (
  <a 
    href={href} 
    target="_blank" 
    rel="noopener noreferrer" 
    className="hover:text-blue-400 transition-colors duration-300 flex flex-col items-center"
  >
    <img 
      src={iconPath} 
      alt={`${name} icon`} 
      className="w-6 h-6"
    />
    <span className="text-xs mt-2">{name}</span>
  </a>
);

export default Footer;
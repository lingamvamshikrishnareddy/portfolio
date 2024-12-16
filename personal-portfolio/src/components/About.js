import React, { useState, useRef, useEffect } from 'react';
import { Volume2, VolumeX } from 'lucide-react';
import profileImage from '../assets/images/profile.jpg';
import backgroundMusic from '../assets/audio/background-music-3.mp3';

const MusicBeatVisualizer = ({ isPlaying }) => {
  return (
    <div className={`flex space-x-1 ${isPlaying ? 'animate-pulse' : ''}`}>
      {[1, 2, 3, 4].map((bar) => (
        <div
          key={bar}
          className={`h-4 w-1 rounded-full transition-all duration-300 ${
            isPlaying 
              ? 'bg-blue-500 animate-beat' 
              : 'bg-gray-500'
          }`}
          style={{
            animationDelay: `${bar * 0.1}s`,
            animationDuration: '0.7s',
          }}
        />
      ))}
    </div>
  );
};

const About = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioRef = useRef(null);

  // Toggle play/pause for background music
  const toggleMusic = () => {
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  // Remove scroll event listener to prevent auto-play/pause
  useEffect(() => {
    // No scroll event listener
    return () => {};
  }, []);

  return (
    <section 
      id="about" 
      className="py-16 container mx-auto px-4"
    >
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl font-bold text-center mb-12 text-white">About Me</h2>
        
        {/* Music Control */}
        <div className="flex flex-col items-center mb-8 space-y-4">
          <div className="flex items-center space-x-4">
            <button 
              onClick={toggleMusic}
              className={`px-6 py-3 rounded-full transition-all duration-300 flex items-center space-x-2 ${
                isPlaying 
                  ? 'bg-red-600/20 text-red-300 hover:bg-red-600/30' 
                  : 'bg-blue-600/20 text-blue-300 hover:bg-blue-600/30'
              }`}
            >
              {isPlaying ? <VolumeX className="w-5 h-5" /> : <Volume2 className="w-5 h-5" />}
              <span>
                {isPlaying ? 'Pause Background Music' : 'Play Background Music'}
              </span>
            </button>
          </div>
          
          {/* Beat Visualizer */}
          <MusicBeatVisualizer isPlaying={isPlaying} />
          
          <audio 
            ref={audioRef} 
            src={backgroundMusic} 
            loop 
            className="hidden"
          />
        </div>
        
        {/* Rest of the About section remains the same */}
        <div className="flex flex-col md:flex-row items-center space-y-8 md:space-y-0 md:space-x-12">
          {/* Profile Image */}
          <div className="flex-shrink-0">
            <img
              src={profileImage}
              alt="Profile"
              className="w-64 h-64 rounded-full object-cover shadow-lg border-4 border-white/20"
            />
          </div>
          
          {/* About Content */}
          <div className="text-center md:text-left">
            <h3 className="text-3xl font-semibold mb-4 text-white">
              Full Stack Developer
            </h3>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              Full Stack Developer with experience in web and mobile application
              development. Proficient in React, Express.js, Django, and Flutter.
              Demonstrated success in developing scalable solutions and optimizing
              system performance. Currently learning Next.js and TypeScript to 
              enhance front-end development skills.
            </p>
            
            {/* Contact Information */}
            <div className="mb-6 text-gray-300">
              <p>📧 Email: lingamvamshikrishnareddy@gmail.com</p>
            </div>
            
            {/* Skills Highlights */}
            <div className="mb-6">
              <h4 className="text-xl font-semibold mb-3 text-white">
                Core Technologies
              </h4>
              <div className="flex flex-wrap gap-2 justify-center md:justify-start">
                {[
                  'React', 
                  'Express.js', 
                  'Django', 
                  'Flutter', 
                  'Next.js', 
                  'TypeScript'
                ].map((tech, index) => (
                  <span 
                    key={index} 
                    className="bg-blue-500/20 text-blue-300 px-3 py-1 rounded-md text-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
            
            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4 justify-center md:justify-start">
              <a
                href="/resume.pdf"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition-colors inline-block"
              >
                Download Resume
              </a>
              <a
                href="#contact"
                className="bg-transparent border border-blue-500 text-blue-300 px-6 py-3 rounded-md hover:bg-blue-500/10 transition-colors inline-block"
              >
                Contact Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
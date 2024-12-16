import React from 'react';

const Header = () => {
  return (
    <header className="bg-transparent py-6 text-white">
      <div className="container mx-auto flex justify-between items-center px-4">
        <div className="text-2xl font-bold">
          Your Name
        </div>
        <nav>
          <ul className="flex space-x-6">
            <li><a href="#about" className="hover:text-blue-300 transition-colors">About</a></li>
            <li><a href="#projects" className="hover:text-blue-300 transition-colors">Projects</a></li>
            <li><a href="#skills" className="hover:text-blue-300 transition-colors">Skills</a></li>
            <li><a href="#contact" className="hover:text-blue-300 transition-colors">Contact</a></li>
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
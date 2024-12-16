import React, { useState, useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const nameRef = useRef(null);
  const fullName = "Lingam Vamshi Krishna Reddy";

  useEffect(() => {
    if (nameRef.current) {
      const splitName = fullName.split('');
      nameRef.current.innerHTML = '';
      
      splitName.forEach((char, index) => {
        const span = document.createElement('span');
        span.textContent = char;
        span.style.display = 'inline-block';
        span.style.opacity = 0;
        nameRef.current.appendChild(span);
      });
      
      gsap.fromTo(
        nameRef.current.children,
        {
          opacity: 0,
          y: 50,
          rotation: -20,
          scale: 0.5
        },
        {
          opacity: 1,
          y: 0,
          rotation: 0,
          scale: 1,
          stagger: 0.05,
          duration: 0.8,
          ease: 'back.out(1.7)'
        }
      );
    }
  }, []);

  const menuItems = [
    { name: 'About', href: '#about' },
    { name: 'Experience', href: '#experience' },
    { name: 'Projects', href: '#projects' },
    { name: 'Skills', href: '#skills' },
    { name: 'Education', href: '#education' },
    { name: 'Contact', href: '#contact' }
  ];

  return (
    <header className="fixed w-full z-50 backdrop-blur-md bg-white/10">
      <div className="container mx-auto flex justify-between items-center px-4 py-4">
        {/* Animated Name */}
        <div
          ref={nameRef}
          className="text-2xl md:text-3xl font-bold tracking-wide text-white cursor-default select-none"
        >
          {fullName}
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <ul className="flex space-x-6">
            {menuItems.map((item) => (
              <li key={item.name}>
                <a
                  href={item.href}
                  className="text-white hover:text-blue-300 transition-all duration-300 transform hover:scale-110 group relative"
                >
                  {item.name}
                  <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-blue-300 transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>
        </nav>

        {/* Mobile Menu Toggle */}
        <button
          className="md:hidden text-3xl text-white focus:outline-none hover:text-blue-300 transition-colors"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label={isMenuOpen ? 'Close menu' : 'Open menu'}
        >
          {isMenuOpen ? '✕' : '☰'}
        </button>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div 
            className="fixed inset-0 bg-gray-900 bg-opacity-90 backdrop-blur-lg md:hidden z-50"
            onClick={() => setIsMenuOpen(false)}
          >
            <nav className="flex items-center justify-center h-full">
              <ul className="space-y-6 text-center">
                {menuItems.map((item) => (
                  <li key={item.name}>
                    <a
                      href={item.href}
                      className="block text-2xl text-white hover:text-blue-300 transition-colors py-3 px-6 rounded-lg hover:bg-white/10"
                      onClick={() => setIsMenuOpen(false)}
                    >
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;

import React, { useState } from 'react';
import { FiMenu, FiX } from 'react-icons/fi';
import { Link } from 'react-router-dom';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  // Updated link map configuration array
  const navLinks = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Achievements', href: '/achivements' }, // Targets the unified credentials container
    { name: 'Photo', href: '/photo' },
    { name: 'Contact', href: '/contact' },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 h-20 bg-[#1c1c1c]/90 backdrop-blur-md text-white border-b border-white/5 z-50 font-sans tracking-wide">
      <div className="max-w-7xl mx-auto h-full px-6 sm:px-8 md:px-12 lg:px-16 flex items-center justify-between">
        
        {/* Logo Monogram */}
        <Link 
          to="/" 
          className="text-lg font-black tracking-widest uppercase hover:text-[#dfb76c] transition-colors duration-300"
        >
          Ayush<span className="text-[#dfb76c] font-light">Sharma</span>
        </Link>

        {/* Desktop Anchor Mapping Layout */}
        <div className="hidden md:flex items-center gap-8 lg:gap-12">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              className="text-xs uppercase tracking-widest text-neutral-400 hover:text-white transition-colors duration-300 relative group py-2"
            >
              {link.name}
              {/* Premium under-border trace effect on hover */}
              <span className="absolute bottom-0 left-0 w-full h-[1px] bg-[#dfb76c] scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left" />
            </Link>
          ))}
        </div>

        {/* Global Structural Call to Action Button */}
        <div className="hidden md:block">
          <Link 
            to="/contact" 
            className="text-xs font-bold uppercase tracking-widest border border-white/10 px-5 py-2.5 hover:bg-white hover:text-[#1c1c1c] transition-all duration-300"
          >
            Get In Touch
          </Link>
        </div>

        {/* Mobile Control Icon Trigger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="md:hidden text-2xl p-2 text-neutral-400 hover:text-white transition-colors"
          aria-label="Toggle Menu"
        >
          {isOpen ? <FiX /> : <FiMenu />}
        </button>

      </div>

      {/* Mobile Modal Panel Canvas slideout layout */}
      <div 
        className={`fixed top-20 left-0 right-0 bg-[#1c1c1c] border-b border-white/10 p-6 shadow-2xl transition-all duration-300 ease-in-out md:hidden z-40 ${
          isOpen ? 'opacity-100 translate-y-0' : 'opacity-0 -translate-y-4 pointer-events-none'
        }`}
      >
        <div className="flex flex-col gap-5">
          {navLinks.map((link, idx) => (
            <Link
              key={idx}
              to={link.href}
              onClick={() => setIsOpen(false)}
              className="text-sm font-medium uppercase tracking-widest text-neutral-300 hover:text-[#dfb76c] transition-colors py-1"
            >
              {link.name}
            </Link>
          ))}
          <Link
            to="/contact"
            onClick={() => setIsOpen(false)}
            className="text-center text-xs font-bold uppercase tracking-widest bg-white text-[#1c1c1c] py-3 mt-2 font-mono"
          >
            Get In Touch
          </Link>
        </div>
      </div>
    </nav>
  );
}
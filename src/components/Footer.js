import React from 'react';
import { FaGithub, FaLinkedin, FaInstagram, FaTwitter } from 'react-icons/fa';

const Footer = () => {
  const socialLinks = [
    {
      name: 'GitHub',
      url: 'https://github.com/AshishRavidas',
      icon: <FaGithub size={16} />,
    },
    {
      name: 'LinkedIn',
      url: 'https://www.linkedin.com/in/ashish-ravidas-34848a215',
      icon: <FaLinkedin size={16} />,
    },
    {
      name: 'Instagram',
      url: 'https://www.instagram.com/ashishravidas',
      icon: <FaInstagram size={16} />,
    },
    {
      name: 'Twitter',
      url: 'https://twitter.com/ashishravidas2204',
      icon: <FaTwitter size={16} />,
    },
  ];

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const navLinks = ['home', 'experience', 'skills', 'projects', 'education', 'contact'];

  return (
    <footer className="bg-charcoal text-white">
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        <div className="flex flex-col items-center">
          {/* Logo */}
          <button
            onClick={() => scrollToSection('home')}
            className="font-display text-2xl font-normal text-white hover:text-taupe transition-colors mb-2"
          >
            Ashish<span className="text-taupe">.</span>
          </button>
          <p className="text-warm-gray text-sm mb-10">Full Stack Software Engineer</p>

          {/* Nav links */}
          <div className="flex flex-wrap justify-center gap-x-6 gap-y-2 mb-10">
            {navLinks.map((id) => (
              <button
                key={id}
                onClick={() => scrollToSection(id)}
                className="text-xs font-medium text-warm-gray hover:text-white capitalize transition-colors duration-200"
              >
                {id}
              </button>
            ))}
          </div>

          {/* Social icons */}
          <div className="flex gap-3 mb-10">
            {socialLinks.map((link) => (
              <a
                key={link.name}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={link.name}
                className="w-10 h-10 rounded-xl bg-[#2A2A2A] border border-[#3A3A3A] flex items-center justify-center text-warm-gray hover:text-taupe hover:border-warm-brown/50 transition-all duration-200 hover:scale-110"
              >
                {link.icon}
              </a>
            ))}
          </div>

          {/* Divider */}
          <div className="w-full max-w-md h-px bg-[#2A2A2A] mb-8" />

          <p className="text-warm-gray text-xs text-center">
            © {new Date().getFullYear()} Ashish Ravidas. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

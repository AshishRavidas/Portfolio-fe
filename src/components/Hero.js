import React, { useState, useEffect } from 'react';
import { FaGithub, FaLinkedin, FaArrowDown, FaEnvelope } from 'react-icons/fa';

const Hero = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const scrollToSection = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });

  const fadeClass = (delay = 0) =>
    `transition-all duration-700 ease-out ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
    }`;

  return (
    <section
      id="home"
      className="relative min-h-screen flex items-center bg-ivory overflow-hidden"
    >
      {/* Ambient blobs */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden">
        <div className="absolute top-24 right-16 w-80 h-80 rounded-full bg-taupe/20 blur-3xl float-slow" />
        <div className="absolute -bottom-10 -left-10 w-96 h-96 rounded-full bg-beige/70 blur-3xl"
          style={{ animation: 'floatSlow 10s ease-in-out infinite 2s' }} />
        <div className="absolute top-1/2 left-1/4 w-64 h-64 rounded-full bg-warm-border/30 blur-2xl"
          style={{ animation: 'floatSlow 12s ease-in-out infinite 4s' }} />
      </div>

      <div className="relative max-w-6xl mx-auto px-5 sm:px-8 pt-24 pb-20 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Left — Content */}
          <div className="text-center lg:text-left order-2 lg:order-1">

            {/* Status badge */}
            <div
              className={`inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-cream border border-warm-border mb-8 ${fadeClass()}`}
              style={{ transitionDelay: '0ms' }}
            >
              <span className="w-1.5 h-1.5 rounded-full bg-warm-brown animate-pulse-dot" />
              <span className="text-xs font-medium text-warm-brown tracking-wide">
                SDE @ Zfunds · Open to opportunities
              </span>
            </div>

            {/* Name */}
            <div
              className={fadeClass()}
              style={{ transitionDelay: '120ms' }}
            >
              <h1 className="font-display text-6xl sm:text-7xl lg:text-8xl leading-[1.05] text-charcoal mb-3">
                Ashish
                <br />
                <span className="gradient-text italic">Ravidas</span>
              </h1>
            </div>

            {/* Role */}
            <div
              className={fadeClass()}
              style={{ transitionDelay: '240ms' }}
            >
              <p className="text-lg sm:text-xl text-text-secondary font-light tracking-wide mt-4 mb-3">
                Full Stack Software Engineer
              </p>
              <p className="text-sm sm:text-base text-warm-gray leading-relaxed max-w-md mx-auto lg:mx-0">
                I build scalable backends, clean frontends, and everything in between — from fintech platforms to real-time APIs.
              </p>
            </div>

            {/* CTA Buttons */}
            <div
              className={`flex flex-col sm:flex-row gap-3 mt-10 justify-center lg:justify-start ${fadeClass()}`}
              style={{ transitionDelay: '360ms' }}
            >
              <button
                onClick={() => scrollToSection('projects')}
                className="gradient-warm px-7 py-3.5 rounded-xl text-white text-sm font-medium transition-all duration-200 hover:scale-[1.03] hover:shadow-warm-md active:scale-[0.98]"
              >
                View Projects
              </button>
              <button
                onClick={() => scrollToSection('contact')}
                className="px-7 py-3.5 rounded-xl text-sm font-medium text-warm-brown border-2 border-taupe/50 hover:border-warm-brown hover:bg-beige transition-all duration-200 hover:scale-[1.03] active:scale-[0.98]"
              >
                Get in Touch
              </button>
            </div>

            {/* Social links */}
            <div
              className={`flex items-center gap-3 mt-8 justify-center lg:justify-start ${fadeClass()}`}
              style={{ transitionDelay: '480ms' }}
            >
              {[
                { href: 'https://github.com/AshishRavidas', icon: <FaGithub size={16} />, label: 'GitHub' },
                {
                  href: 'https://www.linkedin.com/in/ashish-ravidas-34848a215',
                  icon: <FaLinkedin size={16} />,
                  label: 'LinkedIn',
                },
                {
                  href: 'mailto:ashishravidas2204@gmail.com',
                  icon: <FaEnvelope size={15} />,
                  label: 'Email',
                },
              ].map(({ href, icon, label }) => (
                <a
                  key={label}
                  href={href}
                  target={href.startsWith('mailto') ? undefined : '_blank'}
                  rel="noopener noreferrer"
                  aria-label={label}
                  className="w-9 h-9 rounded-xl bg-cream border border-warm-border flex items-center justify-center text-text-secondary hover:text-charcoal hover:bg-warm-border hover:border-taupe transition-all duration-200 hover:scale-110"
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right — Photo */}
          <div
            className={`flex justify-center lg:justify-end order-1 lg:order-2 transition-all duration-900 ease-out ${visible ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'
              }`}
            style={{ transitionDelay: '200ms' }}
          >
            <div className="relative">
              {/* Glow ring */}
              <div className="absolute -inset-5 rounded-[2.5rem] bg-gradient-to-br from-taupe/30 to-warm-brown/10 blur-2xl" />
              {/* Border accent */}
              <div className="absolute -inset-0.5 rounded-[2rem] bg-gradient-to-br from-taupe/60 to-warm-brown/30 opacity-60" />

              <img
                src="/assets/ashish-pic.png"
                alt="Ashish Ravidas"
                className="relative w-64 h-80 sm:w-72 sm:h-96 lg:w-80 lg:h-[420px] object-cover rounded-[1.9rem] shadow-warm-xl"
              />

              {/* Floating info card */}
              <div className="absolute -bottom-5 -right-5 bg-cream rounded-2xl px-4 py-3 shadow-warm-md border border-warm-border">
                <p className="text-[10px] text-warm-gray font-medium uppercase tracking-widest mb-0.5">Currently at</p>
                <p className="text-sm font-semibold text-charcoal">Zfunds · SDE</p>
              </div>

              {/* Experience badge */}
              <div className="absolute -top-4 -left-4 bg-cream rounded-xl px-3 py-2.5 shadow-warm-md border border-warm-border">
                <p className="text-[10px] text-warm-gray font-medium uppercase tracking-widest mb-0.5">Experience</p>
                <p className="text-sm font-bold text-charcoal">1+ Years</p>
              </div>
            </div>
          </div>
        </div>

        {/* Scroll indicator */}
        <div
          className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'
            }`}
          style={{ transitionDelay: '900ms' }}
        >
          <button
            onClick={() => scrollToSection('experience')}
            className="flex flex-col items-center gap-2 text-warm-gray hover:text-warm-brown transition-colors duration-200 group"
          >
            <span className="text-[10px] font-medium tracking-[0.2em] uppercase">Scroll</span>
            <FaArrowDown size={12} className="animate-bounce-slow group-hover:text-warm-brown" />
          </button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

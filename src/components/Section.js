import React from 'react';
import useInView from '../hooks/useInView';

const Section = ({ id, title, children, className = '' }) => {
  const [ref, inView] = useInView();

  return (
    <section id={id} className={`py-24 ${className}`}>
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <h2 className="font-display text-4xl sm:text-5xl font-normal text-charcoal mb-5">
            {title}
          </h2>
          <div className="section-divider">
            <span className="w-1.5 h-1.5 rounded-full bg-warm-brown" />
          </div>
        </div>
        {children}
      </div>
    </section>
  );
};

export default Section;

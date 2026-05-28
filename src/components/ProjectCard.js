import React from 'react';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';

const ProjectCard = ({ title, description, techStack, githubLink, liveLink, inView, delay = 0 }) => {
  return (
    <div
      className={`reveal ${inView ? 'visible' : ''} group relative flex flex-col bg-cream rounded-2xl border border-warm-border hover:border-taupe/60 transition-all duration-300 overflow-hidden shadow-warm-sm hover:shadow-warm-lg hover:-translate-y-1`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Hover gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-br from-taupe/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none rounded-2xl" />

      <div className="relative p-8 flex flex-col flex-1">
        {/* Top row: icon + links */}
        <div className="flex items-center justify-between mb-5">
          <div className="w-9 h-9 rounded-xl bg-beige border border-warm-border flex items-center justify-center text-warm-brown group-hover:bg-warm-border transition-colors">
            <FaGithub size={15} />
          </div>
          <div className="flex items-center gap-2">
            <a
              href={githubLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} GitHub`}
              className="w-8 h-8 rounded-lg bg-beige border border-warm-border flex items-center justify-center text-text-secondary hover:text-charcoal hover:bg-warm-border hover:border-taupe/60 transition-all duration-200 hover:scale-110"
            >
              <FaGithub size={13} />
            </a>
            <a
              href={liveLink}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${title} live demo`}
              className="w-8 h-8 rounded-lg bg-beige border border-warm-border flex items-center justify-center text-text-secondary hover:text-charcoal hover:bg-warm-border hover:border-taupe/60 transition-all duration-200 hover:scale-110"
            >
              <FaExternalLinkAlt size={12} />
            </a>
          </div>
        </div>

        {/* Title + description */}
        <h3 className="font-display text-lg font-normal text-charcoal mb-2 leading-snug">
          {title}
        </h3>
        <p className="text-text-secondary text-sm leading-relaxed flex-1 mb-5">
          {description}
        </p>

        {/* Tech badges */}
        <div className="flex flex-wrap gap-1.5 mt-auto pt-4 border-t border-warm-border">
          {techStack.map((tech, i) => (
            <span
              key={i}
              className="px-2 py-1 text-[11px] font-medium bg-beige text-warm-brown border border-warm-border rounded-md"
            >
              {tech}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;

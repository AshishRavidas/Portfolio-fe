import React, { useState } from 'react';

const ExperienceCard = ({ company, role, duration, achievements, index = 0, inView = true }) => {
  const [expanded, setExpanded] = useState(false);

  const techLine = achievements.find((a) => a.startsWith('Tech Stack:'));
  const bulletPoints = achievements.filter((a) => !a.startsWith('Tech Stack:'));
  const techStack = techLine ? techLine.replace('Tech Stack: ', '').split(', ') : [];

  const visiblePoints = expanded ? bulletPoints : bulletPoints.slice(0, 3);

  return (
    <div
      className={`reveal ${inView ? 'visible' : ''}`}
      style={{ transitionDelay: `${index * 150}ms` }}
    >
      <div className="group relative bg-cream rounded-2xl border border-warm-border hover:border-taupe/60 transition-all duration-300 overflow-hidden shadow-warm-sm hover:shadow-warm-lg">
        {/* Top accent bar */}
        <div className="absolute top-0 left-0 right-0 h-0.5 gradient-warm opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

        <div className="p-7 sm:p-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-3 mb-6">
            <div>
              <h3 className="font-display text-xl sm:text-2xl text-charcoal mb-1 font-normal">
                {company}
              </h3>
              <p className="text-warm-brown font-medium text-sm">{role}</p>
            </div>
            <span className="shrink-0 inline-flex items-center px-3 py-1.5 bg-beige border border-warm-border rounded-full text-xs font-medium text-warm-gray">
              {duration}
            </span>
          </div>

          {/* Bullets */}
          <ul className="space-y-3 mb-5">
            {visiblePoints.map((point, i) => (
              <li key={i} className="flex items-start gap-3">
                <span className="mt-[7px] w-1.5 h-1.5 rounded-full bg-taupe flex-shrink-0" />
                <span className="text-[#4A4540] text-sm leading-relaxed">{point}</span>
              </li>
            ))}
          </ul>

          {bulletPoints.length > 3 && (
            <button
              onClick={() => setExpanded(!expanded)}
              className="text-xs font-medium text-warm-brown hover:text-charcoal transition-colors mb-5"
            >
              {expanded ? '↑ Show less' : `+ ${bulletPoints.length - 3} more`}
            </button>
          )}

          {/* Tech stack */}
          {techStack.length > 0 && (
            <div className="flex flex-wrap gap-2 pt-5 border-t border-warm-border">
              {techStack.map((tech, i) => (
                <span
                  key={i}
                  className="px-2.5 py-1 text-xs font-medium bg-beige text-text-secondary border border-warm-border rounded-lg hover:bg-warm-border hover:text-charcoal transition-colors duration-200 cursor-default"
                >
                  {tech}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ExperienceCard;

import React from 'react';

const categoryMeta = {
  Languages:     { icon: '{ }', color: '#8B6F47' },
  Frontend:      { icon: '◈',   color: '#8B6F47' },
  Backend:       { icon: '⚡',  color: '#8B6F47' },
  Database:      { icon: '◉',   color: '#8B6F47' },
  Tools:         { icon: '⚙',   color: '#8B6F47' },
  'Core Subjects':{ icon: '◆',  color: '#8B6F47' },
};

const SkillCategory = ({ title, skills, inView, delay = 0 }) => {
  const meta = categoryMeta[title] || { icon: '●', color: '#8B6F47' };

  return (
    <div
      className={`group reveal ${inView ? 'visible' : ''} bg-cream rounded-2xl p-6 border border-warm-border hover:border-taupe/60 transition-all duration-300 shadow-warm-sm hover:shadow-warm-md`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {/* Header */}
      <div className="flex items-center gap-3 mb-5">
        <div className="w-8 h-8 rounded-xl bg-beige border border-warm-border flex items-center justify-center text-sm font-mono text-warm-brown group-hover:bg-warm-border transition-colors">
          {meta.icon}
        </div>
        <h3 className="text-sm font-semibold text-charcoal tracking-wide">{title}</h3>
      </div>

      {/* Skill badges */}
      <div className="flex flex-wrap gap-2">
        {skills.map((skill, i) => (
          <span
            key={i}
            className="px-3 py-1.5 bg-beige text-text-secondary text-xs font-medium rounded-lg border border-warm-border hover:bg-warm-border hover:text-charcoal hover:border-taupe/60 cursor-default transition-all duration-200 hover:scale-[1.04]"
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
};

export default SkillCategory;

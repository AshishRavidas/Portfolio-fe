import React from 'react';
import Section from './Section';
import useInView from '../hooks/useInView';

const educationData = [
  {
    degree: 'Bachelor of Technology — Electrical Engineering',
    institution: 'National Institute of Technology, Jamshedpur',
    period: '2020 – 2024',
    grade: 'CGPA: 8.5 / 10',
  },
  {
    degree: 'Intermediate (Class XII)',
    institution: "St. Xavier's College, Ranchi",
    period: '2017 – 2019',
    grade: 'Percentage: 83%',
  },
  {
    degree: 'High School (Class X)',
    institution: 'R K V High School, Bagodar',
    period: '2016 – 2017',
    grade: 'Percentage: 91.2%',
  },
];

const EducationItem = ({ degree, institution, period, grade, inView, delay = 0, isLast }) => (
  <div
    className={`reveal-left ${inView ? 'visible' : ''} flex gap-6`}
    style={{ transitionDelay: `${delay}ms` }}
  >
    {/* Timeline indicator */}
    <div className="flex flex-col items-center">
      <div className="w-3 h-3 rounded-full bg-warm-brown border-2 border-taupe mt-1.5 flex-shrink-0 transition-transform duration-300" />
      {!isLast && <div className="w-px flex-1 bg-warm-border mt-2" />}
    </div>

    {/* Content */}
    <div className={`group ${isLast ? 'pb-0' : 'pb-10'} flex-1`}>
      <div className="bg-cream rounded-2xl p-5 border border-warm-border hover:border-taupe/60 hover:shadow-warm-md transition-all duration-300">
        <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-1">
          <h3 className="font-semibold text-charcoal text-sm leading-snug">{degree}</h3>
          <span className="shrink-0 text-[11px] font-medium text-warm-gray bg-beige border border-warm-border px-2.5 py-1 rounded-full">
            {period}
          </span>
        </div>
        <p className="text-warm-brown text-sm font-medium mb-2">{institution}</p>
        <span className="inline-flex items-center px-2.5 py-1 bg-beige border border-warm-border rounded-lg text-xs font-medium text-text-secondary">
          {grade}
        </span>
      </div>
    </div>
  </div>
);

const Education = () => {
  const [ref, inView] = useInView();

  return (
    <Section id="education" title="Education" className="bg-cream">
      <div ref={ref} className="max-w-2xl mx-auto">
        {educationData.map((item, index) => (
          <EducationItem
            key={index}
            {...item}
            inView={inView}
            delay={index * 180}
            isLast={index === educationData.length - 1}
          />
        ))}
      </div>
    </Section>
  );
};

export default Education;

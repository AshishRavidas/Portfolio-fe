import React from 'react';
import Section from './Section';
import SkillCategory from './SkillCategory';
import useInView from '../hooks/useInView';

const Skills = () => {
  const [ref, inView] = useInView();

  const skillCategories = [
    {
      title: 'Languages',
      skills: ['C/C++', 'Java', 'Python', 'JavaScript', 'TypeScript'],
    },
    {
      title: 'Frontend',
      skills: ['React', 'Next.js', 'React Native', 'HTML', 'CSS', 'Tailwind CSS'],
    },
    {
      title: 'Backend',
      skills: ['Node.js', 'Express.js', 'Nest.js', 'REST APIs'],
    },
    {
      title: 'Database',
      skills: ['MongoDB', 'PostgreSQL', 'DynamoDB', 'MySQL'],
    },
    {
      title: 'Tools',
      skills: ['Git', 'Postman'],
    },
    {
      title: 'Core Subjects',
      skills: ['DSA', 'OS', 'OOPs', 'DBMS'],
    },
  ];

  return (
    <Section id="skills" title="Skills" className="bg-cream">
      <div ref={ref} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {skillCategories.map((category, index) => (
          <SkillCategory
            key={index}
            {...category}
            inView={inView}
            delay={index * 90}
          />
        ))}
      </div>
    </Section>
  );
};

export default Skills;

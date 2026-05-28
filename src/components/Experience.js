import React from 'react';
import Section from './Section';
import ExperienceCard from './ExperienceCard';
import useInView from '../hooks/useInView';

const Experience = () => {
  const [ref, inView] = useInView();

  const experiences = [
    {
      company: 'Zfunds',
      role: 'Software Development Engineer',
      duration: 'Sep 2025 – Present',
      achievements: [
        'Revamped an outdated portfolio module by improving data visibility for total investments, current value, XIRR, and daily performance. Built tab-based features for Mutual Funds, SIP management (with restart option), order tracking, and downloadable reports.',
        'Implemented support for multiple carts, allowing users to create and manage up to 7 different cart types without losing previous ones. Improved user flow by retaining cart history, leading to a 30% increase in cart creation compared to the earlier single-cart system.',
        'Integrated a third-party KYC service (Signzy) to replace the existing CVL-based flow, reducing processing time and improving verification efficiency.',
        'Automated the broker change process by generating pre-filled, folio-wise PDF forms, eliminating manual form filling and reducing errors.',
        'Integrated multiple third-party APIs from Finalyca to fetch mutual fund data, including scheme details, historical records, and AMC-level information. Implemented cron jobs to sync data in PostgreSQL.',
        'Worked on resolving transactional issues and contributed to PMS-related features, improving system reliability and financial operations.',
        'Tech Stack: Node.js, NestJS, React, Next.js, React Native, PostgreSQL, DynamoDB, TypeScript',
      ],
    },
    {
      company: 'IZARISOFT',
      role: 'Full Stack Developer',
      duration: 'Feb 2025 – Aug 2025',
      achievements: [
        'Developed and maintained scalable web applications using React.js and Next.js for frontend, and Node.js with NestJS for backend, ensuring optimized performance and a seamless user experience.',
        'Built a scalable B2B travel platform managing tours, accommodations, rentals, ferries, packages, trains, and city transfers.',
        'Developed real-time APIs to fetch and display agent data efficiently, enabling seamless frontend integration and faster search operations.',
        'Implemented secure authentication and role-based access control (RBAC) for agents and admins, enhancing data security.',
        'Tech Stack: React.js, Next.js, Node.js, TypeScript, MongoDB, REST APIs, Ant Design (AntD)',
      ],
    },
  ];

  return (
    <Section id="experience" title="Experience" className="bg-beige">
      <div ref={ref} className="space-y-6">
        {experiences.map((exp, index) => (
          <ExperienceCard key={index} index={index} inView={inView} {...exp} />
        ))}
      </div>
    </Section>
  );
};

export default Experience;

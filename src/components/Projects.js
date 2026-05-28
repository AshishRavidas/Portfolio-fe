import React from 'react';
import Section from './Section';
import ProjectCard from './ProjectCard';
import useInView from '../hooks/useInView';

const Projects = () => {
  const [ref, inView] = useInView();

  const projects = [
    {
      title: 'E-Commerce Platform',
      description:
        'Developed a full-stack E-commerce application using the MERN stack with complete CRUD functionalities for products, orders, and users. Implemented secure authentication and authorization for user and order management. Built an admin panel to manage products, users, and order delivery status efficiently. Integrated a complete checkout flow including shipping, payment methods, and online payments through Debit Card and PayPal.',
      techStack: ['React', 'Node.js', 'MongoDB', 'Express', 'Tailwind CSS', 'Antd'],
      githubLink: 'https://github.com/AshishRavidas/Ecommerce',
      liveLink: 'https://64a25a20afc4984c0c351b33--super-gnome-fd5da3.netlify.app/',
    },
    {
      title: 'Dall-E Image Generation',
      description:
        'Built an AI Image Generation App using the MERN stack (MongoDB, Express.js, React.js, and Node.js) that generates realistic and creative images using AI algorithms. Developed an intuitive user interface for seamless image generation and exploration. Implemented image saving functionality, allowing users to store generated images in the database for future access and management.',
      techStack: ['React', 'Firebase', 'Material-UI', 'React DnD'],
      githubLink: 'https://github.com/AshishRavidas/openai',
      liveLink: 'https://stalwart-cucurucho-70921f.netlify.app/',
    },
    {
      title: 'REGAL RETREATS',
      description:
        'Developed a responsive hotel booking frontend application using Next.js, enabling users to explore hotels, view detailed property information, and book rooms through an intuitive user interface. Implemented modern UI components, dynamic routing, and optimized performance to enhance user experience across devices.',
      techStack: ['React', 'TypeScript', 'OpenWeather API', 'Chart.js'],
      githubLink: 'https://github.com/AshishRavidas/estate_frontend',
      liveLink: 'https://estate-frontend-app.netlify.app/',
    },
  ];

  return (
    <Section id="projects" title="Projects" className="bg-beige">
      <div ref={ref} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {projects.map((project, index) => (
          <ProjectCard
            key={index}
            {...project}
            inView={inView}
            delay={index * 130}
          />
        ))}
      </div>
    </Section>
  );
};

export default Projects;

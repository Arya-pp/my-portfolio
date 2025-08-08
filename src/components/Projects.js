'use client';

import React from 'react';

const projects = [
   {
    title: 'Movie Ticket Booking System',
    description: 'Full-stack app for booking movie tickets, with login, seat selection, and payment features.',
    tech: ['MongoDB','Express','React', 'Node.js'],
    demoLink: 'https://movieticket-booking-project.vercel.app/',
    githubLink: 'https://github.com/Arya-pp/Movieticket_booking-project',
    gradient: 'from-yellow-400 to-orange-500',
    initial: 'M',
  },
  {
    title: 'Portfolio Website',
    description: 'Personal portfolio built with Next.js and Tailwind CSS',
    tech: ['Next.js', 'Tailwind CSS'],
    demoLink: '#',
    githubLink: '#',
    gradient: 'from-pink-500 to-purple-500',
    initial: 'P',
  },
  {
    title: 'IoT Water Level Monitoring',
    description: 'Built a real-time residential water monitoring solution using pressure sensors and NodeMCU, with data logging and live alerts via Firebase.',
    tech: ['NodeMCU', 'Firebase', 'JavaScript'],
    demoLink: '#',
    githubLink: 'https://github.com/Arya-pp/water-level-monitor',
    gradient: 'from-blue-500 to-cyan-500',
    initial: 'W',
  },
  {
    title: 'Blink Eye Rate Detection',
    description: 'Python-based system that tracks blink rate using webcam input. Uses dlib and EAR to detect eye closure frequency in real-time.',
    tech: ['Python', 'OpenCV', 'dlib'],
    demoLink: '#',
    githubLink: 'https://github.com/Arya-pp/blinkdetectopencv',
    gradient: 'from-purple-500 to-pink-500',
    initial: 'B',
  },
];

const Projects = () => {
  return (
    <section id="projects" className="py-20 px-6 sm:px-10 bg-dark-primary text-white">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-3xl sm:text-4xl font-bold text-purple-accent mb-12 text-center">
          Featured Projects
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div
              key={index}
              className="bg-dark-secondary rounded-2xl overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300 flex flex-col"
            >
              {/* Top gradient block with initial */}
              <div className={`bg-gradient-to-br ${project.gradient} p-10 text-center`}>
                <span className="text-white text-5xl font-bold">{project.initial}</span>
              </div>

              {/* Project content */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-semibold text-white mb-2">{project.title}</h3>
                <p className="text-gray-300 mb-4 flex-grow">{project.description}</p>

                {/* Tech stack tags */}
                <div className="flex flex-wrap gap-2 mb-4">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="text-sm bg-purple-900 text-purple-light px-3 py-1 rounded-full"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {/* Links */}
                <div className="flex gap-4 text-purple-accent font-medium text-sm">
                  <a href={project.demoLink} target="_blank" rel="noopener noreferrer">
                    Live Demo
                  </a>
                  <a href={project.githubLink} target="_blank" rel="noopener noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;

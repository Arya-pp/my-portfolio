'use client';

import React from 'react';

const skills = [
  'Front-end Development',
  'Web Development',
  'Full stack Development'
];

const About = () => {
  return (
    <section id="about" className="relative py-20 px-6 sm:px-10 bg-dark-primary text-white">
      <div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-12">
        {/* Left: Avatar */}
        <div className="bg-purple-accent bg-gradient-to-br from-purple-accent to-purple-light w-48 h-48 sm:w-64 sm:h-64 flex items-center justify-center text-6xl font-bold text-white rounded-xl shadow-xl animate-float">
          A
        </div>

        {/* Right: Text Content */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl sm:text-4xl font-bold text-purple-accent">About Me</h2>
          <p className="text-lg text-gray-300 mb-4">
            I'm Arya, a Computer Science graduate from the College of Engineering, Trivandrum.<br />
            I'm passionate about frontend development and love creating clean, user-friendly web experiences.
          </p>
          <p className="text-lg text-gray-300">
            I'm currently looking for exciting opportunities where I can learn, grow, and contribute as a developer.
          </p>

          {/* Skills/Tags */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            {skills.map((skill) => (
              <div
                key={skill}
                className="flex items-center gap-3 bg-dark-secondary px-4 py-3 rounded-xl shadow-md"
              >
                <div className="w-3 h-3 bg-purple-accent rounded-full"></div>
                <span className="text-white">{skill}</span>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Floating Circles */}
      <div className="absolute top-0 left-0 w-24 h-24 bg-purple-900 opacity-20 rounded-full blur-2xl animate-float"></div>
      <div className="absolute bottom-10 right-10 w-24 h-24 bg-purple-900 opacity-20 rounded-full blur-2xl animate-float delay-1000"></div>
    </section>
  );
};

export default About;

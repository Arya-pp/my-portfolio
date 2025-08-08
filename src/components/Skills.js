"use client";
import React from "react";

const skills = [
  {
    title: 'Languages',
    list: ['C', 'Python', 'Java', 'SQL (Postgres)', 'JavaScript', 'HTML/CSS'],
  },
  {
    title: 'Web / Dev Tools',
    list: ['React.js','Next.js','Node.js', 'Express.js', 'MongoDB', 'Firebase', 'Tailwind CSS','Git'],
  },
  {
    title: 'IoT / Hardware',
    list: ['Arduino', 'NodeMCU', 'Sensors'],
  },
  {
    title: 'Design Tools',
    list: ['Photoshop', 'Canva', 'Figma'],
  },
  {
    title: 'CS Fundamentals',
    list: ['Data Structures and Algorithms', 'OOPs', 'OS Basics', 'DBMS'],
  },
  {
    title: 'Soft Skills',
    list: ['Communication', 'Leadership', 'Event Coordination'],
  },
];

const Skills = () => {
  return (
    <section id="skills" className="relative z-10 py-24 px-4 md:px-12 bg-dark-primary text-white">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-accent mb-12 animate-slide-up">Technical Skills</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((category, idx) => (
            <div key={idx} className="bg-dark-secondary rounded-xl p-6 shadow-lg animate-fade-in">
              <h3 className="text-xl font-semibold text-purple-accent mb-4">{category.title}</h3>
              <div className="flex flex-wrap gap-2">
                {category.list.map((skill, i) => (
                  <span key={i} className="bg-gray-800 text-sm px-3 py-1 rounded-full hover:bg-purple-accent hover:text-white transition">
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;

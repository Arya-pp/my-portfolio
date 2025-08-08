"use client";
import React from "react";

const educationData = [
  {
    degree: "Bachelor of Technology (B.Tech) in Computer Science and Engineering",
    institution: "College of Engineering Trivandrum",
    year: "2021 – 2025",
  },
  {
    degree: "Higher Secondary Education (Class XII)",
    institution: "Rahmania HSS For Handicapped",
    year: "2019 – 2021",
  },
  {
    degree: "SSLC (Class X)",
    institution: "BEM Girls Higher Secondary School",
    year: "2018",
  },
];

const Education = () => {
  return (
    <section id="education" className="py-24 px-4 md:px-12 bg-dark-secondary text-white">
      <div className="max-w-4xl mx-auto">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-accent mb-12 text-center animate-slide-up">
          Education
        </h2>
        <div className="space-y-8">
          {educationData.map((edu, index) => (
            <div
              key={index}
              className="bg-dark-primary p-6 rounded-xl shadow-md animate-slide-up"
              style={{ animationDelay: `${index * 0.2}s`, animationFillMode: "forwards" }}
            >
              <h3 className="text-xl font-semibold text-purple-light mb-1">{edu.degree}</h3>
              <p className="text-gray-300 font-medium">{edu.institution}</p>
              <p className="text-gray-400 text-sm mb-2">{edu.year}</p>
              <p className="text-gray-400 text-sm">{edu.details}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;

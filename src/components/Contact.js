'use client';
import React from 'react';
import { MdEmail } from 'react-icons/md';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Contact = () => {
  
  const email = process.env.NEXT_PUBLIC_EMAIL;
  const github = process.env.NEXT_PUBLIC_GITHUB;
  const linkedin = process.env.NEXT_PUBLIC_LINKEDIN;

  return (
    <section
      id="contact"
      className="relative z-10 py-24 px-4 md:px-12 bg-dark-primary text-white"
    >
      <div className="max-w-3xl mx-auto text-center">
        <h2 className="text-4xl md:text-5xl font-bold text-purple-accent mb-8 animate-slide-up">
          Get In Touch
        </h2>
        <p className="text-sm text-gray-400 mb-12">
          Feel free to reach out for collaborations, questions, or just to connect!
        </p>

        <div className="flex justify-center items-center gap-8">
          <a
            href={`mailto:${email}`}
            className="text-purple-accent text-2xl hover:scale-110 transition-transform"
            aria-label="Email"
          >
            <MdEmail />
          </a>
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-accent text-2xl hover:scale-110 transition-transform"
            aria-label="LinkedIn"
          >
            <FaLinkedin />
          </a>
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="text-purple-accent text-2xl hover:scale-110 transition-transform"
            aria-label="GitHub"
          >
            <FaGithub />
          </a>
        </div>
      </div>
    </section>
  );
};

export default Contact;

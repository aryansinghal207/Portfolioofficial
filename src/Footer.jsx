import React from "react";

const Footer = () => {
  return (
    <footer className="mt-10">
      <div className="max-w-5xl mx-auto px-4 py-6">
        <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl text-white p-4">
          <div className="flex flex-wrap gap-4 justify-center text-sm mb-3">
            <a href="#about-section" className="hover:underline">About</a>
            <a href="#skills-section" className="hover:underline">Skills</a>
            <a href="#education-section" className="hover:underline">Education</a>
            <a href="#projects-section" className="hover:underline">Projects</a>
            <a href="#certificates-section" className="hover:underline">Certificates</a>
            <a href="#achievements-section" className="hover:underline">Achievements</a>
            <a href="#contact-section" className="hover:underline">Contact</a>
          </div>
          <p className="text-center text-xs">© {new Date().getFullYear()} Aryan Singhal. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

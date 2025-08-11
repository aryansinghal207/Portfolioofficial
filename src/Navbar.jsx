import React from "react";
import DownloadIcon from "./icons/DownloadIcon";

const Navbar = () => {
  return (
    <nav className="sticky top-0 z-50">
      <div className="max-w-5xl mx-auto px-4 py-4">
        <div className="rounded-full border border-white/20 bg-white/10 backdrop-blur-xl text-white px-4 py-2 flex items-center justify-between">
          <div className="font-bold text-lg tracking-tight">Aryan Singhal</div>
          <div className="hidden sm:flex items-center gap-4 text-sm">
            <a href="#about-section" className="hover:underline">About</a>
            <a href="#skills-section" className="hover:underline">Skills</a>
            <a href="#education-section" className="hover:underline">Education</a>
            <a href="#projects-section" className="hover:underline">Projects</a>
            <a href="#certificates-section" className="hover:underline">Certificates</a>
            <a href="#achievements-section" className="hover:underline">Achievements</a>
            <a href="#contact-section" className="hover:underline">Contact</a>
          </div>
          <a href="/Aryan_Resume.pdf" download className="ml-4 px-4 py-1.5 rounded-full bg-white text-black text-sm hover:opacity-90 transition-colors inline-flex items-center gap-2">
            <DownloadIcon className="w-4 h-4" />
            <span>Resume</span>
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

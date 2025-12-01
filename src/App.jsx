import React from "react";
import Navbar from "./Navbar";
import Home from "./Home";
import SoftSkills from "./SoftSkills";
import Skills from "./Skills";
import Education from "./Education";
import Projects from "./Projects";
import Certificates from "./Certificates";
import Achievements from "./Achievements";
import Extracurricular from "./Extracurricular";
import Contact from "./Contact";
import Footer from "./Footer";

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      <Navbar />
      <main className="max-w-5xl mx-auto px-4 py-10 space-y-10">
        <div className="scroll-mt-24" id="about-section"><Home /></div>
        <div className="scroll-mt-24" id="skills-section"><Skills /></div>
        <div className="scroll-mt-24" id="soft-skills-section"><SoftSkills /></div>
        <div className="scroll-mt-24" id="education-section"><Education /></div>
        <div className="scroll-mt-24" id="projects-section"><Projects /></div>
        <div className="scroll-mt-24" id="certificates-section"><Certificates /></div>
        <div className="scroll-mt-24" id="achievements-section"><Achievements /></div>
        <div className="scroll-mt-24" id="extracurricular-section"><Extracurricular /></div>
        <div className="scroll-mt-24" id="contact-section"><Contact /></div>
      </main>
      <Footer />
    </div>
  );
}

export default App;

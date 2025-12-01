import React from "react";

const Certificates = () => (
  <section id="certificates" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Relevant Courses & Certifications</h2>
      <div className="mb-4">
        <h3 className="font-semibold mb-2">Completed:</h3>
        <ul className="list-disc ml-6">
          <li>Data Structure and Algorithms</li>
          <li>Operating System</li>
          <li>Computer Networks</li>
          <li>DBMS</li>
          <li>System Design</li>
          <li>Cloud Computing</li>
          <li>Problem-solving skills</li>
        </ul>
      </div>
      <div>
        <h3 className="font-semibold mb-2">Certificates:</h3>
        <ul className="list-disc ml-6">
          <li>
            <a href="/JPMorganChase_Job_Simulation_Certificate.pdf" target="_blank" rel="noreferrer" className="underline">JPMorgan Chase</a>
          </li>
          <li>
            <a href="/Genrative_AI.pdf" target="_blank" rel="noreferrer" className="underline">Generative AI</a>
          </li>
          <li>
            <a href="/Full_Stack_Certificate.pdf" target="_blank" rel="noreferrer" className="underline">FullStack</a>
          </li>
          <li>
            <a href="https://www.coursera.org/" target="_blank" rel="noreferrer" className="underline">Coursera</a>
          </li>
          <li>
            <a href="/Code&Connect.pdf" target="_blank" rel="noreferrer" className="underline">HackerRank</a>
          </li>
        </ul>
      </div>
    </div>
  </section>
);

export default Certificates;

import React from "react";

const Education = () => (
  <section id="education" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Education</h2>
      <div className="mb-4">
        <h3 className="font-semibold">Chitkara University Rajpura</h3>
        <div className="text-sm">Bachelor of Technology in Computer Science and Engineering</div>
        <div className="mt-1">CGPA: 8.75 / 10</div>
        <div className="text-sm text-white/80">Expected Graduation: 2027</div>
        <div className="text-sm text-white/80">Location: Rajpura, Punjab</div>
      </div>
      <div>
        <h3 className="font-semibold">Guru Teg Bahadur Public School, Dhuri</h3>
        <div className="text-sm">Class 12 - PCM</div>
        <div className="text-sm text-white/80">Year: 2023</div>
        <div className="text-sm text-white/80">Location: Dhuri, Punjab</div>
      </div>
    </div>
  </section>
);

export default Education;

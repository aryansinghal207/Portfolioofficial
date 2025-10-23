import React from "react";

const Achievements = () => (
  <section id="achievements" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Achievements</h2>
      <ul className="list-disc ml-6">
        <li>Solved 300+ problems LeetCode and GFG</li>
        <li>Have been a supercontributor in Hacktoberfest (2025)</li>
        <li>Shortlisted for SIH 2025</li>
        <li>Attended AI Workshop conducted by university club to explore AI tech</li>
      </ul>
    </div>
  </section>
);

export default Achievements;

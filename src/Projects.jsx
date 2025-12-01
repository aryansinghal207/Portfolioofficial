import React from "react";
import ExternalLinkIcon from "./icons/ExternalLinkIcon";

const ProjectCard = ({ title, period, bullets, url }) => (
  <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl p-5">
    <h3 className="font-semibold text-lg">{title} <span className="text-sm">({period})</span></h3>
    <ul className="list-disc ml-6 mt-2">
      {bullets.map((b, i) => (
        <li key={i}>{b}</li>
      ))}
    </ul>
    {url && (
      <a href={url} target="_blank" rel="noreferrer" className="mt-3 inline-flex items-center gap-2 px-3 py-1.5 border border-white rounded hover:bg-white hover:text-black transition">
        <ExternalLinkIcon className="w-4 h-4" />
        <span>View Project</span>
      </a>
    )}
  </div>
);

const Projects = () => (
  <section id="projects" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Projects</h2>
      <div className="grid grid-cols-1 gap-4">
        <ProjectCard
          title="E-Shop - ReactJS E-commerce Frontend Application | GITHUB | WEBSITE"
          period="Sep 2024 – Oct 2024"
          url="https://e-commerce-react-b824jvn0d-aryansinghal207s-projects.vercel.app/"
          bullets={[
            "Built an interactive e-commerce frontend using React.js to simulate a shopping experience with real-time updates.",
            "Integrated routing for smooth navigation between product listings, cart, and checkout components.",
            "Used functional components and state management to dynamically render product data and manage user interaction.",
            "Styled the application using modern CSS techniques to create a visually appealing and user-friendly interface.",
          ]}
        />
        <ProjectCard
          title="AutoFix - Automobile Workshop Website | HTML, CSS, JavaScript | GITHUB | WEBSITE"
          period="April 2024 – May 2024"
          url="https://frontend-website-one.vercel.app/"
          bullets={[
            "Designed and developed a static website for an automobile workshop using HTML, CSS, and JavaScript.",
            "Created responsive layouts to display services, contact details, and client testimonials for improved user engagement.",
            "Implemented smooth navigation and structured page elements to enhance UI clarity and load performance.",
            "Followed clean code practices and tested across browsers for compatibility and responsiveness.",
          ]}
        />
      </div>
    </div>
  </section>
);

export default Projects;

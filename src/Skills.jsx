import React from "react";

const Card = ({ title, children }) => (
  <div className="rounded-xl border border-white/20 bg-white/10 backdrop-blur-xl p-5">
    <h3 className="font-semibold mb-2">{title}</h3>
    {children}
  </div>
);

const Skills = () => (
  <section id="skills" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Technical Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
        <Card title="Languages">
          <ul className="list-disc ml-6">
            <li>Java</li>
            <li>C++</li>
            <li>SQL</li>
            <li>JavaScript</li>
          </ul>
        </Card>
        <Card title="Development">
          <ul className="list-disc ml-6">
            <li>React.js</li>
            <li>Node.js</li>
            <li>Tailwind</li>
            <li>HTML</li>
            <li>CSS</li>
          </ul>
        </Card>
        <Card title="Database Systems">
          <ul className="list-disc ml-6">
            <li>MongoDB</li>
            <li>MySQL</li>
          </ul>
        </Card>
        <Card title="Utilities">
          <ul className="list-disc ml-6">
            <li>Git</li>
            <li>GitHub</li>
            <li>VS Code</li>
            <li>Linux</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default Skills;

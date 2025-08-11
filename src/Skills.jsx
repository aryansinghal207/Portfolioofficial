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
      <h2 className="text-2xl font-bold mb-4">Skills</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
        <Card title="Languages">
          <ul className="list-disc ml-6">
            <li>Java</li>
            <li>C++</li>
            <li>C</li>
            <li>Python</li>
            <li>JavaScript</li>
          </ul>
        </Card>
        <Card title="Frontend">
          <ul className="list-disc ml-6">
            <li>HTML</li>
            <li>CSS</li>
            <li>React.js</li>
          </ul>
        </Card>
        <Card title="Backend">
          <ul className="list-disc ml-6">
            <li>Node.js</li>
            <li>Express.js</li>
          </ul>
        </Card>
        <Card title="Databases">
          <ul className="list-disc ml-6">
            <li>MySQL</li>
            <li>MongoDB</li>
          </ul>
        </Card>
        <Card title="Tools">
          <ul className="list-disc ml-6">
            <li>Git</li>
            <li>GitHub</li>
            <li>Postman</li>
            <li>VS Code</li>
            <li>Google Colab</li>
          </ul>
        </Card>
        <Card title="Design Tools">
          <ul className="list-disc ml-6">
            <li>Figma</li>
            <li>Canva</li>
            <li>Google Slides</li>
          </ul>
        </Card>
      </div>
    </div>
  </section>
);

export default Skills;

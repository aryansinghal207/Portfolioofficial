import React from "react";

const Home = () => (
  <section id="about" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl md:min-h-[320px]">
      <div className="grid md:grid-cols-3 gap-6 items-stretch h-full">
        <div className="md:col-span-2 order-2 md:order-1 flex flex-col">
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight mb-2">Hi, I'm Aryan Singhal</h1>
          <h2 className="text-lg md:text-xl mb-4">Software Developer</h2>
          <p className="mb-4 max-w-3xl">
            Motivated and detail-oriented Computer Science graduate with a strong foundation in core programming languages including Java, C++, C, and Python. Proficient in front-end development, operating systems, and database management systems (DBMS). Adept at problem-solving, debugging, and writing clean, efficient code. Strong understanding of software development life cycle (SDLC) and object-oriented programming (OOP) principles. Eager to contribute to innovative projects, collaborate with cross-functional teams, and grow under the mentorship of experienced professionals in a fast-paced, dynamic environment.
          </p>
          <div className="mb-6">G-213, Patel Nagar 3, Ghaziabad</div>
          <div className="mt-auto flex gap-3">
            <a href="/Aryan_Resume.pdf" download className="px-4 py-2 rounded-full bg-white text-black font-medium hover:opacity-90 transition inline-flex items-center gap-2">
              <svg className="w-4 h-4" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/><path d="M7 10l5 5 5-5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/><path d="M4 21h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/></svg>
              <span>Resume</span>
            </a>
            <a href="#contact-section" className="px-4 py-2 rounded-full border border-white font-medium hover:bg-white hover:text-black transition">Contact</a>
          </div>
        </div>
        <div className="order-1 md:order-2 rounded-2xl overflow-hidden h-full">
          <img src="/Aryan.jpeg" alt="Aryan Singhal" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  </section>
);

export default Home;

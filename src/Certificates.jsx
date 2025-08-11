import React from "react";

const Certificates = () => (
  <section id="certificates" className="py-2">
    <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
      <h2 className="text-2xl font-bold mb-4">Certificates</h2>
      <ul className="list-disc ml-6">
        <li>
          <a href="/Codeathon.pdf" target="_blank" rel="noreferrer" className="underline">Codeathon Certificate</a>
        </li>
        <li>
          <a href="/Code&Connect.pdf" target="_blank" rel="noreferrer" className="underline">Code&Connect Certificate</a>
        </li>
        <li>
          <a href="https://drive.google.com/drive/folders/1CIEBsVT1oEhqks2NUyYxiR-pD8tkTADz" target="_blank" rel="noreferrer" className="underline">Coursera Certificates</a>
        </li>
        <li>
          <a href="https://drive.google.com/drive/folders/1Gq_o7IBI_hg_EBPbigVvxvnUmNyAJyX9" target="_blank" rel="noreferrer" className="underline">Hackerrank Certificates</a>
        </li>
      </ul>
    </div>
  </section>
);

export default Certificates;

import React, { useState } from "react";
import PhoneIcon from "./icons/PhoneIcon";
import EmailIcon from "./icons/EmailIcon";
import LocationIcon from "./icons/LocationIcon";
import GithubIcon from "./icons/GithubIcon";
import LinkedinIcon from "./icons/LinkedinIcon";
import LeetcodeIcon from "./icons/LeetcodeIcon";

const API_BASE = import.meta.env.VITE_API_BASE || "https://portfolioofficial-apgf.onrender.com";

const Contact = () => {
  const [status, setStatus] = useState({ state: "idle", message: "" });

  async function handleSubmit(e) {
    e.preventDefault();
    const form = e.currentTarget; // Store form reference before async operations
    const formData = new FormData(form);
    const payload = Object.fromEntries(formData.entries());
    
    setStatus({ state: "loading", message: "Sending…" });
    
    try {
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 30000); // 30 second timeout
      
      console.log('Sending request to:', `${API_BASE}/api/contact`);
      
      const res = await fetch(`${API_BASE}/api/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
        signal: controller.signal,
      });
      
      clearTimeout(timeoutId);
      
      console.log('Response status:', res.status, 'OK:', res.ok);
      
      // Handle error responses first
      if (!res.ok) {
        let errorMessage = "Failed to send message. Please try again.";
        try {
          const data = await res.json();
          errorMessage = data.error || errorMessage;
          console.error('Error response:', data);
        } catch (parseError) {
          console.error('Could not parse error response:', parseError);
        }
        setStatus({ state: "error", message: errorMessage });
        return;
      }
      
      // Handle successful responses (200, 201, 204)
      try {
        const data = await res.json();
        console.log('Success response:', data);
        if (data.ok) {
          console.log('Message sent successfully.');
          setStatus({ state: "success", message: "Message sent successfully! We'll get back to you soon." });
          alert("Message sent successfully! We'll get back to you soon.");
          form.reset();
        } else {
          setStatus({ state: "error", message: data.error || "Failed to send message. Please try again." });
        }
      } catch (parseError) {
        console.error('Could not parse success response:', parseError);
        // If we can't parse JSON but status was ok, treat as success
        setStatus({ state: "success", message: "Message sent successfully! We'll get back to you soon." });
        form.reset();
      }
    } catch (err) {
      console.error('Contact form error:', err);
      if (err.name === 'AbortError') {
        setStatus({ state: "error", message: "Request timeout. The server is taking too long to respond. Please try again." });
      } else {
        setStatus({ state: "error", message: "Network error. Please check your connection and try again." });
      }
    }
  }

  return (
    <section id="contact" className="py-2">
      <div className="rounded-2xl border border-white/20 bg-white/10 backdrop-blur-xl p-6 md:p-8 shadow-xl">
        <h2 className="text-2xl font-bold mb-4">Contact</h2>
        <div className="flex flex-col gap-3 mb-8">
          <div className="flex items-center gap-2">
            <PhoneIcon className="w-5 h-5" />
            <span>+91 8727976531</span>
          </div>
          <div className="flex items-center gap-2">
            <EmailIcon className="w-5 h-5" />
            <span>aryansinghal207@gmail.com</span>
          </div>
          <div className="flex items-center gap-2">
            <LocationIcon className="w-5 h-5" />
            <span>G-213, Patel Nagar 3, Ghaziabad</span>
          </div>
          <div className="flex items-center gap-2">
            <GithubIcon className="w-5 h-5" />
            <a href="https://github.com/aryansinghal207/" target="_blank" rel="noreferrer" className="underline">GitHub</a>
          </div>
          <div className="flex items-center gap-2">
            <LinkedinIcon className="w-5 h-5" />
            <a href="https://www.linkedin.com/in/aryan-singhal-843a57282/" target="_blank" rel="noreferrer" className="underline">LinkedIn</a>
          </div>
          <div className="flex items-center gap-2">
            <LeetcodeIcon className="w-5 h-5" />
            <a href="https://leetcode.com/u/aryansinghal213/" target="_blank" rel="noreferrer" className="underline">LeetCode</a>
          </div>
        </div>

        <form className="grid grid-cols-1 gap-4" onSubmit={handleSubmit} aria-live="polite">
          <div>
            <label className="block mb-1 font-medium">Name</label>
            <input type="text" name="name" required className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none" placeholder="Your name" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Email</label>
            <input type="email" name="email" required className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none" placeholder="you@example.com" />
          </div>
          <div>
            <label className="block mb-1 font-medium">Message</label>
            <textarea name="message" rows="5" required className="w-full px-3 py-2 bg-transparent border border-white rounded focus:outline-none" placeholder="Tell me about your project..." />
          </div>
          <button type="submit" disabled={status.state === 'loading'} className="px-4 py-2 rounded-full bg:white bg-white text-black font-medium hover:opacity-90 transition w-fit disabled:opacity-60">
            {status.state === 'loading' ? 'Sending…' : status.state === 'success' ? 'Sent!' : 'Send Message'}
          </button>
          {status.state === 'error' && (
            <p className="text-sm">{status.message}</p>
          )}
        </form>
      </div>
    </section>
  );
};

export default Contact;

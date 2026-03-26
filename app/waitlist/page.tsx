"use client";

import { useState } from "react";

export default function waitlist() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <div className="min-h-screen flex items-center justify-center px-6">
        <p className="text-center text-3xl font-bold text-teal border border-teal-500/30 rounded-lg p-5  ">
          Thank you for joining the LearnNexus waitlist. We will notify you when
          the platform becomes available.
        </p>
      </div>
    );
  }

  return (
    <section className="min-h-screen flex items-center justify-center px-6 py-20">
      <form
        onSubmit={handleSubmit}
        className="w-full bg-black"
      >
        <h1 className="text-7xl font-bold bg-linear-to-r from-teal-400 to-cyan-400 bg-clip-text text-transparent text-center px-20 py-34">
          Join the Waitlist today!
        </h1>

        <input 
          type="text"
          placeholder="Full Name"
          className="w-full p-3 border border-teal-400 mt-4 mb-4 rounded-lg"
          required
        />

        <input
          type="text"
          placeholder="School Name"
          className="w-full p-3 border border-teal-400 mt-4 mb-4 rounded-lg"
          required
        />

        <input
          type="email"
          placeholder="Email Address"
          className="w-full p-3 border border-teal-400 mt-4 mb-4 rounded-lg"
          required
        />

        <input
          type="tel"
          placeholder="Phone Number"
          className="w-full p-3 border border-teal-400 mt-4 mb-4 rounded-lg"
          required
        />

        <select className="w-full p-3 border border-teal-400 rounded-lg 
             bg-black text-white" required>
          <option value="">Select School Type</option>      
          <option>Primary School</option>
          <option>Secondary School</option>
          <option>College</option>
          <option>Training Institute</option>        
        </select>

        <input
          type="number"
          placeholder="Number of Students"
          className="w-full p-3 border border-teal-400 mt-4 mb-4 rounded-lg"
          required
        />

        <textarea
          placeholder="Message (optional)"
          className="w-full p-3 border border-teal-400 mt-4 mb-4 rounded-lg"
          rows={4}
        ></textarea>

       <button
  className="block mx-auto w-full max-w-xs h-12 bg-teal-300 text-gray-800 rounded-lg text-lg hover:opacity-90 transition mt-10"
>
  Submit
</button>
      </form>
    </section>
  );
}
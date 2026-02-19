"use client";
import { useState } from "react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log("Contact form submitted:", formData);
    alert("Message sent successfully!");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className="min-h-screen bg-[#FDF4E2] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-[#6D1B1C]/30 shadow-lg">
        
        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#6D1B1C]">
            Contact Us
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            We’d love to hear from you
          </p>
        </header>

        {/* CONTACT FORM */}
        <form onSubmit={handleSubmit} className="mt-6 space-y-5">
          {/* NAME FIELD */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Full Name</label>
            <input
              type="text"
              value={formData.name}
              onChange={(e) => setFormData({ ...formData, name: e.target.value })}
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-[#6D1B1C] text-sm"
            />
          </div>

          {/* EMAIL FIELD */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              value={formData.email}
              onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-[#6D1B1C] text-sm"
            />
          </div>

          {/* MESSAGE FIELD */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Message</label>
            <textarea
              rows={5}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Write your message here..."
              className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-[#6D1B1C] text-sm"
            />
          </div>

          {/* SUBMIT BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 rounded-lg bg-[#6D1B1C] hover:bg-[#5a1617] transition text-sm font-semibold text-white"
          >
            Send Message
          </button>
        </form>
      </div>
    </div>
  );
}
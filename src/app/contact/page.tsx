"use client";
import { useState } from "react";
import { validateContact } from "@/lib/validation/contactValidation";

export default function ContactPage() {

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",   // ADDED
    message: "",
  });

  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    // Run validation
    const errors = validateContact(formData);

    if (Object.keys(errors).length > 0) {
      setError(Object.values(errors)[0] as string);
      return;
    }

    setError("");
    setSuccess("");

    const res = await fetch("/api/contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData),
    });

    const data = await res.json();

    if (!data.success) {
      setError(data.error || "Something went wrong");
      return;
    }

    setSuccess("Message sent successfully!");

    setFormData({
      name: "",
      email: "",
      phone: "",   // ADDED
      message: "",
    });
  };

  return (
    <div className="min-h-screen bg-[#FDF4E2] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-[#6D1B1C]/30 shadow-lg">

        <header className="text-center">
          <h1 className="text-2xl font-bold text-[#6D1B1C]">
            Contact Us
          </h1>
        </header>

        {error && (
          <p className="text-red-500 text-sm mt-4 text-center">{error}</p>
        )}

        {success && (
          <p className="text-green-600 text-sm mt-4 text-center">{success}</p>
        )}

        <form onSubmit={handleSubmit} className="mt-6 space-y-5">

          <input
            type="text"
            placeholder="Full Name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border"
          />

          <input
            type="email"
            placeholder="Email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border"
          />

          {/* ADDED PHONE INPUT */}
          <input
            type="tel"
            placeholder="Phone Number"
            value={formData.phone}
            onChange={(e) =>
              setFormData({ ...formData, phone: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border"
          />

          <textarea
            rows={4}
            placeholder="Message"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            className="w-full px-4 py-3 rounded-lg border"
          />

          <button
            type="submit"
            className="w-full px-6 py-3 bg-[#6D1B1C] text-white rounded-lg"
          >
            Send Message
          </button>

        </form>
      </div>
    </div>
  );
}
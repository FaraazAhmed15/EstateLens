"use client";
import { useState } from "react";
import { motion } from "framer-motion";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [errors, setErrors] = useState<{ [key: string]: string }>({});

  const validate = () => {
    const newErrors: { [key: string]: string } = {};

    if (!formData.firstName.trim()) {
      newErrors.firstName = "First name is required";
    }
    if (!formData.lastName.trim()) {
      newErrors.lastName = "Last name is required";
    }
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      newErrors.email = "Enter a valid email address";
    }
    if (!formData.message.trim()) {
      newErrors.message = "Message cannot be empty";
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (validate()) {
      alert("Form submitted successfully!");
      // Here you can send data to your backend
      setFormData({ firstName: "", lastName: "", email: "", message: "" });
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#FDF4E2] via-[#f9e8d2] to-[#fdfaf5] flex items-center justify-center p-6">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="bg-white rounded-2xl shadow-2xl grid grid-cols-1 lg:grid-cols-2 overflow-hidden max-w-6xl w-full"
      >
        {/* Left side */}
        <div className="bg-[#6D1B1C] text-white p-10 flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold mb-6">Get in Touch</h1>
            <p className="text-[#FDF4E2] mb-10 leading-relaxed">
              We’d love to hear from you. Fill out the form and we’ll get back
              to you as soon as possible.
            </p>
            <div className="space-y-6">
              <div>
                <p className="font-semibold text-[#FDF4E2]">Email</p>
                <p className="text-[#f9d9c0]">hello@example.com</p>
              </div>
              <div>
                <p className="font-semibold text-[#FDF4E2]">Phone</p>
                <p className="text-[#f9d9c0]">+1 (555) 123-4567</p>
              </div>
              <div>
                <p className="font-semibold text-[#FDF4E2]">Address</p>
                <p className="text-[#f9d9c0]">
                  123 Design Street, New York, USA
                </p>
              </div>
            </div>
          </div>
          <p className="text-sm text-[#f9d9c0] mt-10">© 2026 Your Company</p>
        </div>

        {/* Right side */}
        <div className="p-10 bg-[#FDF4E2]">
          <form className="space-y-6" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-sm font-medium text-[#6D1B1C] mb-1">
                  First Name
                </label>
                <input
                  type="text"
                  value={formData.firstName}
                  onChange={(e) =>
                    setFormData({ ...formData, firstName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#6D1B1C]/30 rounded-xl focus:ring-2 focus:ring-[#6D1B1C] focus:outline-none"
                  placeholder="John"
                />
                {errors.firstName && (
                  <p className="text-red-600 text-sm mt-1">{errors.firstName}</p>
                )}
              </div>
              <div>
                <label className="block text-sm font-medium text-[#6D1B1C] mb-1">
                  Last Name
                </label>
                <input
                  type="text"
                  value={formData.lastName}
                  onChange={(e) =>
                    setFormData({ ...formData, lastName: e.target.value })
                  }
                  className="w-full px-4 py-2 border border-[#6D1B1C]/30 rounded-xl focus:ring-2 focus:ring-[#6D1B1C] focus:outline-none"
                  placeholder="Doe"
                />
                {errors.lastName && (
                  <p className="text-red-600 text-sm mt-1">{errors.lastName}</p>
                )}
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium text-[#6D1B1C] mb-1">
                Email
              </label>
              <input
                type="email"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#6D1B1C]/30 rounded-xl focus:ring-2 focus:ring-[#6D1B1C] focus:outline-none"
                placeholder="john@example.com"
              />
              {errors.email && (
                <p className="text-red-600 text-sm mt-1">{errors.email}</p>
              )}
            </div>

            <div>
              <label className="block text-sm font-medium text-[#6D1B1C] mb-1">
                Message
              </label>
              <textarea
                rows={5}
                value={formData.message}
                onChange={(e) =>
                  setFormData({ ...formData, message: e.target.value })
                }
                className="w-full px-4 py-2 border border-[#6D1B1C]/30 rounded-xl focus:ring-2 focus:ring-[#6D1B1C] focus:outline-none"
                placeholder="Write your message here..."
              />
              {errors.message && (
                <p className="text-red-600 text-sm mt-1">{errors.message}</p>
              )}
            </div>

            <motion.button
              whileHover={{ scale: 1.05, backgroundColor: "#541516" }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="w-full bg-[#6D1B1C] text-[#FDF4E2] py-3 rounded-xl font-semibold shadow-md transition-colors"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </motion.div>
    </div>
  );
}
"use client";

import { useState, ChangeEvent, FormEvent } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { validateSignup } from "@/lib/validation/signupValidation";

// Props type
interface SignupModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

// Form state type
interface SignupForm {
  name: string;
  email: string;
  password: string;
}

// Errors type
type SignupErrors = Partial<SignupForm>;

export default function SignupModal({
  isOpen,
  onClose,
  onSwitchToLogin,
}: SignupModalProps) {

  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState<SignupForm>({
    name: "",
    email: "",
    password: "",
  });
  const [errors, setErrors] = useState<SignupErrors>({});
  const [loading, setLoading] = useState(false);

  if (!isOpen) return null;

  // Handle input change
  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  // Handle form submit
  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    const validationErrors = validateSignup(form);
    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    try {
      setLoading(true);

      const res = await fetch("/api/signup", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();

      if (!res.ok) alert(data.message);
      else {
        alert("Signup Successful");
        onClose();
      }
    } catch (err) {
      console.error(err);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">
      <div className="absolute inset-0 bg-black/40 backdrop-blur-sm" onClick={onClose} />

      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl z-10">
        <button onClick={onClose} className="absolute top-4 right-4 text-gray-500">
          <FaTimes />
        </button>

        <h1 className="text-2xl font-bold text-center mb-6">Create an Account</h1>

        <form onSubmit={handleSubmit} className="space-y-4">
          <div>
            <input
              type="text"
              name="name"
              placeholder="Full Name"
              value={form.name}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
            {errors.name && <p className="text-red-500 text-xs">{errors.name}</p>}
          </div>

          <div>
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={form.email}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
            {errors.email && <p className="text-red-500 text-xs">{errors.email}</p>}
          </div>

          <div className="relative">
            <input
              type={showPassword ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={form.password}
              onChange={handleChange}
              className="w-full px-4 py-3 border rounded-lg"
            />
            <button
              type="button"
              onClick={() => setShowPassword(!showPassword)}
              className="absolute right-3 top-3"
            >
              {showPassword ? <FaEyeSlash /> : <FaEye />}
            </button>
            {errors.password && <p className="text-red-500 text-xs">{errors.password}</p>}
          </div>

          <button
            type="submit"
            disabled={loading}
            className="w-full py-3 bg-[#6D1B1C] text-white rounded-lg"
          >
            {loading ? "Creating..." : "Sign Up"}
          </button>
        </form>

        <p className="text-center text-sm mt-4">
          Already have an account?
          <span
            onClick={() => { onClose(); onSwitchToLogin(); }}
            className="text-[#6D1B1C] cursor-pointer ml-1"
          >
            Login
          </span>
        </p>
      </div>
    </div>
  );
}
"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { login as setSession } from "@/lib/session";
import validateLogin from "@/lib/validation/loginValidation"; // <-- added validation import

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export default function LoginModal({
  isOpen,
  onClose,
  onSwitchToSignup,
}: LoginPopupProps) {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  const [role, setRole] = useState<"user" | "owner" | "admin" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    // --- VALIDATION ADDED ---
    const { isValid, errors } = validateLogin({ email, password });
    if (!isValid) {
      if (errors.email) alert(errors.email);
      else if (errors.password) alert(errors.password);
      return;
    }

    // --- EXISTING LOGIN API CALL ---
    const res = await fetch("/api/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email,
        password,
        role,
      }),
    });

    const data = await res.json();

    if (data.name) {
      // store name + role in session
      setSession(data.name, data.role);
      alert(data.message);
      onClose();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl z-10">

        <button
          onClick={() => {
            setRole(null);
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500"
        >
          <FaTimes />
        </button>

        {/* ROLE SELECT */}
        {!role && (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              Login As
            </h1>

            <div className="space-y-4">

              <button
                onClick={() => setRole("user")}
                className="w-full py-3 bg-[#6D1B1C] text-white rounded-lg"
              >
                User Login
              </button>

              <button
                onClick={() => setRole("owner")}
                className="w-full py-3 bg-[#6D1B1C] text-white rounded-lg"
              >
                Owner Login
              </button>

              <button
                onClick={() => setRole("admin")}
                className="w-full py-3 border border-[#6D1B1C] text-[#6D1B1C] rounded-lg"
              >
                Administrator Login
              </button>

            </div>
          </>
        )}

        {/* LOGIN FORM */}
        {role && (
          <>
            <h1 className="text-2xl font-bold text-center mb-6">
              Welcome Back
            </h1>

            <form onSubmit={handleSubmit} className="space-y-4">

              <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full px-4 py-3 border rounded-lg"
              />

              <div className="relative">

                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full px-4 py-3 border rounded-lg"
                />

                <button
                  type="button"
                  onClick={() => setShowPassword(!showPassword)}
                  className="absolute right-3 top-3"
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </button>

              </div>

              <button
                type="submit"
                className="w-full py-3 bg-[#6D1B1C] text-white rounded-lg"
              >
                Sign In
              </button>

            </form>

            <p className="text-center text-sm mt-4">
              Don’t have an account?
              <span
                onClick={() => {
                  onClose();
                  onSwitchToSignup();
                }}
                className="text-[#6D1B1C] cursor-pointer ml-1"
              >
                Sign Up
              </span>
            </p>
          </>
        )}

      </div>
    </div>
  );
}
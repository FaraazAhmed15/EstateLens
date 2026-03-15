"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";
import { login as setSession } from "@/lib/session";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export default function LoginPopup({
  isOpen,
  onClose,
  onSwitchToSignup,
}: LoginPopupProps) {

  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [showPassword, setShowPassword] = useState<boolean>(false);

  // NEW: role selection
  const [role, setRole] = useState<"owner" | "admin" | null>(null);

  if (!isOpen) return null;

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const res = await fetch("/api/login", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        password,
        role, // send role to backend
      }),
    });

    const data = await res.json();

    if (data.name) {
      setSession(data.name);
      alert(data.message);
      onClose();
    } else {
      alert(data.message);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* Overlay */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* Modal */}
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#6D1B1C]/20 z-10">

        <button
          onClick={() => {
            setRole(null); // reset role
            onClose();
          }}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#6D1B1C]"
        >
          <FaTimes />
        </button>

        {/* STEP 1 → ROLE SELECTION */}
        {!role && (
          <>
            <h1 className="text-2xl font-bold text-[#6D1B1C] text-center">
              Login As
            </h1>

            <div className="mt-8 space-y-4">

              <button
                onClick={() => setRole("owner")}
                className="w-full px-6 py-3 rounded-lg bg-[#6D1B1C] text-white font-semibold hover:bg-[#551415]"
              >
                Owner Login
              </button>

              <button
                onClick={() => setRole("admin")}
                className="w-full px-6 py-3 rounded-lg border border-[#6D1B1C] text-[#6D1B1C] font-semibold hover:bg-[#FDF4E2]"
              >
                Administrator Login
              </button>

            </div>
          </>
        )}

        {/* STEP 2 → LOGIN FORM */}
        {role && (
          <>
            <h1 className="text-2xl font-bold text-[#6D1B1C] text-center">
              Welcome Back
            </h1>

            <form onSubmit={handleSubmit} className="mt-6 space-y-5">

              {/* Email */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Email Address
                </label>

                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300"
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-sm text-gray-700 mb-1">
                  Password
                </label>

                <div className="relative">

                  <input
                    type={showPassword ? "text" : "password"}
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full px-4 py-3 pr-12 rounded-lg bg-[#FDF4E2] border border-gray-300"
                  />

                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500"
                  >
                    {showPassword ? <FaEyeSlash /> : <FaEye />}
                  </button>

                </div>
              </div>

              <button className="w-full mt-4 px-6 py-3 rounded-lg bg-[#6D1B1C] text-white font-semibold">
                Sign In
              </button>

            </form>

            <p className="text-center text-sm text-gray-600 mt-6">
              Don’t have an account?
              <span
                onClick={() => {
                  onClose();
                  onSwitchToSignup();
                }}
                className="text-[#6D1B1C] font-semibold cursor-pointer ml-1"
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
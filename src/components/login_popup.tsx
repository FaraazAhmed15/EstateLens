"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

interface LoginPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToSignup: () => void;
}

export default function LoginPopup({
  isOpen,
  onClose,
  onSwitchToSignup
}: LoginPopupProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL */}
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl shadow-xl border border-[#6D1B1C]/20 z-10">

        {/* CLOSE */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#6D1B1C]"
        >
          <FaTimes />
        </button>

        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-2xl font-bold text-[#6D1B1C]">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Sign in to access your dashboard
          </p>
        </header>

        {/* FORM */}
        <form className="mt-6 space-y-5">
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-sm"
            />
          </div>

          {/* PASSWORD */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Password
            </label>
            <div className="relative">
              <input
                type={showPassword ? "text" : "password"}
                className="w-full px-4 py-3 pr-12 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-sm"
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

        {/* SWITCH */}
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

      </div>
    </div>
  );
}
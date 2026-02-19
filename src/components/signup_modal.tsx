"use client";

import { useState } from "react";
import { FaEye, FaEyeSlash, FaTimes } from "react-icons/fa";

interface SignupPopupProps {
  isOpen: boolean;
  onClose: () => void;
  onSwitchToLogin: () => void;
}

export default function SignupPopup({
  isOpen,
  onClose,
  onSwitchToLogin
}: SignupPopupProps) {
  const [showPassword, setShowPassword] = useState(false);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center">

      {/* OVERLAY */}
      <div
        className="absolute inset-0 bg-black/40 backdrop-blur-sm"
        onClick={onClose}
      />

      {/* MODAL CARD */}
      <div className="relative w-full max-w-md bg-white p-8 rounded-2xl border border-[#6D1B1C]/30 shadow-xl z-10">

        {/* CLOSE BUTTON */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-500 hover:text-[#6D1B1C]"
        >
          <FaTimes />
        </button>

        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#6D1B1C]">
            Create an Account
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Sign up to get started
          </p>
        </header>

        {/* FORM */}
        <form className="mt-6 space-y-5">

          {/* NAME */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Full Name
            </label>
            <input
              type="text"
              placeholder="John Doe"
              className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-sm"
            />
          </div>

          {/* EMAIL */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">
              Email Address
            </label>
            <input
              type="email"
              placeholder="you@example.com"
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
                placeholder="••••••••"
                className="w-full px-4 py-3 pr-12 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-sm"
              />

              <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#6D1B1C]"
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </button>
            </div>
          </div>

          {/* SIGN UP BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 rounded-lg bg-[#6D1B1C] hover:bg-[#5a1617] transition text-sm font-semibold text-white"
          >
            Sign Up
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* SWITCH TO LOGIN */}
        <p className="text-center text-sm text-gray-600">
          Already have an account?
          <span
            onClick={() => {
              onClose();
              onSwitchToLogin();
            }}
            className="text-[#6D1B1C] font-semibold cursor-pointer ml-1"
          >
            Log In
          </span>
        </p>

      </div>
    </div>
  );
}
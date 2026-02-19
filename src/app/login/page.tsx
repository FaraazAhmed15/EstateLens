"use client";

import Link from "next/link";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useState } from "react";

export default function LoginPage() {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="min-h-screen bg-[#FDF4E2] flex items-center justify-center px-4">
      <div className="w-full max-w-md bg-white p-8 rounded-2xl border border-[#6D1B1C]/30 shadow-lg">

        {/* HEADER */}
        <header className="text-center">
          <h1 className="text-2xl sm:text-3xl font-bold text-[#6D1B1C]">
            Welcome Back
          </h1>
          <p className="text-gray-600 mt-2 text-sm">
            Sign in to access your dashboard
          </p>
        </header>

        {/* LOGIN FORM */}
        <form className="mt-6 space-y-5">
          {/* EMAIL FIELD */}
          <div>
            <label className="block text-sm text-gray-700 mb-1">Email Address</label>
            <input
              type="email"
              placeholder="you@example.com"
              className="w-full px-4 py-3 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-[#6D1B1C] text-sm"
            />
          </div>

         {/* PASSWORD FIELD */}
<div>
  <label className="block text-sm text-gray-700 mb-1">Password</label>

  <div className="relative">
    <input
      type={showPassword ? "text" : "password"}
      placeholder="••••••••"
      className="w-full px-4 py-3 pr-12 rounded-lg bg-[#FDF4E2] border border-gray-300 focus:border-[#6D1B1C] outline-none text-[#6D1B1C] text-sm"
    />

    {/* Eye Button */}
    <button
      type="button"
      onClick={() => setShowPassword(!showPassword)}
      className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-500 hover:text-[#6D1B1C]"
    >
      {showPassword ? <FaEyeSlash /> : <FaEye />}
    </button>
  </div>
</div>

          {/* LOGIN BUTTON */}
          <button
            type="submit"
            className="w-full mt-4 px-6 py-3 rounded-lg bg-[#6D1B1C] hover:bg-[#5a1617] transition text-sm font-semibold text-white"
          >
            Sign In
          </button>
        </form>

        {/* DIVIDER */}
        <div className="flex items-center my-6">
          <div className="flex-1 h-px bg-gray-300"></div>
          <span className="px-3 text-gray-500 text-xs">OR</span>
          <div className="flex-1 h-px bg-gray-300"></div>
        </div>

        {/* SIGNUP LINK */}
        <Link href="/sign_up" className="block">
          <button className="w-full px-6 py-3 rounded-lg border border-[#6D1B1C]/40 hover:bg-[#6D1B1C]/10 transition text-sm text-[#6D1B1C]">
            Create an Account
          </button>
        </Link>
      </div>
    </div>
  );
}
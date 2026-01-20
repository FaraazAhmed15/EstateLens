"use client";

import { useState } from "react";
import Link from "next/link";
import { FaTimes, FaFileContract, FaHome } from "react-icons/fa";

export default function WelcomePopup() {
  const [isOpen, setIsOpen] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl shadow-xl w-[90%] md:w-[520px] p-8 relative">

        {/* close button*/}
        <button
          onClick={() => setIsOpen(false)}
          className="absolute top-4 right-4 text-[#6D1B1C] text-xl hover:text-black">
          <FaTimes />
        </button>

        {/* header */}
        <h2
          className="text-2xl font-bold text-[#6D1B1C] text-center mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Welcome to EstateLens
        </h2>

        {/* message*/}
        <p className="text-[#1F3A2E] text-center mb-6 leading-relaxed">
          Your trusted platform for discovering verified properties, market
          insights, and seamless owner connections.
        </p>

       {/* buttons */}
<div className="flex justify-center items-center w-full">

  <Link
    href="/rules-subscription"
    className="w-full sm:w-72 inline-flex items-center justify-center gap-1
               bg-[#6D1B1C] text-white px-8 py-3 rounded-xl 
               hover:bg-[#541516] transition-all duration-300 shadow-md"
  >
    <FaFileContract className="text-lg" />
    Check Rules & Subscription
  </Link>

</div>
      </div>
    </div>
  );
}
"use client";

import Link from "next/link";
import { FaTimes, FaCreditCard, FaCheckCircle } from "react-icons/fa";

export default function SubscribePopup({
  isOpen,
  onClose,
}: {
  isOpen: boolean;
  onClose: () => void;
}) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50">
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 max-w-md w-full shadow-xl">

        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#6D1B1C] hover:text-black"
        >
          <FaTimes size={18} />
        </button>

        {/* Title */}
        <h2 className="text-2xl font-bold text-[#6D1B1C] text-center mb-3">
          Almost There! 🚀
        </h2>

        <p className="text-[#1F3A2E] text-center mb-5">
          To view full property details, contact owners, and access listings,
          you need an active subscription.
        </p>

        {/* Benefits */}
        <div className="bg-white border border-[#B8A47C] rounded-lg p-5 mb-6">
          <h3 className="font-semibold text-[#6D1B1C] mb-2">
            What you get with Subscription:
          </h3>
          <ul className="text-[#1F3A2E] text-sm space-y-1">
            <li>✔ View complete property details</li>
            <li>✔ Message property owners</li>
            <li>✔ Request owner contact</li>
            <li>✔ Access rental & lease listings</li>
          </ul>
        </div>

        {/* Buttons */}
        <div className="flex flex-col gap-3">
          <Link
            href="/sign_up"
            className="w-full flex items-center justify-center gap-2 bg-[#6D1B1C] text-white py-3 rounded-md hover:bg-[#541516]">
            <FaCreditCard />
            Subscribe Now
          </Link>

          <button
            onClick={onClose}
            className="w-full flex items-center justify-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C] py-3 rounded-md hover:bg-[#F4E9D8]">
            <FaCheckCircle />
            Continue Browsing
          </button>
        </div>
      </div>
    </div>
  );
}
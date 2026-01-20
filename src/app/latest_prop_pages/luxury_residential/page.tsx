"use client";

import { useState } from "react";
import Link from "next/link";
import { 
  FaMapMarkerAlt, 
  FaRupeeSign, 
  FaBed, 
  FaRulerCombined, 
  FaCheckCircle, 
  FaCar, 
  FaShieldAlt, 
  FaPhoneAlt, 
  FaPaperPlane, 
  FaTrash, 
  FaArrowLeft, 
  FaHome 
} from "react-icons/fa";

export default function AffordableApartment() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* PROPERTY HEADER */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* LEFT: IMAGE */}
          <div>
            <img
              src="/images/luxury.jpeg"
              alt="Affordable Residential Apartment"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* RIGHT: DETAILS */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Affordable Residential Apartment
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Whitefield, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 95 Lakhs
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2"><FaBed /> 3 BHK Apartment</p>
              <p className="flex items-center gap-2"><FaRulerCombined /> 1650 sq.ft Built-up Area</p>
              <p className="flex items-center gap-2"><FaCheckCircle /> Ready to Move</p>
              <p className="flex items-center gap-2"><FaCar /> 1 Covered Car Parking</p>
              <p className="flex items-center gap-2"><FaShieldAlt /> Gated Community with Security</p>
            </div>

            <div className="mt-6 flex flex-wrap gap-4">

              {/* GO BACK */}
              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C] 
                           px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition"
              >
                <FaArrowLeft /> Go Back
              </button>

              {/* GO HOME */}
              <Link
                href="/"
                className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C] 
                           px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition"
              >
                <FaHome /> Go to Home
              </Link>

              {/* REQUEST OWNER NUMBER */}
              <button className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                <FaPhoneAlt /> Request Owner Number
              </button>

            </div>
          </div>
        </div>
      </div>

      {/* PROPERTY DESCRIPTION */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}
        >
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium yet affordable 3 BHK apartment in Whitefield offers a perfect 
          blend of comfort, modern design, and connectivity. Located in a prime 
          residential neighborhood, the apartment provides seamless access to IT parks, 
          international schools, multi-specialty hospitals, and major shopping hubs.
        </p>
      </div>

      {/* MESSAGE TO OWNER */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }}
        >
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="mt-4 flex gap-4">
          <button
            className="flex items-center gap-2 bg-[#6D1B1C] text-white px-8 py-2 rounded-md hover:bg-[#541516] transition"
          >
            <FaPaperPlane /> Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C] px-8 py-2 rounded-md hover:bg-[#F4E9D8] transition"
          >
            <FaTrash /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
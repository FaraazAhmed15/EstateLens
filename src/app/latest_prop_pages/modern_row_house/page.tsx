"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaBed,
  FaRulerCombined,
  FaCar,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaEraser,
  FaPhoneAlt,
  FaSwimmingPool,
  FaDumbbell,
  FaLeaf,
  FaWalking,
  FaBuilding,
  FaSchool,
  FaHospitalAlt,
} from "react-icons/fa";

export default function ModernRowHouse() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/modern_row_house.jpeg"
              alt="Modern Row House"
              className="w-full h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Modern Row House
            </h2>

            <p className="text-[#1F3A2E] mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> Bannerghatta Road, Bengaluru
            </p>

            <p className="text-2xl font-semibold text-[#6D1B1C] mb-4">
              ₹1.45 Crore
            </p>

            {/* KEY HIGHLIGHTS */}
            <div className="grid grid-cols-2 gap-4 text-[#1F3A2E] mb-6">
              <p className="flex items-center gap-2">
                <FaBed /> 3 BHK Row House
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 2100 sq.ft
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Gated Community
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 2 Covered Parking
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> Low-Rise Housing
              </p>
              <p className="flex items-center gap-2">
                <FaLeaf /> Landscaped Surroundings
              </p>
            </div>

            {/* buttons */}
            <div className="mt-6 space-y-4">
              <button className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                <FaPhoneAlt /> Request Owner Number
              </button>

              <div className="flex gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
                  <FaArrowLeft /> Go Back
                </button>

                <Link
                  href="/home-user-subscribed"
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition">
                  <FaHome /> Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This modern 3 BHK row house in Bannerghatta Road is designed for families
          seeking privacy, space, and community living. Located in a gated society,
          it offers a safe, peaceful, and well-connected environment with easy
          access to schools, hospitals, and IT hubs.
        </p>
      </div>

      {/* specifications */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p><strong>Property Type:</strong> Row House</p>
          <p><strong>Configuration:</strong> 3 BHK</p>
          <p><strong>Built-up Area:</strong> 2100 sq.ft</p>
          <p><strong>Community:</strong> Gated Society</p>
          <p><strong>Possession:</strong> Ready to Move</p>
          <p><strong>Parking:</strong> 2 Covered</p>
          <p><strong>Floors:</strong> G+1</p>
          <p><strong>Security:</strong> 24/7 Guarded Entry</p>
        </div>
      </div>

      {/* amenities*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Community Amenities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaSwimmingPool /> Swimming Pool</p>
          <p className="flex items-center gap-2"><FaDumbbell /> Gym</p>
          <p className="flex items-center gap-2"><FaWalking /> Walking Track</p>
          <p className="flex items-center gap-2"><FaLeaf /> Landscaped Park</p>
          <p className="flex items-center gap-2"><FaShieldAlt /> CCTV Surveillance</p>
          <p className="flex items-center gap-2"><FaBuilding /> Clubhouse</p>
        </div>
      </div>

      {/* nearby connectivity */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Nearby Facilities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaSchool /> Top Schools Nearby</p>
          <p className="flex items-center gap-2"><FaHospitalAlt /> Hospitals within 3 km</p>
          <p>Bannerghatta Main Road – 1.5 km</p>
          <p>Shopping & Malls – 2 km</p>
        </div>
      </div>

      {/* questionig part */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Why Choose This Row House?
        </h3>

        <ul className="list-disc pl-5 text-[#1F3A2E] space-y-2">
          <li>Spacious independent living</li>
          <li>Secure gated community</li>
          <li>Family-friendly environment</li>
          <li>Low traffic & peaceful locality</li>
          <li>Excellent resale value</li>
        </ul>
      </div>

      {/* message to owner section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>

        <div className="flex gap-4 mt-4">
          <button
            className="flex items-center gap-2 bg-[#6D1B1C] text-white px-8 py-2 rounded-md hover:bg-[#541516] transition">
            <FaPaperPlane /> Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                       px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
            <FaEraser /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
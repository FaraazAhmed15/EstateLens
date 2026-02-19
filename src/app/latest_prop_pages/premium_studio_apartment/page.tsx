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
  FaWifi,
  FaDumbbell,
  FaWater,
  FaShoppingBag,
  FaTrain,
  FaCoffee,
  FaUserFriends,
} from "react-icons/fa";

export default function PremiumStudioApartment() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/premium_studio_apartment.jpeg"
              alt="Premium Studio Apartment"
              className="w-full h-[350px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Premium Studio Apartment
            </h2>

            <p className="text-[#1F3A2E] mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> Indiranagar, Bengaluru
            </p>

            <p className="text-2xl font-semibold text-[#6D1B1C] mb-4">
              ₹55 Lakhs
            </p>

            {/* highlights*/}
            <div className="grid grid-cols-2 gap-4 text-[#1F3A2E] mb-6">
              <p className="flex items-center gap-2">
                <FaBed /> 1 BHK (Studio Style)
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 650 sq.ft
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> 24/7 Security
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 1 Covered Parking
              </p>
              <p className="flex items-center gap-2">
                <FaWifi /> High-Speed Internet Ready
              </p>
              <p className="flex items-center gap-2">
                <FaCoffee /> Bachelor Friendly
              </p>
            </div>

            {/* Abuttons */}
            <div className="mt-6 space-y-4">
              <button className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                <FaPhoneAlt /> Request Owner Number
              </button>

              <div className="flex gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition"
                >
                  <FaArrowLeft /> Go Back
                </button>

                <Link
                  href="/home-user-subscribed"
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition"
                >
                  <FaHome /> Home
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* overview part */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium studio apartment in Indiranagar is ideal for young
          professionals, IT employees, and bachelors looking for a modern,
          hassle-free living space. The apartment is fully furnished, well
          ventilated, and located in one of Bengaluru’s most vibrant and
          well-connected neighborhoods.
        </p>
      </div>

      {/* specifications */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p><strong>Property Type:</strong> Studio Apartment</p>
          <p><strong>Configuration:</strong> 1 BHK</p>
          <p><strong>Built-up Area:</strong> 650 sq.ft</p>
          <p><strong>Furnishing:</strong> Fully Furnished</p>
          <p><strong>Possession:</strong> Ready to Move</p>
          <p><strong>Parking:</strong> 1 Covered</p>
          <p><strong>Suitable For:</strong> Bachelors & Working Professionals</p>
          <p><strong>Building Type:</strong> Gated Community</p>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Amenities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaWifi /> High-Speed Internet</p>
          <p className="flex items-center gap-2"><FaDumbbell /> Gym</p>
          <p className="flex items-center gap-2"><FaWater /> Swimming Pool</p>
          <p className="flex items-center gap-2"><FaShieldAlt /> 24/7 Security</p>
          <p className="flex items-center gap-2"><FaCoffee /> Cafeteria Nearby</p>
          <p className="flex items-center gap-2"><FaUserFriends /> Bachelor Friendly</p>
        </div>
      </div>

      {/* landmarks */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Nearby Landmarks
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaShoppingBag /> 100 ft Road – 1 km</p>
          <p className="flex items-center gap-2"><FaTrain /> Metro Station – 2 km</p>
          <p className="flex items-center gap-2"><FaShoppingBag /> Indiranagar High Street – 1.5 km</p>
        </div>
      </div>

      {/* questioning part */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Why This Apartment is Ideal for Bachelors?
        </h3>

        <ul className="list-disc pl-5 text-[#1F3A2E] space-y-2">
          <li>Fully furnished — move in immediately</li>
          <li>Close to IT hubs, cafes, and nightlife</li>
          <li>Safe gated community with CCTV</li>
          <li>Low maintenance living</li>
          <li>Great resale value in Indiranagar</li>
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
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="flex gap-4 mt-4">
          <button
            className="flex items-center gap-2 bg-[#6D1B1C] text-white px-8 py-2 rounded-md hover:bg-[#541516] transition"
          >
            <FaPaperPlane /> Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                       px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition"
          >
            <FaEraser /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRulerCombined,
  FaCar,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaEraser,
  FaPhoneAlt,
  FaBuilding,
  FaWifi,
  FaDumbbell,
  FaCoffee,
  FaTree,
  FaTrain,
  FaShoppingBag,
  FaHospital,
} from "react-icons/fa";

export default function CommercialOfficeSpace() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/home_card2.jpeg"
              alt="Commercial Office Space Whitefield"
              className="w-full h-[360px] object-cover rounded-xl shadow-md"/>
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Premium Office Space – IT Park, Whitefield
            </h2>

            <p className="text-[#1F3A2E] mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> Whitefield, Bengaluru
            </p>

            <p className="text-2xl font-semibold text-[#6D1B1C] mb-4">
              ₹9.4 Crore
            </p>

            {/* highlights */}
            <div className="grid grid-cols-2 gap-4 text-[#1F3A2E] mb-6">
              <p className="flex items-center gap-2">
                <FaBuilding /> Grade A IT Park
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 2,000 sq.ft Built-up
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 2 Reserved Parking
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> 24/7 Security
              </p>
              <p className="flex items-center gap-2">
                <FaWifi /> High-Speed Internet Ready
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

      {/* specifications */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p><strong>Property Type:</strong> Commercial Office Space</p>
          <p><strong>Configuration:</strong> Open Floor Plan</p>
          <p><strong>Built-up Area:</strong> 2,000 sq.ft</p>
          <p><strong>Possession:</strong> Ready to Move</p>
          <p><strong>Furnishing:</strong> Fully Furnished</p>
          <p><strong>Parking:</strong> 2 Reserved</p>
          <p><strong>Facing:</strong> East</p>
          <p><strong>Floor:</strong> 5th Floor</p>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Amenities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaWifi /> High-Speed Internet</p>
          <p className="flex items-center gap-2"><FaShieldAlt /> 24/7 Security</p>
          <p className="flex items-center gap-2"><FaCar /> Dedicated Parking</p>
          <p className="flex items-center gap-2"><FaDumbbell /> Gym Access</p>
          <p className="flex items-center gap-2"><FaCoffee /> Cafeteria</p>
          <p className="flex items-center gap-2"><FaTree /> Green Courtyard</p>
        </div>
      </div>

      {/* landmarks */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Nearby Landmarks
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaHospital /> Columbia Asia Hospital – 2 km</p>
          <p className="flex items-center gap-2"><FaShoppingBag /> Phoenix Marketcity – 3 km</p>
          <p className="flex items-center gap-2"><FaTrain /> Whitefield Metro – 4 km</p>
        </div>
      </div>

      {/* questioning part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Why Invest in This Office Space?
        </h3>

        <ul className="list-disc pl-5 text-[#1F3A2E] space-y-2">
          <li>Located in Bengaluru’s prime IT hub – Whitefield</li>
          <li>Ready-to-move, fully furnished office space</li>
          <li>Excellent connectivity to metro and highways</li>
          <li>Surrounded by top IT companies and business parks</li>
          <li>High rental yield potential</li>
        </ul>
      </div>

      {/* message to owner section*/}
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
                       px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition">
            <FaEraser /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
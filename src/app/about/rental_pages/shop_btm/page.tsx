"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaTrash,
  FaBuilding,
  FaParking,
  FaClock,
  FaShieldAlt,
  FaStore,
  FaRoad,
  FaUsers,
  FaShoppingCart,
} from "react-icons/fa";

export default function RetailShopBTM() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">


      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image*/}
          <div>
            <img
              src="/images/btm_shop.jpeg"
              alt="Retail Shop BTM Layout"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* right side */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Retail Shop for Rent
            </h2>

            <p className="flex items-center gap-2 text-[#1F3A2E] mb-1">
              <FaMapMarkerAlt /> BTM Layout, Bengaluru — High Footfall Area
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4">
              ₹35,000 / month
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaStore /> Ground Floor Retail Shop
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> Prime Commercial Building
              </p>
              <p className="flex items-center gap-2">
                <FaUsers /> High Customer Visibility
              </p>
              <p className="flex items-center gap-2">
                <FaParking /> Limited Parking Available
              </p>
            </div>
            <div className="flex mt-4 gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition">
                  <FaArrowLeft /> Go Back
                </button>

                <Link
                  href="/home-user-subscribed"
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition">
                  <FaHome /> Home
                </Link>
              </div>

            <div className="mt-6">
              <button className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                Request Owner Number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          About This Retail Space
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This well-located retail shop in BTM Layout is situated in a
          high-footfall commercial stretch, making it ideal for businesses that
          rely on walk-in customers. The shop offers excellent visibility,
          easy accessibility, and proximity to residential complexes, offices,
          restaurants, and shopping centers.
        </p>
      </div>

      {/* question part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Why This Location is Good for Business
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li>One of Bengaluru’s busiest commercial and residential hubs</li>
          <li>Constant foot traffic from students, professionals, and families</li>
          <li>Close to major restaurants, cafes, and shopping streets</li>
          <li>Well-connected to main roads and public transport</li>
          <li>Ideal for retail, boutique, pharmacy, or service business</li>
        </ul>
      </div>

      {/* nearby places */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Nearby Landmarks & Connectivity
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li>BTM 2nd Stage — 300 meters</li>
          <li>Central Silk Board — 2 km</li>
          <li>Metro Station — 1.5 km</li>
          <li>Multiple schools, hospitals, and banks nearby</li>
          <li className="flex items-center gap-2">
            <FaRoad /> Well-connected to Outer Ring Road (ORR)
          </li>
        </ul>
      </div>

      {/* pricing*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Pricing & Lease Terms
        </h3>

        <div className="space-y-2 text-[#1F3A2E]">
          <p className="flex items-center gap-2">
            <FaRupeeSign /> ₹35,000 per month
          </p>
          <p className="flex items-center gap-2">
            <FaShieldAlt /> Security Deposit: 6 Months Rent
          </p>
          <p className="flex items-center gap-2">
            <FaClock /> Minimum Lease: 11 Months
          </p>
          <p>Electricity & maintenance extra as per usage</p>
        </div>
      </div>

      {/* rules and regulations */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Rules & Regulations
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li>No illegal business activities allowed</li>
          <li>No loud music disturbing neighbors</li>
          <li>Shop should maintain cleanliness</li>
          <li>Any structural changes require owner approval</li>
          <li>Lease agreement mandatory</li>
        </ul>
      </div>

      {/* message */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message (business type, visit time, lease duration)..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)} />

        <div className="mt-4 flex gap-4">
          <button
            className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
            <FaPaperPlane /> Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-gray-300 text-[#1F3A2E] px-6 py-2 rounded-md hover:bg-gray-400 transition" >
            <FaTrash /> Clear
          </button>
        </div>
      </div>

    </section>
  );
}
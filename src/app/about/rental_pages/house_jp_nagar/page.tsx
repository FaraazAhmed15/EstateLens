"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaHome,
  FaRupeeSign,
  FaBed,
  FaRulerCombined,
  FaCalendarAlt,
  FaUserFriends,
  FaShieldAlt,
  FaCar,
  FaArrowLeft,
  FaHouseUser,
  FaTrash,
  FaPaperPlane,
} from "react-icons/fa";

export default function IndependentHouseLease() {
  const [message, setMessage] = useState("");

  const clearMessage = () => {
    setMessage("");
  };

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

     

      {/* header*/}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image*/}
          <div>
            <img
              src="/images/independent.jpeg"
              alt="Independent House on Lease"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* right side */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }} >
              Independent House on Lease
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> JP Nagar, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 23 Lakhs (Lease)
            </p>

            <div className="grid grid-cols-2 gap-3 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaBed /> 3 BHK Independent House
              </p>
              <p className="flex items-center gap-2">
                <FaCalendarAlt /> Lease Tenure: 3 Years
              </p>
              <p className="flex items-center gap-2">
                <FaUserFriends /> Suitable for Families
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Secure Neighborhood
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> Dedicated Parking
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
                  href="/"
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
                  <FaHome /> Home
                </Link>
              </div>

            <div className="mt-6 flex gap-4">
              <button className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                Request Owner Number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed mb-4">
          This spacious <strong>3 BHK independent house</strong> in <strong>JP Nagar, Bengaluru</strong>
          is available on a <strong>long-term lease for 3 years</strong>. Located in a prime
          residential area, it offers privacy, security, and excellent
          connectivity to schools, hospitals, metro stations, and shopping hubs.
        </p>

        <p className="text-[#1F3A2E] leading-relaxed">
          The house is ideal for families looking for a comfortable, standalone
          home with ample space, parking, and a peaceful neighborhood.
        </p>
      </div>

      {/* terms and condition part*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Lease Terms & Rules
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li>Lease period: <strong>3 years (non-negotiable)</strong></li>
          <li>Lease amount: <strong>₹23,00,000 (one-time payment)</strong></li>
          <li>Maintenance to be paid by tenant</li>
          <li>No structural modifications allowed</li>
          <li>Pets allowed with owner approval</li>
          <li>House to be returned in original condition</li>
        </ul>
      </div>
      {/* amenities */}
<div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
  <h3
    className="text-2xl font-bold text-[#6D1B1C] mb-4"
    style={{ fontFamily: "'Sanchez', serif" }}>
    Amenities & Facilities
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
    <p>✔ 24/7 Water Supply</p>
    <p>✔ Power Backup</p>
    <p>✔ Secure Gated Entry</p>
    <p>✔ Dedicated Car Parking</p>
    <p>✔ Spacious Living & Dining Area</p>
    <p>✔ Well-ventilated Rooms</p>
    <p>✔ Peaceful Residential Locality</p>
    <p>✔ Easy Access to Main Road</p>
  </div>
</div>

      {/* message */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)} />

        <div className="mt-4 flex gap-4">
          <button
            className="bg-[#6D1B1C] text-white px-8 py-2 rounded-md hover:bg-[#541516] transition flex items-center gap-2">
            <FaPaperPlane /> Send Message
          </button>

          <button
            onClick={clearMessage}
            className="bg-gray-300 text-[#1F3A2E] px-8 py-2 rounded-md hover:bg-gray-400 transition flex items-center gap-2">
            <FaTrash /> Clear
          </button>
        </div>
      </div>

    </section>
  );
}
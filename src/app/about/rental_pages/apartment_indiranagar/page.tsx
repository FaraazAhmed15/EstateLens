"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaBed,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaCar,
  FaShieldAlt,
  FaRegCommentDots,
  FaArrowLeft,
  FaHome,
  FaTrash,
  FaPhoneAlt,
} from "react-icons/fa";

export default function TwoBhkRentalIndiranagar() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      

      {/*the header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image in the left*/}
          <div>
            <img
              src="/images/rent.jpeg"
              alt="2 BHK Apartment for Rent"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* detail on right */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              2 BHK Apartment for Rent
            </h2>

            <p className="flex items-center gap-2 text-[#1F3A2E] mb-1">
              <FaMapMarkerAlt /> Indiranagar, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 35,000 / month
            </p>

            <div className="grid grid-cols-2 gap-3 text-[#1F3A2E]">
              <p className="flex items-center gap-2"><FaBed /> 2 BHK Apartment</p>
              <p className="flex items-center gap-2"><FaBuilding /> Semi-Furnished</p>
              <p className="flex items-center gap-2"><FaCar /> 1 Covered Parking</p>
              <p className="flex items-center gap-2"><FaUsers /> Family Preferred</p>
              <p className="flex items-center gap-2"><FaShieldAlt /> 24/7 Security</p>
            </div>
             <div className="flex mt-4 gap-4">
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

            <div className="mt-6 flex gap-4">
              <button className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                <FaPhoneAlt /> Request Owner Number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This spacious 2 BHK apartment in Indiranagar offers a comfortable and
          convenient lifestyle for families. Located near metro stations, IT hubs,
          schools, hospitals, restaurants, and shopping centers, this home ensures
          excellent connectivity and quality living.
        </p>
      </div>

      {/* family and occupancy*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">Family Preference</h3>

        <ul className="text-[#1F3A2E] list-disc pl-5 space-y-2">
          <li>Ideal for families of up to 4 members</li>
          <li>Working professionals preferred</li>
          <li>Children allowed</li>
        </ul>
      </div>

      {/* rent and deposit section*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">Rent & Deposit</h3>

        <ul className="text-[#1F3A2E] list-disc pl-5 space-y-2">
          <li>Monthly Rent: ₹35,000</li>
          <li>Security Deposit: 10 months’ rent</li>
          <li>Maintenance charges extra</li>
        </ul>
      </div>

      {/* rules and regulations part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">Rules & Regulations</h3>

        <ul className="text-[#1F3A2E] list-disc pl-5 space-y-2">
          <li>No pets allowed</li>
          <li>No subletting</li>
          <li>Strict society rules</li>
          <li>Electricity & water charges extra</li>
        </ul>
      </div>

      {/* message to owner */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 flex items-center gap-2">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>

        <div className="mt-4 flex gap-4">
          <button className="bg-[#6D1B1C] text-white px-8 py-2 rounded-md hover:bg-[#541516] transition">
            Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-gray-300 text-[#1F3A2E] px-6 py-2 rounded-md hover:bg-gray-400 transition">
            <FaTrash /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
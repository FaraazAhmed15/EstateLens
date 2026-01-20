"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaChair,
  FaWifi,
  FaCoffee,
  FaUsers,
  FaBuilding,
  FaParking,
  FaClock,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaTrash,
  FaLaptop,
  FaRoute,
  FaSubway,
} from "react-icons/fa";

export default function CoworkingSpaceMGRoad() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

    

      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image*/}
          <div>
            <img
              src="/images/cowork.jpeg"
              alt="Co-working Space MG Road"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* right side*/}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Premium Co-Working Space
            </h2>

            <p className="flex items-center gap-2 text-[#1F3A2E] mb-1">
              <FaMapMarkerAlt /> MG Road, Bengaluru (Central Business District)
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4">
              ₹9,000 / seat / month
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaChair /> Fully Furnished Workstations
              </p>
              <p className="flex items-center gap-2">
                <FaWifi /> High-Speed Enterprise Internet
              </p>
              <p className="flex items-center gap-2">
                <FaUsers /> Startup & Freelancer Friendly
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> Modern Glass-Facade Building
              </p>
              <p className="flex items-center gap-2">
                <FaCoffee /> Pantry & Coffee Lounge
              </p>
              <p className="flex items-center gap-2">
                <FaParking /> Paid Parking Available
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
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition">
                  <FaHome /> Home
                </Link>
              </div>

            <div className="mt-6">
              <button className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                Request Owner / Manager Number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* about */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }} >
          About This Co-Working Space
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          Located in the heart of Bengaluru’s business hub on MG Road, this
          premium co-working space is designed for startups, freelancers,
          consultants, and small teams. The workspace offers a professional
          environment with modern interiors, ergonomic seating, high-speed
          internet, and a collaborative community.
        </p>
      </div>

      {/* facilities section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Facilities & Amenities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
          <p>✔ Ergonomic Workstations</p>
          <p>✔ High-Speed Fiber Internet</p>
          <p>✔ 24/7 Access (for premium plans)</p>
          <p>✔ Air-Conditioned Office</p>
          <p>✔ Conference & Meeting Rooms</p>
          <p>✔ Private Cabins Available</p>
          <p>✔ Pantry with Free Coffee</p>
          <p>✔ Power Backup</p>
        </div>
      </div>

      {/* best case*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Ideal For
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li>Startups & Entrepreneurs</li>
          <li>Freelancers & Digital Nomads</li>
          <li>Remote Employees</li>
          <li>Small Teams (2–10 members)</li>
          <li>Consultants & Creatives</li>
        </ul>
      </div>

      {/* connectivity*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Nearby Connectivity & Landmarks
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li className="flex items-center gap-2">
            <FaSubway /> MG Road Metro Station — 500 meters
          </li>
          <li>Brigade Road — 700 meters</li>
          <li>UB City — 1.2 km</li>
          <li>Garuda Mall — 1.5 km</li>
          <li className="flex items-center gap-2">
            <FaRoute /> Easy access to Airport Road & CBD
          </li>
        </ul>
      </div>

      {/* terms and pricing*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Pricing & Terms
        </h3>

        <div className="space-y-2 text-[#1F3A2E]">
          <p className="flex items-center gap-2">
            <FaRupeeSign /> ₹9,000 per seat per month
          </p>
          <p className="flex items-center gap-2">
            <FaShieldAlt /> Security Deposit: 1 Month Rent
          </p>
          <p className="flex items-center gap-2">
            <FaClock /> Minimum Tenure: 3 Months
          </p>
          <p>Flexible monthly billing available</p>
        </div>
      </div>

      {/* message  */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Message to Workspace Manager
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message (e.g., number of seats required, tenure, visit time)..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>

        <div className="mt-4 flex gap-4">
          <button
            className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition"
          >
            <FaPaperPlane /> Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-gray-300 text-[#1F3A2E] px-6 py-2 rounded-md hover:bg-gray-400 transition"
          >
            <FaTrash /> Clear
          </button>
        </div>
      </div>

    </section>
  );
}
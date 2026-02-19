"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaRulerCombined,
  FaChartLine,
  FaRoad,
  FaTrain,
  FaFileSignature,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaTruck,
  FaPaperPlane,
  FaEraser
} from "react-icons/fa";

export default function InvestmentPlot() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      

      {/* header*/}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/commercial_plot.jpeg"
              alt="Investment Plot North Bengaluru"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm" />
          </div>

          {/* right content */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }} >
              Investment Plot — North Bengaluru
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> North Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 1.1 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 2400 sq.ft (Approx.)
              </p>
              <p className="flex items-center gap-2">
                <FaChartLine /> High Growth Zone
              </p>
              <p className="flex items-center gap-2">
                <FaFileSignature /> BDA / BBMP Approved (Clear Title)
              </p>
              <p className="flex items-center gap-2">
                <FaRoad /> 40 ft Wide Approach Road
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Secure Gated Layout
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
          style={{ fontFamily: "'Sanchez', serif" }}>
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium investment plot in North Bengaluru is strategically located
          in one of the fastest-growing real estate corridors of the city. With
          major infrastructure projects underway, this region is witnessing rapid
          appreciation in land value.
        </p>

        <p className="text-[#1F3A2E] leading-relaxed mt-4">
          The plot is ideal for investors looking for long-term capital growth, as
          North Bengaluru is emerging as a major residential, commercial, and
          industrial hub.
        </p>
      </div>

      {/* Wquestioning part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-6"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Why This Plot is a Smart Investment
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <li className="flex items-start gap-3">
            <FaChartLine className="text-[#6D1B1C] mt-1" />
            <span>Located in a high-growth zone with rising property values</span>
          </li>

          <li className="flex items-start gap-3">
            <FaRoad className="text-[#6D1B1C] mt-1" />
            <span>Excellent road connectivity to airport and city center</span>
          </li>

          <li className="flex items-start gap-3">
            <FaTrain className="text-[#6D1B1C] mt-1" />
            <span>Close to upcoming Metro and rail connectivity</span>
          </li>

          <li className="flex items-start gap-3">
            <FaFileSignature className="text-[#6D1B1C] mt-1" />
            <span>Clear title with government approvals</span>
          </li>
        </ul>
      </div>

      {/* nearby infratructure */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Nearby Infrastructure
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
          <li>✔ Kempegowda International Airport — 20 mins</li>
          <li>✔ KIADB Industrial Area — 10 mins</li>
          <li>✔ Tech Parks & IT Corridors — 15 mins</li>
          <li>✔ International Schools & Hospitals — 12 mins</li>
        </ul>
      </div>

      {/* message*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner "
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
                           className="bg-gray-300 flex items-center gap-2  border border-[#B8A47C] text-[#6D1B1C] px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition">
                           <FaEraser /> Clear Message
                         </button>
                       </div>
      </div>

    </section>
  );
}
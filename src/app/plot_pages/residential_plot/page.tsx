"use client";

import { useState } from "react";
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaRulerCombined,
  FaCheckCircle,
  FaCar,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaEraser
} from "react-icons/fa";

export default function AffordableResidentialPlot() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      

      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image*/}
          <div>
            <img
              src="/images/plot.jpeg"
              alt="Affordable Residential Plot"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* right side */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Affordable Residential Plot
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Devanahalli, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 38 Lakhs
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 1200 sq.ft Plot
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle /> Ready for Construction
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> BDA Approved Layout (Govt. of Karnataka)
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> Clear Title & Encumbrance
              </p>
            </div>
                <div className="flex mt-4 gap-4">
                <button
                  onClick={() => window.history.back()}
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
                  <FaArrowLeft /> Go Back
                </button>

                <Link
                  href="/"
                  className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
                  <FaHome /> Home
                </Link>
              </div>

            <div className="mt-6">
              <button className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition flex items-center gap-2">
                <FaRupeeSign /> Request Owner Number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* overview */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This 1200 sq.ft residential plot in Devanahalli is part of a planned and
          government-approved BDA layout under the Karnataka Urban Development
          Authority. The plot is ideal for constructing an independent house and
          offers excellent long-term appreciation due to proximity to the airport,
          industrial corridors, and upcoming infrastructure projects.
        </p>
      </div>

      {/* location and connectivity*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Location & Connectivity
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[#1F3A2E]">
          <li>15–20 mins to Kempegowda International Airport</li>
          <li>Close to Aerospace Park & IT SEZs</li>
          <li>Upcoming Metro Extension Nearby</li>
          <li>Well-connected to NH-44 (Bengaluru–Hyderabad Highway)</li>
        </ul>
      </div>

      {/* landmarks */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Nearby Landmarks 
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-5">
            <p className="font-semibold text-[#6D1B1C]">
              Kempegowda International Airport
            </p>
            <p className="text-sm mt-1">~ 15–20 mins drive</p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-5">
            <p className="font-semibold text-[#6D1B1C]">
              Devanahalli Town
            </p>
            <p className="text-sm mt-1">~ 10–15 mins drive</p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-5">
            <p className="font-semibold text-[#6D1B1C]">
              Hospitals & Clinics
            </p>
            <p className="text-sm mt-1">~ 10–20 mins</p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-5">
            <p className="font-semibold text-[#6D1B1C]">
              Schools & Colleges
            </p>
            <p className="text-sm mt-1">~ 15-25 mins</p>
          </div>
        </div>
      </div>

      {/* documents */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Documents Checklist
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <ul className="space-y-2 list-disc pl-5">
            <li>Mother Deed / Title Deed</li>
            <li>Latest Encumbrance Certificate (EC)</li>
            <li>Khata / RTC (as applicable)</li>
            <li>Sale Deed + Previous Chain Documents</li>
          </ul>

          <ul className="space-y-2 list-disc pl-5">
            <li>BDA Layout Approval Copy</li>
            <li>Tax Paid Receipts</li>
            <li>Mutation / Transfer Records</li>
            <li>Conversion Order (if applicable)</li>
          </ul>
        </div>
      </div>

      {/* ideal case */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Ideal For
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6">
            <p className="font-semibold text-[#6D1B1C] mb-1">
              Home Builders
            </p>
            <p className="text-sm text-[#1F3A2E]">
              Build your dream independent home.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6">
            <p className="font-semibold text-[#6D1B1C] mb-1">
              Long-term Investors
            </p>
            <p className="text-sm text-[#1F3A2E]">
              High appreciation corridor near airport.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6">
            <p className="font-semibold text-[#6D1B1C] mb-1">
              Future Expansion
            </p>
            <p className="text-sm text-[#1F3A2E]">
              Suitable for phased construction.
            </p>
          </div>
        </div>
      </div>

      {/* message*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Hi, I'm interested in this plot in Devanahalli. Please share approval details and exact dimensions."
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
                   className="bg-gray-300 flex items-center gap-2  border border-[#B8A47C] text-[#6D1B1C]
                              px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition">
                   <FaEraser /> Clear Message
                 </button>
               </div>
      </div>

    </section>
  );
}
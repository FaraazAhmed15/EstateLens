"use client";

import { useState } from "react";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaWarehouse,
  FaTruck,
  FaParking,
  FaRobot,
  FaShieldAlt,
  FaCogs,
  FaArrowLeft,
  FaHome,
  FaCloud,
  FaIndustry,
  FaDoorOpen,
  FaBolt,
  FaWifi,
} from "react-icons/fa";
import Link from "next/link";

export default function WarehouseAndIndustrial() {
  const [message, setMessage] = useState("");

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

     

      {/* intro*/}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/warehouse.jpeg"
              alt="AI Powered Warehouse"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* details */}
          <div>
            <h2 className="text-3xl font-bold text-[#6D1B1C] mb-2">
              AI-Enabled Smart Warehouse & Industrial Unit
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Nelamangala, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> ₹6.5 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p>🏭 40,000 sq.ft Built-Up Warehouse</p>
              <p>🚛 Dedicated Truck Parking Zone</p>
              <p>🤖 AI-Based Inventory & Robotics</p>
              <p>🔐 24/7 Security + CCTV + Access Control</p>
              <p>⚡ 3-Phase Power with DG Backup</p>
              <p>🌐 High-Speed Industrial Internet</p>
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
              <button className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516] transition">
                Request Owner Number
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Warehouse Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This state-of-the-art smart warehouse is designed for large-scale logistics,
          e-commerce, manufacturing, and supply chain operations. Equipped with AI-driven
          automation, robotic picking systems, and real-time inventory tracking, this facility
          ensures maximum efficiency, reduced operational cost, and seamless movement of goods.
        </p>
      </div>

      {/* automation section v.imp  */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6 text-center">
          AI & Automation Features
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaRobot className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Robotic Picking</h4>
            <p className="text-sm text-[#1F3A2E]">
              AI-powered robotic arms for automated sorting and packing
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaCloud className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Cloud Inventory</h4>
            <p className="text-sm text-[#1F3A2E]">
              Real-time stock monitoring via cloud dashboards
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaCogs className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Smart Conveyor</h4>
            <p className="text-sm text-[#1F3A2E]">
              Automated conveyor belt for fast material movement
            </p>
          </div>

        </div>
      </div>

      {/* truck parking facility section */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6 text-center">
          Dedicated Truck & Logistics Parking
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaTruck className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">50+ Truck Bays</h4>
            <p className="text-sm text-[#1F3A2E]">
              Large loading & unloading docks
            </p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaParking className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Secure Parking</h4>
            <p className="text-sm text-[#1F3A2E]">
              CCTV monitored truck parking
            </p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaDoorOpen className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Easy Entry/Exit</h4>
            <p className="text-sm text-[#1F3A2E]">
              Wide gates for heavy vehicles
            </p>
          </div>

        </div>
      </div>

      {/* pwer and infra */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6 text-center">
          Power, Connectivity & Safety
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaBolt className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">24/7 Power Backup</h4>
            <p className="text-sm text-[#1F3A2E]">
              Diesel generator + UPS system
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaWifi className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">High-Speed Internet</h4>
            <p className="text-sm text-[#1F3A2E]">
              Enterprise-grade connectivity
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaShieldAlt className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Security Systems</h4>
            <p className="text-sm text-[#1F3A2E]">
              Biometric + CCTV surveillance
            </p>
          </div>

        </div>
      </div>

      {/*  capacity */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Space & Storage Capacity
        </h3>

        <ul className="space-y-3 text-[#1F3A2E]">
          <li>• 40,000 sq.ft covered warehouse space</li>
          <li>• 25 feet ceiling height for stacking</li>
          <li>• 10,000 pallet storage capacity</li>
          <li>• Temperature-controlled storage available</li>
          <li>• Separate loading/unloading bays</li>
        </ul>
      </div>

      {/* question part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Why Choose This Warehouse?
        </h3>

        <ul className="space-y-3 text-[#1F3A2E]">
          <li>• Prime logistics location near highways</li>
          <li>• AI-powered automation reduces costs</li>
          <li>• Large truck-friendly access roads</li>
          <li>• Secure & compliant facility</li>
          <li>• Ideal for e-commerce & manufacturing</li>
        </ul>
      </div>

      {/* message to owner section */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
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
          <button className="bg-[#6D1B1C] text-white px-8 py-2 rounded-md hover:bg-[#541516] transition">
            Send Message
          </button>

          <button
            onClick={() => setMessage("")}>
            Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
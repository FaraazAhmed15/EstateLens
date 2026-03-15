"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session"; 
import { 
  FaMapMarkerAlt, FaRupeeSign, FaUsers, FaWifi, FaCoffee, 
  FaParking, FaArrowLeft, FaHome, FaCogs, FaShieldAlt, 
  FaCloud, FaTv, FaDoorOpen, FaBuilding 
} from "react-icons/fa";
import Link from "next/link";

export default function CoWorkingSpace() {
  const [message, setMessage] = useState("");
  const pathname = usePathname(); 
const [userName, setUserName] = useState<string | null>(null);
const [ownerNumber, setOwnerNumber] = useState(null);

 useEffect(() => {
  const currentSession = getSession(); // getSession returns { name, role } | null
  setUserName(currentSession?.name || null); // store only the name
}, []);



  // ADD → get owner number from database
  const handleRequestNumber = async () => {

    if (!userName) {
      alert("Please login to get owner number.");
      return;
    }

    const res = await fetch("/api/owner/getOwnerNumber", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        page_path: pathname, // matches SQL page_path
      }),
    });

    const data = await res.json();

    if (res.ok) {
      setOwnerNumber(data.number); // number from SQL
    } else {
      alert(data.message);
    }
  };



  // ADD → send message to database
  const handleSendMessage = async () => {

    if (!userName) {
      alert("Please login to send message.");
      return;
    }

    if (!message.trim()) {
      alert("Message cannot be empty");
      return;
    }

    const res = await fetch("/api/owner/sendMessage", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        message,
        page_path: pathname,
        userName,
      }),
    });

    const data = await res.json();

    if (res.ok) {
      alert("Message sent successfully!");
      setMessage("");
    } else {
      alert(data.message);
    }
  };




  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

     

      {/* header */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/coworking.jpeg"
              alt="Premium Co-Working Space"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* details */}
          <div>
            <h2 className="text-3xl font-bold text-[#6D1B1C] mb-2">
              Premium AI-Enabled Co-Working Space
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Indiranagar, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> ₹25,000 / month per desk
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p>🏢 Modern Shared & Private Workspaces</p>
              <p>📐 5,000 sq.ft Smart Office</p>
              <p>✔ Flexible Membership Plans</p>
              <p>🚗 AI Smart Parking System</p>
              <p>🌐 1 Gbps High-Speed Internet + UPS Backup</p>
              <p>🔐 24/7 Security & CCTV Monitoring</p>
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
              <button
                onClick={handleRequestNumber} // ADD
                disabled={!userName} // ADD
                className={`px-6 py-2 rounded-md
                ${userName
                  ? "bg-[#6D1B1C] text-white"
                  : "bg-gray-300 cursor-not-allowed"
                }`}
              >

                {/* show number after fetching */}
                {ownerNumber ? ownerNumber : "Request Owner Number"}

              </button>
            </div>
          </div>
        </div>
      </div>

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Space Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium co-working space in Indiranagar is designed for startups, 
          freelancers, remote teams, and growing businesses. The office integrates 
          smart technology, AI-driven infrastructure, ergonomic furniture, and 
          collaborative zones to maximize productivity and comfort.
        </p>
      </div>

      {/* smart parking section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6 text-center">
          AI Smart Parking System
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaParking className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Automated Parking</h4>
            <p className="text-sm text-[#1F3A2E]">
              Sensor-based parking allocation
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaCogs className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">AI Slot Detection</h4>
            <p className="text-sm text-[#1F3A2E]">
              Real-time slot availability tracking
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaShieldAlt className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Secure Access</h4>
            <p className="text-sm text-[#1F3A2E]">
              RFID & QR-based entry system
            </p>
          </div>
        </div>
      </div>

      {/* facilities */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6 text-center">
          Facilities & Amenities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaWifi className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">High-Speed WiFi</h4>
            <p className="text-sm text-[#1F3A2E]">1 Gbps enterprise network</p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaCoffee className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Cafeteria</h4>
            <p className="text-sm text-[#1F3A2E]">Premium coffee & snacks</p>
          </div>

          <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6 text-center">
            <FaTv className="text-[#6D1B1C] text-3xl mx-auto mb-2" />
            <h4 className="font-semibold text-[#6D1B1C]">Conference Rooms</h4>
            <p className="text-sm text-[#1F3A2E]">Video conferencing enabled</p>
          </div>
        </div>
      </div>

      {/* accomodation section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Seating & Capacity
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6">
            <h4 className="font-semibold text-[#6D1B1C] mb-2">Workstations</h4>
            <ul className="space-y-2 text-[#1F3A2E] text-sm">
              <li>• 150+ Hot Desks</li>
              <li>• 40 Dedicated Desks</li>
              <li>• 12 Private Cabins</li>
            </ul>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6">
            <h4 className="font-semibold text-[#6D1B1C] mb-2">Meeting Rooms</h4>
            <ul className="space-y-2 text-[#1F3A2E] text-sm">
              <li>• 2 Large Boardrooms</li>
              <li>• 4 Small Discussion Rooms</li>
              <li>• Soundproof cabins</li>
            </ul>
          </div>
        </div>
      </div>

      {/* question part */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Why Choose This Co-Working Space?
        </h3>

        <ul className="space-y-3 text-[#1F3A2E]">
          <li>• Prime location in Indiranagar</li>
          <li>• AI-enabled infrastructure</li>
          <li>• Flexible membership plans</li>
          <li>• Startup-friendly ecosystem</li>
          <li>• Networking & collaboration events</li>
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
          onChange={(e) => setMessage(e.target.value)} />

        <div className="flex gap-4 mt-4">
          <button
            onClick={handleSendMessage} // ADD
            disabled={!userName} // ADD
            className={`flex items-center gap-2 px-6 py-2 rounded-md
            ${userName
              ? "bg-[#6D1B1C] text-white"
              : "bg-gray-300 cursor-not-allowed"
            }`}
          >
             Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="bg-gray-300 text-[#1F3A2E] px-8 py-2 rounded-md hover:bg-gray-400">
            Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
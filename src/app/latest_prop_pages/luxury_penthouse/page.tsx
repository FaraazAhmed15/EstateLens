"use client";
import WishlistButton from "@/components/WishlistButton";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session"; 
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
  FaCity,
  FaTrain,
  FaWineGlassAlt,
  FaCouch,
  FaSun,
  FaLeaf,
  FaTv,
} from "react-icons/fa";

export default function LuxuryPenthouse() {
  const [message, setMessage] = useState("");
  

const pathname = usePathname(); 
const [userName, setUserName] = useState<string | null>(null);
const [ownerNumber, setOwnerNumber] = useState(null);

  useEffect(() => { // ADD check login
    const name = getSession();
    setUserName(name);
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
              src="/images/luxury_penthouse.jpeg"
              alt="Luxury Penthouse"
              className="w-full h-[350px] object-cover rounded-xl shadow-md" />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Luxury Penthouse
            </h2>

            <p className="text-[#1F3A2E] mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> MG Road, Bengaluru
            </p>

            <p className="text-2xl font-semibold text-[#6D1B1C] mb-4">
              ₹3.2 Crore
            </p>

            {/* highlights */}
            <div className="grid grid-cols-2 gap-4 text-[#1F3A2E] mb-6">
              <p className="flex items-center gap-2">
                <FaBed /> 4 BHK Penthouse
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 3200 sq.ft
              </p>
              <p className="flex items-center gap-2">
                <FaCity /> Skyline View
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> 24/7 Security
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 2 Covered Parking
              </p>
              <p className="flex items-center gap-2">
                <FaWifi /> Smart Home Enabled
              </p>
            </div>

            {/* buttons */}
            <div className="mt-6 space-y-4">
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

              <div className="flex gap-4">
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
                <WishlistButton />
              </div>
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
          This ultra-luxury penthouse on MG Road offers breathtaking skyline views,
          contemporary architecture, and premium interiors. Designed for elite
          living, the residence combines privacy, space, and world-class amenities
          in the heart of Bengaluru’s most prestigious location.
        </p>
      </div>

      {/* specifications */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p><strong>Property Type:</strong> Luxury Penthouse</p>
          <p><strong>Configuration:</strong> 4 BHK</p>
          <p><strong>Built-up Area:</strong> 3200 sq.ft</p>
          <p><strong>View:</strong> Panoramic Skyline</p>
          <p><strong>Possession:</strong> Ready to Move</p>
          <p><strong>Parking:</strong> 2 Covered</p>
          <p><strong>Building Type:</strong> Premium High-Rise</p>
          <p><strong>Technology:</strong> Smart Home Enabled</p>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Premium Amenities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaWater /> Infinity Pool</p>
          <p className="flex items-center gap-2"><FaDumbbell /> Luxury Gym</p>
          <p className="flex items-center gap-2"><FaWifi /> Smart Automation</p>
          <p className="flex items-center gap-2"><FaWineGlassAlt /> Rooftop Lounge</p>
          <p className="flex items-center gap-2"><FaCouch /> Designer Interiors</p>
          <p className="flex items-center gap-2"><FaSun /> Private Terrace</p>
          <p className="flex items-center gap-2"><FaLeaf /> Landscaped Garden</p>
          <p className="flex items-center gap-2"><FaTv /> Home Theatre Setup</p>
        </div>
      </div>

      {/* nearby connectivity */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Connectivity & Metro Access
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaTrain /> MG Road Metro – 500 meters</p>
          <p>Brigade Road – 1 km</p>
          <p>Cubbon Park – 2 km</p>
          <p>UB City Mall – 1.5 km</p>
        </div>
      </div>

      {/* questioning part */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Why Choose This Penthouse?
        </h3>

        <ul className="list-disc pl-5 text-[#1F3A2E] space-y-2">
          <li>Unmatched skyline views from every room</li>
          <li>Ultra-premium interiors and fittings</li>
          <li>Private terrace with garden</li>
          <li>Top-tier security and privacy</li>
          <li>Prime MG Road location</li>
          <li>Excellent resale and rental value</li>
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
            onClick={handleSendMessage} // ADD
            disabled={!userName} // ADD
            className={`flex items-center gap-2 px-6 py-2 rounded-md
            ${userName
              ? "bg-[#6D1B1C] text-white"
              : "bg-gray-300 cursor-not-allowed"
            }`}
          >
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
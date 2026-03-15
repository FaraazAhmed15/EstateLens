"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session"; 

import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaRulerCombined,
  FaBuilding,
  FaParking,
  FaWifi,
  FaCogs,
  FaArrowLeft,
  FaHome,
  FaTrash,
  FaPaperPlane,
  FaClock,
  FaShieldAlt,
  FaIndustry,
  FaRoute,
} from "react-icons/fa";

export default function CommercialShopWhitefield() {
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

      

      {/* header*/}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image */}
          <div>
            <img
              src="/images/shop.jpeg"
              alt="Commercial Shop in Whitefield"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* details on right */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }} >
              Commercial Shop on Rent
            </h2>

            <p className="flex items-center gap-2 text-[#1F3A2E] mb-1">
              <FaMapMarkerAlt /> Whitefield, Bengaluru (IT Corridor)
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4">
              ₹1.7 Lakhs / month
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 1200 sq.ft Carpet Area
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> Ground Floor Commercial Space
              </p>
              <p className="flex items-center gap-2">
                <FaParking /> Dedicated Parking Available
              </p>
              <p className="flex items-center gap-2">
                <FaWifi /> High-Speed Internet Ready
              </p>
              <p className="flex items-center gap-2">
                <FaCogs /> Suitable for Retail / Office / Clinic / Café
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

      {/* overview */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium commercial shop in Whitefield is located in a high-footfall
          IT corridor, making it ideal for retail, cafés, clinics, showrooms,
          or office setups. The property enjoys excellent visibility, easy road
          access, and proximity to major IT companies and metro connectivity.
        </p>
      </div>

      {/* suitability */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Best Suited For
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
          <p>✔ Retail Showroom</p>
          <p>✔ Café / Restaurant</p>
          <p>✔ Office Space</p>
          <p>✔ Medical Clinic</p>
          <p>✔ Banking / Service Center</p>
          <p>✔ Co-working Satellite Office</p>
        </div>
      </div>

      {/* IT companies*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Nearby IT Companies & Access Gates
        </h3>

        <ul className="list-disc pl-6 text-[#1F3A2E] space-y-2">
          <li> TCS – Gate No. 2 (1.2 km)</li>
          <li> Infosys – Gate No. 4 (1.5 km)</li>
          <li> Wipro – Gate No. 1 (2 km)</li>
          <li> Tech Mahindra – Main Gate (2.3 km)</li>
          <li> Whitefield Metro Station – 2.5 km</li>
          <li>ITPL Main Road – 1.8 km</li>
        </ul>
      </div>

      {/* security and rent */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Rent & Security Details
        </h3>

        <div className="space-y-2 text-[#1F3A2E]">
          <p className="flex items-center gap-2">
            <FaRupeeSign /> Monthly Rent: <strong>₹1.7 Lakhs</strong>
          </p>
          <p className="flex items-center gap-2">
            <FaShieldAlt /> Security Deposit: <strong>6 Months Rent</strong>
          </p>
          <p className="flex items-center gap-2">
            <FaClock /> Lock-in Period: <strong>12 Months</strong>
          </p>
          <p className="flex items-center gap-2">
            <FaIndustry /> Maintenance: Tenant Responsibility
          </p>
          <p className="flex items-center gap-2">
            <FaRoute /> Agreement: Registered Lease Deed
          </p>
        </div>
      </div>

      {/* site visit */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Schedule a Site Visit
        </h3>

        <p className="text-[#1F3A2E] mb-4">
          Interested tenants can schedule a visit to inspect the shop and discuss
          lease terms with the owner.
        </p>

        
      </div>

      {/* message to owner section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner..."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>

        <div className="mt-4 flex gap-4">
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
            className="flex items-center gap-2 bg-gray-300 text-[#1F3A2E] px-6 py-2 rounded-md hover:bg-gray-400 transition">
            <FaTrash /> Clear
          </button>
        </div>
      </div>

    </section>
  );
}
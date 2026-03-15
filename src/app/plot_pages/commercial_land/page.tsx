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
  FaFileSignature,
  FaRoad,
  FaTrain,
  FaTruck,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
  FaPaperPlane,
  FaEraser
} from "react-icons/fa";

export default function CommercialLand() {
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
              src="/images/commerical_plot1.jpeg"
              alt="Commercial Land in Electronic City"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* right details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Commercial Land — Electronic City
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Electronic City, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 2.1 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 2400 sq.ft 
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> Ideal for Office / Retail Development
              </p>
              <p className="flex items-center gap-2">
                <FaFileSignature /> BBMP / BDA Approved 
              </p>
              <p className="flex items-center gap-2">
                <FaRoad /> 30 ft Wide Approach Road
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Secure, Developed Layout
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
          This premium commercial land parcel in Electronic City is strategically
          located in one of Bengaluru’s largest IT and business hubs. The land is
          ideal for developing office complexes, retail showrooms, IT parks, or
          mixed-use commercial projects.
        </p>

        <p className="text-[#1F3A2E] leading-relaxed mt-4">
          The plot enjoys excellent connectivity to Hosur Road, NICE Road, and
          Outer Ring Road, making it highly attractive for investors and
          developers looking for long-term appreciation.
        </p>
      </div>

      {/* questioning part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-6"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Why This Land is a Great Investment
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <li className="flex items-start gap-3">
            <FaBuilding className="text-[#6D1B1C] mt-1" />
            <span>Located in Bengaluru’s largest IT corridor</span>
          </li>

          <li className="flex items-start gap-3">
            <FaRoad className="text-[#6D1B1C] mt-1" />
            <span>Excellent road connectivity to major business zones</span>
          </li>

          <li className="flex items-start gap-3">
            <FaTrain className="text-[#6D1B1C] mt-1" />
            <span>Close to upcoming Metro connectivity</span>
          </li>

          <li className="flex items-start gap-3">
            <FaFileSignature className="text-[#6D1B1C] mt-1" />
            <span>Clear title with government approvals</span>
          </li>
        </ul>
      </div>

      {/* landmarks */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }} >
          Nearby Landmarks
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
          <li>✔ Infosys Campus — 5 mins</li>
          <li>✔ Wipro Office — 8 mins</li>
          <li>✔ Electronic City Phase 1 — 6 mins</li>
          <li>✔ Narayana Hrudayalaya Hospital — 10 mins</li>
        </ul>
      </div>

      {/* meassage */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner ."
          className="w-full border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
          value={message}
          onChange={(e) => setMessage(e.target.value)}/>

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
              
        <button onClick={() => setMessage("")
        }
        className="bg-gray-300 flex items-center gap-2  border border-[#B8A47C] text-[#6D1B1C]px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
        <FaEraser /> Clear Message</button>
        </div>
      </div>

    </section>
  );
}
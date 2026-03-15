"use client";
import WishlistButton from "@/components/WishlistButton";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session";
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
  FaEraser,
  FaBed,
  FaBath
} from "react-icons/fa";

export default function SingleFamilyHome() {
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

      {/* HEADER */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="/images/card4.jpeg"
              alt="Single Family Home"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* RIGHT SIDE */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Single Family Home
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Near Ramaiah Hospital, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 3.2 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaBed /> 4 Bedrooms
              </p>
              <p className="flex items-center gap-2">
                <FaBath /> 3 Bathrooms
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 3200 sq.ft Built-up Area
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 2 Car Parking
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Clear Title & Verified Documents
              </p>
              <p className="flex items-center gap-2">
                <FaCheckCircle /> Ready to Move
              </p>
            </div>

            {/* BUTTONS */}
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
               <WishlistButton />
            </div>

            <div className="mt-6">
              
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

      {/* OVERVIEW */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium single-family home near Ramaiah Hospital offers spacious
          interiors, modern architecture, and excellent connectivity to major
          parts of Bengaluru. Designed for comfortable living, the property
          features large bedrooms, ample parking space, and a peaceful
          residential environment ideal for families.
        </p>
      </div>

      {/* LOCATION */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Location & Connectivity
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[#1F3A2E]">
          <li>5 mins to Ramaiah Hospital</li>
          <li>10 mins to Yeshwanthpur Metro</li>
          <li>Close to Schools & Colleges</li>
          <li>Well connected to Outer Ring Road</li>
        </ul>
      </div>

      {/* MESSAGE */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Hi, I'm interested in this home. Please share visit details."
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
            className="bg-gray-300 px-6 py-2 rounded-md hover:bg-gray-400 transition">
            <FaEraser /> Clear
          </button>
        </div>
      </div>
      

    </section>
  );
}
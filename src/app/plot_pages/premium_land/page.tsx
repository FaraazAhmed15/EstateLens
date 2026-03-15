"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session"; 
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaRulerCombined,
  FaRoad,
  FaShieldAlt,
  FaTree,
  FaSchool,
  FaHospital,
  FaTrain,
  FaFileSignature,
  FaArrowLeft,
  FaHome,
  FaPhoneAlt,
  FaEnvelope,
    FaPaperPlane,
    FaEraser
} from "react-icons/fa";

export default function PremiumResidentialLand() {
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
              src="/images/premium_land.jpeg"
              alt="Premium Residential Land Sarjapur Road"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* right content */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Premium Residential Land — Sarjapur Road
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Sarjapur Road, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 72 Lakhs
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 2400 sq.ft (Premium Plot)
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Gated Layout with 24/7 Security
              </p>
              <p className="flex items-center gap-2">
                <FaRoad /> 40 ft Internal Roads
              </p>
              <p className="flex items-center gap-2">
                <FaFileSignature /> BMRDA / Panchayat Approved (Clear Title)
              </p>
              <p className="flex items-center gap-2">
                <FaTree /> Landscaped Open Spaces & Parks
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
                             px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition" >
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
          This premium residential plot on Sarjapur Road is located in one of
          Bengaluru’s most sought-after real estate corridors. The gated layout
          offers a secure, well-planned environment ideal for building your dream
          home or making a high-value investment.
        </p>

        <p className="text-[#1F3A2E] leading-relaxed mt-4">
          Sarjapur Road is known for its excellent connectivity to major IT hubs,
          international schools, healthcare centers, and shopping destinations,
          making this plot a prime choice for both homeowners and investors.
        </p>
      </div>

      {/* question*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-6"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Why This Land is a Smart Investment
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <li className="flex items-start gap-3">
            <FaRoad className="text-[#6D1B1C] mt-1" />
            <span>Excellent connectivity to IT corridors like Whitefield & ORR</span>
          </li>

          <li className="flex items-start gap-3">
            <FaTree className="text-[#6D1B1C] mt-1" />
            <span>Green, spacious, and well-planned gated layout</span>
          </li>

          <li className="flex items-start gap-3">
            <FaFileSignature className="text-[#6D1B1C] mt-1" />
            <span>Clear legal title with government approvals</span>
          </li>

          <li className="flex items-start gap-3">
            <FaRupeeSign className="text-[#6D1B1C] mt-1" />
            <span>Strong appreciation potential in coming years</span>
          </li>
        </ul>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Nearby Facilities
        </h3>

        <ul className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
          <li className="flex items-center gap-2">
            <FaSchool /> Top International Schools — 10 mins
          </li>
          <li className="flex items-center gap-2">
            <FaHospital /> Multi-Specialty Hospitals — 12 mins
          </li>
          <li className="flex items-center gap-2">
            <FaTrain /> Upcoming Metro Connectivity — 15 mins
          </li>
          <li className="flex items-center gap-2">
            <FaMapMarkerAlt /> IT Parks (Whitefield / Sarjapur) — 15 mins
          </li>
        </ul>
      </div>

      {/* message */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3
          className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message to the property owner."
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
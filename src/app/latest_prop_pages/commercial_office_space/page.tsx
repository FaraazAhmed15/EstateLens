"use client";
import WishlistButton from "@/components/WishlistButton";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session"; 
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaBuilding,
  FaRulerCombined,
  FaIndustry,
  FaCar,
  FaShieldAlt,
  FaPaperPlane,
  FaTrash,
  FaArrowLeft,
  FaHome,
  FaCheckCircle,
  FaWifi,
 
  FaSnowflake,
  FaUsers,
} from "react-icons/fa";

export default function CommercialOffice() {
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
              src="/images/commercial_office.jpeg"
              alt="Commercial Office Space"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Grade A Commercial Office Space
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt className="text-[#6D1B1C]" /> Electronic City, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 1.8 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaBuilding /> Grade A Office Space
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 2500 sq.ft Built-up Area
              </p>
              <p className="flex items-center gap-2">
                <FaIndustry /> Located in IT Hub
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> Dedicated Parking
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> 24/7 Security & CCTV
              </p>
            </div>
            <div className="mt-6 space-y-4">
 

  {/* Secondary Navigation Buttons */}
  <div className="flex gap-4">
    <button
      onClick={() => window.history.back()}
      className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                 px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition"
    >
      <FaArrowLeft /> Go Back
    </button>

    <Link
      href="/home-user-subscribed"
      className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                 px-5 py-2 rounded-md hover:bg-[#F4E9D8] transition"
    >
      <FaHome /> Home
    </Link>
    <WishlistButton />
  </div>
</div>

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

      {/* overview section */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium **Grade A commercial office space** is located in
          **Electronic City — Bengaluru’s largest IT corridor**, making it an
          excellent investment for IT firms, startups, and multinational companies.
          The property is designed with modern corporate infrastructure, efficient
          floor planning, and high-quality construction standards.
        </p>
      </div>

      {/* specifications */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Key Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-[#1F3A2E]">
          <p>🏢 Property Type: Commercial Office</p>
          <p>📐 Built-up Area: 2500 sq.ft</p>
          <p>🏢 Floor: Mid-Level</p>
          <p>🚗 Parking: 2 Dedicated Slots</p>
          <p>🏢 Building Type: Grade A</p>
          <p>🔌 Power Backup: 100%</p>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Amenities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaWifi /> High-Speed Internet</p>
          <p className="flex items-center gap-2">Modern Elevators</p>
          <p className="flex items-center gap-2"><FaSnowflake /> Central AC</p>
          <p className="flex items-center gap-2"><FaUsers /> Conference Rooms</p>
          <p className="flex items-center gap-2"><FaShieldAlt /> 24/7 Security</p>
          <p className="flex items-center gap-2"><FaCheckCircle /> Fire Safety</p>
        </div>
      </div>

      {/* highlights */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Locality Highlights
        </h3>

        <ul className="list-disc ml-6 text-[#1F3A2E] space-y-2">
          <li>Close to major IT companies</li>
          <li>Easy access to Hosur Road</li>
          <li>Nearby metro connectivity</li>
          <li>Shopping malls within 5 km</li>
          <li>Top hospitals and schools nearby</li>
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
            className="bg-white border border-[#B8A47C] text-[#6D1B1C] px-8 py-2 rounded-md hover:bg-[#F4E9D8] transition flex items-center gap-2"
          >
            <FaTrash /> Clear Message
          </button>
        </div>
      </div>
    </section>
  );
}
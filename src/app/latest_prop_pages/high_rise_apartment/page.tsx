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
  FaBuilding,
  FaCar,
  FaShieldAlt,
  FaSwimmingPool,
  FaDumbbell,
  FaUsers,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaTrash,
} from "react-icons/fa";

export default function HighRiseApartment() {
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
              src="/images/high_rise_apartment.jpeg"
              alt="High Rise Apartment"
              className="w-full h-[350px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              Premium High-Rise Apartment
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Rajajinagar, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 1.1 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaBuilding /> 2 BHK Apartment
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 1250 sq.ft Built-up Area
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> Ready to Move | Occupancy Certificate (OC)
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 1 Covered Car Parking
              </p>
              <p className="flex items-center gap-2">
                <FaUsers /> Gated Community with 24/7 Security
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

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This modern 2 BHK high-rise apartment in Rajajinagar offers a premium
          urban lifestyle with excellent connectivity, top-tier amenities, and
          breathtaking city views. Designed for professionals and families,
          the apartment provides spacious interiors, natural ventilation, and
          smart space utilization.
        </p>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Key Amenities
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaSwimmingPool className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Clubhouse with Swimming Pool</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaDumbbell className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Fully Equipped Gym</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaUsers className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">24/7 Security & CCTV</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaCar className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Dedicated Parking</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaBuilding className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">High-Speed Elevators</p>
          </div>
        </div>
      </div>

      {/* advantages */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Location Advantages
        </h3>

        <ul className="list-disc pl-6 space-y-2 text-[#1F3A2E]">
          <li>Close to Rajajinagar Metro Station</li>
          <li>5–10 mins to Orion Mall & ISKCON Temple</li>
          <li>Proximity to top schools and hospitals</li>
          <li>Well-connected to MG Road & CBD</li>
          <li>Easy access to IT corridors</li>
        </ul>
      </div>

      {/*  message to owner section*/}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Hi, I am interested in this 2 BHK apartment in Rajajinagar. Please share floor plan, maintenance charges, and a suitable time for site visit."
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
            className="bg-gray-300 text-[#1F3A2E] px-8 py-2 rounded-md hover:bg-gray-400 transition flex items-center gap-2">
            <FaTrash /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
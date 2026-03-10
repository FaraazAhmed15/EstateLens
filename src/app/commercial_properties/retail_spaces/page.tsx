"use client";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation"; 
import { getSession } from "@/lib/session"; 
import Link from "next/link";
import {
  FaMapMarkerAlt,
  FaRupeeSign,
  FaBuilding,
  FaUsers,
  FaCar,
  FaShoppingBag,
  FaWalking,
  FaTrain,
  FaStore,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaTrash,
  FaCheckCircle,
} from "react-icons/fa";

export default function RetailSpace() {
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

      

      {/* intro */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* image*/}
          <div>
            <img
              src="/images/rental_space.jpeg"
              alt="Retail Commercial Space"
              className="w-full h-[360px] object-cover rounded-lg shadow-sm"/>
          </div>

          {/* details*/}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Prime Retail Space
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Brigade Road, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 12.2 Crore
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaStore /> High-Visibility Retail Showroom
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> 1800 sq.ft Built-up Area
              </p>
              <p className="flex items-center gap-2">
                <FaUsers /> High Footfall Commercial Zone
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> Dedicated Customer Parking
              </p>
              <p className="flex items-center gap-2">
                <FaShoppingBag /> Suitable for Brand Stores, Cafés & Boutiques
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

      {/* overview */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium retail space is strategically located on Brigade Road, one of
          Bengaluru’s most vibrant commercial corridors. The property offers
          excellent visibility, high pedestrian traffic, and easy accessibility,
          making it ideal for brand showrooms, fashion boutiques, cafés, and premium
          retail outlets.
        </p>

        <p className="text-[#1F3A2E] leading-relaxed mt-4">
          The showroom features an open floor layout, high ceilings, modern
          electrical fittings, and a well-designed frontage that enhances brand
          presence and customer engagement.
        </p>
      </div>

      {/* question part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Why This Retail Space is a Great Investment
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Located in a high-demand commercial district with consistent customer inflow.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Strong rental yield potential due to premium location and brand visibility.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Suitable for long-term business growth and resale appreciation.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Close to major shopping hubs, corporate offices, and tourist attractions.
            </p>
          </div>
        </div>
      </div>

      {/* landmarks */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Nearby Landmarks & Connectivity
        </h3>

        <ul className="space-y-3 text-[#1F3A2E]">
          <li className="flex items-center gap-2">
            <FaWalking /> Brigade Road – 1 min walk
          </li>
          <li className="flex items-center gap-2">
            <FaTrain /> MG Road Metro Station – 5 mins
          </li>
          <li className="flex items-center gap-2">
            <FaShoppingBag /> Garuda Mall – 8 mins
          </li>
          <li className="flex items-center gap-2">
            <FaBuilding /> UB City – 10 mins
          </li>
          <li className="flex items-center gap-2">
            <FaCar /> Central Business District – 10 mins
          </li>
        </ul>
      </div>

      {/* ideal case */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Ideal For
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaStore className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Brand Showrooms</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaShoppingBag className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Fashion Boutiques</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaUsers className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Cafe & Restaurants</p>
          </div>
        </div>
      </div>

      {/* message to owner section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Hi, I am interested in this retail space. Please share floor plan, expected ROI, and site visit availability."
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
            className="bg-gray-300 text-[#1F3A2E] px-8 py-2 rounded-md hover:bg-gray-400 transition flex items-center gap-2"
          >
            <FaTrash /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
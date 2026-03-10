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
  FaWifi,
  FaTrain,
  FaCoffee,
  FaArrowLeft,
  FaHome,
  FaPaperPlane,
  FaTrash,
  FaCheckCircle,
  FaShieldAlt,
  FaParking,
  FaBolt,
  FaServer,
  FaCity,
} from "react-icons/fa";

export default function ITBusinessPark() {
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

          {/* image */}
          <div>
            <img
              src="/images/it_parl.jpeg"
              alt="IT Business Park Manyata"
              className="w-full h-[360px] object-cover rounded-lg shadow-sm"
            />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              IT & Business Park – Manyata
            </h2>

            <p className="text-[#1F3A2E] mb-1 flex items-center gap-2">
              <FaMapMarkerAlt /> Manyata Tech Park, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mb-4 flex items-center gap-2">
              <FaRupeeSign /> 3.9 Crore / month
            </p>

            <div className="space-y-2 text-[#1F3A2E]">
              <p className="flex items-center gap-2">
                <FaBuilding /> Grade A Commercial Office Space
              </p>
              <p className="flex items-center gap-2">
                <FaCity /> 4,200 sq.ft Built-up Area
              </p>
              <p className="flex items-center gap-2">
                <FaUsers /> Seating Capacity: 80–100 Employees
              </p>
              <p className="flex items-center gap-2">
                <FaParking /> 3 Dedicated Car Parks + Visitor Parking
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> 24/7 Security & CCTV Surveillance
              </p>
              <p className="flex items-center gap-2">
                <FaBolt /> 100% Power Backup
              </p>
              <p className="flex items-center gap-2">
                <FaWifi /> High-Speed Internet Ready
              </p>
              <p className="flex items-center gap-2">
                <FaServer /> Data Center Connectivity Available
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

      {/* overview*/}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Overview
        </h3>

        <p className="text-[#1F3A2E] leading-relaxed">
          This premium Grade A office space is located inside Manyata Tech Park,
          one of Bengaluru’s largest and most prestigious IT hubs. The property
          offers modern infrastructure, seamless connectivity, and a corporate
          environment designed for high-performance businesses.
        </p>

        <p className="text-[#1F3A2E] leading-relaxed mt-4">
          The office features an open floor plan, high-quality interiors,
          centralized air-conditioning, advanced networking infrastructure,
          and excellent natural lighting, making it ideal for IT firms, startups,
          and multinational corporations.
        </p>
      </div>

      {/* question part */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Why This is a Smart Investment
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Located inside Manyata Tech Park — home to Fortune 500 companies.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Strong rental demand from IT firms and startups.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              High appreciation potential due to growing tech ecosystem.
            </p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-start gap-3">
            <FaCheckCircle className="text-[#6D1B1C] text-xl mt-1" />
            <p className="text-[#1F3A2E]">
              Premium amenities, security, and business infrastructure.
            </p>
          </div>
        </div>
      </div>

      {/* connectivity */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Connectivity & Nearby Facilities
        </h3>

        <ul className="space-y-3 text-[#1F3A2E]">
          <li className="flex items-center gap-2">
            <FaTrain /> Upcoming Metro Station – 10 mins
          </li>
          <li className="flex items-center gap-2">
            <FaBuilding /> Manyata Tech Park – Inside Campus
          </li>
          <li className="flex items-center gap-2">
            <FaCoffee /> Starbucks & Cafés – 2 mins
          </li>
          <li className="flex items-center gap-2">
            <FaCity /> Hebbal – 12 mins
          </li>
          <li className="flex items-center gap-2">
            <FaCar /> Kempegowda Airport – 25 mins
          </li>
        </ul>
      </div>

      {/*ideal case */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
          Ideal For
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaBuilding className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">IT Companies</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaUsers className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Startups & Enterprises</p>
          </div>

          <div className="bg-white border border-[#B8A47C] rounded-lg p-6 flex items-center gap-3">
            <FaServer className="text-[#6D1B1C] text-2xl" />
            <p className="text-[#1F3A2E]">Tech R&D Centers</p>
          </div>
        </div>
      </div>

      {/* accomodation */}
<div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
  <h3 className="text-2xl font-bold text-[#6D1B1C] mb-6">
    Occupancy & People Accommodation
  </h3>

  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

    <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6">
      <h4 className="font-semibold text-[#6D1B1C] mb-2">
        Employee Capacity
      </h4>
      <ul className="space-y-2 text-[#1F3A2E] text-sm">
        <li>• Comfortable seating for 80–100 employees</li>
        <li>• Flexible workstation layout (open + cabin mix)</li>
        <li>• Scope to expand seating with modular furniture</li>
      </ul>
    </div>

    <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6">
      <h4 className="font-semibold text-[#6D1B1C] mb-2">
        Workspaces & Rooms
      </h4>
      <ul className="space-y-2 text-[#1F3A2E] text-sm">
        <li>• 1 Large Conference Room (12–14 people)</li>
        <li>• 2 Meeting Rooms (6–8 people each)</li>
        <li>• 1 Director Cabin + 2 Manager Cabins</li>
      </ul>
    </div>

    <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6">
      <h4 className="font-semibold text-[#6D1B1C] mb-2">
        Employee Comfort Facilities
      </h4>
      <ul className="space-y-2 text-[#1F3A2E] text-sm">
        <li>• Dedicated Pantry & Breakout Area</li>
        <li>• Cafeteria inside Manyata Campus</li>
        <li>• Lounges & informal collaboration zones</li>
      </ul>
    </div>

    <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-lg p-6">
      <h4 className="font-semibold text-[#6D1B1C] mb-2">
        Infrastructure & Support
      </h4>
      <ul className="space-y-2 text-[#1F3A2E] text-sm">
        <li>• Centralized Air Conditioning</li>
        <li>• High-speed internet & LAN cabling</li>
        <li>• 100% power backup with UPS + DG</li>
      </ul>
    </div>

  </div>
</div>


      {/* message to owner */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4 text-center">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Hi, I am interested in this office space. Please share floor plan, lease terms, and site visit availability."
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
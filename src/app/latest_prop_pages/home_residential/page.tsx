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
  FaBuilding,
  FaWifi,
  FaTree,
  FaTrain,
  FaShoppingBag,
  FaHospital,
  FaSchool,
} from "react-icons/fa";

export default function ResidentialHome() {
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
              src="/images/home_card1.jpeg"
              alt="2BHK Apartment Bengaluru"
              className="w-full h-[360px] object-cover rounded-xl shadow-md"
            />
          </div>

          {/* details */}
          <div>
            <h2
              className="text-3xl font-bold text-[#6D1B1C] mb-2"
              style={{ fontFamily: "'Sanchez', serif" }}>
              Modern 2BHK Apartment – Bengaluru
            </h2>

            <p className="text-[#1F3A2E] mb-2 flex items-center gap-2">
              <FaMapMarkerAlt /> Near Metro Station, Bengaluru
            </p>

            <p className="text-2xl font-semibold text-[#6D1B1C] mb-4">
              ₹85 Lakhs
            </p>

            {/* highlights */}
            <div className="grid grid-cols-2 gap-4 text-[#1F3A2E] mb-6">
              <p className="flex items-center gap-2">
                <FaBed /> 2 BHK Apartment
              </p>
              <p className="flex items-center gap-2">
                <FaRulerCombined /> 1,200 sq.ft Built-up
              </p>
              <p className="flex items-center gap-2">
                <FaCar /> 1 Covered Parking
              </p>
              <p className="flex items-center gap-2">
                <FaShieldAlt /> 24/7 Security
              </p>
              <p className="flex items-center gap-2">
                <FaBuilding /> Apartment Complex
              </p>
              <p className="flex items-center gap-2">
                <FaTrain /> Metro Connectivity
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

      {/* specifications */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Property Specifications
        </h3>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 text-[#1F3A2E]">
          <p><strong>Property Type:</strong> Residential Apartment</p>
          <p><strong>Configuration:</strong> 2 BHK</p>
          <p><strong>Built-up Area:</strong> 1,200 sq.ft</p>
          <p><strong>Possession:</strong> Ready to Move</p>
          <p><strong>Furnishing:</strong> Semi-Furnished</p>
          <p><strong>Parking:</strong> 1 Covered</p>
          <p><strong>Facing:</strong> East</p>
          <p><strong>Floor:</strong> 8th Floor</p>
        </div>
      </div>

      {/* amenities */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Amenities
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaWifi /> High-Speed Internet</p>
          <p className="flex items-center gap-2"><FaShieldAlt /> 24/7 Security</p>
          <p className="flex items-center gap-2"><FaCar /> Parking</p>
          <p className="flex items-center gap-2"><FaTree /> Landscaped Garden</p>
          <p className="flex items-center gap-2"><FaBuilding /> Clubhouse</p>
        </div>
      </div>

      {/* landmarks */}
      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Nearby Landmarks
        </h3>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-6 text-[#1F3A2E]">
          <p className="flex items-center gap-2"><FaSchool /> National Public School – 2 km</p>
          <p className="flex items-center gap-2"><FaHospital /> Fortis Hospital – 3 km</p>
          <p className="flex items-center gap-2"><FaShoppingBag /> Orion Mall – 4 km</p>
          <p className="flex items-center gap-2"><FaTrain /> Metro Station – 500 m</p>
        </div>
      </div>

      {/* question section */}
      <div className="mt-12 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Why Buy This Home?
        </h3>

        <ul className="list-disc pl-5 text-[#1F3A2E] space-y-2">
          <li>Affordable 2BHK in prime Bengaluru location</li>
          <li>Excellent metro connectivity</li>
          <li>Modern amenities with clubhouse and garden</li>
          <li>Secure gated community</li>
          <li>Close to schools, hospitals, and shopping malls</li>
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
            className="flex items-center gap-2 bg-white border border-[#B8A47C] text-[#6D1B1C]
                       px-6 py-2 rounded-md hover:bg-[#F4E9D8] transition">
            <FaEraser /> Clear Message
          </button>
        </div>
      </div>

    </section>
  );
}
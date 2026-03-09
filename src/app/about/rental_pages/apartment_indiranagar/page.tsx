"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation"; // get page path
import {
  FaBed,
  FaRupeeSign,
  FaMapMarkerAlt,
  FaBuilding,
  FaUsers,
  FaCar,
  FaShieldAlt,
  FaArrowLeft,
  FaHome,
  FaTrash,
  FaPhoneAlt,
} from "react-icons/fa";

import { getSession } from "@/lib/session"; // session helper

export default function PropertyPage() {

  // 🔹 current page path
  const pathname = usePathname();

  const [message, setMessage] = useState("");

  const [userName, setUserName] = useState<string | null>(null);

  const [ownerNumber, setOwnerNumber] = useState<string | null>(null);

  useEffect(() => {
    const name = getSession(); // get login session
    setUserName(name);
  }, []);

  /* ======================================================
     GET OWNER NUMBER (FROM properties.contact_owner)
  ====================================================== */

  const handleRequestNumber = async () => {

    if (!userName) {
      alert("Please login to get owner number.");
      return;
    }

    try {

      const res = await fetch("/api/owner/getOwnerNumber", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },

        // send page path to backend
        body: JSON.stringify({
          page_path: pathname,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        setOwnerNumber(data.number);
      } else {
        alert(data.message);
      }

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };


  /* ======================================================
     SEND MESSAGE TO OWNER (STORE IN messOwner)
  ====================================================== */

  const handleSendMessage = async () => {

    if (!userName) {
      alert("Please login to send message.");
      return;
    }

    if (!message.trim()) {
      alert("Message cannot be empty");
      return;
    }

    try {

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

    } catch (error) {
      console.error(error);
      alert("Server error");
    }
  };



  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* ================= PROPERTY CARD ================= */}

      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

          {/* IMAGE */}
          <div>
            <img
              src="/images/rent.jpeg"
              alt="Apartment"
              className="w-full h-[350px] object-cover rounded-lg"
            />
          </div>

          {/* DETAILS */}
          <div>

            <h2 className="text-3xl font-bold text-[#6D1B1C] mb-2">
              2 BHK Apartment
            </h2>

            <p className="flex items-center gap-2 text-[#1F3A2E]">
              <FaMapMarkerAlt /> Indiranagar, Bengaluru
            </p>

            <p className="text-xl font-semibold text-[#6D1B1C] mt-2 flex items-center gap-2">
              <FaRupeeSign /> 35,000 / month
            </p>

            <div className="grid grid-cols-2 gap-3 mt-4">
              <p className="flex items-center gap-2"><FaBed /> 2 BHK</p>
              <p className="flex items-center gap-2"><FaBuilding /> Apartment</p>
              <p className="flex items-center gap-2"><FaCar /> Parking</p>
              <p className="flex items-center gap-2"><FaUsers /> Family</p>
              <p className="flex items-center gap-2"><FaShieldAlt /> Security</p>
            </div>


            {/* ================= BUTTONS ================= */}

            <div className="flex mt-6 gap-4">

              <button
                onClick={() => window.history.back()}
                className="flex items-center gap-2 bg-white border px-5 py-2 rounded-md"
              >
                <FaArrowLeft /> Back
              </button>

              <Link
                href="/home-user-subscribed"
                className="flex items-center gap-2 bg-white border px-5 py-2 rounded-md"
              >
                <FaHome /> Home
              </Link>

            </div>


            {/* ================= OWNER NUMBER ================= */}

            <div className="mt-6">

              <button
                onClick={handleRequestNumber}
                disabled={!userName}
                className={`flex items-center gap-2 px-6 py-2 rounded-md
                ${
                  userName
                    ? "bg-[#6D1B1C] text-white"
                    : "bg-gray-300 cursor-not-allowed"
                }`}
              >

                <FaPhoneAlt />

                {ownerNumber
                  ? ownerNumber
                  : "Request Owner Number"}

              </button>

            </div>

          </div>

        </div>
      </div>


      {/* ================= MESSAGE OWNER ================= */}

      <div className="mt-12 bg-white border border-[#B8A47C] rounded-xl p-10">

        <h3 className="text-2xl font-bold text-[#6D1B1C] mb-4">
          Message to Owner
        </h3>

        <textarea
          rows={4}
          placeholder="Write your message..."
          className="w-full border rounded-md px-4 py-2"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />

        <div className="mt-4 flex gap-4">

          <button
            onClick={handleSendMessage}
            disabled={!userName}
            className={`px-8 py-2 rounded-md
            ${
              userName
                ? "bg-[#6D1B1C] text-white"
                : "bg-gray-300 cursor-not-allowed"
            }`}
          >
            Send Message
          </button>

          <button
            onClick={() => setMessage("")}
            className="flex items-center gap-2 bg-gray-300 px-6 py-2 rounded-md"
          >
            <FaTrash /> Clear
          </button>

        </div>

      </div>

    </section>
  );
}
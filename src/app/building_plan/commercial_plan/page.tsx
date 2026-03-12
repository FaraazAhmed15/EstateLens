"use client";

import { useState } from "react";
import type { Metadata } from "next";
import LoginModal from "@/components/LoginModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaCity,
  FaNewspaper,
  FaSignInAlt,
  FaKey,
} from "react-icons/fa";



export default function Commercial_Plan_Page() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="flex min-h-screen">
     
      {/* RIGHT CONTENT AREA */}
<div className="flex-1 relative bg-[#F4F1EC] overflow-y-auto">

  {/* CURVED IMAGE HEADER */}
  <div className="absolute top-0 left-0 w-full h-[90px] overflow-hidden">
    <svg
      viewBox="0 0 1000 100"
      preserveAspectRatio="none"
      className="w-full h-full"
    >
      <defs>
        <clipPath id="curveClip">
          <path
            d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2
               c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100L0,0v99.3
               C0,99.3,79.7,98.7,194,99z"
          />
        </clipPath>
      </defs>

      <image
        href="/images/red_flower.jpeg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#curveClip)"
      />
    </svg>
  </div>

  {/* PAGE CONTENT (push below header) */}
  <div className="pt-[120px] p-8">
    <h1 className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Commercial Plan</h1>
    <h3 className="text-xl font-bold  mb-16 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>
          Precision in planning, comfort in living — layouts that truly work for you</h3>
           {/*Introduction*/}
        <div className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}>
          <h5 className="text-xl font-semibold mb-8 text-[#C79A62]">Introduction</h5>
          <div
  className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
  style={{ fontFamily: "'Lato', serif" }}
>
  <ul className="space-y-3">
    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Commercial plans are designed for <strong>business and professional activities</strong>
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Used for <strong>offices, shops, showrooms, malls, clinics, IT-spaces</strong>
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Focus is on <strong>functionality, accessibility and efficiency</strong>
      </span>
    </li>
  </ul>
</div>
</div>
{/* FUNCTIONAL AREA PLANNING (COMMERCIAL) */}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">

  {/* HEADING */}
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Functional Area Planning
  </h2>

  {/* IMAGE CENTER */}
  <div className="flex justify-center mb-10">
    <img
      src="/images/commercial_functional.jpeg"
      alt="Commercial Functional Area Planning"
      className="w-[420px] h-auto rounded-lg border border-[#B8A47C] shadow-sm"
    />
  </div>

  {/* BULLET POINTS */}
  <div
    className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <ul className="space-y-4">

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          The commercial space is divided into clearly defined functional zones
          to support efficient business operations.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Public and customer-facing areas such as reception and waiting zones
          are positioned near the entrance for easy access.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Work zones including offices, cabins, and workstations are arranged
          to enhance productivity and minimize distractions.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Service areas such as storage rooms, restrooms, and utility spaces
          are integrated without interfering with primary workspaces.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          The zoning strategy ensures smooth workflow, efficient circulation,
          and effective utilization of available space.
        </span>
      </li>

    </ul>
  </div>

</div>
{/* COMMERCIAL CIRCULATION & MOVEMENT FLOW */}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">

  {/* SECTION HEADING */}
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Circulation & Movement Flow
  </h2>

  {/* IMAGE CENTERED */}
  <div className="flex justify-center mb-10">
    <img
      src="/images/circulation_commercial.jpeg"
      alt="Commercial Circulation Flow Diagram"
      className="w-[420px] h-auto rounded-lg border border-[#B8A47C] shadow-sm"
    />
  </div>

  {/* DESCRIPTION POINTS */}
  <div
    className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <ul className="space-y-4">

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          The circulation layout is designed to guide customers smoothly from
          entry points to reception and service areas.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Public movement paths are kept wide and unobstructed to prevent
          congestion during peak business hours.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Employee circulation is separated from customer areas to maintain
          operational efficiency and privacy.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Service corridors allow deliveries and maintenance activities without
          disrupting daily business operations.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Emergency exits and clear pathways ensure compliance with safety
          regulations and quick evacuation when required.
        </span>
      </li>

    </ul>
  </div>

</div>
{/* WORKSPACE DESIGN */}
<div className="mt-20 max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
     style={{ fontFamily: "'Lato', serif" }}>

 <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Workspace Design
  </h2>

  <ul className="space-y-4">

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Workspaces are designed to support productivity, comfort, and efficient
        daily business operations.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Workstations are arranged to provide sufficient personal space while
        enabling collaboration among employees.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Dedicated zones such as open work areas, private cabins, and meeting
        rooms help accommodate different work requirements.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Proper lighting, ventilation, and ergonomic planning improve employee
        comfort and reduce fatigue.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Efficient circulation paths allow smooth movement between departments
        without disturbing work activities.
      </span>
    </li>

  </ul>
</div>
{/* CUSTOMER / PUBLIC AREA PLANNING */}
<div
  className="max-w-4xl mx-auto mt-20 text-[#1F3A2E] text-lg md:text-xl"
  style={{ fontFamily: "'Lato', serif" }}
>
 <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Public Area Planning
  </h2>

  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Public areas are designed with clearly defined entry points and reception
        zones to ensure easy access for customers and visitors.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Customer interaction spaces such as waiting areas and service counters
        are positioned for comfort and smooth engagement.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Public zones are kept separate from workspaces to maintain privacy and
        ensure uninterrupted business operations.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        The layout supports intuitive navigation through clear pathways and
        logical space arrangement.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Accessibility features are incorporated to accommodate all users,
        including elderly individuals and people with disabilities.
      </span>
    </li>
  </ul>
</div>
    {/* CONCLUSION */}
<div
  className="max-w-4xl mx-auto mt-20 mb-20 text-[#1F3A2E] text-lg md:text-xl"
  style={{ fontFamily: "'Lato', serif" }}>
   <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Conclusion
  </h2>

  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        The commercial plan is designed to support efficient business operations
        through structured zoning and logical space utilization.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Clear separation between public, work, and service areas ensures smooth
        customer interaction and uninterrupted employee productivity.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Thoughtful circulation planning enhances movement flow while minimizing
        congestion within the commercial space.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        The layout prioritizes safety, accessibility, and comfort for both
        customers and employees.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Overall, the commercial plan demonstrates a practical and scalable
        approach to modern commercial building design aligned with real-world
        business requirements.
      </span>
    </li>
  </ul>
</div>
     </div>
</div>
      {/* LOGIN MODAL */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}  
    </div>
    
  );
}
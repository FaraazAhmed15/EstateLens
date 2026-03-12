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



export default function Residential_Plan_Page() {
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
      className="w-full h-full">
      <defs>
        <clipPath id="curveClip">
          <path
            d="M194,99c186.7,0.7,305-78.3,306-97.2c1,18.9,119.3,97.9,306,97.2
               c114.3-0.3,194,0.3,194,0.3s0-91.7,0-100L0,0v99.3
               C0,99.3,79.7,98.7,194,99z"/>
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
    <h1 className="text-5xl font-bold mb-6 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Residential Plan</h1>
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
        Residential plans are designed for housing purposes where individuals and families live.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        These plans cater to different residential needs such as apartments, independent houses,
        villas, and rental homes.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        They focus on comfort, safety, privacy, and efficient use of living space.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Residential plans help users understand room layouts, sizes, and functional areas before
        purchasing or renting a property.
      </span>
    </li>
  </ul>
</div>

{/* RESIDENTIAL BLUEPRINT SECTION */}
<div className="mt-16 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">
   <h3
        className="text-2xl text-center font-semibold text-[#6D1B1C] mb-4"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Residential Blueprint Overview
      </h3>
  <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
   

    {/* LEFT: BLUEPRINT IMAGE */}
    <div className="flex justify-center">
      <img
        src="/images/residential_plan.jpeg"
        alt="Residential Blueprint"
        className="rounded-lg border border-[#B8A47C] shadow-sm"
      />
    </div>

    {/* RIGHT: BLUEPRINT DESCRIPTION */}
    <div className="text-[#1F3A2E] text-lg leading-relaxed"
         style={{ fontFamily: "'Lato', serif" }}>

      

      <p className="mb-4">
        The residential blueprint represents a typical home layout designed
        to ensure comfort, functionality, and efficient use of space.
      </p>

      <p className="mb-4">
        The layout includes clearly defined living areas such as the living room,
        bedrooms, kitchen, and bathrooms, arranged to maintain privacy and ease
        of movement within the house.
      </p>

      <p>
        This blueprint helps users visualize the internal structure of a
        residential unit before making property-related decisions.
      </p>
    </div>

  </div>
</div>
<div
  className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl mt-14"
  style={{ fontFamily: "'Lato', serif" }}
>
  <h5 className="text-xl font-semibold mb-8 text-[#C79A62]">
    Key Features of the Residential Plan
  </h5>

  <ul className="space-y-4">
    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Clearly separated living and private zones to ensure comfort and organized space usage.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Bedrooms are positioned away from common areas to maintain privacy and reduce noise.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Kitchen is located close to the dining area for convenience and efficient daily workflow.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Proper ventilation and natural lighting are incorporated to improve indoor comfort and energy efficiency.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Efficient circulation spaces are designed to minimize wastage and allow smooth movement within the house.
      </span>
    </li>
  </ul>
</div>
{/* FUNCTIONAL AREA PLANNING – WRAP LAYOUT */}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-10">

  <h3
    className="text-2xl text-center font-semibold mb-6 text-[#6D1B1C]"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Functional Area Planning
  </h3>

  {/* FLOATING IMAGE */}
  <img
    src="/images/residential_functional.jpeg"
    alt="Functional Area Diagram"
    className="float-left mr-8 mt-4 mb-4 w-[320px] rounded-lg border border-[#B8A47C] shadow-sm"/>

  {/* TEXT THAT WRAPS AROUND IMAGE */}
  <ul
    className="text-[#1F3A2E] text-lg md:text-xl space-y-4"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Clearly separated living and private zones enhance comfort and daily usability.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Bedrooms are positioned away from common areas to ensure privacy and reduced noise.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Kitchen placement allows easy access to dining areas while maintaining functionality.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Proper ventilation and natural lighting improve health and energy efficiency.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Efficient circulation space minimizes area wastage and improves movement flow.
      </span>
    </li>
  </ul>

  {/* tells browser text must start below floating image */}
  <div className="clear-both"></div>
</div>

{/* ROOM-WISE DESCRIPTION */}
<div className="mt-24 mx-14">

  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-14"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Room-wise Description
  </h2>

  {/* LIVING ROOM */}
  <div className="mb-16 bg-[#FDF4E2] rounded-xl shadow-md p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src="/images/living_room_residential.jpeg"
      alt="Living Room Layout"
      className="rounded-lg border border-[#B8A47C] shadow-sm"
    />

    <div
      className="text-[#1F3A2E] text-lg md:text-xl"
      style={{ fontFamily: "'Lato', serif" }}
    >
      <h3 className="text-2xl font-semibold text-[#6D1B1C] mb-4">
        Living Room
      </h3>
      <ul className="space-y-3">
        <li> Central gathering space for family interaction and guests</li>
        <li> Positioned near the entrance for easy accessibility</li>
        <li> Designed to receive maximum natural light</li>
        <li> Provides sufficient space for seating and movement</li>
      </ul>
    </div>
  </div>

  {/* BEDROOM */}
  <div className="mb-16 bg-[#FDF4E2] rounded-xl shadow-md p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div
      className="text-[#1F3A2E] text-lg md:text-xl"
      style={{ fontFamily: "'Lato', serif" }}
    >
      <h3 className="text-2xl font-semibold text-[#6D1B1C] mb-4">
        Bedroom
      </h3>
      <ul className="space-y-3">
        <li> Located away from common areas to ensure privacy</li>
        <li> Designed for comfort and quiet environment</li>
        <li> Adequate space for furniture and storage</li>
        <li>Proper ventilation and natural lighting provided</li>
      </ul>
    </div>

    <img
      src="/images/bedroom_residential.jpeg"
      alt="Bedroom Layout"
      className="rounded-lg border border-[#B8A47C] shadow-sm"
    />
  </div>

  {/* KITCHEN */}
  <div className="mb-16 bg-[#FDF4E2] rounded-xl shadow-md p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <img
      src="/images/kitchen_residential.jpeg"
      alt="Kitchen Layout"
      className="rounded-lg border border-[#B8A47C] shadow-sm"
    />

    <div
      className="text-[#1F3A2E] text-lg md:text-xl"
      style={{ fontFamily: "'Lato', serif" }}
    >
      <h3 className="text-2xl font-semibold text-[#6D1B1C] mb-4">
        Kitchen
      </h3>
      <ul className="space-y-3">
        <li> Planned for efficient cooking workflow</li>
        <li> Located close to dining area for convenience</li>
        <li> Adequate ventilation to maintain hygiene</li>
        <li> Space optimized for storage and movement</li>
      </ul>
    </div>
  </div>

  {/* BATHROOM */}
  <div className="mb-16 bg-[#FDF4E2] rounded-xl shadow-md p-10 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
    <div
      className="text-[#1F3A2E] text-lg md:text-xl"
      style={{ fontFamily: "'Lato', serif" }}
    >
      <h3 className="text-2xl font-semibold text-[#6D1B1C] mb-4">
        Bathroom
      </h3>
      <ul className="space-y-3">
        <li> Strategically placed for easy access</li>
        <li> Designed to ensure privacy and hygiene</li>
        <li> Proper drainage and ventilation provided</li>
        <li> Suitable for daily household usage</li>
      </ul>
    </div>

    <img
      src="/images/bathroom_residential.jpeg"
      alt="Bathroom Layout"
      className="rounded-lg border border-[#B8A47C] h-auto w-[220px] shadow-sm"
    />
  </div>

</div>
{/* CIRCULATION & MOVEMENT FLOW */}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">

  {/* HEADING */}
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Circulation & Movement Flow
  </h2>

  {/* IMAGE CENTER */}
  <div className="flex justify-center mb-10">
    <img
      src="/images/circulation_residential.jpeg"
      alt="Circulation Flow Diagram"
      className="w-[320px] h-auto rounded-lg border border-[#B8A47C] shadow-sm"
    />
  </div>

  {/* BULLET POINTS BELOW IMAGE */}
  <div
    className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <ul className="space-y-4">

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          The entry point leads directly into the living area, creating a smooth
          and welcoming transition into the house.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Common areas are well-connected, allowing free and natural movement
          between living, dining, and kitchen spaces.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Private spaces such as bedrooms are accessed through separate paths,
          ensuring privacy and reduced disturbance.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          The layout minimizes unnecessary corridors, reducing wasted space
          and improving usability.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Movement paths are intuitive, enabling comfortable daily movement
          for all age groups.
        </span>
      </li>

    </ul>
  </div>

</div>
          


          </div>


    
    
           
 
  

   



     </div>
     







</div>
      {/* LOGIN MODAL */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}  
    </div>
    
  );
}
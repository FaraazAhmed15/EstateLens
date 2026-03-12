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



export default function Flat_Plan_Page() {
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
    <h1 className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Flat Plan</h1>
    <h3 className="text-xl font-bold  mb-16 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>
          Precision in planning, comfort in living — layouts that truly work for you</h3>
           {/* Introduction */}
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
          Flat plans are designed for <strong>urban residential living</strong> with efficient use of limited space.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62]">➤</span>
        <span>
          Commonly used for <strong>apartments, condominiums, and multi-family housing</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62]">➤</span>
        <span>
          Focus is on <strong>compact layouts, shared amenities, and accessibility</strong> to suit modern lifestyles.
        </span>
      </li>
    </ul>
  </div>
</div>
{/* FUNCTIONAL AREA PLANNING (FLAT) */}
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
      src="/images/flat_functional.jpeg"
      alt="Flat Functional Area Planning"
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
          Flats are organized into <strong>compact yet functional zones</strong> to maximize space efficiency.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Living and dining areas are centrally located to serve as the <strong>social hub</strong> of the apartment.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Bedrooms are planned to ensure <strong>privacy and comfort</strong>, separated from common zones.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Kitchens and utility areas are integrated for <strong>convenience and efficient workflow</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          The layout emphasizes <strong>circulation, accessibility, and optimal use of limited space</strong>.
        </span>
      </li>

    </ul>
  </div>

</div>
{/* CIRCULATION & MOVEMENT FLOW (FLAT) */}
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
      src="/images/flat_circulation.jpeg"
      alt="Flat Circulation Flow Diagram"
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
          Circulation in flats is designed to provide <strong>smooth movement between living, dining, and bedroom areas</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Entrances and lobbies are compact yet functional, ensuring <strong>easy access and transition</strong> into the home.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Corridors are kept minimal to <strong>maximize usable space</strong> while maintaining privacy for bedrooms.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Kitchens and utility areas are positioned for <strong>functional convenience</strong> without disturbing common zones.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Balconies and shared circulation spaces are integrated to enhance <strong>ventilation, light, and community interaction</strong>.
        </span>
      </li>

    </ul>
  </div>

</div>
{/* WORKSPACE DESIGN (FLAT) */}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">
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
        Flats often include <strong>compact home-office or study corners</strong> designed for productivity within limited space.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Workspaces are positioned in <strong>quiet zones</strong> away from living and dining areas to reduce distractions.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Flexible layouts allow spaces to serve multiple purposes such as <strong>study, remote work, or creative activities</strong>.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Natural lighting and ventilation are emphasized to create a <strong>healthy and inspiring environment</strong>.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Ergonomic furniture and organized storage ensure <strong>long-term comfort and efficient use of space</strong>.
      </span>
    </li>

  </ul>
</div>
</div>
{/* PUBLIC AREA PLANNING (FLAT) */}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">
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
        Public areas in flats include <strong>living rooms, dining spaces, and entry lobbies</strong> designed for family and guest interaction.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        These spaces are centrally located to act as the <strong>social hub of the apartment</strong>.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Public zones are planned to be <strong>separate from private bedrooms</strong>, ensuring privacy for residents.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Circulation paths connect living, dining, and balconies for <strong>intuitive navigation and natural flow</strong>.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Accessibility features such as elevators, wide corridors, and safe entry points are incorporated for <strong>elderly and differently-abled residents</strong>.
      </span>
    </li>
  </ul>
</div>
</div>
  
  
</div>
</div>
      
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}  
    </div>
    
  );
}
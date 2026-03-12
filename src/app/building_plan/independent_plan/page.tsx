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



export default function Independent_plan_page() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="flex min-h-screen">
     
     
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

  {/* page */}
  <div className="pt-[120px] p-8">
    <h1 className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Independent Plan</h1>
    <h3 className="text-xl font-bold  mb-16 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>
          Precision in planning, comfort in living — layouts that truly work for you</h3>
          {/* independent plan */}
<div className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl" style={{ fontFamily: "'Lato', serif" }}>
  <h5 className="text-xl font-semibold mb-8 text-[#C79A62]">Independent Plan</h5>
  <div
    className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <ul className="space-y-3">
      <li className="flex items-start gap-3">
        <span className="text-[#C79A62]">➤</span>
        <span>
          Designed for <strong>individual residential living</strong>
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62]">➤</span>
        <span>
          Focus on <strong>privacy, comfort, and personal space</strong>
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62]">➤</span>
        <span>
          Suitable for <strong>families, independent houses, and villas</strong>
        </span>
      </li>
    </ul>
  </div>
</div>
{/* functional area*/}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">

  {/* heading */}
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Functional Area Planning
  </h2>

  {/* IMAGE CENTER */}
  <div className="flex justify-center mb-10">
    <img
      src="/images/independent_functional.jpeg"
      alt="Independent Functional Area Planning"
      className="w-[420px] h-auto rounded-lg border border-[#B8A47C] shadow-sm"
    />
  </div>

  {/* points */}
  <div
    className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <ul className="space-y-4">

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Independent homes are organized into functional zones that balance
          <strong>privacy and shared family spaces</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Living and dining areas are placed centrally to encourage
          <strong>family interaction and social gatherings</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Bedrooms are positioned to ensure <strong>privacy, comfort, and quiet zones</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Service areas such as kitchen, utility, and storage are integrated
          for <strong>convenience and efficiency</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Outdoor spaces like gardens, balconies, or terraces are planned to
          enhance <strong>natural light, ventilation, and recreation</strong>.
        </span>
      </li>

    </ul>
  </div>

</div>
{/* circulation*/}
<div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">

  {/*  heading */}
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Circulation & Movement Flow
  </h2>

  {/* image*/}
  <div className="flex justify-center mb-10">
    <img
      src="/images/circulation_independent.jpeg"
      alt="Independent Home Circulation Flow Diagram"
      className="w-[420px] h-auto rounded-lg border border-[#B8A47C] shadow-sm"
    />
  </div>

  {/* description */}
  <div
    className="max-w-4xl mx-auto text-[#1F3A2E] text-lg md:text-xl"
    style={{ fontFamily: "'Lato', serif" }}
  >
    <ul className="space-y-4">

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Circulation is planned to ensure <strong>easy movement between living, dining, and private zones</strong>.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Entrances and foyers are designed to provide a <strong>warm welcome and smooth transition</strong> into the home.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Bedrooms are accessed through <strong>private corridors</strong>, maintaining separation from common areas.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Kitchens and service areas are connected for <strong>functional convenience</strong> without disturbing main living spaces.
        </span>
      </li>

      <li className="flex items-start gap-3">
        <span className="text-[#C79A62] text-xl">➤</span>
        <span>
          Staircases, balconies, and outdoor pathways are integrated to promote <strong>natural flow and ventilation</strong>.
        </span>
      </li>

    </ul>
  </div>

</div>
{/* workspace */}
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
        Home workspaces are designed to balance <strong>productivity and comfort</strong> within a residential setting.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Study rooms or home offices are placed in <strong>quiet zones</strong> to minimize distractions.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62]">➤</span>
      <span>
        Flexible layouts allow spaces to serve multiple purposes such as <strong>work, study, or creative activities</strong>.
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
        Ergonomic furniture and organized storage ensure <strong>long-term comfort and efficiency</strong>.
      </span>
    </li>

  </ul>
</div>
</div>
{/* public area planning */}
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
        Public areas in independent homes include <strong>living rooms, dining spaces, and entry foyers</strong> designed for family and guest interaction.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        These spaces are positioned centrally to act as the <strong>social hub of the home</strong>.
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
        Clear circulation paths connect living, dining, and outdoor areas for <strong>intuitive navigation</strong>.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Accessibility features such as wide doorways and easy entry points are incorporated for <strong>elderly and differently-abled family members</strong>.
      </span>
    </li>
  </ul>
</div>
</div>
   {/* CONCLUSION (INDEPENDENT) */}
   <div className="mt-20 mx-14 bg-[#FDF4E2] rounded-xl shadow-md p-8">

<div
  className="max-w-4xl mx-auto mt-20 mb-20 text-[#1F3A2E] text-lg md:text-xl"
  style={{ fontFamily: "'Lato', serif" }}
>
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
        The independent plan is designed to provide <strong>privacy, comfort, and personalized living</strong> for families and individuals.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Clear separation between public areas, private bedrooms, and service zones ensures <strong>functional efficiency and family harmony</strong>.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Circulation planning enhances <strong>smooth movement flow</strong> while maintaining privacy in personal spaces.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        The layout emphasizes <strong>safety, accessibility, and comfort</strong> for all family members, including elderly and children.
      </span>
    </li>

    <li className="flex items-start gap-3">
      <span className="text-[#C79A62] text-xl">➤</span>
      <span>
        Overall, the independent plan demonstrates a <strong>balanced and adaptable approach</strong> to modern residential design, aligned with lifestyle needs.
      </span>
    </li>
  </ul>
</div>
</div>
</div>
</div>
      {/* LOGIN MODAL */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}  
    </div>
    
  );
}
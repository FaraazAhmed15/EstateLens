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
      {/* LEFT FIXED PANEL */}
      <div
        className="w-[360px] h-screen fixed left-0 top-0
                   bg-[#F4F1EC] border-r border-[#B8A47C]
                   flex flex-col items-center px-6 py-8"
      >
        {/* Left Logo */}
        <div className="bg-[#F4F1EC] p-4 rounded-lg">
          <img
            src="/images/logo.jpeg"
            alt="EstateLens Logo"
            className="w-32 mx-auto"/>
        </div>
        <h1 className="text-xl font-bold text-[#6D1B1C]">
          <strong>EstateLens</strong>
        </h1>
        <p className="text-sm text-[#1F3A2E]">See Property Clearly</p>

        {/* LEFT MENU BOX */}
        <div className="w-full mt-12 border border-[#B8A47C] rounded-lg overflow-hidden bg-[#F4F1EC] z-10">
          {[
            { name: "Properties", href: "/properties", icon: <FaBuilding /> },
            { name: "Market Insight", href: "/market_insight", icon: <FaNewspaper /> },
            { name: "Sign Up", href: "/sign_up", icon: <FaSignInAlt /> },
            { name: "About", href: "/about", icon: <FaInfoCircle /> },
            { name: "Building Plan", href: "/building_plan", icon: <FaHome /> },
            { name: "Logins", action: "login", icon: <FaKey /> },
            { name: "List Property", href: "/list_property", icon: <FaCity /> },
          ].map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={
                item.action === "login" ? () => setShowLoginModal(true) : undefined
              }
              className="group flex items-center gap-3 px-4 py-3 
                         border-t border-[#B8A47C]
                         text-[#1F3A2E]
                         hover:bg-[#6D1B1C] hover:text-white
                         transition">
              <span className="text-lg text-[#6D1B1C] group-hover:text-white">
                {item.icon}
              </span>
              <span className="font-medium">{item.name}</span>
            </a>
          ))}
        </div>
      </div>

      {/* RIGHT CONTENT AREA */}
<div className="flex-1 ml-[360px] relative bg-[#F4F1EC] overflow-y-auto">

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
    <h1 className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Residential Plan</h1>

    
    
           
 
  

   



     </div>
     







</div>
      {/* LOGIN MODAL */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}  
    </div>
    
  );
}
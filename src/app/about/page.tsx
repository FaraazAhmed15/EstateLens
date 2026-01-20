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



export default function AboutPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* left side */}
      <div
        className="w-[360px] h-screen fixed left-0 top-0
                   bg-[#F4F1EC] border-r border-[#B8A47C]
                   flex flex-col items-center px-6 py-8" >
        {/*  Logo on the left */}

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

        {/* left side content */}
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

      {/* right side */}
<div className="flex-1 ml-[360px] relative bg-[#F4F1EC] overflow-y-auto">

  {/*structure design*/}
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
               C0,99.3,79.7,98.7,194,99z" />
        </clipPath>
      </defs>

      <image
        href="/images/red_flower.jpeg"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
        clipPath="url(#curveClip)" />
    </svg>
  </div>

  {/* main page */}
  <div className="pt-[120px] p-8">
    <h1 className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>About EstateLens</h1>
      <h1 className="text-xl font-bold text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Where your future takes flight</h1>

    <div className="mt-10 text-[#1F3A2E] ml-14">
    <p className="text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}>
      EstateLens is a web-based real estate discovery platform developed as an academic project.
      The <strong>Platform is designed to simplify property search and decision-making </strong>
       by providing structured, transparent and easy to understand property information.
    </p>
    </div>
    <div className="mt-6 text-[#1F3A2E] ml-14">
      <p className="text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}> EstateLens aims to act as a single point of interaction for buyers, renters, property owners, and developers 
        by offering a clear and organized view of property listings. The project focuses on 
        <strong> usability, clarity of data and accessibility </strong> to ensure users can make informed
        real-estate decisions with confidence.</p>
      </div>
            <div className="mt-20 bg-[#FDF4E2] text-3xl font-bold mb-4 text-center text-[#6D1B1C] p-6 rounded-lg shadow-lg mx-14" style={{ fontFamily: "'Sanchez', serif" }}> 
              Our Mission
              <div className="mt-6 text-[#1F3A2E] ml-14">
      <p className="text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}> 
        Our mission is to bring <strong>transparency and reliability </strong> to real-estate discovery
        by presenting verified property information through an intuitive and user-friendly interface.<br/><br/>
        EstateLens seeks to reduce confusion in property search by organizing listings, highlighting key details,
        and enabling users to compare properties efficiently.
      </p>
      </div>
  </div>
  <div className="text-3xl font-bold mt-14 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>
    Structure 
         <img 
        src="/images/project_structure.jpeg" 
        alt="Structure Diagram" 
        className="mx-auto mt-6 rounded-lg shadow-lg"
        style={{ maxWidth: '65%', height: '65' }}/>
  </div>
  

   {/* the objectives section*/}
<section className="mt-20 mx-14">
      <h1 className="text-3xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Our Objectives</h1>

  <table className="w-full border border-[#B8A47C] border-collapse bg-white">

    <tbody>
      {/* the row one */}
      <tr>
        {/* left title */}
        <td
          rowSpan={6}
          className="w-[80px] text-center align-middle
                     bg-[#F4E9D8] text-[#A66E3A]
                     font-bold text-lg
                     border border-[#A66E3A]"
          style={{ fontFamily: "'Sanchez', serif" }}>
          O<br />u<br />r<br /><br />
          O<br />b<br />j<br />e<br />c<br />t<br />i<br />v<br />e<br />s
        </td>

        <td className="p-5 border border-[#B8A47C] text-[#1F3A2E]">
          To simplify property discovery for buyers and renters
        </td>
      </tr>

      <tr>
        <td className="p-5 border border-[#B8A47C] text-[#1F3A2E]">
          To provide a reliable platform for property owners to list properties
        </td>
      </tr>

      <tr>
        <td className="p-5 border border-[#B8A47C] text-[#1F3A2E]">
          To assist developers with structured and organized property listings
        </td>
      </tr>

      <tr>
        <td className="p-5 border border-[#B8A47C] text-[#1F3A2E]">
          To design a user-friendly interface with clear navigation
        </td>
      </tr>

      <tr>
        <td className="p-5 border border-[#B8A47C] text-[#1F3A2E]">
          To apply web development concepts to a real-world problem
        </td>
      </tr>

      <tr>
        <td className="p-5 border border-[#B8A47C] text-[#1F3A2E]">
          To understand system design, user roles, and data flow in web applications
        </td>
      </tr>
    </tbody>

  </table>
</section>
<Footer />


     </div>
     
</div>

     

      {/* login modal of the page*/}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        
    </div>
    
  );
}
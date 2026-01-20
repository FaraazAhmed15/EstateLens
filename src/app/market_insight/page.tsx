"use client";

import { useState } from "react";
import Link from "next/link";
import type { Metadata } from "next";
import LoginModal from "@/components/LoginModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";
import PersonalizedMap from "@/components/PersonalizedMap"; 
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaCity,
  FaNewspaper,
  FaSignInAlt,
  FaKey,
} from "react-icons/fa";



export default function Market_Insight_Page() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="flex min-h-screen">
      {/* left panel*/}
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

        {/* left menu */}
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

      {/* right part */}
<div className="flex-1 ml-[360px] relative bg-[#F4F1EC] overflow-y-auto">

  {/* sturcture design*/}
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

  {/* page content */}
  <div className="pt-[120px] p-8">
    <h1 className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Market Insight</h1>
      <h1 className="text-xl font-bold text-center text-[#6D1B1C]" style={{ fontFamily: "'Sanchez', serif" }}>Where your future takes flight</h1>

    <div className="mt-10 text-[#1F3A2E] ml-14">
    <p className="text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}>
      Market Insight at EstateLens provides <strong>data-driven analysis </strong>to help users understand real estate trends with
      clarity. From pricing movements and demand patterns to location-wise growth insights, this section is designed
      to support informed property decisions for <strong>buyers, investors and developers.</strong>
      
    </p>
    </div>
    
{/* market insight highlights */}
<section className="mt-20 mb-24">
  <div className="max-w-6xl mx-auto px-4">

    <h2
      className="text-3xl font-bold text-center text-[#6D1B1C] mb-14"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Market Insight Highlights
    </h2>

    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

      {[
        {
          id: "price-trend",
          title: "Price Trend",
          img: "/images/market_growth.jpeg",
          text: "Property prices have grown 8–12% year-on-year in major urban markets."
        },
        {
          id: "high-growth",
          title: "High-Growth Areas",
          img: "/images/market_high_growth.jpeg",
          text: "IT corridors and emerging zones show strong appreciation potential."
        },
        {
          id: "rental-yield",
          title: "Rental Yield",
          img: "/images/market_rental_yield.jpeg",
          text: "Rental returns typically average between 3–5%, with the exact yield varying based on locality "
        },
        {
          id: "demand-pattern",
          title: "Demand Pattern",
          img: "/images/demand_pattern.jpeg",
          text: "2 and 3 BHK homes dominate buyer demand, offering the right mix of affordability and space."
        }
      ].map((item, index) => (
        <a
          key={index}
          href={`#${item.id}`}
          className="group"
        >
          <div
            className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl overflow-hidden
                       shadow-sm transition-all duration-300
                       hover:-translate-y-1 hover:shadow-lg">
            {/* image */}
            <div className="h-[120px] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover group-hover:scale-105 transition duration-300"/>
            </div>

            {/* content */}
            <div className="p-6 text-center">
              <h4
                className="font-semibold text-[#6D1B1C] mb-2"
                style={{ fontFamily: "'Sanchez', serif" }}
              >
                {item.title}
              </h4>
              <p
                className="text-sm text-[#1F3A2E]"
                style={{ fontFamily: "'Lato', serif" }}
              >
                {item.text}
              </p>
            </div>
          </div>
        </a>
      ))}

    </div>
  </div>
</section>



{/* section */}
<section className="mt-24 mb-24">
  <div className="max-w-6xl mx-auto px-4">

    <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-2xl p-10 shadow-md">

      {/* Heading */}
      <h2
        className="text-3xl font-bold text-center text-[#6D1B1C] mb-4"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Ready to Make Smarter Property Decisions?
      </h2>

      {/* Subtext */}
      <p
        className="text-center text-[#1F3A2E] max-w-3xl mx-auto mb-10"
        style={{ fontFamily: "'Lato', serif" }}
      >
        Leverage real-time market insights, verified data, and expert guidance
        to confidently choose properties that align with your goals.
      </p>

      {/* buttons */}
      
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">

        <Link
  href="/properties"
  className="group bg-[#6D1B1C] text-white rounded-xl p-6
             hover:bg-[#541516] transition-all duration-300
             flex flex-col items-center gap-2 text-center"
>
  <span className="text-lg font-semibold">
    Explore Properties
  </span>
  <span className="text-sm opacity-90">
    Browse by location & property type
  </span>
</Link>

        <button
  onClick={() => {
    document
      .getElementById("calculator")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group bg-[#6D1B1C] text-white rounded-xl p-6 hover:bg-[#541516]"
>
  <div className="flex flex-col items-center gap-2">
    <span className="text-lg font-semibold">Calculate Your Budget</span>
    <span className="text-sm opacity-90">Estimate EMI & affordability</span>
  </div>
</button>

        <button
  onClick={() => {
    document
      .getElementById("insights")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group bg-[#6D1B1C] text-white rounded-xl p-6
             hover:bg-[#541516] transition-all duration-300"
>
  <div className="flex flex-col items-center gap-2 text-center">
    <span className="text-lg font-semibold">
      Personalized Insights
    </span>
    <span className="text-sm opacity-90">
      Market trends tailored to you
    </span>
  </div>
</button>

        <button
  onClick={() => {
    document
      .getElementById("expert")
      ?.scrollIntoView({ behavior: "smooth" });
  }}
  className="group bg-[#6D1B1C] text-white rounded-xl p-6 hover:bg-[#541516] transition-all"
>
  <div className="flex flex-col items-center gap-2">
    <span className="text-lg font-semibold">Talk to an Expert</span>
    <span className="text-sm opacity-90">
      Get clarity before you decide
    </span>
  </div>
</button>
      </div>

    </div>
  </div>
</section>
<section id="price-trend" className="mt-24">
  <div className="max-w-6xl mx-auto bg-[#FDF4E2] rounded-xl p-10 shadow-md">

    <h3
      className="text-2xl font-bold text-[#6D1B1C] mb-6"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Average Property Price Trend
    </h3>

    <p className="text-[#1F3A2E] leading-relaxed mb-4">
      Over the past few years, property prices across major Indian cities have
      shown consistent upward movement. Urban centers driven by employment,
      infrastructure development, and connectivity have recorded steady
      appreciation.
    </p>

    <p className="text-[#1F3A2E] leading-relaxed">
      Markets such as Bengaluru, Hyderabad, and Pune have witnessed average
      year-on-year price growth between <strong>8% and 12%</strong>, making
      real estate a stable long-term investment option.
    </p>

  </div>
</section>


<section id="high-growth" className="mt-24">
  <div className="max-w-6xl mx-auto bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">

    <h3
      className="text-2xl font-bold text-[#6D1B1C] mb-6"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      High-Growth Locations
    </h3>

    <p className="text-[#1F3A2E] leading-relaxed mb-4">
      High-growth locations are typically identified by strong infrastructure
      projects, proximity to employment hubs, and improving social amenities.
      These areas often outperform mature neighborhoods in appreciation.
    </p>

    <p className="text-[#1F3A2E] leading-relaxed">
      IT corridors, metro-connected zones, and suburban expansions continue to
      attract both end-users and investors looking for long-term value growth.
    </p>

  </div>
</section>

<section id="rental-yield" className="mt-24">
  <div className="max-w-6xl mx-auto bg-[#FDF4E2] rounded-xl p-10 shadow-md">

    <h3
      className="text-2xl font-bold text-[#6D1B1C] mb-6"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Rental Yield Overview
    </h3>

    <p className="text-[#1F3A2E] leading-relaxed mb-4">
      Rental yield represents the annual rental income earned from a property
      relative to its market value. It is a key metric for investors evaluating
      income-generating assets.
    </p>

    <p className="text-[#1F3A2E] leading-relaxed">
      Residential properties in high-demand urban areas typically offer rental
      yields between <strong>3% and 5%</strong>, with higher returns observed
      near IT hubs, universities, and commercial districts.
    </p>

  </div>
</section>


<section id="demand-pattern" className="mt-24 mb-24">
  <div className="max-w-6xl mx-auto bg-white border border-[#B8A47C] rounded-xl p-10 shadow-sm">

    <h3
      className="text-2xl font-bold text-[#6D1B1C] mb-6"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Demand by Property Type
    </h3>

    <p className="text-[#1F3A2E] leading-relaxed mb-4">
      Buyer demand in the real estate market is largely influenced by lifestyle
      preferences, affordability, and family size. Compact yet functional
      layouts continue to dominate residential demand.
    </p>

    <p className="text-[#1F3A2E] leading-relaxed">
      Currently, <strong>2 BHK and 3 BHK</strong> configurations remain the most
      sought-after property types, balancing space requirements with pricing
      efficiency.
    </p>

  </div>
</section>


{/* PERSONALIZED MARKET INSIGHTS */}
<section id="insights" className="mt-20 mb-20">
  <div className="max-w-5xl mx-auto bg-[#FDF4E2] rounded-xl shadow-md p-10">

    <h2
      className="text-3xl font-bold text-center text-[#6D1B1C] mb-6"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Personalized Market Insights
    </h2>

    <p
      className="text-center text-[#1F3A2E] max-w-3xl mx-auto mb-10 text-lg"
      style={{ fontFamily: "'Lato', serif" }}
    >
      Get real-estate insights tailored to your preferences — including budget,
      location, and purpose — to help you make confident and informed decisions.
    </p>

    {/* INSIGHT POINTS */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

      <div className="flex items-start gap-3">
        <span className="text-[#A66E3A] text-xl">➤</span>
        <p className="text-[#1F3A2E]">
          Location-based price trends and growth potential
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-[#A66E3A] text-xl">➤</span>
        <p className="text-[#1F3A2E]">
          Rental yield estimates based on your budget range
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-[#A66E3A] text-xl">➤</span>
        <p className="text-[#1F3A2E]">
          Recommended property types aligned with your goals
        </p>
      </div>

      <div className="flex items-start gap-3">
        <span className="text-[#A66E3A] text-xl">➤</span>
        <p className="text-[#1F3A2E]">
          Market outlook for buyers, renters, and investors
        </p>
      </div>

    </div>

    {/* CTA BUTTON */}
<div className="text-center">
  <button
    type="button"
    onClick={() => {
      document
        .getElementById("insights1")
        ?.scrollIntoView({ behavior: "smooth", block: "start" });
    }}
    className="bg-[#6D1B1C] text-white px-10 py-3 rounded-xl
               hover:bg-[#541516] transition-all duration-300"
  >
    Get Personalized Insights
  </button>
</div>

  </div>
</section>
{/* TALK TO OUR EXPERT */}
<section id="expert" className="mt-20 mb-24">
  <div className="max-w-5xl mx-auto bg-[#FDF4E2] rounded-xl shadow-md p-10">

    {/* Heading */}
    <h2
      className="text-3xl font-bold text-center text-[#6D1B1C] mb-4"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Talk to Our Property Expert
    </h2>

    {/* Subtext */}
    <p
      className="text-center text-[#1F3A2E] max-w-2xl mx-auto mb-10"
      style={{ fontFamily: "'Lato', serif" }}
    >
      Not sure where to start? Our experts help you understand pricing, locations,
      and building plans so you can make confident real estate decisions.
    </p>

    {/* CONTACT OPTIONS */}
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-12">

      {/* CALL */}
      <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
        <h4 className="font-semibold text-[#6D1B1C] mb-2">Call Us</h4>
        <p className="text-sm text-[#1F3A2E]">+91 9XXXXXXXXX</p>
      </div>

      {/* EMAIL */}
      <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
        <h4 className="font-semibold text-[#6D1B1C] mb-2">Email</h4>
        <p className="text-sm text-[#1F3A2E]">support@estatelens.com</p>
      </div>

      {/* RESPONSE */}
      <div className="bg-white border border-[#B8A47C] rounded-lg p-6 text-center">
        <h4 className="font-semibold text-[#6D1B1C] mb-2">Response Time</h4>
        <p className="text-sm text-[#1F3A2E]">Within 24 Hours</p>
      </div>

    </div>

    {/* SIMPLE FORM */}
    <div className="bg-white border border-[#B8A47C] rounded-xl p-8 max-w-3xl mx-auto">

      <h4
        className="text-xl font-semibold text-[#6D1B1C] mb-6 text-center"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Request Expert Assistance
      </h4>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <input
          type="text"
          placeholder="Your Name"
          className="border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
        />

        <input
          type="email"
          placeholder="Your Email"
          className="border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none"
        />

        <select
          className="border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none md:col-span-2"
        >
          <option>Interested In</option>
          <option>Buying Property</option>
          <option>Renting Property</option>
          <option>Commercial Property</option>
        </select>

        <textarea
          rows={3}
          placeholder="Your Message"
          className="border border-[#B8A47C] rounded-md px-4 py-2 focus:outline-none md:col-span-2"
        />

        <button
          className="md:col-span-2 bg-[#6D1B1C] text-white font-semibold py-3 rounded-md hover:bg-[#541516] transition"
        >
          Request Callback
        </button>

      </div>
    </div>

  </div>
</section>
<div id="insights1">
<PersonalizedMap />
</div>

<PriceCalculator />
<Footer />


     </div>
     
</div>

     

      {/* LOGIN MODAL */}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        
    </div>
    
  );
}
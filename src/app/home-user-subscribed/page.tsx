"use client";

import { useState } from "react";
import type { Metadata } from "next";
import LoginModal from "@/components/LoginModal";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PriceCalculator from '@/components/PriceCalculator';
import Link from "next/link";
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaCity,
  FaNewspaper,
  FaSignInAlt,
  FaKey,
} from "react-icons/fa";



export default function Home_User_Subscribed() {
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
            { name: "Properties", href: "/home-user-subscribed/home-user-subscribed-properties", icon: <FaBuilding /> },
            { name: "Market Insight", href: "/market_insight", icon: <FaNewspaper /> },
            { name: "Sign Up", href: "/sign_up", icon: <FaSignInAlt /> },
            { name: "About", href: "/about", icon: <FaInfoCircle /> },
            { name: "Building Plan", href: "/building_plan", icon: <FaHome /> },
            { name: "Logins", action: "login", icon: <FaKey /> },
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

      {/* right content area*/}
<div className="flex-1 ml-[360px] relative bg-[#F4F1EC] overflow-y-auto">

  {/* image structure */}
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

  {/* content */}
  <div className="pt-[120px] p-8">

    {/* hero/ title*/}
    <h1
      className="text-5xl font-bold mb-4 text-center text-[#6D1B1C]"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
       EstateLens
    </h1>

    <h2
      className="text-xl font-bold text-center text-[#6D1B1C] mb-10"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Where your future takes flight
    </h2>

    
    


    {/* mission */}
    <div className="mt-20 bg-[#FDF4E2] text-3xl font-bold mb-4 text-center text-[#6D1B1C] p-6 rounded-lg shadow-lg mx-14"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Our Mission
      <div className="mt-6 text-[#1F3A2E] ml-14">
        <p className="text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}>
          Our mission is to bring <strong>transparency and reliability</strong> to real-estate discovery
          by presenting verified property information through an intuitive and user-friendly interface.
          <br /><br />
          EstateLens seeks to reduce confusion in property search by organizing listings, highlighting key details,
          and enabling users to compare properties efficiently.
        </p>
      </div>
    </div>


     
{/* search section */}
<section className="mb-4 mt-10 ml-4">
  <div className="max-w-6xl mx-auto bg-white border border-[#B8A47C] rounded-xl shadow-lg p-8">

    {/* Heading */}
    <h2
      className="text-2xl md:text-3xl font-bold text-center text-[#6D1B1C] mb-8"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Find the Right Property
    </h2>

    {/* search form */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-[#1F3A2E] mb-1">
          Location
        </label>
        <select className="w-full border border-[#B8A47C] rounded-md px-3 py-2 focus:outline-none">
          <option>Select Location</option>
          <option>Bengaluru</option>
          <option>Mysuru</option>
          <option>Chennai</option>
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-sm font-medium text-[#1F3A2E] mb-1">
          Property Type
        </label>
        <select className="w-full border border-[#B8A47C] rounded-md px-3 py-2 focus:outline-none">
          <option>Select Type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Plot / Land</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-[#1F3A2E] mb-1">
          Budget
        </label>
        <select className="w-full border border-[#B8A47C] rounded-md px-3 py-2 focus:outline-none">
          <option>Select Budget</option>
          <option>Below ₹50L</option>
          <option>₹50L – ₹1Cr</option>
          <option>Above ₹1Cr</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button className="w-full bg-[#6D1B1C] text-white font-semibold py-2 rounded-md hover:bg-[#541516] transition">
          Search Properties
        </button>
      </div>

    </div>

  </div>
</section>



    {/* vision*/}
    <div className="mt-16 mx-14 bg-white border border-[#B8A47C] rounded-xl p-8 shadow-sm">
      <h2
        className="text-2xl font-bold text-[#6D1B1C] mb-4"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Our Vision
      </h2>

      <p className="text-[#1F3A2E] text-lg leading-relaxed" style={{ fontFamily: "'Lato', serif" }}>
        We envision a future where buying, selling, and renting property is simple,
        transparent, and trustworthy. EstateLens strives to bridge the gap between
        property seekers and property owners by providing accurate, structured, and
        easy-to-understand real estate data.
      </p>
    </div>

    {/* question */}
    <section className="mt-16 mx-14">
      <h2
        className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Why Choose EstateLens?
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">Verified Listings</h4>
          <p className="text-[#1F3A2E] text-sm">
            Every property goes through expert review before being published.
          </p>
        </div>

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">Data-Driven Insights</h4>
          <p className="text-[#1F3A2E] text-sm">
            Market trends and analytics help users make informed decisions.
          </p>
        </div>

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 shadow-md">
          <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">User-Friendly Design</h4>
          <p className="text-[#1F3A2E] text-sm">
            Clean, structured, and easy-to-navigate interface.
          </p>
        </div>

      </div>
    </section>

    {/* who we serve */}
    <section className="mt-16 mx-14">
      <h2
        className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Who We Serve
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        <div className="bg-white border border-[#B8A47C] rounded-xl p-6 shadow-sm">
          <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">Buyers</h4>
          <p className="text-[#1F3A2E] text-sm">
            Find verified homes with clear pricing and details.
          </p>
        </div>

        <div className="bg-white border border-[#B8A47C] rounded-xl p-6 shadow-sm">
          <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">Property Owners</h4>
          <p className="text-[#1F3A2E] text-sm">
            List properties and connect with genuine buyers.
          </p>
        </div>

        <div className="bg-white border border-[#B8A47C] rounded-xl p-6 shadow-sm">
          <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">Developers</h4>
          <p className="text-[#1F3A2E] text-sm">
            Showcase projects to a wider audience.
          </p>
        </div>

      </div>
    </section>

    {/* how it works*/}
    <section className="mt-16 mx-14">
      <h2
        className="text-3xl font-bold text-center text-[#6D1B1C] mb-8"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        How EstateLens Works
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-[#6D1B1C]">Search</h4>
          <p className="text-[#1F3A2E] text-sm">Browse properties by location and type.</p>
        </div>

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-[#6D1B1C]">Compare</h4>
          <p className="text-[#1F3A2E] text-sm">Compare prices, amenities, and locations.</p>
        </div>

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-[#6D1B1C]">Connect</h4>
          <p className="text-[#1F3A2E] text-sm">Message owners directly.</p>
        </div>

        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-6 text-center">
          <h4 className="text-lg font-semibold text-[#6D1B1C]">Decide</h4>
          <p className="text-[#1F3A2E] text-sm">Make informed decisions.</p>
        </div>

      </div>
    </section>

    {/* calculator */}
    <PriceCalculator />

    {/* featured properties */}
    <section className="mt-14 ml-6 mb-16">
      <h2
        className="text-3xl font-bold text-center text-[#6D1B1C] mb-12"
        style={{ fontFamily: "'Sanchez', serif" }}>
        Featured Properties
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

        {/* CARD 1 */}
        <Link href="/latest_prop_pages/home_residential" className="group">
          <div className="bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden
                          hover:shadow-xl transition cursor-pointer">
            <img
              src="/images/home_card1.jpeg"
              alt="Residential Apartment"
              className="w-full h-[200px] object-cover"/>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2 group-hover:underline">
                Luxury Residential Apartment
              </h4>
              <p className="text-sm text-[#1F3A2E] mb-3">
                2 BHK • Bengaluru • Near Metro
              </p>
              <p className="text-sm font-medium text-[#A66E3A]">
                ₹ 85 Lakhs
              </p>
            </div>
          </div>
        </Link>

        {/* CARD 2 */}
        <Link href="/latest_prop_pages/home_office" className="group">
          <div className="bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden
                          hover:shadow-xl transition cursor-pointer">
            <img
              src="/images/home_card2.jpeg"
              alt="Commercial Space"
              className="w-full h-[200px] object-cover"/>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2 group-hover:underline">
                Commercial Office Space
              </h4>
              <p className="text-sm text-[#1F3A2E] mb-3">
                IT Park • Whitefield
              </p>
              <p className="text-sm font-medium text-[#A66E3A]">
                ₹ 9.4 Crore
              </p>
            </div>
          </div>
        </Link>

        {/* CARD 3 */}
        <Link href="/latest_prop_pages/home_villa" className="group">
          <div className="bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden
                          hover:shadow-xl transition cursor-pointer">
            <img
              src="/images/home_card3.jpeg"
              alt="Villa Property"
              className="w-full h-[200px] object-cover"/>
            <div className="p-6">
              <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2 group-hover:underline">
                Premium Independent Villa
              </h4>
              <p className="text-sm text-[#1F3A2E] mb-3">
                Gated Community • Mysuru
              </p>
              <p className="text-sm font-medium text-[#A66E3A]">
                ₹ 2.1 Crore
              </p>
            </div>
          </div>
        </Link>

      </div>
    </section>

    <Footer />

  </div>
</div>
     

      {/* login modal of the page*/}
      {showLoginModal && <LoginModal onClose={() => setShowLoginModal(false)} />}
        
    </div>
    
  );
}
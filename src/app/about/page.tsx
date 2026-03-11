"use client";

import { useState } from "react";
import LoginModal from "@/components/LoginModal";
import Footer from "@/components/Footer";
import {
  FaBuilding,
  FaNewspaper,
  FaHome,
  FaKey,
} from "react-icons/fa";

export default function AboutPage() {
  const [showLoginModal, setShowLoginModal] = useState(false);

  return (
    <div className="min-h-screen bg-[#EDEDED] text-[#2E2E2E] overflow-x-hidden">

      {/* Top Navbar */}
      <nav className="flex justify-between items-center px-12 py-6 bg-white shadow-md border-b border-gray-300">
        <div>
          <h1 className="text-2xl font-bold text-[#8B6F47]">
            EstateLens
          </h1>
          <p className="text-sm text-gray-500">See Property Clearly</p>
        </div>

        <div className="flex gap-8 items-center text-sm font-medium">
          <a href="/properties" className="hover:text-[#8B6F47] flex items-center gap-2 transition">
            <FaBuilding /> Properties
          </a>
          <a href="/market_insight" className="hover:text-[#8B6F47] flex items-center gap-2 transition">
            <FaNewspaper /> Market Insight
          </a>
          <a href="/building_plan" className="hover:text-[#8B6F47] flex items-center gap-2 transition">
            <FaHome /> Building Plan
          </a>
          <button
            onClick={() => setShowLoginModal(true)}
            className="hover:text-[#8B6F47] flex items-center gap-2 transition"
          >
            <FaKey /> Login
          </button>
        </div>
      </nav>

      {/* Hero Section */}
      <section
        className="relative h-[60vh] flex items-center justify-center text-center"
        style={{
          backgroundImage:
            "url('https://www.bruceclay.com/wp-content/uploads/2025/05/real-estate-industry-1200.jpg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/50"></div>

        <div className="relative z-10 text-white">
          <h1 className="text-6xl font-extrabold tracking-wide">
            About Us
          </h1>
        </div>
      </section>

      {/* Main Section */}
      <section className="max-w-7xl mx-auto px-10 py-20">

        {/* About & Mission Side by Side */}
        <div className="grid md:grid-cols-2 gap-12">

          {/* About Content */}
          <div className="bg-white p-12 rounded-3xl shadow-lg">
            <p className="text-xl leading-relaxed">
              EstateLens is a web-based real estate discovery platform developed as an academic project.
              The <strong>platform is designed to simplify property search and decision-making</strong>
              by providing structured, transparent and easy-to-understand property information.
            </p>

            <p className="text-xl mt-8 leading-relaxed">
              EstateLens aims to act as a single point of interaction for buyers, renters,
              property owners, and developers by offering a clear and organized view of property listings.
              The project focuses on <strong>usability, clarity of data and accessibility</strong>
              to ensure users can make informed real-estate decisions with confidence.
            </p>
          </div>

          {/* Mission Content */}
          <div className="bg-[#8B6F47] text-white p-12 rounded-3xl shadow-lg">
            <h2 className="text-4xl font-extrabold mb-8 text-center">
              Our Mission
            </h2>

            <p className="text-xl leading-relaxed">
              Our mission is to bring <strong>transparency and reliability</strong> to real-estate discovery
              by presenting verified property information through an intuitive and user-friendly interface.
              <br /><br />
              EstateLens seeks to reduce confusion in property search by organizing listings,
              highlighting key details, and enabling users to compare properties efficiently.
            </p>
          </div>

        </div>

        {/* Structure Section */}
        <div className="mt-24 text-center">
          <h2 className="text-4xl font-extrabold text-[#8B6F47] mb-12">
            Structure
          </h2>

          <div className="bg-white p-12 rounded-3xl shadow-lg">
            <img
              src="/images/project_structure.jpeg"
              alt="Structure Diagram"
              className="mx-auto rounded-xl shadow-md"
            />
          </div>
        </div>

        {/* Objectives Timeline */}
        <div className="mt-24">
          <h2 className="text-4xl font-extrabold text-[#8B6F47] text-center mb-16">
            Our Objectives
          </h2>

          <div className="relative border-l-4 border-[#8B6F47] space-y-14 pl-12">

            {[
              "To simplify property discovery for buyers and renters",
              "To provide a reliable platform for property owners to list properties",
              "To assist developers with structured and organized property listings",
              "To design a user-friendly interface with clear navigation",
              "To apply web development concepts to a real-world problem",
              "To understand system design, user roles, and data flow in web applications",
            ].map((objective, index) => (
              <div key={index} className="relative">
                <div className="absolute -left-7 top-3 w-5 h-5 bg-[#8B6F47] rounded-full"></div>
                <div className="bg-white p-8 rounded-xl shadow-md text-lg">
                  {objective}
                </div>
              </div>
            ))}

          </div>
        </div>

      </section>

      <Footer />

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}
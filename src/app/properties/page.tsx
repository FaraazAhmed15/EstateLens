"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";
import PropertyListings from "@/components/latest_properties";
import CommercialProperties from "@/components/commercial_properties";
import PlotsAndLand from "@/components/plot_land";
import RentalAndLease from "@/components/RentalAndLease";

export default function PropertiesPage() {
  return (
    <div className="min-h-screen bg-[#F4F1EC]">

      {/*  calling navbar */}
      <Navbar />

      {/* content */}
      <div className="pt-28 px-10 max-w-7xl mx-auto">

        {/* hero part*/}
        <section className="mb-16 text-center">
          <h1
            className="text-5xl font-bold text-[#6D1B1C] mb-4"
            style={{ fontFamily: "'Sanchez', serif" }}>
            Properties
          </h1>
          <p
            className="text-lg text-[#1F3A2E] max-w-3xl mx-auto"
            style={{ fontFamily: "'Lato', serif" }}>
            Explore verified residential and commercial properties with
            transparent pricing, clear layouts, and trusted insights.
          </p>
        </section>

        {/* FILTER SECTION */}
        <section className="mb-16 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 shadow-md">
          <h3
            className="text-2xl font-semibold text-[#6D1B1C] mb-6"
            style={{ fontFamily: "'Sanchez', serif" }}>
            Filter Properties
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">
            <select className="border border-[#B8A47C] rounded-md px-4 py-2">
              <option>Location</option>
              <option>Bengaluru</option>
              <option>Mysuru</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2">
              <option>Property Type</option>
              <option>Residential</option>
              <option>Commercial</option>
              <option>Plot / Land</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2">
              <option>Budget</option>
              <option>Below ₹50L</option>
              <option>₹50L – ₹1Cr</option>
              <option>Above ₹1Cr</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2">
              <option>BHK</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
            </select>

            <button className="bg-[#6D1B1C] text-white rounded-md hover:bg-[#541516] transition">
              Apply Filters
            </button>
          </div>
        </section>


        <PropertyListings />
        <CommercialProperties />
        <PlotsAndLand  />
        <RentalAndLease />
      </div>
      <Footer />
    </div>
  );
}
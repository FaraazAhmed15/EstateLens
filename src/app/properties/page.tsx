"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyListings from "@/components/latest_properties";
import CommercialProperties from "@/components/commercial_properties";
import PlotsAndLand from "@/components/plot_land";
import RentalAndLease from "@/components/RentalAndLease";

export default function PropertiesPage() {
  const [location, setLocation] = useState("");
  const [type, setType] = useState("");
  const [category, setCategory] = useState("");
  const [budget, setBudget] = useState("");
  const [bhk, setBhk] = useState("");

  const [results, setResults] = useState<any[]>([]);
  const [showResults, setShowResults] = useState(false);

  const applyFilters = async () => {
    try {
      // Build query with whatever fields are currently selected
      const res = await fetch(
        `/api/properties?location=${location}&type=${type}&category=${category}&budget=${budget}&bhk=${bhk}`
      );

      const data = await res.json();
      setResults(data);
      setShowResults(true);
    } catch (error) {
      console.error("Filter error:", error);
    }
  };

  return (
    <div className="min-h-screen bg-[#F4F1EC]">
      <Navbar />

      <div className="pt-28 px-10 max-w-7xl mx-auto">

        {/* Hero */}
        <section className="mb-16 text-center">
          <h1 className="text-5xl font-bold text-[#6D1B1C] mb-4">Properties</h1>
          <p className="text-lg text-[#1F3A2E] max-w-3xl mx-auto">
            Explore verified residential and commercial properties with transparent pricing, clear layouts, and trusted insights.
          </p>
        </section>

        {/* Filters */}
        <section className="mb-16 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 shadow-md">
          <h3 className="text-2xl font-semibold text-[#6D1B1C] mb-6">Filter Properties</h3>

          <div className="grid grid-cols-1 md:grid-cols-6 gap-6">

            <select className="border border-[#B8A47C] rounded-md px-4 py-2" onChange={e => setLocation(e.target.value)}>
              <option value="">Location</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mysuru">Mysuru</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2" onChange={e => setCategory(e.target.value)}>
              <option value="">Category</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Rental">Rental</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2" onChange={e => setType(e.target.value)}>
              <option value="">Property Type</option>
              <option value="Apartment">Apartment</option>
              <option value="Villa">Villa</option>
              <option value="Plot">Plot</option>
              <option value="Land">Land</option>
              <option value="Shop">Shop</option>
              <option value="Office Space">Office Space</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2" onChange={e => setBudget(e.target.value)}>
              <option value="">Budget</option>
              <option value="Below50L">Below ₹50L</option>
              <option value="50L-1Cr">₹50L – ₹1Cr</option>
              <option value="Above1Cr">Above ₹1Cr</option>
            </select>

            <select className="border border-[#B8A47C] rounded-md px-4 py-2" onChange={e => setBhk(e.target.value)}>
              <option value="">BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
              <option value="4">4 BHK</option>
            </select>

            <button
              onClick={applyFilters}
              className="bg-[#6D1B1C] text-white rounded-md hover:bg-[#541516] transition"
            >
              Apply Filters
            </button>

          </div>
        </section>

        {/* Filter Results */}
        {showResults ? (
          results.length > 0 ? (
            <div className="grid md:grid-cols-3 gap-8 mb-16">
              {results.map((p: any) => (
                <div key={p.id} className="bg-white rounded-xl shadow-md p-4">
                  <img src={p.image} className="w-full h-52 object-cover rounded-lg" />
                  <h3 className="text-lg font-semibold mt-3">{p.title}</h3>
                  <p className="text-[#1F3A2E]">{p.location}</p>
                  <p className="text-[#6D1B1C] font-semibold">{p.price}</p>
                </div>
              ))}
            </div>
          ) : (
            <div className="text-center text-[#6D1B1C] mb-16 text-lg">
              No properties found for selected filters.
            </div>
          )
        ) : (
          <>
            <PropertyListings />
            <CommercialProperties />
            <PlotsAndLand />
            <RentalAndLease />
          </>
        )}

      </div>

      <Footer />
    </div>
  );
}
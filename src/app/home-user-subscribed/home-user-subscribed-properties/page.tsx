"use client";

import { useState } from "react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Link from "next/link";

import SubscribedLatestProperties from "@/components/subscribed_user_latest_properties";
import Subscribed_user_PlotsAndLand from "@/components/subscribed_user_plot_land";
import Subscribed_Commercial_Properties from "@/components/subscribed_user_commercial_properties";
import Subscribed_user_RentalAndLease from "@/components/subscribed_user_rental_lease";

type Property = {
  id: number;
  title: string;
  location: string;
  price: string;
  image: string;
  page_path: string;
};

export default function Subscribed_PropertiesPage() {

  const [location,setLocation]=useState("");
  const [type,setType]=useState("");
  const [budget,setBudget]=useState("");
  const [bhk,setBhk]=useState("");

  const [filtered,setFiltered]=useState<Property[]>([]);
  const [showFiltered,setShowFiltered]=useState(false);


  const handleFilter = async () => {

    try {

      const params = new URLSearchParams({
        location,
        type,
        budget,
        bhk
      });

      const res = await fetch(`/api/properties?${params.toString()}`);
      const data = await res.json();

      setFiltered(Array.isArray(data) ? data : []);
      setShowFiltered(true);

    } catch (err) {

      console.log(err);
      setFiltered([]);

    }

  };


  const handleClear = () => {

    setLocation("");
    setType("");
    setBudget("");
    setBhk("");

    setShowFiltered(false);

  };


  return (
    <div className="min-h-screen bg-[#F4F1EC]">

      <Navbar />

      <div className="pt-28 px-10 max-w-7xl mx-auto">

        {/* HERO */}
        <section className="mb-16 text-center">

          <h1
            className="text-5xl font-bold text-[#6D1B1C] mb-4"
            style={{ fontFamily: "'Sanchez', serif" }}
          >
            Properties
          </h1>

          <p
            className="text-lg text-[#1F3A2E] max-w-3xl mx-auto"
            style={{ fontFamily: "'Lato', serif" }}
          >
            Explore verified residential and commercial properties with
            transparent pricing, clear layouts, and trusted insights.
          </p>

        </section>


        {/* FILTER SECTION */}
        <section className="mb-16 bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 shadow-md">

          <h3
            className="text-2xl font-semibold text-[#6D1B1C] mb-6"
            style={{ fontFamily: "'Sanchez', serif" }}
          >
            Filter Properties
          </h3>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-6">

            {/* LOCATION */}
            <select
              value={location}
              onChange={(e)=>setLocation(e.target.value)}
              className="border border-[#B8A47C] rounded-md px-4 py-2"
            >
              <option value="">Location</option>
              <option value="Bengaluru">Bengaluru</option>
              <option value="Mysuru">Mysuru</option>
            </select>


            {/* TYPE */}
            <select
              value={type}
              onChange={(e)=>setType(e.target.value)}
              className="border border-[#B8A47C] rounded-md px-4 py-2"
            >
              <option value="">Property Type</option>
              <option value="Residential">Residential</option>
              <option value="Commercial">Commercial</option>
              <option value="Plot">Plot / Land</option>
            </select>


            {/* BUDGET */}
            <select
              value={budget}
              onChange={(e)=>setBudget(e.target.value)}
              className="border border-[#B8A47C] rounded-md px-4 py-2"
            >
              <option value="">Budget</option>
              <option value="Below50L">Below ₹50L</option>
              <option value="50L-1Cr">₹50L – ₹1Cr</option>
              <option value="Above1Cr">Above ₹1Cr</option>
            </select>


            {/* BHK */}
            <select
              value={bhk}
              onChange={(e)=>setBhk(e.target.value)}
              className="border border-[#B8A47C] rounded-md px-4 py-2"
            >
              <option value="">BHK</option>
              <option value="1">1 BHK</option>
              <option value="2">2 BHK</option>
              <option value="3">3 BHK</option>
            </select>


            {/* BUTTONS */}
            <div className="flex gap-2">

              <button
                onClick={handleFilter}
                className="bg-[#6D1B1C] text-white rounded-md px-6 py-2 hover:bg-[#541516]"
              >
                Apply Filters
              </button>

              <button
                onClick={handleClear}
                className="bg-gray-400 text-white rounded-md px-6 py-2"
              >
                Clear
              </button>

            </div>

          </div>

        </section>



        {/* FILTERED RESULTS */}
        {showFiltered ? (

          <div className="grid md:grid-cols-3 gap-8">

            {filtered.length === 0 ? (
              <p>No properties found</p>
            ) : (
              filtered.map((p)=>(
                <div key={p.id} className="bg-white p-4 rounded shadow">

                  <img
                    src={p.image}
                    alt={p.title}
                    className="w-full h-48 object-cover rounded"
                  />

                  <h3 className="mt-3 font-semibold">
                    {p.title}
                  </h3>

                  <p>{p.location}</p>

                  <p className="text-[#6D1B1C] font-bold">
                    {p.price}
                  </p>

                  {/* VIEW DETAILS BUTTON */}
                  <Link
                    href={p.page_path}
                    className="mt-3 inline-block bg-[#6D1B1C] text-white px-5 py-2 rounded-md hover:bg-[#541516]"
                  >
                    View Details
                  </Link>

                </div>
              ))
            )}

          </div>

        ) : (

          <>
            <SubscribedLatestProperties />
            <Subscribed_Commercial_Properties />
            <Subscribed_user_PlotsAndLand />
            <Subscribed_user_RentalAndLease />
          </>

        )}

      </div>

      <Footer />

    </div>
  );
}
"use client";

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SubscribePopup from "@/components/buttonPopup";

export default function PlotsAndLand() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const plots = [
    {
      title: "Residential Plot",
      location: "Devanahalli, Bengaluru",
      price: "₹38 Lakhs",
      img: "/images/plot.jpeg",
      details: "1200 sq.ft • Ready for Construction",
    },
    {
      title: "Premium Residential Land",
      location: "Sarjapur Road, Bengaluru",
      price: "₹72 Lakhs",
      img: "/images/premium_land.jpeg",
      details: "2400 sq.ft • Gated Layout",
    },
    {
      title: "Commercial Land",
      location: "Electronic City, Bengaluru",
      price: "₹2.1 Cr",
      img: "/images/commerical_plot1.jpeg",
      details: "Ideal for Office / Retail",
    },
    {
      title: "Investment Plot",
      location: "North Bengaluru",
      price: "₹1.1 Cr",
      img: "/images/commercial_plot.jpeg",
      details: "High Growth Zone",
    },
  ];

  return (
    <section className="mb-24 relative">
      {/* heading */}
      <h2
        className="text-3xl font-bold text-[#6D1B1C] mb-10"
        style={{ fontFamily: "'Sanchez', serif" }}>
        Plots & Land
      </h2>

      {/* left arrow*/}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]"
      >
        <FaChevronLeft />
      </button>

      {/* right arrow */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]">
        <FaChevronRight />
      </button>

      {/* scrolling part */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth px-14 scrollbar-hide">
        {plots.map((plot, index) => (
          <div
            key={index}
            onClick={() => setShowPopup(true)}
            className="min-w-[320px] bg-white border border-[#B8A47C]
                       rounded-xl shadow-md overflow-hidden
                       hover:shadow-xl hover:-translate-y-1
                       transition cursor-pointer">
            {/* image */}
            <img
              src={plot.img}
              alt={plot.title}
              className="w-full h-[200px] object-cover"/>

            {/* content */}
            <div className="p-6">
              <h4
                className="text-lg font-semibold text-[#6D1B1C] mb-1"
                style={{ fontFamily: "'Sanchez', serif" }}
              >
                {plot.title}
              </h4>

              <p className="text-sm text-[#1F3A2E] mb-2">
                {plot.location}
              </p>

              <p className="text-sm text-[#1F3A2E] mb-4">
                {plot.details}
              </p>

              <p className="font-semibold text-[#6D1B1C] mb-4">
                {plot.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(true);
                }}
                className="w-full bg-[#6D1B1C] text-white py-2 rounded-md
                           hover:bg-[#541516] transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* subscribe popup */}
      <SubscribePopup isOpen={
          showPopup
        } 
        onClose={() =>
          setShowPopup(false)
        } />
    </section>
  );
}
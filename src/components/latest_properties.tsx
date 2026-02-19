"use client";

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SubscribePopup from "@/components/buttonPopup";

export default function PropertyListings() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const properties = [
    {
      title: "Luxury Residential Apartment",
      location: "Whitefield, Bengaluru",
      price: "₹95 Lakhs",
      img: "/images/luxury.jpeg",
      details: "3 BHK • 1650 sq.ft • Ready to Move",
    },
    {
      title: "Commercial Office Space",
      location: "Electronic City, Bengaluru",
      price: "₹1.8 Cr",
      img: "/images/commercial_office.jpeg",
      details: "Grade A • 2500 sq.ft • IT Hub",
    },
    {
      title: "Independent Villa",
      location: "Sarjapur Road, Bengaluru",
      price: "₹2.6 Cr",
      img: "/images/villa1.jpeg",
      details: "4 BHK • Private Garden",
    },
    {
      title: "Premium Studio Apartment",
      location: "Indiranagar, Bengaluru",
      price: "₹55 Lakhs",
      img: "/images/premium_studio_apartment.jpeg",
      details: "1 BHK • 650 sq.ft • Fully Furnished",
    },
    {
      title: "Luxury Penthouse",
      location: "MG Road, Bengaluru",
      price: "₹3.2 Cr",
      img: "/images/luxury_penthouse.jpeg",
      details: "4 BHK • 3200 sq.ft • Skyline View",
    },
    {
      title: "Modern Row House",
      location: "Bannerghatta Road, Bengaluru",
      price: "₹1.45 Cr",
      img: "/images/modern_row_house.jpeg",
      details: "3 BHK • 2100 sq.ft • Gated Community",
    },
    {
      title: "Affordable Residential Plot",
      location: "Devanahalli, Bengaluru",
      price: "₹38 Lakhs",
      img: "/images/plot.jpeg",
      details: "1200 sq.ft • Ready for Construction",
    },
    {
      title: "High-Rise Apartment",
      location: "Rajajinagar, Bengaluru",
      price: "₹1.1 Cr",
      img: "/images/high_rise_apartment.jpeg",
      details: "2 BHK • 1250 sq.ft • Clubhouse Access",
    },
  ];

  return (
    <section className="mb-20 relative">
      <h3
        className="text-3xl font-bold text-[#6D1B1C] mb-10 text-center"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Latest Properties
      </h3>

      {/* left arrow on the row */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]">
        <FaChevronLeft />
      </button>

      {/* right arrow on the row */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]"
      >
        <FaChevronRight />
      </button>

      {/* scrolling logic */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth px-14 scrollbar-hide">
        {properties.map((property, index) => (
          <div
            key={index}
            onClick={() => setShowPopup(true)}
            className="min-w-[320px] bg-white border border-[#B8A47C]
                       rounded-xl shadow-md overflow-hidden
                       hover:shadow-xl hover:-translate-y-1
                       transition cursor-pointer">
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-[200px] object-cover"/>

            <div className="p-6">
              <h4
                className="text-xl font-semibold text-[#6D1B1C] mb-1"
                style={{ fontFamily: "'Sanchez', serif" }}>
                {property.title}
              </h4>

              <p className="text-sm text-[#1F3A2E] mb-2">
                {property.location}
              </p>

              <p className="text-sm text-[#1F3A2E] mb-3">
                {property.details}
              </p>

              <p className="font-semibold text-[#6D1B1C] mb-4">
                {property.price}
              </p>

              <button
                onClick={(e) => {
                  e.stopPropagation();
                  setShowPopup(true);
                }}
                className="inline-block bg-[#6D1B1C] text-white
                           px-5 py-2 rounded-md
                           hover:bg-[#541516] transition">
                View Details
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* subscribe popup*/}
       <SubscribePopup isOpen={
          showPopup
        } 
        onClose={() =>
          setShowPopup(false)
        } />
    </section>
  );
}
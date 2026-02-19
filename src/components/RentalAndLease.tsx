"use client";

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SubscribePopup from "@/components/buttonPopup";

export default function RentalAndLease() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  const rentals = [
    {
      title: "2 BHK Apartment for Rent",
      location: "Indiranagar, Bengaluru",
      price: "₹35,000 / month",
      img: "/images/rent.jpeg",
      details: "Semi-Furnished • Family Preferred",
    },
    {
      title: "Independent House on Lease",
      location: "JP Nagar, Bengaluru",
      price: "₹23 Lakhs Lease",
      img: "/images/independent.jpeg",
      details: "3 BHK • Long-Term Lease",
    },
    {
      title: "Commercial Shop on Rent",
      location: "Whitefield, Bengaluru",
      price: "₹1.7 Lakhs / month",
      img: "/images/shop.jpeg",
      details: "1200 sq.ft • IT Corridor",
    },
    {
      title: "Co-working Space",
      location: "MG Road, Bengaluru",
      price: "₹9,000 / seat",
      img: "/images/cowork.jpeg",
      details: "Fully Furnished • Startup Friendly",
    },
    {
      title: "Retail Shop",
      location: "BTM Layout, Bengaluru",
      price: "₹35,000 / month",
      img: "/images/btm_shop.jpeg",
      details: "High Footfall Area",
    },
  ];

  return (
    <section className="mb-24 relative">
      {/* heading */}
      <h2
        className="text-3xl font-bold text-[#6D1B1C] mb-10"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Rental & Lease Options
      </h2>

      {/* left arrow */}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]">
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

      {/* scrolling section */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth px-14 scrollbar-hide"
      >
        {rentals.map((item, index) => (
          <div
            key={index}
            onClick={() => setShowPopup(true)}
            className="min-w-[320px] bg-white border border-[#B8A47C]
                       rounded-xl shadow-md overflow-hidden
                       hover:shadow-xl hover:-translate-y-1
                       transition cursor-pointer">
            {/* image */}
            <img
              src={item.img}
              alt={item.title}
              className="w-full h-[200px] object-cover"/>

            {/* content */}
            <div className="p-6">
              <h4
                className="text-lg font-semibold text-[#6D1B1C] mb-1"
                style={{ fontFamily: "'Sanchez', serif" }}>
                {item.title}
              </h4>

              <p className="text-sm text-[#1F3A2E] mb-2">
                {item.location}
              </p>

              <p className="text-sm text-[#1F3A2E] mb-4">
                {item.details}
              </p>

              <p className="font-semibold text-[#6D1B1C] mb-4">
                {item.price}
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
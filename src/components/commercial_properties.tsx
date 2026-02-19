"use client";

import { useRef, useState } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";
import SubscribePopup from "@/components/buttonPopup";

export default function CommercialProperties() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [showPopup, setShowPopup] = useState(false);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;
    scrollRef.current.scrollBy({
      left: direction === "left" ? -340 : 340,
      behavior: "smooth",
    });
  };

  const commercialItems = [
    {
      title: "Office Space",
      desc: "Work-ready offices in prime business locations.",
      img: "/images/commercial_office.jpeg",
    },
    {
      title: "Retail Space",
      desc: "Shops and showrooms in high-footfall areas.",
      img: "/images/rental_space.jpeg",
    },
    {
      title: "IT & Business Park",
      desc: "Large-scale commercial hubs for enterprises.",
      img: "/images/it_parl.jpeg",
    },
    {
      title: "Co-Working Spaces",
      desc: "Flexible shared offices ideal for startups and freelancers.",
      img: "/images/coworking.jpeg",
    },
    {
      title: "Warehouses & Industrial Units",
      desc: "Spacious facilities for storage and logistics.",
      img: "/images/warehouse.jpeg",
    },
  ];

  return (
    <section className="mb-24 relative px-4">
      {/* heading section */}
      <h2
        className="text-3xl font-bold text-[#6D1B1C] mb-10"
        style={{ fontFamily: "'Sanchez', serif" }}>
        Commercial Properties
      </h2>

      {/* left arrow on the row cards*/}
      <button
        onClick={() => scroll("left")}
        className="absolute left-2 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]"
      >
        <FaChevronLeft />
      </button>

      {/* right arrow*/}
      <button
        onClick={() => scroll("right")}
        className="absolute right-2 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]">
        <FaChevronRight />
      </button>

      {/* scrolling */}
      <div
        ref={scrollRef}
        className="flex gap-8 overflow-x-auto scroll-smooth px-10 scrollbar-hide">
        {commercialItems.map((item, i) => (
          <div
            key={i}
            onClick={() => setShowPopup(true)}
            className="min-w-[320px] bg-white border border-[#B8A47C]
                       rounded-xl overflow-hidden shadow-sm
                       hover:shadow-xl hover:-translate-y-1
                       transition cursor-pointer">
            {/* image */}
            <div className="h-[180px] overflow-hidden">
              <img
                src={item.img}
                alt={item.title}
                className="w-full h-full object-cover
                           hover:scale-105 transition duration-300"/>
            </div>

            {/* content*/}
            <div className="p-6">
              <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">
                {item.title}
              </h4>
              <p className="text-[#1F3A2E] text-sm mb-4">
                {item.desc}
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
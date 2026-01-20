"use client";

import { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function PlotsAndLand() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -360 : 360,
      behavior: "smooth",
    });
  };

  return (
    <section className="mb-24 relative">

      {/* heading*/}
      <h2
        className="text-3xl font-bold text-[#6D1B1C] mb-10"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Plots & Land
      </h2>

      {/* left arrow on row*/}
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]">
        <FaChevronLeft />
      </button>

      {/* arrow right on row */}
      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-[55%] -translate-y-1/2 z-10
                   bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                   hover:bg-[#541516]">
        <FaChevronRight />
      </button>

      {/* scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto scroll-smooth px-14
                   scrollbar-hide"
      >
        {[
          {
            title: "Residential Plot",
            location: "Devanahalli, Bengaluru",
            price: "₹38 Lakhs",
            img: "/images/plot.jpeg",
            details: "1200 sq.ft • Ready for Construction",
            link: "/plot_pages/residential_plot",
          },
          {
            title: "Premium Residential Land",
            location: "Sarjapur Road, Bengaluru",
            price: "₹72 Lakhs",
            img: "/images/premium_land.jpeg",
            details: "2400 sq.ft • Gated Layout",
            link: "/plot_pages/premium_land",
          },
          {
            title: "Commercial Land",
            location: "Electronic City, Bengaluru",
            price: "₹2.1 Cr",
            img: "/images/commerical_plot1.jpeg",
            details: "Ideal for Office / Retail",
            link: "/plot_pages/commercial_land",
          },
          {
            title: "Investment Plot",
            location: "North Bengaluru",
            price: "₹1.1 Cr",
            img: "/images/commercial_plot.jpeg",
            details: "High Growth Zone",
            link: "/plot_pages/investment_plot",
          },
        ].map((plot, index) => (
          <Link
            key={index}
            href={plot.link}
            className="min-w-[320px]">
            <div
              className="bg-white border border-[#B8A47C]
                         rounded-xl shadow-md overflow-hidden
                         hover:shadow-xl hover:-translate-y-1
                         transition cursor-pointer" >
              {/* image */}
              <img
                src={plot.img}
                alt={plot.title}
                className="w-full h-[200px] object-cover"/>

              {/* content part */}
              <div className="p-6">
                <h4
                  className="text-lg font-semibold text-[#6D1B1C] mb-1"
                  style={{ fontFamily: "'Sanchez', serif" }}>
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

                <span
                  className="inline-block w-full text-center
                             bg-[#6D1B1C] text-white
                             py-2 rounded-md
                             hover:bg-[#541516] transition">
                  View Details
                </span>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
}
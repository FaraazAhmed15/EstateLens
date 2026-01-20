import { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";


export default function PropertyListings() {

  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (direction: "left" | "right") => {
    if (!scrollRef.current) return;

    const scrollAmount = 360; // card width + gap
    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };
 

  return (
    <section className="mb-20 relative">
      <h3
        className="text-3xl font-bold text-[#6D1B1C] mb-10 text-center"
        style={{ fontFamily: "'Sanchez', serif" }} >
        Latest Properties
      </h3>

       {/*left arrow on row */}
            <button
              onClick={() => scroll("left")}
              className="absolute left-0 top-[55%] -translate-y-1/2 z-10
                         bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                         hover:bg-[#541516]">
              <FaChevronLeft />
            </button>
      
            {/* right arrow*/}
            <button
              onClick={() => scroll("right")}
              className="absolute right-0 top-[55%] -translate-y-1/2 z-10
                         bg-[#6D1B1C] text-white p-3 rounded-full shadow-md
                         hover:bg-[#541516]"
            >
              <FaChevronRight />
            </button>

      {/* scroll container */}
      <div
        ref={scrollRef}
        className="flex gap-10 overflow-x-auto  mb-4 mt-4 scroll-smooth px-14
                   scrollbar-hide"
      >
        {[
          {
            title: "Luxury Residential Apartment",
            location: "Whitefield, Bengaluru",
            price: "₹95 Lakhs",
            img: "/images/luxury.jpeg",
            details: "3 BHK • 1650 sq.ft • Ready to Move",
            href: "/latest_prop_pages/luxury_residential_apartment"
            
          },
          {
            title: "Commercial Office Space",
            location: "Electronic City, Bengaluru",
            price: "₹1.8 Cr / month",
            img: "/images/commercial_office.jpeg",
            details: "Grade A • 2500 sq.ft • IT Hub",
            href: "/latest_prop_pages/commercial_office_space"
          },
          {
            title: "Independent Villa",
            location: "Sarjapur Road, Bengaluru",
            price: "₹2.6 Cr",
            img: "/images/villa1.jpeg",
            details: "4 BHK • Private Garden",
            href: "/latest_prop_pages/independent_villa"
          },
          {
             title: "Premium Studio Apartment",
             location: "Indiranagar, Bengaluru",
             price: "₹55 Lakhs",
             img: "/images/premium_studio_apartment.jpeg",
             details: "1 BHK • 650 sq.ft • Fully Furnished",
             href: "/latest_prop_pages/premium_studio_apartment"
          },
          {
            title: "Luxury Penthouse",
            location: "MG Road, Bengaluru",
            price: "₹3.2 Cr",
            img: "/images/luxury_penthouse.jpeg",
            details: "4 BHK • 3200 sq.ft • Skyline View",
            href: "/latest_prop_pages/luxury_penthouse"
          },
          {
            title: "Modern Row House",
            location: "Bannerghatta Road, Bengaluru",
            price: "₹1.45 Cr",
            img: "/images/modern_row_house.jpeg",
            details: "3 BHK • 2100 sq.ft • Gated Community",
            href: "/latest_prop_pages/modern_row_house"
          },
          {
            title: "Affordable Residential Plot",
            location: "Devanahalli, Bengaluru",
            price: "₹38 Lakhs",
            img: "/images/plot.jpeg",
            details: "1200 sq.ft • Ready for Construction",
             href: "/latest_prop_pages/affordable_residential_plot"
          },
          {
            title: "High-Rise Apartment",
            location: "Rajajinagar, Bengaluru",
            price: "₹1.1 Cr",
            img: "/images/high_rise_apartment.jpeg",
            details: "2 BHK • 1250 sq.ft • Clubhouse Access",
            href: "/latest_prop_pages/high_rise_apartment"
         },

        ].map((property, index) => (
          <div
            key={index}
            className="min-w-[320px] bg-white border border-[#B8A47C]
                       rounded-xl shadow-md overflow-hidden
                       hover:shadow-xl transition">
            <img
              src={property.img}
              alt={property.title}
              className="w-full h-[200px] object-cover" />

            <div className="p-6">
              <h4
                className="text-xl font-semibold text-[#6D1B1C] mb-1"
                style={{ fontFamily: "'Sanchez', serif" }}
              >
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

              <Link
                href={property.href}
                className="inline-block bg-[#6D1B1C] text-white
                           px-5 py-2 rounded-md
                           hover:bg-[#541516] transition"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
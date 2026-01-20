"use client";

import Link from "next/link";

export default function BuildingPlanPage() {
  const plans = [
    {
      title: "Residential Plan",
      subtitle: "Flats & Apartments",
      href: "/building_plan/residential_plan",
    },
    {
      title: "Commercial Plan",
      subtitle: "Offices & Shops",
      href: "/building_plan/commercial_plan",
    },
    {
      title: "Independent House",
      subtitle: "Villas & Homes",
      href: "/building_plan/independent",
    },
    {
      title: "Floor Layout",
      subtitle: "Amenities & Utilities",
      href: "/building_plan/layout",
    },
  ];

  return (
    <div className="min-h-screen bg-[#F4F1EC] px-10 py-20">
      
      {/* title of the page */}
      <h1
        className="text-4xl font-bold text-center text-[#6D1B1C] mb-12"
        style={{ fontFamily: "'Sanchez', serif" }}
      >
        Building Plans
      </h1>

      {/* card grid*/}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-5xl mx-auto">
        {plans.map((plan) => (
          <Link key={plan.title} href={plan.href}>
            <div
              className="cursor-pointer bg-[#6D1B1C] text-white
                         rounded-xl shadow-lg p-10 h-[160px]
                         flex flex-col justify-center items-center
                         hover:scale-105 transition duration-300"
            >
              <h2 className="text-2xl font-bold">{plan.title}</h2>
              <p className="text-sm mt-2 opacity-90">{plan.subtitle}</p>
            </div>
          </Link>
        ))}
      </div>

      {/* description section */}
      <p className="mt-16 text-center text-[#1F3A2E] max-w-3xl mx-auto text-lg md:text-xl" style={{ fontFamily: "'Lato',serif" }}>
        The Building Plan section provides a structured view of different types of
        property layouts. Users can explore residential, commercial, and
        independent house plans along with floor layouts and amenities to make
        informed decisions.
      </p>
    </div>
  );
}
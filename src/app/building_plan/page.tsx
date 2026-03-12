"use client";

import Link from "next/link";
import { 
  FaChevronRight, 
  FaHome, 
  FaDraftingCompass, 
  FaBuilding, 
  FaHotel, 
  FaLayerGroup 
} from "react-icons/fa";

export default function BuildingPlanPage() {
  const plans = [
    {
      title: "Residential Plan",
      subtitle: "Flats & Luxury Apartments",
      href: "/building_plan/residential_plan",
      icon: <FaBuilding className="text-2xl" />,
      img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Commercial Plan",
      subtitle: "Offices & Retail Spaces",
      href: "/building_plan/commercial_plan",
      icon: <FaDraftingCompass className="text-2xl" />,
      img: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Independent House",
      subtitle: "Custom Villas & Estates",
      href: "/building_plan/independent_house",
      icon: <FaHotel className="text-2xl" />,
      img: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&q=80&w=400",
    },
    {
      title: "Flat Layout",
      subtitle: "Amenities & Utility Mapping",
      href: "/building_plan/flat_plan",
      icon: <FaLayerGroup className="text-2xl" />,
      img: "https://images.unsplash.com/photo-1503387762-592dee58c460?auto=format&fit=crop&q=80&w=400",
    },
  ];

  return (
    /* Background: Soft Nude / Sandstone Tone */
    <div className="min-h-screen bg-[#F7F2EE] text-[#4A3F35] selection:bg-[#B8A47C] selection:text-white flex font-sans">
      
      {/* 1. MINIMALIST SIDEBAR - Warm Tones */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center gap-6 p-4 bg-white/40 backdrop-blur-md border border-[#E8DED5] rounded-[2rem] shadow-[0_10px_40px_rgba(74,63,53,0.05)]">
          <button 
            onClick={() => window.history.back()}
            className="w-12 h-12 flex items-center justify-center text-[#A69689] hover:text-[#6D1B1C] hover:bg-white rounded-2xl transition-all duration-300 group"
          >
            <FaChevronRight className="rotate-180 group-hover:-translate-x-0.5 transition-transform" size={14} />
          </button>
          <Link href="/">
            <div className="w-12 h-12 bg-[#6D1B1C] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6D1B1C]/20 cursor-pointer hover:scale-105 active:scale-95 transition-all">
              <span className="text-white font-serif font-bold text-2xl">E</span>
            </div>
          </Link>
        </div>
      </aside>

      {/* 2. MAIN CONTENT AREA */}
      <main className="flex-1 lg:pl-32">
        
        {/* Header Section - Elegant Warm Typography */}
        <section className="relative pt-32 pb-24 px-10 overflow-hidden text-center">
          {/* Subtle Grid - Warm Sepia Lines */}
          <div 
            className="absolute inset-0 opacity-[0.08] pointer-events-none" 
            style={{ 
              backgroundImage: `linear-gradient(#A69689 1px, transparent 1px), linear-gradient(90deg, #A69689 1px, transparent 1px)`, 
              backgroundSize: '100px 100px' 
            }} 
          />
          
          <div className="max-w-6xl mx-auto relative z-10">
            
            <h1 className="text-6xl md:text-8xl font-bold text-[#4A3F35] mb-8 tracking-tighter" style={{ fontFamily: "'Sanchez', serif" }}>
              Building <span className="text-[#B8A47C]/60 italic font-light">Plans</span>
            </h1>
            <p className="text-lg md:text-xl text-[#7A6D61] max-w-2xl mx-auto font-light leading-relaxed">
              Curated layouts where structural precision meets warm, organic design. Explore the blueprint of your next legacy.
            </p>
          </div>
        </section>

        {/* 3. INTERACTIVE CARDS - "Soft Clay" Look */}
        <section className="px-10 pb-40">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 max-w-6xl mx-auto">
            {plans.map((plan) => (
              <Link key={plan.title} href={plan.href} className="group">
                <div className="relative overflow-hidden rounded-[2.5rem] bg-[#FCFAF8] border border-[#E8DED5] shadow-[0_4px_30px_rgba(74,63,53,0.03)] transition-all duration-700 hover:shadow-[0_40px_80px_rgba(74,63,53,0.1)] hover:-translate-y-2 h-[400px] flex flex-col justify-end">
                  
                  {/* Background Image - Sepia/Warm Filter */}
                  <div className="absolute inset-0 z-0">
                    <img 
                      src={plan.img} 
                      alt={plan.title} 
                      className="w-full h-full object-cover grayscale brightness-110 opacity-[0.05] group-hover:opacity-20 group-hover:scale-105 transition-all duration-1000" 
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#F7F2EE] via-[#F7F2EE]/70 to-transparent z-10" />
                  </div>

                  {/* Content */}
                  <div className="relative z-20 p-12">
                    <div className="mb-8 p-4 w-fit rounded-full bg-[#F7F2EE] text-[#B8A47C] group-hover:bg-[#6D1B1C] group-hover:text-white transition-all duration-500 shadow-inner border border-[#E8DED5]">
                      {plan.icon}
                    </div>
                    <h2 className="text-3xl font-bold text-[#4A3F35] group-hover:text-[#6D1B1C] transition-colors duration-500 tracking-tight" style={{ fontFamily: "'Sanchez', serif" }}>
                      {plan.title}
                    </h2>
                    <p className="text-[#A69689] mt-2 text-sm font-medium tracking-wide">
                      {plan.subtitle}
                    </p>
                    
                    {/* Organic Action Hint */}
                    <div className="mt-8 flex items-center gap-3 text-[#6D1B1C] font-bold text-[11px] uppercase tracking-[0.2em] opacity-0 group-hover:opacity-100 transition-all duration-500 -translate-x-4 group-hover:translate-x-0">
                      Explore Design <div className="h-[1px] w-12 bg-[#6D1B1C]" />
                    </div>
                  </div>

                  {/* Top Corner Sun-Glow Effect */}
                  <div className="absolute top-0 right-0 w-48 h-48 bg-[#B8A47C]/10 blur-[60px] rounded-full opacity-0 group-hover:opacity-100 transition-all duration-1000" />
                </div>
              </Link>
            ))}
          </div>

          
        </section>
      </main>
    </div>
  );
}
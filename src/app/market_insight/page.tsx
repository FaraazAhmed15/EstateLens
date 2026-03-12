"use client";

import { useState, useEffect, ReactNode } from "react";
import Link from "next/link";
import LoginModal from "@/components/LoginModal";
import Footer from "@/components/Footer";
import PriceCalculator from "@/components/PriceCalculator";
import PersonalizedMap from "@/components/PersonalizedMap";
import {
  FaHome,
  FaChartBar,
  FaMapMarkedAlt,
  FaCalculator,
  FaUserTie,
  FaChevronRight,
} from "react-icons/fa";

type SidebarItemProps = {
  icon: ReactNode;
  label: string;
  onClick: () => void;
};

type InsightSectionProps = {
  id: string;
  title: string;
  text: string;
  img: string;
  reverse?: boolean;
};

export default function Market_Insight_Page() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollTo = (id: string) => {
    const element = document.getElementById(id);
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] text-[#1F3A2E] selection:bg-[#6D1B1C] selection:text-white">

      {/* Sidebar */}
      <aside className="fixed left-8 top-1/2 -translate-y-1/2 z-50 hidden lg:block">
        <div className="flex flex-col items-center gap-4 p-4 bg-white/40 backdrop-blur-xl border border-white/20 rounded-3xl shadow-[0_8px_32px_0_rgba(109,27,28,0.08)]">

          <div className="flex flex-col gap-2 mb-4">
            <button
              onClick={() => window.history.back()}
              className="w-12 h-10 flex items-center justify-center text-[#6D1B1C] hover:bg-[#6D1B1C] hover:text-white rounded-xl transition-all duration-300 border border-[#6D1B1C]/20 group"
            >
              <FaChevronRight
                className="rotate-180 group-hover:-translate-x-1 transition-transform"
                size={14}
              />
            </button>

            <Link href="/">
              <div className="w-12 h-12 bg-[#6D1B1C] rounded-2xl flex items-center justify-center shadow-lg shadow-[#6D1B1C]/20 cursor-pointer hover:scale-105 active:scale-95 transition-all">
                <span className="text-white font-serif font-bold text-2xl">
                  E
                </span>
              </div>
            </Link>
          </div>

          <div className="flex flex-col gap-1">
            <SidebarItem
              icon={<FaHome size={18} />}
              label="Overview"
              onClick={() =>
                window.scrollTo({ top: 0, behavior: "smooth" })
              }
            />

            <SidebarItem
              icon={<FaChartBar size={18} />}
              label="Market Trends"
              onClick={() => scrollTo("price-trend")}
            />

            <SidebarItem
              icon={<FaMapMarkedAlt size={18} />}
              label="Heatmaps"
              onClick={() => scrollTo("insights1")}
            />

            <SidebarItem
              icon={<FaCalculator size={18} />}
              label="Estimator"
              onClick={() => scrollTo("calculator")}
            />
          </div>
        </div>
      </aside>

      {/* Hero */}
      <header className="relative h-[70vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#6D1B1C]/10 to-transparent z-10" />

          <img
            src="/images/red_flower.jpeg"
            className="w-full h-full object-cover opacity-30 grayscale hover:grayscale-0 transition-all duration-1000 scale-105"
            alt="EstateLens Background"
          />
        </div>

        <div className="relative z-20 text-center px-6">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 mb-6 text-[10px] font-bold tracking-[0.4em] uppercase bg-white border border-[#B8A47C]/30 text-[#6D1B1C] rounded-full shadow-sm">
            <span className="w-2 h-2 bg-[#6D1B1C] rounded-full animate-pulse" />
            Live Market Intelligence
          </div>

          <h1
            className="text-6xl md:text-9xl font-bold text-[#6D1B1C] mb-6 tracking-tighter"
            style={{ fontFamily: "'Sanchez', serif" }}
          >
            Market <span className="text-[#A66E3A]">Insight</span>
          </h1>

          <p className="text-xl md:text-2xl font-light max-w-2xl mx-auto text-[#1F3A2E]/80 leading-relaxed">
            Data-driven clarity for the modern real estate landscape.
          </p>
        </div>
      </header>

      {/* Main */}
      <main className="max-w-7xl mx-auto px-8 lg:pl-32 pb-24">

        {/* Section */}
        <section className="grid lg:grid-cols-2 gap-16 py-24 border-b border-[#B8A47C]/20">

          <div>
            <h2
              className="text-5xl font-bold text-[#6D1B1C] leading-tight mb-8"
              style={{ fontFamily: "'Sanchez', serif" }}
            >
              The Edge of Property Analytics
            </h2>

            <p className="text-xl text-[#1F3A2E]/70 leading-relaxed mb-6">
              EstateLens provides <strong>data-driven analysis</strong> to help
              users understand real estate trends with clarity.
            </p>

            <button
              onClick={() => scrollTo("insights1")}
              className="flex items-center gap-2 bg-[#6D1B1C] text-white px-6 py-3 rounded-xl hover:bg-[#541516]"
            >
              Explore Maps <FaChevronRight size={12} />
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4">
            {[
              { id: "price-trend", title: "Price Trend", val: "+12%" },
              { id: "high-growth", title: "Growth Areas", val: "IT Hubs" },
              { id: "rental-yield", title: "Rental Yield", val: "4.8%" },
              { id: "demand-pattern", title: "Demand", val: "3 BHK" },
            ].map((card) => (
              <div
                key={card.id}
                onClick={() => scrollTo(card.id)}
                className="p-8 rounded-3xl border border-[#B8A47C]/20 shadow-sm hover:shadow-xl cursor-pointer"
              >
                <h4 className="text-[10px] uppercase tracking-widest font-bold text-[#A66E3A] mb-2">
                  {card.title}
                </h4>

                <div className="text-3xl font-bold text-[#6D1B1C]">
                  {card.val}
                </div>
              </div>
            ))}
          </div>

        </section>

        {/* Insight Sections */}
        <section className="space-y-24 py-24">

          <InsightSection
            id="price-trend"
            title="Property Price Movement"
            text="Urban centers driven by employment and infrastructure have recorded steady appreciation."
            img="/images/market_growth.jpeg"
          />

          <InsightSection
            id="rental-yield"
            title="Yield & ROI Overview"
            text="Residential properties in high-demand areas offer rental yields between 3% and 5%."
            img="/images/market_rental_yield.jpeg"
            reverse
          />

        </section>

        {/* Map */}
        <section id="insights1" className="mt-20">

          <div className="bg-[#1F3A2E] rounded-[3rem] p-16 shadow-2xl">

            <h2 className="text-4xl font-bold text-white mb-8">
              Personalized Heatmaps
            </h2>

            <div className="rounded-3xl overflow-hidden bg-white">
              <PersonalizedMap />
            </div>

          </div>

        </section>

        {/* Calculator */}
        <section
          id="calculator"
          className="mt-32 mb-24 bg-white border border-[#B8A47C]/20 rounded-[3rem] p-12 shadow-xl"
        >

          <div className="text-center max-w-2xl mx-auto mb-12">

            <h2 className="text-4xl font-bold text-[#6D1B1C] mb-4">
              Financial Projection
            </h2>

            <p className="text-[#1F3A2E]/60 italic">
              Estimate your potential EMI.
            </p>

          </div>

          <PriceCalculator />

        </section>

      </main>

      <Footer />

      {/* Floating Button */}
      <button
        onClick={() => setShowLoginModal(true)}
        className="fixed bottom-10 right-10 bg-[#6D1B1C] text-white w-14 h-14 rounded-full shadow-2xl flex items-center justify-center hover:scale-110"
      >
        <FaUserTie />
      </button>

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}

    </div>
  );
}

function SidebarItem({ icon, label, onClick }: SidebarItemProps) {
  return (
    <button
      onClick={onClick}
      className="p-4 text-[#1F3A2E]/40 hover:text-[#6D1B1C] transition-all rounded-2xl"
    >
      {icon}
    </button>
  );
}

function InsightSection({
  id,
  title,
  text,
  img,
  reverse = false,
}: InsightSectionProps) {

  return (
    <div
      id={id}
      className={`flex flex-col lg:flex-row items-center gap-16 ${
        reverse ? "lg:flex-row-reverse" : ""
      }`}
    >

      <div className="lg:w-1/2">

        <h3 className="text-3xl font-bold text-[#6D1B1C] mb-6">
          {title}
        </h3>

        <p className="text-lg text-[#1F3A2E]/70 leading-relaxed mb-6">
          {text}
        </p>

      </div>

      <div className="lg:w-1/2 w-full h-[400px] rounded-[2.5rem] overflow-hidden shadow-2xl border-8 border-white">

        <img
          src={img}
          alt={title}
          className="w-full h-full object-cover hover:scale-110 transition-transform duration-700"
        />

      </div>

    </div>
  );
}
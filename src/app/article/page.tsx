"use client";

import Image from "next/image";
import { useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";

const articles = [
  {
    title: "2026 Real Estate Market Trends",
    image: "/images/house1.jpg",
    category: "Market Insights",
    points: [
      "Rising demand in suburban locations",
      "Interest rate impact on pricing",
      "Growth of sustainable developments",
    ],
  },
  {
    title: "How to Get Mortgage Pre-Approval Faster",
    image: "/images/house2.jpg",
    category: "Financing",
    points: [
      "Maintain strong credit score",
      "Organize financial documents",
      "Reduce existing debts",
    ],
  },
  {
    title: "Top 10 Investment Locations This Year",
    image: "/images/house3.jpg",
    category: "Investment",
    points: [
      "High rental yield cities",
      "Emerging smart cities",
      "Commercial growth zones",
    ],
  },
  {
    title: "Luxury Homes vs Smart Homes",
    image: "/images/house4.jpg",
    category: "Lifestyle",
    points: [
      "Technology integration benefits",
      "Long-term property value",
      "Energy efficiency comparison",
    ],
  },
  {
    title: "Understanding Property Valuation",
    image: "/images/house5.jpg",
    category: "Education",
    points: [
      "Market comparison approach",
      "Income-based valuation",
      "Impact of location factors",
    ],
  },
  {
    title: "Rental Property Income Guide",
    image: "/images/house6.jpg",
    category: "Rental",
    points: [
      "Setting competitive rent",
      "Managing maintenance costs",
      "Maximizing occupancy rate",
    ],
  },
  {
    title: "First-Time Buyer Checklist",
    image: "/images/house7.jpg",
    category: "Buying",
    points: [
      "Budget planning essentials",
      "Home inspection checklist",
      "Understanding legal paperwork",
    ],
  },
  {
    title: "How AI is Transforming Real Estate",
    image: "/images/house8.jpg",
    category: "Technology",
    points: [
      "AI-powered property valuation",
      "Virtual home tours",
      "Predictive market analytics",
    ],
  },
  {
    title: "Home Staging Secrets That Sell Fast",
    image: "/images/house9.jpg",
    category: "Selling",
    points: [
      "Neutral interior styling",
      "Lighting improvements",
      "Professional photography",
    ],
  },
  {
    title: "Sustainable & Green Housing Future",
    image: "/images/house10.jpg",
    category: "Sustainability",
    points: [
      "Solar-powered homes",
      "Eco-friendly materials",
      "Energy-efficient designs",
    ],
  },
];

export default function ArticlesPage() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleArticle = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="bg-[#F8F5F0] min-h-screen px-10 py-16">

      {/* TITLE */}
      <div className="text-center mb-16">
        <h1 className="text-5xl font-bold text-[#1C2B39] mb-4">
          EstateLens Articles
        </h1>
        <p className="text-gray-600 text-lg">
          Insights, Trends & Smart Investment Knowledge
        </p>
      </div>

      {/* SWIPER SLIDER */}
      <Swiper
        modules={[Navigation, Autoplay]}
        spaceBetween={30}
        slidesPerView={3}
        loop={true}
        autoplay={{
          delay: 3000,
          disableOnInteraction: false,
        }}
        navigation
        breakpoints={{
          0: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
        className="pb-12"
      >
        {articles.map((article, index) => (
          <SwiperSlide key={index}>
            <div className="bg-white rounded-2xl shadow-md hover:shadow-2xl transition duration-500 overflow-hidden">

              <div className="relative h-56">
                <Image
                  src={article.image}
                  alt={article.title}
                  fill
                  quality={75}
                  className="object-cover brightness-105 contrast-110"
                />
              </div>

              <div className="p-6">
                <span className="text-sm text-[#C6A75E] font-semibold">
                  {article.category}
                </span>

                <h3 className="text-xl font-bold text-[#1C2B39] mt-2">
                  {article.title}
                </h3>

                <button
                  onClick={() => toggleArticle(index)}
                  className="mt-4 text-[#1C2B39] font-semibold hover:text-[#C6A75E] transition"
                >
                  {openIndex === index ? "Close" : "Read More →"}
                </button>

                {openIndex === index && (
                  <ul className="mt-4 text-gray-600 text-sm space-y-2">
                    {article.points.map((point, i) => (
                      <li key={i}>• {point}</li>
                    ))}
                  </ul>
                )}
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* STATIC SECTION */}
      <div className="mt-24 text-center">
        <div className="bg-white rounded-3xl shadow-lg py-12 px-8">
          <h2 className="text-2xl font-semibold text-[#1C2B39]">
            Stay Tuned for More Expert Insights
          </h2>
          <p className="text-gray-600 mt-4 max-w-2xl mx-auto">
            EstateLens continuously brings you the latest trends,
            investment strategies, and professional guidance to help you
            make confident real estate decisions.
          </p>
        </div>
      </div>

    </div> 
  );
}

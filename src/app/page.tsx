'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { FaSearch } from 'react-icons/fa';
import LoginModal from '@/components/LoginModal';
import SubscribePopup from '@/components/buttonPopup';
import PriceCalculator from '@/components/PriceCalculator';
import SignupPopup from '@/components/signup_modal';

export default function HomePage() {
  const [openSignup, setOpenSignup] = useState(false);
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPopup, setShowPopup] = useState(false);

  const placeholders = [
    "$Residential Plot, 1200 sqft , Devanahalli",
    "3.2 Crore villa in R.M.V. Extension",
    "Retail Space in Whitefield, 1500 sqft",
    "Luxury Villa with Garden",
  ];

  const [index, setIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const interval = setInterval(() => {
      setAnimate(false); // slide out
      setTimeout(() => {
        setIndex((prev) => (prev + 1) % placeholders.length);
        setAnimate(true); // slide in again
      }, 400);
    }, 2500);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />

      {/* HERO SECTION */}
      <section
        className="relative h-[65vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/red_house.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white px-6">
          {/* BIG TITLE */}
          <h1 className="text-5xl md:text-6xl font-bold mb-6">
            The #1 site real estate <br /> professionals trust
          </h1>

          {/* MENU LINKS */}
          <div className="flex gap-6 justify-center mb-6 text-lg font-medium flex-wrap">
            <Link href="/properties" className="hover:underline">Buy</Link>
            <Link href="/properties" className="hover:underline">Rent</Link>
            <Link href="/sell" className="hover:underline">Sell</Link>
            <Link href="/pre-approval" className="hover:underline">Pre-approval</Link>
            <Link href="/market_insight" className="hover:underline">market Insight</Link>
            <Link href="/building_plan" className="hover:underline">Home Plan</Link>
          </div>

          {/* SEARCH BAR */}
          <div className="flex justify-center">
            <div className="flex bg-white rounded-full overflow-hidden w-[350px] md:w-[500px] shadow-lg">
              {/* Animated Text */}
              <div className="flex-1 px-5 py-3 text-black">
                <span
                  className={`block transition-all duration-500 ${
                    animate
                      ? "translate-x-0 opacity-100"
                      : "-translate-x-full opacity-0"
                  }`}
                >
                  {placeholders[index]}
                </span>
              </div>

              {/* Search Icon */}
              <Link
                href="/search"
                className="bg-black text-white px-6 flex items-center justify-center"
              >
                <FaSearch className="text-lg" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED PROPERTIES */}
      <section className="mt-10 mb-10 px-6">
        <h2
          className="text-3xl font-bold text-center text-[#6D1B1C] mb-12"
          style={{ fontFamily: "'Sanchez', serif" }}
        >
          Featured Properties
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <PropertyCard
            img="/images/home_card1.jpeg"
            title="Residential Apartment"
            desc="2 BHK • Bengaluru • Near Metro"
            price="₹ 85 Lakhs"
            onClick={() => setShowPopup(true)}
          />

          {/* Card 2 */}
          <PropertyCard
            img="/images/home_card2.jpeg"
            title="Commercial Office Space"
            desc="IT Park • Whitefield"
            price="₹ 9.4 Crore"
            onClick={() => setShowPopup(true)}
          />

          {/* Card 3 */}
          <PropertyCard
            img="/images/home_card3.jpeg"
            title="Premium Independent Villa"
            desc="Gated Community • Mysuru"
            price="₹ 2.1 Crore"
            onClick={() => setShowPopup(true)}
          />

          {/* Card 4 */}
          <PropertyCard
            img="/images/card4.jpeg"
            title="Single Family Home"
            desc="R.M.V. Extension, Bengaluru"
            price="₹ 3.2 Crore"
            onClick={() => setShowPopup(true)}
          />
        </div>
      </section>
      {/* Newest Listing*/}
      <section className="mt-12 mb-12 px-6">
        <h2
          className="text-3xl font-bold text-center text-[#6D1B1C] mb-12"
          style={{ fontFamily: "'Sanchez', serif" }}
        >
          Newest Listings
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 max-w-7xl mx-auto">
          {/* Card 1 */}
          <PropertyCard
            img="/images/traditional_village_house.jpeg"
            title="Luxury Residential Apartment"
            desc="2 BHK • Bengaluru • Near Metro"
            price="₹ 85 Lakhs"
            onClick={() => setShowPopup(true)}
          />

          {/* Card 2 */}
          <PropertyCard
            img="/images/villa4.jpeg"
            title="Commercial Office Space"
            desc="IT Park • Whitefield"
            price="₹ 9.4 Crore"
            onClick={() => setShowPopup(true)}
          />

          {/* Card 3 */}
          <PropertyCard
            img="/images/latest_farm_house.jpeg"
            title="Premium Independent Villa"
            desc="Gated Community • Mysuru"
            price="₹ 2.1 Crore"
            onClick={() => setShowPopup(true)}
          />

          {/* Card 4 */}
          <PropertyCard
            img="/images/single_family_home.jpeg"
            title="Single Family Home"
            desc="R.M.V. Extension, Bengaluru"
            price="₹ 3.2 Crore"
            onClick={() => setShowPopup(true)}
          />
          </div>
        </section>
        {/* NEARBY LIFESTYLE & AMENITIES */}
<section className="mt-10 mb-20">
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-12"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Lifestyle & Amenities
  </h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10 max-w-6xl mx-auto px-6">

    {[
      { title: "Green Parks", img: "/images/park1.jpeg" },
      { title: "Swimming Pool", img: "/images/pool.jpeg" },
      { title: "Shopping Mall", img: "/images/mall.jpeg" },
      { title: "Fitness Club", img: "/images/fitness.jpeg" },
    ].map((item, index) => (
      <div key={index} className="amenity-card">
        

        {/* IMAGE WRAPPER */}
        <div className="amenity-image">
          <img src={item.img} alt={item.title} />
        </div>
        <h4 style={{ fontFamily: "'Sanchez', serif" }}>{item.title}</h4>{/* image text */}


       

      </div>
    ))}

  </div>
</section>

{/* Vision Section */}
<section className="mt-10 mb-10">
  <div className="w-full bg-[#FDF4E2] rounded-2xl shadow-md overflow-hidden">
    <div className="grid grid-cols-1 md:grid-cols-2">
      
      {/* Image on left */}
      <div
        className="relative h-[420px] w-full"
        style={{
          backgroundImage: "url('/images/vision.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      ></div>

      {/* Right side content */}
      <div className="p-12 flex flex-col justify-center w-full">
        <h2
          className="text-3xl font-bold text-[#6D1B1C] mb-6"
          style={{ fontFamily: "'Sanchez', serif" }}
        >
          Our Vision at EstateLens
        </h2>

        <p
          className="text-[#1F3A2E] text-lg leading-relaxed mb-6"
          style={{ fontFamily: "'Lato', serif" }}
        >
          EstateLens was built to bring transparency and clarity to real-estate
          decisions. We simplify complex property data and present it in a
          structured, trustworthy way — so every user can move forward with
          confidence.
        </p>

        {/* Highlights */}
        <ul className="space-y-3 text-[#1F3A2E]">
          <li>✔ Verified & reliable property information</li>
          <li>✔ Clear building layouts and planning insights</li>
          <li>✔ Designed for buyers, renters & investors</li>
        </ul>
      </div>
    </div>
  </div>
</section>
<PriceCalculator />

{/* HERO SECTION */}
      <section
        className="relative h-[65vh] flex items-center justify-center text-center"
        style={{
          backgroundImage: "url('/images/cubbon_park.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        {/* Overlay */}
        <div className="absolute inset-0 bg-black/40"></div>

        <div className="relative z-10 text-white px-6">
          <h5 className="text-2xl font-bold mb-4">Unique Homes</h5>

{/* BIG TITLE */}
<h4 className="text-5xl md:text-4xl font-semibold mb-6">
  Bengaluru Real Estate Shows Surprising Price Adjustments
</h4>

{/* VIEW ARTICLE BUTTON */}
<Link href="/article">
<button
  className="px-8 py-3 bg-black text-white rounded-full border-2 border-white 
  shadow-[0_0_12px_rgba(225,225,225,0.6)] hover:bg-white hover:text-black transition-all 
  duration-300 font-semibold tracking-wide">
  Read Article
</button>
</Link>
        </div>
      </section>

      <Footer />

      {/* POPUPS */}
      <SubscribePopup
        isOpen={showPopup}
        onClose={() => setShowPopup(false)}
      />

      {showLoginModal && (
        <LoginModal onClose={() => setShowLoginModal(false)} />
      )}
    </div>
  );
}

type PropertyCardProps = {
  img: string;
  title: string;
  desc: string;
  price: string;
  onClick: () => void;
};

function PropertyCard({ img, title, desc, price, onClick }: PropertyCardProps) {
  return (
    <div
      onClick={onClick}
      className="group cursor-pointer bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden hover:shadow-xl transition"
    >
      <img
        src={img}
        alt={title}
        className="w-full h-[200px] object-cover"
      />
      <div className="p-6">
        <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2">
          {title}
        </h4>
        <p className="text-sm text-[#1F3A2E] mb-3">{desc}</p>
        <p className="text-sm font-medium text-[#A66E3A] mb-4">{price}</p>
        <button className="bg-[#6D1B1C] text-white px-5 py-2 rounded-md hover:bg-[#541516] transition">
          View Details
        </button>
      </div>
    </div>
  );
}
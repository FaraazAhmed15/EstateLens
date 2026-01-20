'use client';
import {
  useState 
} from 'react';
import LoginModal from '@/components/LoginModal';
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import PriceCalculator from '@/components/PriceCalculator';
import Link from 'next/link';
import WelcomePopup from '@/components/WelcomePopup';
import SubscribePopup from '@/components/buttonPopup';
import { FaBars,
   FaTimes,
   FaHome,
   FaInfoCircle,
   FaBuilding,
   FaCity,
  FaNewspaper,
  FaSignInAlt,
  FaKey, 
   } from 'react-icons/fa';
import { FaB } from "react-icons/fa6";


export default function HomePage() {
  const [showLoginModal, setShowLoginModal] = useState(false);
  const [showPopup, setShowPopup]=useState(false);
return (
  
<div className="h-screen flex overflow-hidden">
<WelcomePopup />

{/* left side panel*/}  
  <div className="w-[360px] h-screen fixed left-0 top-0  
                  bg-[#F4F1EC] border-r border-[#B8A47C]  
                  flex flex-col items-center px-6 py-8">  
                  {/* logo on the left */}
     <div className="bg-[#F4F1EC] p-4 rounded-lg">
    <img src="/images/logo.jpeg"
    alt="EstateLens Logo"
     className="w-32 mx-auto" /> 
    </div> 
    <h1 className="text-xl font-bold text-[#6D1B1C]">  
      <strong>EstateLens</strong>  
    </h1>  
    <p className="text-sm text-[#1F3A2E]">  
      See Property Clearly  
    </p>  

    {/*left side menu */}
<div className="w-full mt-12 border border-[#B8A47C] rounded-lg overflow-hidden bg-[#F4F1EC] z-10 ">

  {[
    { name: "Properties", href: "/properties", icon: <FaBuilding /> }, 
    { name: "Market Insight", href: "/market_insight", icon: <FaNewspaper /> },
    { name: "Sign Up", href: "/sign_up", icon: <FaSignInAlt /> },
    { name: "About", href: "/about", icon: <FaInfoCircle/> },
    { name: "Building Plan", href: "/building_plan", icon: <FaHome /> },
    { name: "Logins", action: "login", icon: <FaKey /> },
    { name: "List Property", href: "/list_property", icon: <FaCity /> },


  ].map((item, index) => (
    <a
      key={index}
      href={item.href}
      onClick={item.action === "login" ? () => setShowLoginModal(true) : undefined}
      className="group flex items-center gap-3 px-4 py-3 
                 border-t border-[#B8A47C]
                 text-[#1F3A2E]
                 hover:bg-[#6D1B1C] hover:text-white
                 transition">

                  {/* giving text-[#6D1B1C] group-hover:text-white for icon color*/}
      <span className="text-lg text-[#6D1B1C] group-hover:text-white">{item.icon}</span>
      <span className="font-medium">{item.name}</span>
    </a>
  ))}

</div>

    {/*image background */}  
    <div  
      className="absolute bottom-0 left-0 w-full h-full opacity-15 "  
      style={{  
        backgroundImage: "url('/images/bang_ctc.jpeg')",  
        backgroundSize: "cover",  
        backgroundPosition: "center",  
      }}  
    />  
  </div>  

  {/* RIGHT SECTION (ONLY THIS SCROLLS) */}  
 
  <div className="ml-[360px] flex-1 h-screen overflow-y-auto">  
<Navbar />
    
 
    {/* HERO SECTION */}
<section
  className="relative p-12 shadow-md mb-6 overflow-hidden"
  style={{
    backgroundImage: "url('/images/homepage.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  {/* Overlay for readability */}
  <div className="absolute inset-0 bg-[#FDF4E2]/85" />

  {/* CONTENT */}
  <div className="relative z-10 max-w-3xl">
    <h1
      className="text-4xl md:text-5xl font-bold text-[#6D1B1C] leading-tight mb-6"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Transparent Real Estate Insights
      <span className="block text-[#A66E3A] mt-2">
        for Smarter Decisions
      </span>
    </h1>

    <p
      className="text-lg md:text-xl text-[#1F3A2E]"
      style={{ fontFamily: "'Lato', serif" }}
    >
      EstateLens is a real estate discovery platform designed to bring clarity
      to property decisions through verified information, structured layouts,
      and detailed building plans — helping users buy, rent, or list properties
      with confidence.
    </p>
  </div>
</section>

{/* PROPERTY SEARCH SECTION */}
<section className="mb-4 mt-10 ml-4">
  <div className="max-w-6xl mx-auto bg-white border border-[#B8A47C] rounded-xl shadow-lg p-8">

    {/* Heading */}
    <h2
      className="text-2xl md:text-3xl font-bold text-center text-[#6D1B1C] mb-8"
      style={{ fontFamily: "'Sanchez', serif" }}
    >
      Find the Right Property
    </h2>

    {/* SEARCH FORM */}
    <div className="grid grid-cols-1 md:grid-cols-4 gap-6">

      {/* Location */}
      <div>
        <label className="block text-sm font-medium text-[#1F3A2E] mb-1">
          Location
        </label>
        <select className="w-full border border-[#B8A47C] rounded-md px-3 py-2 focus:outline-none">
          <option>Select Location</option>
          <option>Bengaluru</option>
          <option>Mysuru</option>
          <option>Chennai</option>
        </select>
      </div>

      {/* Property Type */}
      <div>
        <label className="block text-sm font-medium text-[#1F3A2E] mb-1">
          Property Type
        </label>
        <select className="w-full border border-[#B8A47C] rounded-md px-3 py-2 focus:outline-none">
          <option>Select Type</option>
          <option>Residential</option>
          <option>Commercial</option>
          <option>Plot / Land</option>
        </select>
      </div>

      {/* Budget */}
      <div>
        <label className="block text-sm font-medium text-[#1F3A2E] mb-1">
          Budget
        </label>
        <select className="w-full border border-[#B8A47C] rounded-md px-3 py-2 focus:outline-none">
          <option>Select Budget</option>
          <option>Below ₹50L</option>
          <option>₹50L – ₹1Cr</option>
          <option>Above ₹1Cr</option>
        </select>
      </div>

      {/* Search Button */}
      <div className="flex items-end">
        <button className="w-full bg-[#6D1B1C] text-white font-semibold py-2 rounded-md hover:bg-[#541516] transition">
          Search Properties
        </button>
      </div>

    </div>

  </div>
</section>

{/* NEARBY LIFESTYLE & AMENITIES */}
<section className="mt-10 mb-26">
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-12"
    style={{ fontFamily: "'Sanchez', serif" }}
  >
    Nearby Lifestyle & Amenities
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
{/*vision*/}
<section className="mt-24 ml-6 mb-24">
  <div className="max-w-7xl mx-auto bg-[#FDF4E2] rounded-2xl shadow-md overflow-hidden">

    <div className="grid grid-cols-1 md:grid-cols-2">

      {/*image on left */}
      <div
        className="relative h-[420px]"
        style={{
          backgroundImage: "url('/images/vision.jpeg')", 
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        
      </div>

      {/* right side content */}
      <div className="p-12 flex flex-col justify-center">

        <h2
          className="text-3xl font-bold text-[#6D1B1C] mb-6"
          style={{ fontFamily: "'Sanchez', serif" }}>
          Our Vision at EstateLens
        </h2>

        <p
          className="text-[#1F3A2E] text-lg leading-relaxed mb-6"
          style={{ fontFamily: "'Lato', serif" }}>
          EstateLens was built to bring transparency and clarity to real-estate
          decisions. We simplify complex property data and present it in a
          structured, trustworthy way — so every user can move forward with
          confidence.
        </p>

        {/* HIGHLIGHTS */}
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

{/* features */}
<section className="mt-14 ml-6 mb-16">
  <h2
    className="text-3xl font-bold text-center text-[#6D1B1C] mb-12"
    style={{ fontFamily: "'Sanchez', serif" }}>
    Featured Properties
  </h2>

  <div className="grid grid-cols-1 md:grid-cols-3 gap-10 max-w-6xl mx-auto">

    {/* card 1 */}
    <Link href="/latest_prop_pages/home_residential" className="group">
      <div className="bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden
                      hover:shadow-xl transition cursor-pointer">
        <img
          src="/images/home_card1.jpeg"
          alt="Residential Apartment"
          className="w-full h-[200px] object-cover"/>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2 group-hover:underline">
            Luxury Residential Apartment
          </h4>
          <p className="text-sm text-[#1F3A2E] mb-3">
            2 BHK • Bengaluru • Near Metro
          </p>
          <p className="text-sm font-medium text-[#A66E3A]">
            ₹ 85 Lakhs
          </p>
        </div>
      </div>
    </Link>

    {/* card 2 */}
    <Link href="/latest_prop_pages/home_office" className="group">
      <div className="bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden
                      hover:shadow-xl transition cursor-pointer">
        <img
          src="/images/home_card2.jpeg"
          alt="Commercial Space"
          className="w-full h-[200px] object-cover"/>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2 group-hover:underline">
            Commercial Office Space
          </h4>
          <p className="text-sm text-[#1F3A2E] mb-3">
            IT Park • Whitefield
          </p>
          <p className="text-sm font-medium text-[#A66E3A]">
            ₹ 9.4 Crore
          </p>
        </div>
      </div>
    </Link>

    {/* card 3 */}
    <Link href="/latest_prop_pages/home_villa" className="group">
      <div className="bg-white border border-[#B8A47C] rounded-xl shadow-md overflow-hidden
                      hover:shadow-xl transition cursor-pointer">
        <img
          src="/images/home_card3.jpeg"
          alt="Villa Property"
          className="w-full h-[200px] object-cover"/>
        <div className="p-6">
          <h4 className="text-lg font-semibold text-[#6D1B1C] mb-2 group-hover:underline">
            Premium Independent Villa
          </h4>
          <p className="text-sm text-[#1F3A2E] mb-3">
            Gated Community • Mysuru
          </p>
          <p className="text-sm font-medium text-[#A66E3A]">
            ₹ 2.1 Crore
          </p>
        </div>
      </div>
    </Link>

  </div>
</section>

<Footer />
  </div>  
  
  
  
  {
  showLoginModal && (
    <LoginModal onClose={() => setShowLoginModal(false)} />
  )
}




</div>

);
}

function Card({ title }: { title: string }) {
return (
<div className="bg-white border border-[#B8A47C] p-6 rounded-lg">
<h3 className="font-semibold text-[#6D1B1C]">{title}</h3>


</div>

);
}
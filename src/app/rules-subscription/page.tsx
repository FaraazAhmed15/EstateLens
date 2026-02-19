"use client";

import Link from "next/link";
import { FaHome, FaUser, FaBuilding, FaCity, FaCheckCircle } from "react-icons/fa";

export default function RulesAndSubscription() {
  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl font-bold text-[#6D1B1C] mb-4">
          Rules & Subscription Plans
        </h1>
        <p className="text-[#1F3A2E] max-w-3xl mx-auto">
          Choose the right plan based on your role. Access to property details,
          owner contact, and listing privileges depends on your subscription.
        </p>
      </div>

      {/* summary */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 mb-12">
        <h2 className="text-2xl font-semibold text-[#6D1B1C] mb-4">
          What You Get With Each Role
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* user */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#B8A47C]">
            <div className="flex items-center gap-2 mb-3">
              <FaUser className="text-[#6D1B1C]" />
              <h3 className="text-lg font-semibold text-[#6D1B1C]">User</h3>
            </div>
            <ul className="text-[#1F3A2E] text-sm space-y-1">
              <li>✔ View all properties</li>
              <li>✔ Message owners</li>
              <li>✔ Request owner number</li>
              <li>✔ Save favorites</li>
              <li>✔ Rental & Lease access</li>
            </ul>
          </div>

          {/* owner */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#B8A47C]">
            <div className="flex items-center gap-2 mb-3">
              <FaHome className="text-[#6D1B1C]" />
              <h3 className="text-lg font-semibold text-[#6D1B1C]">Owner</h3>
            </div>
            <ul className="text-[#1F3A2E] text-sm space-y-1">
              <li>✔ Everything User gets</li>
              <li>✔ List unlimited properties</li>
              <li>✔ Edit listings anytime</li>
              <li>✔ Receive buyer inquiries</li>
              <li>✔ Mark sold / rented</li>
            </ul>
          </div>

          {/* developer */}
          <div className="bg-white p-6 rounded-lg shadow-sm border border-[#B8A47C]">
            <div className="flex items-center gap-2 mb-3">
              <FaBuilding className="text-[#6D1B1C]" />
              <h3 className="text-lg font-semibold text-[#6D1B1C]">Developer</h3>
            </div>
            <ul className="text-[#1F3A2E] text-sm space-y-1">
              <li>✔ Everything Owner gets</li>
              <li>✔ Bulk project upload</li>
              <li>✔ Floor plans & brochures</li>
              <li>✔ Priority visibility</li>
              <li>✔ Dedicated dashboard</li>
            </ul>
          </div>
        </div>
      </div>

      {/* subscription card*/}
      <h2 className="text-2xl font-semibold text-[#6D1B1C] mb-6 text-center">
        Choose Your Plan
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* user plan */}
        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 shadow-md text-center">
          <FaUser className="text-4xl text-[#6D1B1C] mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-[#6D1B1C] mb-2">User Plan</h3>
          <p className="text-[#1F3A2E] mb-3">Best for buyers & renters</p>
          <p className="text-2xl font-bold text-[#6D1B1C] mb-4">₹999 / month</p>

          <ul className="text-[#1F3A2E] text-sm space-y-2 mb-6">
            <li>✔ View all details</li>
            <li>✔ Message owners</li>
            <li>✔ Request numbers</li>
            <li>✔ Save favorites</li>
          </ul>

          <Link
            href="/subscribe-user"
            className="inline-block bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516]">
            Subscribe Now
          </Link>
        </div>

        {/* owner */}
        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 shadow-md text-center">
          <FaHome className="text-4xl text-[#6D1B1C] mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-[#6D1B1C] mb-2">Owner Plan</h3>
          <p className="text-[#1F3A2E] mb-3">For individual property owners</p>
          <p className="text-2xl font-bold text-[#6D1B1C] mb-4">₹1,999 / month</p>

          <ul className="text-[#1F3A2E] text-sm space-y-2 mb-6">
            <li>✔ Everything in User plan</li>
            <li>✔ List unlimited properties</li>
            <li>✔ Edit listings</li>
            <li>✔ Receive buyer messages</li>
          </ul>

          <Link
            href="/subscribe/owner"
            className="inline-block bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516]">
            Subscribe Now
          </Link>
        </div>

        {/* developer */}
        <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-8 shadow-md text-center">
          <FaBuilding className="text-4xl text-[#6D1B1C] mx-auto mb-3" />
          <h3 className="text-xl font-semibold text-[#6D1B1C] mb-2">Developer Plan</h3>
          <p className="text-[#1F3A2E] mb-3">For builders & real estate firms</p>
          <p className="text-2xl font-bold text-[#6D1B1C] mb-4">₹4,999 / month</p>

          <ul className="text-[#1F3A2E] text-sm space-y-2 mb-6">
            <li>✔ Everything in Owner plan</li>
            <li>✔ Bulk project upload</li>
            <li>✔ Priority listings</li>
            <li>✔ Analytics dashboard</li>
          </ul>

          <Link
            href="/subscribe/developer"
            className="inline-block bg-[#6D1B1C] text-white px-6 py-2 rounded-md hover:bg-[#541516]"
          >
            Subscribe Now
          </Link>
        </div>

      </div>

      {/* back button */}
      <div className="mt-12 flex justify-center gap-6">
        <Link
          href="/"
          className="bg-[#6D1B1C] border border-[#B8A47C] text-white px-6 py-2 rounded-md hover:bg-[#F4E9D8]">
          ← Back to Home
        </Link>
      </div>
    </section>
  );
}
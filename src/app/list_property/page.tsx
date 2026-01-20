"use client";

import { useState } from "react";
import { 
  FaHome, FaMapMarkerAlt, FaCity, FaClipboardCheck, 
  FaCheckCircle, FaTimes 
} from "react-icons/fa";

export default function ListProperty() {
  const [showPopup, setShowPopup] = useState(false);

  return (
    <section className="max-w-6xl mx-auto px-6 mt-16 mb-20">

      {/* HEADER */}
      <div className="text-center mb-10">
        <h1 className="text-4xl font-bold text-[#6D1B1C] mb-3">
          List Your Property
        </h1>
        <p className="text-[#1F3A2E] max-w-3xl mx-auto">
          Submit your property details below. Our team will review, verify, and 
          approve your listing before it goes live.
        </p>
      </div>

      {/* FORM */}
      <div className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-10 shadow-md">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

          {/* PROPERTY TITLE */}
          <div>
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Property Title
            </label>
            <input
              type="text"
              placeholder="e.g. Luxury 3 BHK Apartment"
              className="w-full border border-[#B8A47C] rounded-md px-4 py-2"
            />
          </div>

          {/* PROPERTY TYPE */}
          <div>
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Property Type
            </label>
            <select className="w-full border border-[#B8A47C] rounded-md px-4 py-2">
              <option>Select Type</option>
              <option>Residential Apartment</option>
              <option>Independent House</option>
              <option>Villa</option>
              <option>Commercial Office</option>
              <option>Retail Shop</option>
              <option>Plot / Land</option>
            </select>
          </div>

          {/* LOCATION */}
          <div>
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Location
            </label>
            <input
              type="text"
              placeholder="e.g. Whitefield, Bengaluru"
              className="w-full border border-[#B8A47C] rounded-md px-4 py-2"
            />
          </div>

          {/* PRICE */}
          <div>
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Expected Price (₹)
            </label>
            <input
              type="number"
              placeholder="e.g. 9500000"
              className="w-full border border-[#B8A47C] rounded-md px-4 py-2"
            />
          </div>

          {/* AREA */}
          <div>
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Area (sq.ft)
            </label>
            <input
              type="number"
              placeholder="e.g. 1650"
              className="w-full border border-[#B8A47C] rounded-md px-4 py-2"
            />
          </div>

          {/* BEDROOMS */}
          <div>
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Bedrooms (BHK)
            </label>
            <select className="w-full border border-[#B8A47C] rounded-md px-4 py-2">
              <option>Select</option>
              <option>1 BHK</option>
              <option>2 BHK</option>
              <option>3 BHK</option>
              <option>4+ BHK</option>
            </select>
          </div>

          {/* UPLOAD IMAGES */}
          <div className="md:col-span-2">
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Upload Property Images
            </label>
            <input
              type="file"
              multiple
              className="w-full border border-[#B8A47C] rounded-md px-4 py-2"
            />
          </div>

          {/* DESCRIPTION */}
          <div className="md:col-span-2">
            <label className="block text-[#6D1B1C] font-semibold mb-1">
              Property Description
            </label>
            <textarea
              rows={4}
              placeholder="Describe your property in detail..."
              className="w-full border border-[#B8A47C] rounded-md px-4 py-2"
            />
          </div>

          {/* NEARBY AREAS */}
          <div className="md:col-span-2">
            <h3 className="text-xl font-semibold text-[#6D1B1C] mb-3 flex items-center gap-2">
              <FaMapMarkerAlt /> Nearby Areas (Recommended)
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div className="bg-white border border-[#B8A47C] rounded-lg p-4">
                <p className="text-[#1F3A2E]">🏫 Schools within 2 km</p>
              </div>

              <div className="bg-white border border-[#B8A47C] rounded-lg p-4">
                <p className="text-[#1F3A2E]">🏥 Hospitals within 3 km</p>
              </div>

              <div className="bg-white border border-[#B8A47C] rounded-lg p-4">
                <p className="text-[#1F3A2E]">🛍 Shopping Mall nearby</p>
              </div>
            </div>
          </div>

        </div>

        {/* SUBMIT BUTTON */}
        <div className="text-center mt-10">
          <button
            onClick={() => setShowPopup(true)}
            className="bg-[#6D1B1C] text-white px-10 py-3 rounded-md hover:bg-[#541516]"
          >
            Submit for Verification
          </button>
        </div>
      </div>

      {/* VERIFICATION POP-UP */}
      {showPopup && (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center">
          <div className="bg-white p-8 rounded-xl text-center max-w-md">

            <FaClipboardCheck className="text-5xl text-[#6D1B1C] mx-auto mb-4" />

            <h2 className="text-xl font-bold text-[#6D1B1C] mb-2">
              Submission Received!
            </h2>

            <p className="text-[#1F3A2E] mb-4">
              Your property will be reviewed, verified, and cross-checked by our 
              expert team before going live.
            </p>

            <div className="flex justify-center gap-4">
              <button
                onClick={() => setShowPopup(false)}
                className="bg-[#6D1B1C] text-white px-6 py-2 rounded-md"
              >
                <FaCheckCircle className="inline mr-2" />
                OK
              </button>

              <button
                onClick={() => setShowPopup(false)}
                className="bg-white border border-[#B8A47C] text-[#6D1B1C] px-6 py-2 rounded-md"
              >
                <FaTimes className="inline mr-2" />
                Close
              </button>
            </div>

          </div>
        </div>
      )}

    </section>
  );
}
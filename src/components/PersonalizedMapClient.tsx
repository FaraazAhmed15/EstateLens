"use client";

import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { useState } from "react";
import "leaflet/dist/leaflet.css";
import "./leafletFix";

const LOCATIONS = {
  north: {
    center: [13.13, 77.62] as [number, number],
    listings: ["Hebbal", "Yelahanka", "Hennur"],
  },
  south: {
    center: [12.91, 77.58] as [number, number],
    listings: ["JP Nagar", "Banashankari", "Kanakapura Rd"],
  },
  east: {
    center: [12.97, 77.72] as [number, number],
    listings: ["Whitefield", "KR Puram", "ITPL"],
  },
  west: {
    center: [12.97, 77.52] as [number, number],
    listings: ["Rajajinagar", "Nagarbhavi"],
  },
  central: {
    center: [12.97, 77.59] as [number, number],
    listings: ["MG Road", "Indiranagar"],
  },
};

export default function PersonalizedMapClient() {
  const [active, setActive] = useState<keyof typeof LOCATIONS>("central");

  return (
    <section id="personalized-insights" className="mt-20 mb-20 max-w-6xl mx-auto px-4">
      <h2 className="text-3xl font-bold text-[#6D1B1C] mb-8 text-center">
        Find Homes by Location
      </h2>

      {/* Buttons */}
      <div className="flex flex-wrap justify-center gap-3 mb-6">
        {Object.keys(LOCATIONS).map((key) => (
          <button
            key={key}
            onClick={() => setActive(key as keyof typeof LOCATIONS)}
            className={`px-4 py-2 rounded-md border ${
              active === key
                ? "bg-[#6D1B1C] text-white"
                : "bg-white text-[#6D1B1C]"
            }`}
          >
            {key.charAt(0).toUpperCase() + key.slice(1)} Bengaluru
          </button>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* map */}
        <MapContainer
          center={LOCATIONS[active].center}
          zoom={12}
          className="h-[400px] rounded-xl" >
          <TileLayer
            attribution="© OpenStreetMap"
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>

          {LOCATIONS[active].listings.map((place, i) => (
            <Marker
              key={i}
              position={[
                LOCATIONS[active].center[0] + i * 0.01,
                LOCATIONS[active].center[1] + i * 0.01,
              ]}>
              <Popup>{place}</Popup>
            </Marker>
          ))}
        </MapContainer>

        {/* Listings */}
        <div className="bg-[#FDF4E2] rounded-xl p-6">
          <h4 className="font-semibold text-[#6D1B1C] mb-4">
            {active.charAt(0).toUpperCase() + active.slice(1)} Bengaluru Listings
          </h4>

          <ul className="space-y-2">
            {LOCATIONS[active].listings.map((area, i) => (
              <li key={i} className="text-[#1F3A2E]">
                • {area}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
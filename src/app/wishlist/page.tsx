"use client";

import { useEffect, useState } from "react";
import Link from "next/link";

export default function WishlistPage() {

  const [wishlist, setWishlist] = useState<any[]>([]);

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("wishlist") || "[]");
    setWishlist(saved);
  }, []);

  const removeFromWishlist = (link: string) => {

    const updated = wishlist.filter((item) => item.link !== link);

    setWishlist(updated);

    localStorage.setItem("wishlist", JSON.stringify(updated));
  };

  return (
    <div className="max-w-6xl mx-auto mt-16 px-6">

      <h1 className="text-3xl font-bold text-center text-[#6D1B1C] mb-10">
        ❤️ Your Wishlist
      </h1>

      {wishlist.length === 0 ? (
        <p className="text-center text-gray-500">
          No properties added to wishlist yet.
        </p>
      ) : (

        <div className="grid md:grid-cols-3 gap-8">

          {wishlist.map((property, index) => (

            <div
              key={index}
              className="bg-[#FDF4E2] border border-[#B8A47C] rounded-xl p-4 shadow"
            >

              <img
                src={property.image}
                className="w-full h-40 object-cover rounded"
              />

              <h3 className="mt-3 font-semibold text-[#6D1B1C]">
                {property.title}
              </h3>

              <div className="flex gap-3 mt-3">

                <Link
                  href={property.link || "#"}
                  className="text-white bg-[#6D1B1C] px-4 py-2 rounded"
                >
                  View Property
                </Link>

                <button
                  onClick={() => removeFromWishlist(property.link)}
                  className="bg-gray-300 px-4 py-2 rounded hover:bg-gray-400"
                >
                  Remove
                </button>

              </div>

            </div>

          ))}

        </div>

      )}

    </div>
  );
}
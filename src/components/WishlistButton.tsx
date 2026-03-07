"use client";

import { FaHeart } from "react-icons/fa";

export default function WishlistButton() {

  const addToWishlist = () => {

    const property = {
      title: document.querySelector("h1")?.textContent || "Property",
      image: document.querySelector("img")?.getAttribute("src") || "",
      link: window.location.pathname
    };

    const existing = JSON.parse(localStorage.getItem("wishlist") || "[]");

    const alreadyAdded = existing.find(
      (item: any) => item.link === property.link
    );

    if (!alreadyAdded) {
      existing.push(property);
      localStorage.setItem("wishlist", JSON.stringify(existing));
      alert("Added to Wishlist ❤️");
    } else {
      alert("Already in wishlist");
    }
  };

  return (
    <button
      onClick={addToWishlist}
      className="flex items-center gap-2 border border-[#B8A47C] text-[#6D1B1C] px-4 py-2 rounded-md hover:bg-[#F4E9D8]"
    >
      <FaHeart className="text-red-500" />
      Wishlist
    </button>
  );
}
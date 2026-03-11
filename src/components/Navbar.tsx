"use client";

import Link from "next/link";
import { useState } from "react";
import {
  FaHome,
  FaInfoCircle,
  FaBuilding,
  FaPhone,
  FaSignInAlt,
  FaUserPlus,
  FaHeart,
  FaSignOutAlt
} from "react-icons/fa";

import SignupPopup from "@/components/signup_modal";
import LoginPopup from "@/components/login_popup";
import { logout } from "@/lib/session"; // import logout function to clear session on logout

export default function Navbar() {
  const [openSignup, setOpenSignup] = useState(false);
  const [openLogin, setOpenLogin] = useState(false);

  const handleLogout = () => {
    logout(); // remove session
    alert("Logged out successfully");
    window.location.reload(); // reload so new user can login
  };

  return (
    <>
      <header className="sticky top-0 z-40 h-20 bg-white border-b shadow-sm">
        <div className="flex h-full items-center justify-between px-8">

          {/* LOGO */}
          <Link href="/" className="text-2xl font-bold text-[#0F2A44]">
            Estate<span className="text-[#7A1F2B]">Lens</span>
          </Link>

          {/* MENU */}
          <nav className="hidden md:flex items-center gap-8 text-[16px] font-medium">
            <Link href="/" className="hover:text-[#7A1F2B] flex gap-2">
              <FaHome /> Home
            </Link>

            <Link
              href="/home-user-subscribed/home-user-subscribed-properties"
              className="hover:text-[#7A1F2B] flex gap-2"
            >
              <FaBuilding /> Properties
            </Link>

            <Link href="/about" className="hover:text-[#7A1F2B] flex gap-2">
              <FaInfoCircle /> About
            </Link>

            <Link href="/contact" className="hover:text-[#7A1F2B] flex gap-2">
              <FaPhone /> Contact
            </Link>
          </nav>

          {/* RIGHT SIDE BUTTONS */}
          <div className="flex items-center gap-5">

            {/* WISHLIST */}
            <Link
              href="/wishlist"
              className="text-[#0F2A44] font-medium hover:text-[#7A1F2B] flex gap-2"
            >
              <FaHeart />
              Wishlist
            </Link>

            {/* LOGIN */}
            <button
              onClick={() => setOpenLogin(true)}
              className="text-[#0F2A44] font-medium hover:text-[#7A1F2B] flex gap-2"
            >
              <FaSignInAlt />
              Login
            </button>

            {/* LOGOUT */}
            <button
              onClick={handleLogout}
              className="text-[#0F2A44] font-medium hover:text-red-600 flex gap-2"
            >
              <FaSignOutAlt />
              Logout
            </button>

            {/* SIGNUP */}
            <button
              onClick={() => setOpenSignup(true)}
              className="bg-[#7A1F2B] text-white px-5 py-2 rounded-full shadow hover:bg-[#5e1821] flex gap-2"
            >
              <FaUserPlus />
              Sign Up
            </button>

          </div>
        </div>
      </header>

      {/* POPUPS */}
      <LoginPopup
        isOpen={openLogin}
        onClose={() => setOpenLogin(false)}
        onSwitchToSignup={() => setOpenSignup(true)}
      />

      <SignupPopup
        isOpen={openSignup}
        onClose={() => setOpenSignup(false)}
        onSwitchToLogin={() => setOpenLogin(true)}
      />
    </>
  );
}
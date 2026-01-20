'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { FaBars, FaTimes, FaHome, FaInfoCircle, FaBuilding, FaPhone } from 'react-icons/fa';

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : 'auto';
  }, [open]);

  return (
    <>
      {/* header or top menu bar */}
      <header className="sticky top-0 z-40 h-20 bg-white border-b border-slate-200">
  <div className="flex h-full items-center justify-between px-6">

    {/* logo section */}
    <Link href="/" className="text-2xl font-bold text-[#0F2A44]">
      Estate<span className="text-[#7A1F2B]">Lens</span>
    </Link>

    {/* Hamburger button */}
    <button
      onClick={() => setOpen(true)}
      className="flex items-center gap-3 bg-[#7A1F2B] text-white px-4 py-2 rounded-lg shadow">
      <span className="font-semibold tracking-wide">MENU</span>
      <FaBars className="text-xl" />
    </button>

  </div>
</header>

      {/* overlay section */}
      {open && (
        <div
          className="fixed inset-0 bg-black/40 z-40"
          onClick={() => setOpen(false)}
        />
      )}

      {/* side menu */}
      {open && (
  <aside className="fixed top-0 right-0 h-full w-80 z-50 flex items-start justify-center pt-28">
    
    {/* MENU CARD */}
    <div className="w-[90%] min-h-[420px] bg-[#F4F1EC] border border-[#B8A47C] rounded-lg shadow-lg overflow-hidden">

      {/* CLOSE */}
      <div className="flex justify-end p-3">
        <button
          onClick={() => setOpen(false)}
          className="text-xl text-[#6D1B1C]">
          <FaTimes />
        </button>
      </div>

      {/* listing menu items */}
      <nav className="flex flex-col text-[16px] font-medium text-[#1F3A2E]">

        {[
          { name: 'Home', href: '/', icon: <FaHome /> },
          { name: 'About', href: '/about', icon: <FaInfoCircle /> },
          { name: 'Properties', href: '/properties', icon: <FaBuilding /> },
          { name: 'Contact', href: '/contact', icon: <FaPhone /> },
        ].map((item) => (
          <Link
            key={item.name}
            href={item.href}
            onClick={() => setOpen(false)}
            className="flex items-center gap-4 px-5 py-4 border-t border-[#B8A47C]
                       hover:bg-[#6D1B1C] hover:text-white transition" >
            <span className="text-[#6D1B1C] hover:text-white">
              {item.icon}
            </span>
            {item.name}
          </Link>
        ))}

      </nav>
    </div>
  </aside>
)}
      
    </>
  );
}
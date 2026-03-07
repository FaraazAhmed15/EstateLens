import {
  FaPhoneAlt,
  FaInstagram,
  FaMapMarkerAlt,
} from "react-icons/fa";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[#F4E9D8] border-t border-[#B8A47C] mt-20">
      <div className="max-w-7xl mx-auto px-8 py-12 grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* contact us*/}
        <div>
          <h3 className="text-xl font-bold text-[#6D1B1C] mb-4">
            Contact Us
          </h3>

          <ul className="space-y-3 text-[#1F3A2E]">
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#6D1B1C]" />
              +91 86603 64442
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#6D1B1C]" />
              +91 99166 99884
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#6D1B1C]" />
              +91 93801 78776
            </li>
            <li className="flex items-center gap-3">
              <FaPhoneAlt className="text-[#6D1B1C]" />
              +91 72595 20082
            </li>
          </ul>
        </div>

        {/* insta */}
        <div>
          <h3 className="text-xl font-bold text-[#6D1B1C] mb-4">
            Instagram
          </h3>

          <ul className="space-y-3 text-[#1F3A2E]">
            <li className="flex items-center gap-3">
              <FaInstagram className="text-[#6D1B1C]" />
              <a href="#" className="hover:underline">
                _asjad_01
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-[#6D1B1C]" />
              <a href="#" className="hover:underline">
                belindariya.a
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-[#6D1B1C]" />
              <a href="#" className="hover:underline">
                _esther_gloria
              </a>
            </li>
            <li className="flex items-center gap-3">
              <FaInstagram className="text-[#6D1B1C]" />
              <a href="#" className="hover:underline">
                _faraaz_ahmed
              </a>
            </li>
          </ul>
        </div>

        {/* location section */}
        <div>
          <h3 className="text-xl font-bold text-[#6D1B1C] mb-4">
            Location
          </h3>

          <p className="text-[#1F3A2E] mb-4 flex items-start gap-2">
            <FaMapMarkerAlt className="text-[#6D1B1C] mt-1" />
            Mount Carmel College, No. 58, Palace Road,
            Vasanth Nagar, Bengaluru, Karnataka – 560001
          </p>

          {/* google map */}
          <div className="w-full h-[200px] border border-[#B8A47C] rounded-lg overflow-hidden">
            <iframe
              title="Mount Carmel College Map"
              src="https://www.google.com/maps?q=Mount+Carmel+College+Bangalore&output=embed"
              className="w-full h-full"
              loading="lazy"
            />
          </div>
        </div>

      </div>

      {/* footers bottom */}
      <div className="border-t border-[#B8A47C] py-4 px-8 text-sm text-[#1F3A2E] flex flex-col md:flex-row items-center justify-between">
        <p>
          © {new Date().getFullYear()} EstateLens. All rights reserved.
        </p>

        <Link href="/feedback">
          <button className="mt-3 md:mt-0 bg-[#1C2B39] text-white px-5 py-2 rounded-lg hover:bg-[#C6A75E] transition duration-300">
            Feedback
          </button>
        </Link>
      </div>
    </footer>
  );
}

import { useRef } from "react";
import Link from "next/link";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

export default function CommercialProperties() {
const scrollRef = useRef<HTMLDivElement>(null);

const scroll = (direction: "left" | "right") => {
if (!scrollRef.current) return;
scrollRef.current.scrollBy({
left: direction === "left" ? -340 : 340,
behavior: "smooth",
});
};

const commercialItems = [
{
title: "Office Space",
desc: "Work-ready offices in prime business locations.",
img: "/images/commercial_office.jpeg",
href: "/commercial_properties/offfice_spaces",
},
{
title: "Retail Space",
desc: "Shops and showrooms in high-footfall areas.",
img: "/images/rental_space.jpeg",
href: "/commercial_properties/retail_spaces",
},
{
title: "IT & Business Park",
desc: "Large-scale commercial hubs for enterprises.",
img: "/images/it_parl.jpeg",
href: "/commercial_properties/IT_parks",
},
{
title: "Co-Working Spaces",
desc: "Flexible shared offices ideal for startups and freelancers.",
img: "/images/coworking.jpeg",
href: "/commercial_properties/co_working_spaces",
},
{
title: "Warehouses & Industrial Units",
desc: "Spacious facilities for storage, logistics, and manufacturing.",
img: "/images/warehouse.jpeg",
href: "/commercial_properties/warehouses",
},
];

return (
<section className="mb-24 relative px-4">
<h2
className="text-3xl font-bold text-[#6D1B1C] mb-10"
style={{ fontFamily: "'Sanchez', serif" }}>
Commercial Properties
</h2>

{/* left arrow on the row */}  
  <button  
    onClick={() => scroll("left")}  
    className="absolute left-2 top-[55%] -translate-y-1/2 z-10  
               bg-[#6D1B1C] text-white p-3 rounded-full shadow-md  
               hover:bg-[#541516]"  
>  
    <FaChevronLeft />  
  </button>  

  {/* right arrow */}  
  <button  
    onClick={() => scroll("right")}  
    className="absolute right-2 top-[55%] -translate-y-1/2 z-10  
               bg-[#6D1B1C] text-white p-3 rounded-full shadow-md  
               hover:bg-[#541516]"   >  
    <FaChevronRight />  
  </button>  

  {/* scrolling part */}  
  <div  
    ref={scrollRef}  
    className="flex gap-8 overflow-x-auto scroll-smooth px-10 scrollbar-hide"  >  
    {commercialItems.map((item, i) => (  
      <Link key={i} href={item.href} className="min-w-[320px]">  
        <div  
          className="bg-white border border-[#B8A47C]  
                     rounded-xl overflow-hidden shadow-sm  
                     hover:shadow-xl hover:-translate-y-1  
                     transition cursor-pointer h-full"  >  
          {/* image */}  
          <div className="h-[180px] overflow-hidden">  
            <img  
              src={item.img}  
              alt={item.title}  
              className="w-full h-full object-cover  
                         hover:scale-105 transition duration-300"  />  
          </div>  

          {/* content */}  
          <div className="p-6">  
            <h4 className="text-xl font-semibold text-[#6D1B1C] mb-2">  
              {item.title}  
            </h4>  
            <p className="text-[#1F3A2E] text-sm">{item.desc}</p>  
          </div>  
        </div>  
      </Link>  
    ))}  
  </div>  
</section>

);
} 
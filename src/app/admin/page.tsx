"use client";

export default function AdminPage() {
  return (
    <div className="min-h-screen bg-[#FDF4E2] p-8">

      {/* Center Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Administrator Dashboard
      </h1>

      {/* 3 Empty Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">

        {/* Card 1 */}
        <div className="bg-white rounded-xl shadow-lg h-48"></div>

        {/* Card 2 */}
        <div className="bg-white rounded-xl shadow-lg h-48"></div>

        {/* Card 3 */}
        <div className="bg-white rounded-xl shadow-lg h-48"></div>

      </div>

    </div>
  );
}
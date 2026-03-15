"use client";

export default function OwnerPage() {
  return (
    <div className="min-h-screen bg-[#FDF4E2] p-8">

      {/* Center Title */}
      <h1 className="text-3xl font-bold text-center mb-10">
        Owner Dashboard
      </h1>

      {/* Table Card */}
      <div className="bg-white rounded-xl shadow-lg p-6 max-w-6xl mx-auto">

        <div className="overflow-x-auto">

          <table className="w-full border">

            <thead className="bg-gray-100">
              <tr>
                <th className="p-3 border">Property Name</th>
                <th className="p-3 border">Location</th>
                <th className="p-3 border">Price</th>
                <th className="p-3 border">Status</th>
              </tr>
            </thead>

            <tbody>
              <tr>
                <td className="p-3 border text-center">-</td>
                <td className="p-3 border text-center">-</td>
                <td className="p-3 border text-center">-</td>
                <td className="p-3 border text-center">-</td>
              </tr>
            </tbody>

          </table>

        </div>

      </div>

    </div>
  );
}
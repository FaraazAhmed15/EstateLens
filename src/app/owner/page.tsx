"use client";

import { useEffect, useState } from "react";
import { getSession } from "@/lib/session";

interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  category: string;
  price: string;
  budget: string;
  bhk: string;
  image: string;
  page_path: string;
  price_value: string;
  messages?: { id: number; userName: string; page_path: string; message: string }[];
}

interface SessionData {
  name: string | null;
  role: string | null;
}

export default function OwnerPage() {
  const [session, setSession] = useState<SessionData | null>(null);
  const [properties, setProperties] = useState<Property[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    async function loadData() {
      try {
        const sess = getSession();
        setSession(sess);

        if (!sess || !sess.name) {
          setError("You are not logged in");
          setLoading(false);
          return;
        }

        const res = await fetch("/api/owner/owner_data", {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ ownerName: sess.name }),
        });

        if (!res.ok) throw new Error("Failed to fetch properties");

        const data: Property[] = await res.json();
        setProperties(data);
      } catch (err: any) {
        console.error(err);
        setError(err.message || "An error occurred");
      } finally {
        setLoading(false);
      }
    }

    loadData();
  }, []);

  if (loading) return <div className="text-center mt-20 text-lg">Loading properties...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#FDF4E2] p-8">
      {session && session.name ? (
        <div className="mb-6 text-center">
          <h1 className="text-2xl font-bold">Welcome, {session.name}</h1>
          <p className="text-lg">Role: {session.role}</p>
        </div>
      ) : (
        <p className="text-center mb-6 text-red-500">You are not logged in</p>
      )}

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {properties.length === 0 ? (
          <p className="text-center col-span-full">No properties found.</p>
        ) : (
          properties.map((prop) => (
            <div key={prop.id} className="bg-white shadow-lg rounded-xl p-4 flex flex-col">
              <img
                src={prop.image}
                alt={prop.title}
                className="w-full h-48 object-cover rounded-lg mb-4"
              />
              <h2 className="font-bold text-lg mb-1">{prop.title}</h2>
              <p className="text-sm mb-1">
                <strong>Location:</strong> {prop.location}
              </p>
              <p className="text-sm mb-1">
                <strong>Type:</strong> {prop.type} | <strong>BHK:</strong> {prop.bhk}
              </p>
              <p className="text-sm mb-1">
                <strong>Category:</strong> {prop.category}
              </p>
              <p className="text-sm mb-1">
                <strong>Price:</strong> {prop.price} ({prop.price_value})
              </p>

              {/* View Details Button */}
              <button
                onClick={() => window.location.href = prop.page_path}
                className="mt-3 bg-[#6D1B1C] hover:bg-[#8B1F20] text-white font-semibold py-2 px-4 rounded"
              >
                View Details
              </button>

              {/* Messages Section */}
              {prop.messages && prop.messages.length > 0 && (
                <div className="mt-4 p-3 bg-[#F8F3E8] border border-[#B8A47C] rounded">
                  <h4 className="font-semibold text-[#6D1B1C] mb-2">Messages:</h4>
                  {prop.messages.map((msg) => (
                    <div key={msg.id} className="mb-2">
                      <p className="text-sm font-medium">{msg.userName}:</p>
                      <p className="text-xs text-gray-400">{msg.message}</p>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))
        )}
      </div>
    </div>
  );
}
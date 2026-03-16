"use client";

import { useEffect, useState } from "react";

interface User {
  id: number;
  name: string;
  email: string;
  role: string;
  created_at: string;
}

interface Feedback {
  id: number;
  name: string;
  email: string;
  phone: string;
  message: string;
}

interface ContactMessage {
  id: number;
  userName: string;
  message: string;
}

export default function AdminPage() {
  const [users, setUsers] = useState<User[]>([]);
  const [feedbacks, setFeedbacks] = useState<Feedback[]>([]);
  const [contacts, setContacts] = useState<ContactMessage[]>([]);
  const [view, setView] = useState<"users" | "feedback" | "messages">("users");

  const [loading, setLoading] = useState(true);
  const [loadingData, setLoadingData] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const [newAdminName, setNewAdminName] = useState("");
  const [newAdminEmail, setNewAdminEmail] = useState("");
  const [newAdminPassword, setNewAdminPassword] = useState("");
  const [adding, setAdding] = useState(false);
  const [addMessage, setAddMessage] = useState<string | null>(null);

  // Fetch users on initial load
  useEffect(() => {
    fetchUsers();
  }, []);

  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/user");
      if (!res.ok) throw new Error("Failed to fetch users");
      const data: User[] = await res.json();
      setUsers(data);
      setView("users");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setLoading(false);
    }
  };

  const fetchFeedbacks = async () => {
    setLoadingData(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/feedback");
      if (!res.ok) throw new Error("Failed to fetch feedback");
      const data: Feedback[] = await res.json();
      setFeedbacks(data);
      setView("feedback");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setLoadingData(false);
    }
  };

  const fetchMessages = async () => {
    setLoadingData(true);
    setError(null);
    try {
      const res = await fetch("/api/admin/messages");
      if (!res.ok) throw new Error("Failed to fetch messages");
      const data: ContactMessage[] = await res.json();
      setContacts(data);
      setView("messages");
    } catch (err: any) {
      console.error(err);
      setError(err.message || "An error occurred");
    } finally {
      setLoadingData(false);
    }
  };

  const handleAddAdmin = async (e: React.FormEvent) => {
    e.preventDefault();
    setAdding(true);
    setAddMessage(null);

    try {
      const res = await fetch("/api/admin/user", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          name: newAdminName,
          email: newAdminEmail,
          password: newAdminPassword,
        }),
      });
      const data = await res.json();
      if (!res.ok) throw new Error(data.error || "Failed to add admin");

      setUsers([...users, { id: data.id, name: newAdminName, email: newAdminEmail, role: "admin", created_at: new Date().toISOString() }]);
      setAddMessage("Admin added successfully!");
      setNewAdminName("");
      setNewAdminEmail("");
      setNewAdminPassword("");
    } catch (err: any) {
      console.error(err);
      setAddMessage(err.message || "An error occurred");
    } finally {
      setAdding(false);
    }
  };

  if (loading) return <div className="text-center mt-20 text-lg">Loading users...</div>;
  if (error) return <div className="text-center mt-20 text-red-500">{error}</div>;

  return (
    <div className="min-h-screen bg-[#FDF4E2] p-8">
      <h1 className="text-3xl font-bold text-center mb-4">Administrator Dashboard</h1>

      {/* Buttons */}
      <div className="flex justify-center gap-4 mb-6">
        <button onClick={fetchUsers} className="bg-[#6D1B1C] hover:bg-[#8B1F20] text-white font-semibold py-2 px-4 rounded">Users</button>
        <button onClick={fetchFeedbacks} className="bg-[#6D1B1C] hover:bg-[#8B1F20] text-white font-semibold py-2 px-4 rounded">Feedback</button>
        <button onClick={fetchMessages} className="bg-[#6D1B1C] hover:bg-[#8B1F20] text-white font-semibold py-2 px-4 rounded">Messages</button>
      </div>

      {loadingData && <div className="text-center mb-6">Loading...</div>}

      {/* Users Table */}
      {view === "users" && users.length > 0 && (
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse bg-white rounded-xl shadow-md">
            <thead className="bg-[#6D1B1C] text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Role</th>
                <th className="p-3 text-left">Created At</th>
              </tr>
            </thead>
            <tbody>
              {users.map(u => (
                <tr key={u.id} className="border-b last:border-none">
                  <td className="p-3">{u.id}</td>
                  <td className="p-3">{u.name}</td>
                  <td className="p-3">{u.email}</td>
                  <td className="p-3">{u.role}</td>
                  <td className="p-3">{new Date(u.created_at).toLocaleString()}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Feedback Table */}
      {view === "feedback" && feedbacks.length > 0 && (
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse bg-white rounded-xl shadow-md">
            <thead className="bg-[#6D1B1C] text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Name</th>
                <th className="p-3 text-left">Email</th>
                <th className="p-3 text-left">Phone</th>
                <th className="p-3 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {feedbacks.map(f => (
                <tr key={f.id} className="border-b last:border-none">
                  <td className="p-3">{f.id}</td>
                  <td className="p-3">{f.name}</td>
                  <td className="p-3">{f.email}</td>
                  <td className="p-3">{f.phone}</td>
                  <td className="p-3">{f.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Messages Table */}
      {view === "messages" && contacts.length > 0 && (
        <div className="overflow-x-auto mb-10">
          <table className="w-full border-collapse bg-white rounded-xl shadow-md">
            <thead className="bg-[#6D1B1C] text-white">
              <tr>
                <th className="p-3 text-left">ID</th>
                <th className="p-3 text-left">Username</th>
                <th className="p-3 text-left">Message</th>
              </tr>
            </thead>
            <tbody>
              {contacts.map(c => (
                <tr key={c.id} className="border-b last:border-none">
                  <td className="p-3">{c.id}</td>
                  <td className="p-3">{c.userName}</td>
                  <td className="p-3">{c.message}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      {/* Add New Admin Form */}
      <div className="max-w-md mx-auto bg-white p-6 rounded-xl shadow-md">
        <h2 className="text-2xl font-bold mb-4 text-center text-[#6D1B1C]">Add New Admin</h2>
        <form onSubmit={handleAddAdmin} className="space-y-4">
          <input type="text" placeholder="Name" value={newAdminName} onChange={e => setNewAdminName(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
          <input type="email" placeholder="Email" value={newAdminEmail} onChange={e => setNewAdminEmail(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
          <input type="password" placeholder="Password" value={newAdminPassword} onChange={e => setNewAdminPassword(e.target.value)} className="w-full p-2 border border-gray-300 rounded" required />
          <button type="submit" disabled={adding} className="w-full bg-[#6D1B1C] hover:bg-[#8B1F20] text-white font-semibold py-2 px-4 rounded">
            {adding ? "Adding..." : "Add Admin"}
          </button>
          {addMessage && <p className="text-center mt-2 text-green-600">{addMessage}</p>}
        </form>
      </div>
    </div>
  );
}
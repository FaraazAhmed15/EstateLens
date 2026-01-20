"use client";

import { useState } from "react";
import UserPaymentModal from "@/components/UserPaymentModal";
import PaymentSuccessModal from "@/components/PaymentSuccessModal";

export default function SubscribeUser() {
  const [showPayment, setShowPayment] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [userId, setUserId] = useState("");

  const generateUserId = () => {
    return Math.floor(100000 + Math.random() * 900000).toString();
  };

  return (
    <section className="max-w-5xl mx-auto px-6 mt-20 mb-20 text-center">

      <h2 className="text-3xl font-bold text-[#6D1B1C] mb-6">
        Subscribe as User
      </h2>

      <p className="text-[#1F3A2E] mb-8">
        Get full access to property details, contact owners, and more.
      </p>

      <button
        onClick={() => setShowPayment(true)}
        className="bg-[#6D1B1C] text-white px-8 py-3 rounded-md hover:bg-[#541516]"
      >
        Subscribe Now — ₹999 / year
      </button>

      {/* PAYMENT MODAL */}
      <UserPaymentModal
        isOpen={showPayment}
        onClose={() => setShowPayment(false)}
        onSuccess={() => {
          setShowPayment(false);
          setUserId(generateUserId());
          setShowSuccess(true);
        }}
      />

      {/* SUCCESS MODAL */}
      <PaymentSuccessModal isOpen={showSuccess} userId={userId} />
    </section>
  );
}
"use client";

import { useState } from "react";
import { getSession } from "@/lib/session";

export default function FeedbackPage() {
  const [feedback, setFeedback] = useState("");
  const [submitted, setSubmitted] = useState(false);

const handleSubmit = async () => {

  if(feedback.trim() === "") return;

  try{

    const userName = getSession();

    const response = await fetch("/api/feedback",{
      method:"POST",
      headers:{
        "Content-Type":"application/json"
      },
      body: JSON.stringify({
        userName,
        message: feedback
      })
    });

    const data = await response.json();

    if(data.success){
      setSubmitted(true);
      setFeedback("");
    }else{
      alert("Error submitting feedback");
    }

  }catch(error){
    console.error(error);
    alert("Server error");
  }

};
  return (
    <div className="min-h-screen bg-[#1CA7A6] flex items-center justify-center px-6 py-16">

      <div className="bg-white w-full max-w-2xl rounded-3xl shadow-xl p-10">

        {/* Heading */}
        <h1 className="text-4xl font-bold text-[#1C2B39] text-center mb-8">
          Feedback
        </h1>

        {/* Feedback Textarea */}
        <textarea
          value={feedback}
          onChange={(e) => setFeedback(e.target.value)}
          placeholder="Share your experience or suggestions about EstateLens..."
          className="w-full h-40 border border-gray-300 rounded-xl p-4 text-gray-700 focus:outline-none focus:ring-2 focus:ring-[#C6A75E] resize-none"
        />

        {/* Submit Button */}
        <button
          onClick={handleSubmit}
          className="w-full mt-6 bg-[#1C2B39] text-white py-3 rounded-xl font-semibold hover:bg-[#C6A75E] transition duration-300"
        >
          Submit Feedback
        </button>

        {/* Success Message */}
        {submitted && (
          <p className="text-green-600 text-center mt-6 font-medium">
            Thank you for your valuable feedback!
          </p>
        )}

      </div>

    </div>
  );
}


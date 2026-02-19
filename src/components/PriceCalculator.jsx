'use client';
import { useState } from "react";

export default function PriceCalculator() {
  const [price, setPrice] = useState("");
const [downPayment, setDownPayment] = useState("");
const [rate, setRate] = useState("");
const [tenure, setTenure] = useState("");

const [loanAmount, setLoanAmount] = useState(null);
const [emi, setEmi] = useState(null);
const [totalPayable, setTotalPayable] = useState(null);

  const formatCurrency = (num) =>
    num.toLocaleString("en-IN", { maximumFractionDigits: 0 });

  const calculateEMI = () => {
    const priceNum = parseFloat(price);
    const downNum = parseFloat(downPayment) || 0;
    const rateNum = parseFloat(rate);
    const tenureNum = parseInt(tenure);

    if (!priceNum || !rateNum || !tenureNum) return;

    const loan = priceNum - downNum;
    const monthlyRate = rateNum / 12 / 100;
    const months = tenureNum * 12;

    const emiCalc =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const total = emiCalc * months;

    setLoanAmount(formatCurrency(loan));
    setEmi(formatCurrency(emiCalc));
    setTotalPayable(formatCurrency(total));
  };

  const clearForm = () => {
    setPrice("");
    setDownPayment("");
    setRate("");
    setTenure("");
    setLoanAmount(null);
    setEmi(null);
    setTotalPayable(null);
  };

  return (
    <section id="calculator" className="mt-20 mb-20">
      <div className="w-full bg-[#FDF4E2] rounded-xl shadow-md p-10">
        <h2 className="text-3xl font-bold text-center text-[#6D1B1C] mb-10">
          Property Price Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* LEFT — INPUT */}
          <div className="space-y-6">
            <input
              type="number"
              placeholder="Property Price (₹)"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6D1B1C]"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
            />

            <input
              type="number"
              placeholder="Down Payment (₹)"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6D1B1C]"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}
            />

            <input
              type="number"
              placeholder="Interest Rate (% per year)"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6D1B1C]"
              value={rate}
              onChange={(e) => setRate(e.target.value)}
            />

            <input
              type="number"
              placeholder="Loan Tenure (Years)"
              className="w-full border rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-[#6D1B1C]"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}
            />

            <div className="flex gap-4">
              <button
                onClick={calculateEMI}
                className="flex-1 px-8 py-3 bg-[#6D1B1C] text-white rounded-md hover:bg-[#541516] transition"
              >
                Calculate
              </button>

              <button
                onClick={clearForm}
                className="flex-1 px-8 py-3 bg-gray-300 text-[#1F3A2E] rounded-md hover:bg-gray-400 transition"
              >
                Clear
              </button>
            </div>
          </div>

          {/* RIGHT — RESULT */}
          <div className="bg-white rounded-lg p-8 shadow-sm">
            <h3 className="text-xl font-bold text-[#6D1B1C] mb-6">
              EMI Summary
            </h3>

            <ul className="space-y-4 text-[#1F3A2E]">
              <li className="flex justify-between border-b pb-2">
                <span>Loan Amount</span>
                <strong>₹ {loanAmount || "--"}</strong>
              </li>

              <li className="flex justify-between border-b pb-2">
                <span>Monthly EMI</span>
                <strong>₹ {emi || "--"}</strong>
              </li>

              <li className="flex justify-between">
                <span>Total Payable</span>
                <strong>₹ {totalPayable || "--"}</strong>
              </li>
            </ul>

            <p className="mt-6 text-xs text-gray-500">
              * This is an estimate. Actual EMI may vary depending on lender terms.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
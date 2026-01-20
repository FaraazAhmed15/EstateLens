'use client';
import { use, useState } from "react";

export default function PriceCalculator() {
  const [price, setPrice] = useState("");
  const [downPayment, setDownPayment] = useState("");
  const [rate, setRate] = useState("");
  const [tenure, setTenure] = useState("");

  const [loanAmount, setLoanAmount] = useState(null);
  const [emi, setEmi] = useState(null);
  const [totalPayable, setTotalPayable] = useState(null);

  const calculateEMI = () => {
    if (!price || !rate || !tenure) return;

    const loan = price - (downPayment || 0);
    const monthlyRate = rate / 12 / 100;
    const months = tenure * 12;

    const emiCalc =
      (loan * monthlyRate * Math.pow(1 + monthlyRate, months)) /
      (Math.pow(1 + monthlyRate, months) - 1);

    const total = emiCalc * months;

    setLoanAmount(loan.toFixed(0));
    setEmi(emiCalc.toFixed(0));
    setTotalPayable(total.toFixed(0));
  };

  return (
    <section id="calculator" className="mt-20 mb-20">
      <div className="max-w-5xl mx-auto bg-[#FDF4E2] rounded-xl shadow-md p-10">
        <h2 className="text-3xl font-bold text-center text-[#6D1B1C] mb-10">
          Property Price Calculator
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
          {/* input section */}
          <div className="space-y-5">
            <label className="block text-sm font-medium text-[#6D1B1C] mb-2">
                   Property Price (₹)</label>
            <input
              type="number"
              placeholder="e.g. 5000000"
              className="w-full border rounded-md px-4 py-2"
              value={price}
              onChange={(e) => setPrice(e.target.value)}/>
                
                <label className="block text-sm font-medium text-[#6D1B1C] mb-2">
                   Down Payment (₹)</label>
            <input
              type="number"
              placeholder="e.g. 1000000"
              className="w-full border rounded-md px-4 py-2"
              value={downPayment}
              onChange={(e) => setDownPayment(e.target.value)}/>
              
              <label className="block text-sm font-medium text-[#6D1B1C] mb-2">
                   Interest Rate (% per year)</label>
            <input
              type="number"
              placeholder="e.g. 7.5"
              className="w-full border rounded-md px-4 py-2"
              value={rate}
              onChange={(e) => setRate(e.target.value)}/>
                 
                 <label className="block text-sm font-medium text-[#6D1B1C] mb-2">
                   Loan Tenure (Years)</label>
            <input
              type="number"
              placeholder="e.g. 10"
              className="w-full border rounded-md px-4 py-2"
              value={tenure}
              onChange={(e) => setTenure(e.target.value)}/>

            
            <div className="flex gap-4">
  <button
    onClick={calculateEMI}
    className="px-12 py-2 bg-[#6D1B1C] text-white rounded-md hover:bg-[#541516]"
  >
    Calculate EMI
  </button>

  <button
    onClick={() => {
      setPrice("");
      setDownPayment("");
      setRate("");
      setTenure("");
      setLoanAmount(null);
      setEmi(null);
      setTotalPayable(null);
    }}
    className="px-12 py-2 bg-gray-300 text-[#1F3A2E] rounded-md hover:bg-gray-400"
  >
    Clear
  </button>
</div>

          </div>

          {/* output */}
          <div className="bg-white rounded-xl border p-8">
            <h4 className="text-xl font-semibold text-[#6D1B1C] mb-6">
              Estimated Results
            </h4>

            <ul className="space-y-4">
              <li className="flex justify-between">
                <span>Loan Amount</span>
                <strong>₹ {loanAmount || "--"}</strong>
              </li>

              <li className="flex justify-between">
                <span>Monthly EMI</span>
                <strong>₹ {emi || "--"}</strong>
              </li>

              <li className="flex justify-between">
                <span>Total Payable</span>
                <strong>₹ {totalPayable || "--"}</strong>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
"use client";
import { useState } from "react";

export default function PreApprovalPage() {

  const [name,setName] = useState("")
  const [email,setEmail] = useState("")
  const [phone,setPhone] = useState("")
  const [city,setCity] = useState("")
  const [date,setDate] = useState("")

  const [income,setIncome] = useState("")
  const [existingEmi,setExistingEmi] = useState("")
  const [employment,setEmployment] = useState("")

  const [govId,setGovId] = useState(null)
  const [bankStatement,setBankStatement] = useState(null)
  const [salarySlip,setSalarySlip] = useState(null)

  const [errors,setErrors] = useState({})
  const [submitted,setSubmitted] = useState(false)

  const [price,setPrice] = useState("")
  const [downPayment,setDownPayment] = useState("")
  const [rate,setRate] = useState("")
  const [tenure,setTenure] = useState("")

  const [loanAmount,setLoanAmount] = useState(null)
  const [emi,setEmi] = useState(null)
  const [totalPayable,setTotalPayable] = useState(null)

  const formatCurrency = (num)=>
    num.toLocaleString("en-IN",{maximumFractionDigits:0})

  const calculateEMI = () => {

    const priceNum=parseFloat(price)
    const downNum=parseFloat(downPayment)||0
    const rateNum=parseFloat(rate)
    const tenureNum=parseInt(tenure)

    if(!priceNum || !rateNum || !tenureNum) return

    const loan = priceNum-downNum
    const monthlyRate = rateNum/12/100
    const months = tenureNum*12

    const emiCalc =
      (loan*monthlyRate*Math.pow(1+monthlyRate,months))/
      (Math.pow(1+monthlyRate,months)-1)

    const total = emiCalc*months

    setLoanAmount(formatCurrency(loan))
    setEmi(formatCurrency(emiCalc))
    setTotalPayable(formatCurrency(total))
  }

  const clearForm=()=>{
    setPrice("")
    setDownPayment("")
    setRate("")
    setTenure("")
    setLoanAmount(null)
    setEmi(null)
    setTotalPayable(null)
  }

  const validateForm=()=>{

    let newErrors={}

    if(!name) newErrors.name="Name required"
    if(!email) newErrors.email="Email required"
    if(!phone) newErrors.phone="Phone required"
    if(!city) newErrors.city="City required"
    if(!date) newErrors.date="Select date"

    if(!income) newErrors.income="Income required"
    if(!employment) newErrors.employment="Select employment type"

    if(!govId) newErrors.govId="Upload Government ID"
    if(!bankStatement) newErrors.bankStatement="Upload Bank Statement"
    if(!salarySlip) newErrors.salarySlip="Upload Salary Slip"

    setErrors(newErrors)

    return Object.keys(newErrors).length===0
  }

  const handleSubmit=()=>{
    if(validateForm()){
      setSubmitted(true)
    }
  }

  return(

  <div className="max-w-6xl mx-auto px-6 py-12">

  <h1 className="text-4xl font-bold text-center text-[#6D1B1C] mb-14">
  Home Loan Pre-Approval Application
  </h1>

  {submitted &&(
  <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">

  <div className="bg-white p-8 rounded-xl shadow-xl text-center">

  <h2 className="text-2xl font-bold text-green-600 mb-4">
  Application Submitted
  </h2>

  <p>Your pre-approval request has been successfully submitted.</p>

  <button
  onClick={()=>setSubmitted(false)}
  className="mt-6 px-6 py-2 bg-green-600 text-white rounded-lg"
  >
  OK
  </button>

  </div>
  </div>
  )}

{/* PERSONAL INFO */}

<section className="bg-white shadow-md rounded-xl p-8 mb-10">

<h2 className="text-2xl font-semibold mb-6 text-[#6D1B1C]">
Personal Information
</h2>

<div className="grid md:grid-cols-2 gap-6">

<div>
<input
type="text"
placeholder="Full Name"
className="border p-3 rounded-lg w-full"
value={name}
onChange={(e)=>setName(e.target.value)}
/>
{errors.name && <p className="text-red-500 text-sm">{errors.name}</p>}
</div>

<div>
<input
type="email"
placeholder="Email Address"
className="border p-3 rounded-lg w-full"
value={email}
onChange={(e)=>setEmail(e.target.value)}
/>
{errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
</div>

<div>
<input
type="tel"
placeholder="Phone Number"
className="border p-3 rounded-lg w-full"
value={phone}
onChange={(e)=>setPhone(e.target.value)}
/>
{errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
</div>

<div>
<input
type="text"
placeholder="City"
className="border p-3 rounded-lg w-full"
value={city}
onChange={(e)=>setCity(e.target.value)}
/>
{errors.city && <p className="text-red-500 text-sm">{errors.city}</p>}
</div>

<div className="md:col-span-2">
<input
type="date"
className="border p-3 rounded-lg w-full"
min="1950-01-01"
max="2026-12-31"
value={date}
onChange={(e)=>setDate(e.target.value)}
/>
{errors.date && <p className="text-red-500 text-sm">{errors.date}</p>}
</div>

</div>
</section>

{/* INCOME DETAILS */}

<section className="bg-white shadow-md rounded-xl p-8 mb-10">

<h2 className="text-2xl font-semibold mb-6 text-[#6D1B1C]">
Income Details
</h2>

<div className="grid md:grid-cols-2 gap-6">

<div>
<input
type="number"
placeholder="Monthly Income (₹)"
className="border p-3 rounded-lg w-full no-spinner"
value={income}
onChange={(e)=>setIncome(e.target.value)}
/>
{errors.income && <p className="text-red-500 text-sm">{errors.income}</p>}
</div>

<input
type="number"
placeholder="Existing EMIs (₹)"
className="border p-3 rounded-lg w-full no-spinner"
value={existingEmi}
onChange={(e)=>setExistingEmi(e.target.value)}
/>

<div className="md:col-span-2">
<select
className="border p-3 rounded-lg w-full"
value={employment}
onChange={(e)=>setEmployment(e.target.value)}
>
<option value="">Select Employment Type</option>
<option>Salaried</option>
<option>Self-Employed</option>
<option>Business Owner</option>
</select>

{errors.employment && <p className="text-red-500 text-sm">{errors.employment}</p>}
</div>

</div>
</section>

{/* EMI CALCULATOR */}

<section className="bg-white shadow-md rounded-xl p-8 mb-10">

<h2 className="text-2xl font-semibold mb-8 text-[#6D1B1C]">
Property & Loan Calculator
</h2>

<div className="grid md:grid-cols-2 gap-10">

<div className="space-y-5">

<input
type="number"
placeholder="Property Price (₹)"
className="border p-3 rounded-lg w-full"
value={price}
onChange={(e)=>setPrice(e.target.value)}
/>

<input
type="number"
placeholder="Down Payment (₹)"
className="border p-3 rounded-lg w-full"
value={downPayment}
onChange={(e)=>setDownPayment(e.target.value)}
/>

<input
type="number"
placeholder="Interest Rate (%)"
className="border p-3 rounded-lg w-full"
value={rate}
onChange={(e)=>setRate(e.target.value)}
/>

<input
type="number"
placeholder="Loan Tenure (Years)"
className="border p-3 rounded-lg w-full"
value={tenure}
onChange={(e)=>setTenure(e.target.value)}
/>

<div className="flex gap-4">

<button
onClick={calculateEMI}
className="flex-1 bg-[#6D1B1C] text-white py-3 rounded-lg"
>
Calculate
</button>

<button
onClick={clearForm}
className="flex-1 bg-gray-300 py-3 rounded-lg"
>
Clear
</button>

</div>
</div>

<div className="bg-[#FDF4E2] p-6 rounded-lg">

<h3 className="text-xl font-bold mb-6 text-[#6D1B1C]">
EMI Summary
</h3>

<ul className="space-y-4">

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
</div>
</div>
</section>

{/* DOCUMENT UPLOAD */}

<section className="bg-white shadow-md rounded-xl p-8 mb-10">

<h2 className="text-2xl font-semibold mb-6 text-[#6D1B1C]">
Upload Required Documents
</h2>

<div className="grid md:grid-cols-3 gap-6">

<div>
<label className="block mb-2 font-medium">Government ID Proof</label>
<input
type="file"
className="border p-3 rounded-lg w-full"
onChange={(e)=>setGovId(e.target.files[0])}
/>
{errors.govId && <p className="text-red-500 text-sm">{errors.govId}</p>}
</div>

<div>
<label className="block mb-2 font-medium">Bank Statement</label>
<input
type="file"
className="border p-3 rounded-lg w-full"
onChange={(e)=>setBankStatement(e.target.files[0])}
/>
{errors.bankStatement && <p className="text-red-500 text-sm">{errors.bankStatement}</p>}
</div>

<div>
<label className="block mb-2 font-medium">Salary Slip / Income Proof</label>
<input
type="file"
className="border p-3 rounded-lg w-full"
onChange={(e)=>setSalarySlip(e.target.files[0])}
/>
{errors.salarySlip && <p className="text-red-500 text-sm">{errors.salarySlip}</p>}
</div>

</div>
</section>

<div className="text-center mt-12">

<button
onClick={handleSubmit}
className="px-12 py-3 bg-green-600 text-white rounded-lg shadow-md hover:bg-green-700 transition"
>
Submit Application
</button>

</div>

</div>
)
}
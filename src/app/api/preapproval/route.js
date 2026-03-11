import db from "@/lib/db";

export async function POST(req)  {
  try {

    const body = await req.json();

    const {
      userName,
      income,
      loanAmount,
      propertyPrice
    } = body;

    await db.query(
      "INSERT INTO preapproval (username,income,loan_amount,property_price) VALUES (?,?,?,?)",
      [userName, income, loanAmount, propertyPrice]
    );

    return Response.json({
      success: true,
      message: "Pre-approval saved successfully"
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
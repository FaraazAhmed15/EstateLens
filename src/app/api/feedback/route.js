import db from "@/lib/db";

export async function POST(req)  {

  try {

    const body = await req.json();

    const { userName, message } = body;

    // 🔹 validation check
    if(!userName || !message){
      return Response.json(
        { error: "Invalid request" },
        { status: 400 }
      );
    }

    await db.query(
      "INSERT INTO feedback (username,message) VALUES (?,?)",
      [userName, message]
    );

    return Response.json({
      success: true,
      message: "Feedback stored"
    });

  } catch (error) {

    console.error(error);

    return Response.json(
      { error: "Server error" },
      { status: 500 }
    );
  }
}
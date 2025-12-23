import { NextRequest, NextResponse } from "next/server";
import { sendLeadToFitlo } from "@/lib/fitlo";

export async function POST(req: NextRequest) {
  try {
    const { firstName, lastName, phone, email } = await req.json();

    if (!firstName || !phone) {
      return NextResponse.json(
        { success: false, error: "First name and phone number are required" },
        { status: 400 }
      );
    }

    const phoneRegex = /^\+1[0-9]{10}$/;
    if (!phoneRegex.test(phone)) {
      return NextResponse.json(
        {
          success: false,
          error: "Invalid phone number format. Use: +1XXXXXXXXXX",
        },
        { status: 400 }
      );
    }

    await sendLeadToFitlo({
      firstName,
      lastName: lastName || "",
      email: email || "",
      phone,
    });

    return NextResponse.json({
      success: true,
      message: "Thanks! We'll be in touch shortly.",
    });
  } catch (error) {
    console.error("Failed to submit lead:", error);

    if (error instanceof Error) {
      return NextResponse.json(
        { success: false, error: error.message },
        { status: 500 }
      );
    }

    return NextResponse.json(
      { success: false, error: "Failed to submit. Please try again." },
      { status: 500 }
    );
  }
}

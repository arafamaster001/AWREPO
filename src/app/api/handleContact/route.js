// app/api/handleContact/route.js
import { NextResponse } from "next/server";
import dbConnection from "@/config/connectDB";
import ContactModel from "@/models/ContactModel";

export async function POST(req) {
  try {
    await dbConnection();
    const body = await req.json();

    const newContact = new ContactModel({
      fullName: body.name,
      emailAddress: body.email,
      messageContent: body.message,
    });

    await newContact.save();

    return NextResponse.json(
      { success: true, message: "Form submitted successfully!" },
      { status: 201 }
    );
  } catch (error) {
    console.error("Form error:", error);
    return NextResponse.json(
      { success: false, message: "Failed to submit Form." },
      { status: 500 }
    );
  }
}

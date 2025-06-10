// app/api/handleBooking/route.js
import { NextResponse } from "next/server";
import dbConnection from "@/config/connectDB";
import BookingModel from "@/models/BookingModel";

export async function POST(req) {
  try {
    await dbConnection();
    const data = await req.json();
    const newBooking = new BookingModel(data);
    await newBooking.save();

    return NextResponse.json({ success: true, message: "Booking submitted successfully!" }, { status: 201 });
  } catch (error) {
    console.error("Booking error:", error);
    return NextResponse.json({ success: false, message: "Failed to submit booking." }, { status: 500 });
  }
}

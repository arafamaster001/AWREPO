// models/BookingModel.js
import mongoose from "mongoose";

const BookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  email: { type: String, required: true },
  phone: String,
  projectType: { type: String, required: true },
  timeline: { type: String, required: true },
  budget: { type: String, required: true },
  description: String,
  createdAt: { type: Date, default: Date.now },
});

export default mongoose.models.BookingModel || mongoose.model("BookingModel", BookingSchema);

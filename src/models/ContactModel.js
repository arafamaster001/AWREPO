// models/contact.model.js
import mongoose from "mongoose";

const contactSchema = new mongoose.Schema(
  {
    fullName: {
      type: String,
      required: [true, "Name is required"],
      trim: true,
    },
    emailAddress: {
      type: String,
      required: [true, "Email is required"],
    },
    messageContent: {
      type: String,
      required: [true, "Message is required"],
    },
  },
  {
    timestamps: true,
  }
);

const ContactModel =
  mongoose.models.ContactModel || mongoose.model("ContactModel", contactSchema);

export default ContactModel;

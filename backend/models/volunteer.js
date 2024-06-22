import mongoose from "mongoose";
import validator from "validator";

const volunteerSchema = new mongoose.Schema({
  name: {
    type: String,
    required: [true, "Name is required"],
    minlength: [3, "Name must be at least 3 characters long"],
    maxlength: [30, "Name cannot exceed 30 characters"],
  },
  email: {
    type: String,
    required: [true, "Email is required"],
    validate: [validator.isEmail, "Please include @ in  email address"],
  },
  phone: {
    type: String,
    required: [true, "Phone number is required"],
    minlength: [10, "Phone number must be exactly 10 digits"],
    maxlength: [10, "Phone number must be exactly 10 digits"],
  },
  message: {
    type: String,
    required: [true, "Message is required"],
  },
  amount: {
    type: String,
    required: [true, "Amount is required"],
  },
  reference: {
    type: String,
    required: [true, "Reference is required"],
    minlength: [12, "reference number must be exactly 12 digits"],
    maxlength: [12, "reference number must be exactly 12 digits"],
  },
});

export const volunteer = mongoose.model("volunteer", volunteerSchema);

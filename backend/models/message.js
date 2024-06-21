import mongoose from "mongoose";
import validator from "validator";

const messageScheam = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minLength: [3, "Name must contain at least 3 characters!"],
    maxLength: [30, "Name cannot exceed 30 characters!"],
  },
  email: {
    type: String,
    required: true,
    validate: [validator.isEmail, "Provide a valid email!"],
  },
  phone: {
    type: String,
    required: true,
    minLength: [10, "Phone number must contain exact 10 Digits!"],
    maxLength: [10, "Phone number must contain exact 10 Digits!"],
  },
  message: {
    type: String,
    required: true,
  },
  // amount: {
  //   type: String,
  //   required: [true, "Amount is required"],
  // },
  // reference: {
  //   type: String,
  //   required: [true, "Reference is required"],
  //   minlength: [12, "reference number must be exactly 12 digits"],
  //   maxlength: [12, "reference number must be exactly 12 digits"],
  // },
});

export const Message = mongoose.model("Message", messageScheam);
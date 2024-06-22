import { volunteer } from "../models/volunteer.js";

export const checkout = async (req, res, next) => {
  const { name, email, phone, amount, reference, message } = req.body;
  if (!name || !email || !phone || !amount || !reference || !message) {
    return res.status(400).json({
      success: false,
      message: "Please Fill Full Form!",
    });
  }
  try {
    await volunteer.create({ name, email, phone, amount, reference, message });

    return res.status(201).json({
      success: true,
      message: "Thanks for your contribution",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      const errorMessage = validationErrors.join(", ");
      return res.status(404).json({
        success: false,
        message: errorMessage,
      });
    }
    return res.status(500).json({
      success: false,
      message: "Internal Server Error",
    });
  }
};
// import { donation } from "../models/volunteer.js";

// export const postDonate = async (req, res, next) => {
//   const { name, email, phone, amount, reference, message } = req.body;
  
//   // Check if all required fields are present
//   if (!name || !email || !phone || !amount || !reference || !message) {
//     return res.status(400).json({
//       success: false,
//       message: "Please fill out all required fields!",
//     });
//   }

//   try {
//     try {
//       await donation.create({ name, email, phone, amount, reference, message });
//       return res.status(201).json({
//       success: true,
//       message: "Donation successfully submitted!",
//     });
//   } catch (error) {
//     // Handle validation errors
//     if (error.name === "ValidationError") {
//       const validationErrors = Object.values(error.errors).map(
//         (err) => err.message
//     ) ;
//       const errorMessage = validationErrors.join(", ");
//       return res.status(400).json({
//         success: false,
//         message: errorMessage,
//       });
//     }
//     // Handle other unexpected errors
//     console.error("Error in postMessage:", error);
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

// v.2

import { volunteer } from "../models/volunteer.js";

export const checkout = async (req, res, next) => {
  const { name, email, phone, amount, reference,message } = req.body;
  if (!name || !email || !phone || !amount || !reference || !message) {
    return res.status(4000).json({
      success: false,
      message: "Please Fill Full Form!",
    });
  }
  try {
      await volunteer.create({ name, email, phone, amount, reference, message });
    return res.status(201).json({
      success: true,
      message: "Messsage Sent Successfully!",
    });
  } catch (error) {
    if (error.name === "ValidationError") {
      const validationErrors = Object.values(error.errors).map(
        (err) => err.message
      );
      const errorMessage = validationErrors.join(", ");
      return res.status(4000).json({
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
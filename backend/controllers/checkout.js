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




// import { volunteer } from "../models/volunteer.js";
// import Razorpay from "razorpay";

// const razorpay = new Razorpay({
//   key_id: 'your-razorpay-key-id',
//   key_secret: 'your-razorpay-key-secret'
// });

// export const checkout = async (req, res, next) => {
//   const { name, email, phone, amount, reference, message } = req.body;
//   if (!name || !email || !phone || !amount || !reference || !message) {
//     return res.status(400).json({
//       success: false,
//       message: "Please Fill Full Form!",
//     });
//   }
//   try {
//     // Create a new order in Razorpay
//     const options = {
//       amount: amount * 100, // Amount in paise
//       currency: 'INR',
//       receipt: reference,
//       payment_capture: '1'
//     };

//     const order = await razorpay.orders.create(options);

//     // Save the contribution details to the database
//     await volunteer.create({ name, email, phone, amount, reference, message });

//     return res.status(201).json({
//       success: true,
//       message: "Thanks for your contribution",
//       orderId: order.id, // Send the order ID to the client
//       amount: order.amount, // Send the amount to the client
//       currency: order.currency, // Send the currency to the client
//     });
//   } catch (error) {
//     if (error.name === "ValidationError") {
//       const validationErrors = Object.values(error.errors).map(
//         (err) => err.message
//       );
//       const errorMessage = validationErrors.join(", ");
//       return res.status(404).json({
//         success: false,
//         message: errorMessage,
//       });
//     }
//     return res.status(500).json({
//       success: false,
//       message: "Internal Server Error",
//     });
//   }
// };

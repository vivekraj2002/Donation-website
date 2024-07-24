// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications

// const Donate = () => {
//   const [name, setName] = useState("");
//   const [phone, setPhone] = useState("");
//   const [email, setEmail] = useState("");
//   const [message, setMessage] = useState("");
//   const [amount, setAmount] = useState("");
//   const [reference, setReference] = useState("");
//   // const [disableBtn, setDisableBtn] = useState(false);
//   // const [donationSuccess, setDonationSuccess] = useState(false);

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     try {
//       //setDisableBtn(true); // You can use this state to disable the button while the request is in progress

//       // Send POST request to your backend
//       const response = await axios.post(
//         "http://localhost:4000/api/v1/volunteer/checkout",
//         {
//           name,
//           email,
//           phone,
//           message,
//           amount,
//           reference,
//         },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       );

//       // Reset form fields and show success message
//       setName("");
//       setEmail("");
//       setPhone("");
//       setAmount("");
//       setReference("");
//       setMessage("");
//       toast.success(response.data.message);
//     } catch (error) {
//       console.error(error.response.data.message);
//       toast.error(error.response.data.message);
//     }
//   };

//   return (
//     <section style={{ padding: "20px 0", backgroundColor: "#f0f8ff" }}>
//       <div
//         style={{
//           maxWidth: "600px",
//           margin: "0 auto",
//           padding: "20px",
//           border: "1px solid #ddd",
//           borderRadius: "8px",
//           backgroundColor: "#fff",
//         }}
//       >
//         <form onSubmit={handleSendMessage} style={{ textAlign: "center" }}>
//           <div style={{ marginBottom: "10px" }}>
//             <img src="/scanner.jpeg" alt="logo" style={{ width: "250px" }} />
//           </div>
//           <div style={{ marginBottom: "10px" }}>
//             <label
//               style={{
//                 display: "block",
//                 marginBottom: "10px",
//                 fontSize: "20px",
//                 color: "#333",
//               }}
//             >
//               Show your love for the Poor
//             </label>
//             <input
//               type="number"
//               value={amount}
//               onChange={(e) => setAmount(e.target.value)}
//               placeholder="Enter Donation Amount (INR)"
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 fontSize: "16px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 marginBottom: "10px",
//               }}
//             />
//             <input
//               type="number"
//               value={reference}
//               placeholder="Enter Reference Number"
//               onChange={(e) => setReference(e.target.value)}
//               style={{
//                 width: "100%",
//                 padding: "10px",
//                 fontSize: "16px",
//                 border: "1px solid #ccc",
//                 borderRadius: "4px",
//                 marginBottom: "10px",
//               }}
//             />
//           </div>
//           <input
//             type="text"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//             placeholder="Your Name"
//             style={{
//               width: "100%",
//               padding: "10px",
//               fontSize: "16px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               marginBottom: "10px",
//             }}
//           />
//           <input
//             type="email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             placeholder="Email Address"
//             style={{
//               width: "100%",
//               padding: "10px",
//               fontSize: "16px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               marginBottom: "10px",
//             }}
//           />
//           <input
//             type="tel"
//             value={phone}
//             onChange={(e) => setPhone(e.target.value)}
//             placeholder="Phone Number"
//             style={{
//               width: "100%",
//               padding: "10px",
//               fontSize: "16px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               marginBottom: "10px",
//             }}
//           />
//           <textarea
//             placeholder="Message"
//             value={message}
//             onChange={(e) => setMessage(e.target.value)}
//             style={{
//               height: "120px",
//               width: "100%",
//               padding: "10px",
//               fontSize: "16px",
//               border: "1px solid #ccc",
//               borderRadius: "4px",
//               marginBottom: "20px",
//             }}
//           />
//           <button
//             type="submit"
//             className="btn"
//               style={{
//               padding: "10px 20px",
//               fontSize: "16px",
//               border: "none",
//               borderRadius: "4px",
//               backgroundColor: "#007bff",
//               color: "#fff",
//               cursor: "pointer",
//             }}
//           >
//             Donate {amount? `₹${amount}` : "₹0"} 
            
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Donate;




// // import React, { useState } from "react";
// // import axios from "axios";
// // import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications

// // const Donate = () => {
// //   const [name, setName] = useState("");
// //   const [phone, setPhone] = useState("");
// //   const [email, setEmail] = useState("");
// //   const [message, setMessage] = useState("");
// //   const [amount, setAmount] = useState("");
// //   const [reference, setReference] = useState("");

// //   const handleSendMessage = async (e) => {
// //     e.preventDefault();
// //     try {
// //       // Send POST request to your backend to create an order
// //       const response = await axios.post(
// //         "http://localhost:4000/api/v1/volunteer/checkout",
// //         {
// //           name,
// //           email,
// //           phone,
// //           message,
// //           amount,
// //           reference,
// //         },
// //         {
// //           withCredentials: true,
// //           headers: { "Content-Type": "application/json" },
// //         }
// //       );

// //       const { orderId, amount: orderAmount, currency } = response.data;

// //       const options = {
// //         key: 'your-razorpay-key-id', // Replace with your Razorpay key ID
// //         amount: orderAmount,
// //         currency: currency,
// //         name: 'Your Company Name',
// //         description: 'Donation',
// //         order_id: orderId,
// //         handler: function (response) {
// //           // Handle the payment success
// //           toast.success("Payment successful!");
// //           console.log(response);

// //           // Reset form fields
// //           setName("");
// //           setEmail("");
// //           setPhone("");
// //           setAmount("");
// //           setReference("");
// //           setMessage("");
// //         },
// //         prefill: {
// //           name: name,
// //           email: email,
// //           contact: phone,
// //         },
// //         notes: {
// //           message: message,
// //         },
// //         theme: {
// //           color: "#007bff",
// //         },
// //       };

// //       const rzp1 = new window.Razorpay(options);
// //       rzp1.open();

// //     } catch (error) {
// //       console.error(error.response.data.message);
// //       toast.error(error.response.data.message);
// //     }
// //   };

// //   return (
// //     <section style={{ padding: "20px 0", backgroundColor: "#f0f8ff" }}>
// //       <div
// //         style={{
// //           maxWidth: "600px",
// //           margin: "0 auto",
// //           padding: "20px",
// //           border: "1px solid #ddd",
// //           borderRadius: "8px",
// //           backgroundColor: "#fff",
// //         }}
// //       >
// //         <form onSubmit={handleSendMessage} style={{ textAlign: "center" }}>
// //           <div style={{ marginBottom: "10px" }}>
// //             <img src="/scanner.jpeg" alt="logo" style={{ width: "250px" }} />
// //           </div>
// //           <div style={{ marginBottom: "10px" }}>
// //             <label
// //               style={{
// //                 display: "block",
// //                 marginBottom: "10px",
// //                 fontSize: "20px",
// //                 color: "#333",
// //               }}
// //             >
// //               Show your love for Poors
// //             </label>
// //             <input
// //               type="number"
// //               value={amount}
// //               onChange={(e) => setAmount(e.target.value)}
// //               placeholder="Enter Donation Amount (INR)"
// //               style={{
// //                 width: "100%",
// //                 padding: "10px",
// //                 fontSize: "16px",
// //                 border: "1px solid #ccc",
// //                 borderRadius: "4px",
// //                 marginBottom: "10px",
// //               }}
// //             />
// //             <input
// //               type="number"
// //               value={reference}
// //               placeholder="Enter Reference Number"
// //               onChange={(e) => setReference(e.target.value)}
// //               style={{
// //                 width: "100%",
// //                 padding: "10px",
// //                 fontSize: "16px",
// //                 border: "1px solid #ccc",
// //                 borderRadius: "4px",
// //                 marginBottom: "10px",
// //               }}
// //             />
// //           </div>
// //           <input
// //             type="text"
// //             value={name}
// //             onChange={(e) => setName(e.target.value)}
// //             placeholder="Your Name"
// //             style={{
// //               width: "100%",
// //               padding: "10px",
// //               fontSize: "16px",
// //               border: "1px solid #ccc",
// //               borderRadius: "4px",
// //               marginBottom: "10px",
// //             }}
// //           />
// //           <input
// //             type="email"
// //             value={email}
// //             onChange={(e) => setEmail(e.target.value)}
// //             placeholder="Email Address"
// //             style={{
// //               width: "100%",
// //               padding: "10px",
// //               fontSize: "16px",
// //               border: "1px solid #ccc",
// //               borderRadius: "4px",
// //               marginBottom: "10px",
// //             }}
// //           />
// //           <input
// //             type="tel"
// //             value={phone}
// //             onChange={(e) => setPhone(e.target.value)}
// //             placeholder="Phone Number"
// //             style={{
// //               width: "100%",
// //               padding: "10px",
// //               fontSize: "16px",
// //               border: "1px solid #ccc",
// //               borderRadius: "4px",
// //               marginBottom: "10px",
// //             }}
// //           />
// //           <textarea
// //             placeholder="Message"
// //             value={message}
// //             onChange={(e) => setMessage(e.target.value)}
// //             style={{
// //               height: "120px",
// //               width: "100%",
// //               padding: "10px",
// //               fontSize: "16px",
// //               border: "1px solid #ccc",
// //               borderRadius: "4px",
// //               marginBottom: "20px",
// //             }}
// //           />
// //           <button
// //             type="submit"
// //             className="btn"
// //               style={{
// //               padding: "10px 20px",
// //               fontSize: "16px",
// //               border: "none",
// //               borderRadius: "4px",
// //               backgroundColor: "#007bff",
// //               color: "#fff",
// //               cursor: "pointer",
// //             }}
// //           >
// //             Donate {amount? `₹${amount}` : "₹0"} 
            
// //           </button>
// //         </form>
// //       </div>
// //     </section>
// //   );
// // };

// // export default Donate;




import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Donate = () => {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [amount, setAmount] = useState("");
  const [reference, setReference] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleSendMessage = async (e) => {
    e.preventDefault();
    if (!name || !email || !phone || !amount || !reference) {
      toast.error("Please fill in all the required fields.");
      return;
    }

    setIsLoading(true);
    
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/volunteer/checkout",
        {
          name,
          email,
          phone,
          message,
          amount,
          reference,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          timeout: 100000, // Set timeout to 10 seconds
        }
      );

      // Send email after donation is successful
      await axios.post(
        "http://localhost:4000/api/v1/email/send-email",
        {
          to: email,
          subject: "Donation Confirmation",
          text: `Dear ${name},
          Thank you for your generous donation of ₹${amount} to Keenable foundation.Your support helps us continue our mission to Our Mission is to help all poors & helpless people.
  Your reference number is ${reference}. Your contribution is greatly appreciated and will make a significant impact `,
        },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
          timeout: 100000, // Set timeout to 10 seconds
        }
      );

      setName("");
      setEmail("");
      setPhone("");
      setAmount("");
      setReference("");
      setMessage("");
      toast.success(response.data.message);
    } catch (error) {
      if (error.response) {
        console.error(error.response.data.message);
        toast.error(error.response.data.message);
      } else if (error.request) {
        toast.error("Request timed out. Please try again.");
      } else {
        console.error("Error", error.message);
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section style={{ padding: "20px 0", backgroundColor: "#f0f8ff" }}>
      <div
        style={{
          maxWidth: "600px",
          margin: "0 auto",
          padding: "20px",
          border: "1px solid #ddd",
          borderRadius: "8px",
          backgroundColor: "#fff",
        }}
      >
        <form onSubmit={handleSendMessage} style={{ textAlign: "center" }}>
          <div style={{ marginBottom: "10px" }}>
            <img src="/scanner.jpeg" alt="logo" style={{ width: "250px" }} />
          </div>
          <div style={{ marginBottom: "10px" }}>
            <label
              style={{
                display: "block",
                marginBottom: "10px",
                fontSize: "20px",
                color: "#333",
              }}
            >
              Show your love for the Poor
            </label>
            <input
              type="number"
              value={amount}
              onChange={(e) => setAmount(e.target.value)}
              placeholder="Enter Donation Amount (INR)"
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
            <input
              type="number"
              value={reference}
              placeholder="Enter Reference Number"
              onChange={(e) => setReference(e.target.value)}
              style={{
                width: "100%",
                padding: "10px",
                fontSize: "16px",
                border: "1px solid #ccc",
                borderRadius: "4px",
                marginBottom: "10px",
              }}
            />
          </div>
          <input
            type="text"
            value={name}
            onChange={(e) => setName(e.target.value)}
            placeholder="Your Name"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Email Address"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <input
            type="tel"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            placeholder="Phone Number"
            style={{
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "10px",
            }}
          />
          <textarea
            placeholder="Message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            style={{
              height: "120px",
              width: "100%",
              padding: "10px",
              fontSize: "16px",
              border: "1px solid #ccc",
              borderRadius: "4px",
              marginBottom: "20px",
            }}
          />
          <button
            type="submit"
            className="btn"
              style={{
              padding: "10px 20px",
              fontSize: "16px",
              border: "none",
              borderRadius: "4px",
              backgroundColor: "#007bff",
              color: "#fff",
              cursor: "pointer",
            }}
            disabled={isLoading}
          >
            {isLoading ? "Processing..." : `Donate ${amount ? `₹${amount}` : "₹0"}`}
          </button>
        </form>
      </div>
    </section>
  );
};

export default Donate;

import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const handleSendMessage = async (e) => {
    e.preventDefault();
    await axios
      .post(
        "http://localhost:4000/api/v1/message/send",
        { name, email, phone, message },
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      )
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        toast.success(res.data.message);
      })
      .catch((error) => {
        console.error(error);
        toast.error(error.response.data.message);
      });
  };

  return (
    <section className="contact">
      <div className="container">
        <div className="banner">
          <form onSubmit={handleSendMessage}>
            <h2>CONTACT US</h2>
            <div>
              <input
                type="text"
                value={name}
                placeholder="Your Name"
                onChange={(e) => setName(e.target.value)}
              />
              <input
                type="email"
                value={email}
                placeholder="Your Email"
                onChange={(e) => setEmail(e.target.value)}
              />
              <input
                type="number"
                value={phone}
                placeholder="Phone Number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <textarea
              rows="10"
              value={message}
              placeholder="Message"
              onChange={(e) => setMessage(e.target.value)}
            />
            <button className="btn" type="submit">
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact




// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify"; // Assuming you are using react-toastify for notifications

// const Contact = () => {
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
//         "http://localhost:4000/api/v1/message/send",
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
//       console.error(error);
//       toast.error(error.response.data.message);
//     } finally {
//       //setDisableBtn(false); // Enable the button again after request completes (whether success or error)
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
//               Show your love for Poors
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
//               type="text"
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
//             // disabled={disableBtn}
//             style={{
//               padding: "10px 20px",
//               fontSize: "16px",
//               border: "none",
//               borderRadius: "4px",
//               backgroundColor: "#007bff",
//               color: "#fff",
//               cursor: "pointer",
//             }}
//           >
//             Donate {amount ? `₹${amount}` : "₹0"}
//           </button>
//         </form>
//       </div>
//     </section>
//   );
// };

// export default Contact;
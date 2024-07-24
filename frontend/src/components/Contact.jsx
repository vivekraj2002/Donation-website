// import React, { useState } from "react";
// import axios from "axios";
// import { toast } from "react-toastify";

// const Contact = () => {
//   const [name, setName] = useState("");
//   const [email, setEmail] = useState("");
//   const [phone, setPhone] = useState("");
//   const [message, setMessage] = useState("");

//   const handleSendMessage = async (e) => {
//     e.preventDefault();
//     await axios
//       .post(
//         "http://localhost:4000/api/v1/message/send",
//         { name, email, phone, message },
//         {
//           withCredentials: true,
//           headers: { "Content-Type": "application/json" },
//         }
//       )
//       .then((res) => {
//         setName("");
//         setEmail("");
//         setPhone("");
//         setMessage("");
//         toast.success(res.data.message);
//       })
//       .catch((error) => {
//         console.error(error);
//         toast.error(error.response.data.message);
//       });
//   };

//   return (
//     <section className="contact">
//       <div className="container">
//         <div className="banner">
//           <form onSubmit={handleSendMessage}>
//             <h2>CONTACT US</h2>
//             <div>
//               <input
//                 type="text"
//                 value={name}
//                 placeholder="Your Name"
//                 onChange={(e) => setName(e.target.value)}
//               />
//               <input
//                 type="email"
//                 value={email}
//                 placeholder="Your Email"
//                 onChange={(e) => setEmail(e.target.value)}
//               />
//               <input
//                 type="number"
//                 value={phone}
//                 placeholder="Phone Number"
//                 onChange={(e) => setPhone(e.target.value)}
//               />
//             </div>
//             <textarea
//               rows="10"
//               value={message}
//               placeholder="Message"
//               onChange={(e) => setMessage(e.target.value)}
//             />
//             <button className="btn" type="submit">
//               Send Message
//             </button>
//           </form>
//         </div>
//       </div>
//     </section>
//   );
// };

// export default Contact


import React, { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSendMessage = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(
        "http://localhost:4000/api/v1/message/send",
        formData,
        {
          withCredentials: true,
          headers: { "Content-Type": "application/json" },
        }
      );
      toast.success(response.data.message);
      setFormData({ name: "", email: "", phone: "", message: "" });
    } catch (error) {
      console.error(error);
      toast.error(error.response?.data.message || "Failed to send message.");
    }
  };

  return (
    <section style={{ padding: "20px", backgroundColor: "#f0f0f0" }}>
      <div style={{ maxWidth: "600px", margin: "0 auto" }}>
        <form onSubmit={handleSendMessage} style={{ background: "#fff", padding: "20px", borderRadius: "8px", boxShadow: "0 0 10px rgba(0,0,0,0.1)" }}>
          <h2 style={{ textAlign: "center", marginBottom: "20px" }}>CONTACT US</h2>
          <input
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            type="text"
            name="name"
            value={formData.name}
            placeholder="Your Name"
            onChange={handleChange}
          />
          <input
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            type="email"
            name="email"
            value={formData.email}
            placeholder="Your Email"
            onChange={handleChange}
          />
          <input
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            type="tel"              
            name="phone"
            value={formData.phone}
            placeholder="Phone Number"
            onChange={handleChange}
          />
          <textarea
            style={{ width: "100%", padding: "10px", marginBottom: "10px", borderRadius: "4px", border: "1px solid #ccc" }}
            rows="6"
            name="message"
            value={formData.message}
            placeholder="Message"
            onChange={handleChange}
          />
          <button
            className="btn"
            type="submit"
            style={{ width: "100%", padding: "10px", background: "#007bff", color: "#fff", border: "none", borderRadius: "4px", cursor: "pointer" }}
          >
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;



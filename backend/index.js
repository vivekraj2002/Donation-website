// import express from "express";
// import dotenv from "dotenv";
// import cors from "cors";
// import { dbConnection } from "./database/dbConnection.js";
// import messageRouter from "./router/messageRouter.js";
// import donateRouter from "./router/donateRouter.js";

// const app = express();
// dotenv.config({ path: "./.env" });

// app.use(
//   cors({
//     origin: [process.env.FRONTEND_URL],
//     methods: ["POST"],
//     credentials: true,
//   })
// );

// app.use(express.json());
// app.use(express.urlencoded({ extended: true }));

// app.use("/api/v1/message", messageRouter);
// app.use("/api/v1/volunteer", donateRouter);

// dbConnection();

// export default app;



import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import { dbConnection } from "./database/dbConnection.js";
import messageRouter from "./router/messageRouter.js";
import donateRouter from "./router/donateRouter.js";
import emailRouter from "./router/emailRouter.js"; // Import the email router

const app = express();
dotenv.config({ path: "./.env" });

app.use(
  cors({
    origin: [process.env.FRONTEND_URL],
    methods: ["POST"],
    credentials: true,
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api/v1/message", messageRouter);
app.use("/api/v1/volunteer", donateRouter);
app.use("/api/v1/email", emailRouter); // Use the email router

dbConnection();

export default app;

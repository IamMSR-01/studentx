import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import cookieParser from "cookie-parser";

import authRoutes from "./routes/auth.routes.js";
import freelanceProjectRoutes  from "./routes/freelanceProject.routes.js";
import subscriptionRoutes from "./routes/subscription.routes.js"; // Uncomment when subscription routes are ready
import { connectDB } from "./config/db.config.js";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({ credentials: true, origin: "http://localhost:5173" }));
app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);
// app.use("/api/v1/freelance-projects", freelanceProjectRoutes);
// app.use("/api/v1/subscriptions", subscriptionRoutes); // Uncomment when subscription routes are ready

app.listen(PORT, () => {
  connectDB();
  console.log(`Server is running on port ${PORT}`);
});
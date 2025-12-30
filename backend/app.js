import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import helmet from "helmet";
import userRouter from "./routes/userRoutes.js";

dotenv.config();

const app = express();

// MIDDLEWARES
app.use(express.json());
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

// SETTINGS
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

// MONGODB
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((error) => {
    console.error("MongoDB connection error:", error.message);
    process.exit(1);
  });

// ROUTES
app.use("/api/user", userRouter);

export default app;

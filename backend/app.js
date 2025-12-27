import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import morgan from "morgan";
import dotenv from "dotenv";
import jwt from "jsonwebtoken";
import helmet from "helmet";

const app = express();

//MIDDLEWARES
app.use(express.json());
dotenv.config();
app.use(helmet());
app.use(cors());
app.use(morgan("dev"));

//SETTINGS
const PORT = process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});

//ROUTES
app.route("/api/user");
app.route("/api/routine");
app.route("/api/goal");

export default app;
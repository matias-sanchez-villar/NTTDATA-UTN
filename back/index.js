import "dotenv/config";
import "./database/connection.js";
import authRoutes from "./routes/auth.route.js";
import express from "express";
import cookieParser from "cookie-parser";

const app = express();

app.use(express.json());
app.use(cookieParser());

app.use("/api/v1/auth", authRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, console.log("http://localhost:" + PORT + "/api/v1/auth"));
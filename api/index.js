import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dbConnect from "./src/config/dbConnection.js";
import codeRouter from "./src/routes/codeRoute.js";
const app = express();

config();

app.use(express.json());

app.use(
  cors({
    origin: "https://code-craft-rho.vercel.app",
    methods: "POST, GET",
    optionsSuccessStatus: 200,
  })
);

dbConnect();

app.get("/", (req, res) => {
  res.send("Server started");
});

app.use("/compiler", codeRouter);

app.listen(process.env.PORT, () => {
  console.log("Server running on port");
});

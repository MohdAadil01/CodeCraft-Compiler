import express from "express";
import cors from "cors";
import { config } from "dotenv";
import dbConnect from "./src/config/dbConnection.js";
import codeRouter from "./src/routes/codeRoute.js";
const app = express();

config();

app.use(express.json());
app.use(cors());

dbConnect();

app.use("/compiler", codeRouter);

app.listen(process.env.PORT, () => {
  console.log("Server started");
});

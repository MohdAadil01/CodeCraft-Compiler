import express from "express";
import codeController, {
  savedCodeController,
} from "../controllers/codeController.js";

const codeRouter = express.Router();

codeRouter.get("/save", (req, res) => {
  res.status(200).send({ message: "Working save route" });
});
codeRouter.post("/save", codeController);

codeRouter.get("/:urlId", savedCodeController);

export default codeRouter;

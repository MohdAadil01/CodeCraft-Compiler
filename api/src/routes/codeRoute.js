import express from "express";
import codeController, {
  savedCodeController,
} from "../controllers/codeController.js";

const codeRouter = express.Router();

codeRouter.post("/save", codeController);

codeRouter.post("/savedCode", savedCodeController);

export default codeRouter;

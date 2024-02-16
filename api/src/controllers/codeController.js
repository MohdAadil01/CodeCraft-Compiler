import Code from "../models/codeModel.js";

const codeController = async (req, res) => {
  const { fullCode } = req.body;
  try {
    const newCode = await Code.create({
      fullCode: fullCode,
    });
    return res.status(201).send({ url: newCode._id, status: "saved" });
  } catch (error) {
    res.status(500).send({ message: "Error while saving our code", error });
  }
};

export default codeController;

export const savedCodeController = async (req, res) => {
  try {
    const { urlId } = req.body;
    const savedCode = await Code.findById(urlId);
    if (!savedCode) {
      res.status(404).send({ message: "Code not found" });
    }
    return res.status(200).send({ fullCode: savedCode.fullCode });
  } catch (error) {
    res.status(500).send({ message: "Error while fetching the saved code" });
  }
};

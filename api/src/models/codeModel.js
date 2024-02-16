import mongoose from "mongoose";

const codeSchema = mongoose.Schema({
  fullCode: {
    html: String,
    css: String,
    javascript: String,
  },
});

const Code = mongoose.model("Code", codeSchema);
export default Code;

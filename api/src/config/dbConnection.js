import mongoose from "mongoose";
const dbConnect = async () => {
  const result = await mongoose.connect(process.env.MONGO_URL, {
    dbName: "IDE",
  });
  console.log("Connected to database");
};
export default dbConnect;

import mongoose from "mongoose";

const MONGO_URI = process.env.MONGO_URI!;
if (!MONGO_URI) throw new Error("Defina MONGO_URI no .env");

export const connectDB = async () => {
  if (mongoose.connections[0].readyState) return;
  await mongoose.connect(MONGO_URI);
  console.log("MongoDB conectado!");
};
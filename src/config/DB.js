import mongoose from "mongoose";

const mongourl = process.env.MONGODB_URI;

const ConnectDB = async () => {
  try {
    mongoose.connect(mongourl);
    console.log("MongoDB connected successfully");
  } catch (e) {
    console.error(e);
    process.exit(1);
  }
};

export default ConnectDB;

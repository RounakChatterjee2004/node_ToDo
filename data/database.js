import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendapi",
    })
    .then(() => console.log("MongoDB is connected"))
    .catch((err) => console.log("MongoDB connection error", err));
};

export default connectDB;

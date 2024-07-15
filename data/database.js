import mongoose from "mongoose";
const connectDB = () => {
  mongoose
    .connect(process.env.MONGO_URL, {
      dbName: "backendapi",
    })
    .then((c) => console.log(`MongoDB is connected  with ${c.connection.host}`))
    .catch((err) => console.log("MongoDB connection error", err));
};

export default connectDB;

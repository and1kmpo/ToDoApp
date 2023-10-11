import mongoose from "mongoose";

export const connectDB = async () => {
  try {
    await mongoose.connect(
      "mongodb+srv://admin:todoapp@todoapp.qhe7le0.mongodb.net/?retryWrites=true&w=majority"
    );
    console.log(">>> DB connection established");
  } catch (error) {
    console.log(error);
  }
};

import mongoose from "mongoose";

async function ConnectDB() {
  try {
    const { connection } = await mongoose.connect(
      "mongodb://localhost/ecommerce-backend"
    );
    console.log("mongooes is connected: ", connection.name);
  } catch (error) {
    console.error(error);
  }
}

export default ConnectDB;

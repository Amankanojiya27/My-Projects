import express from "express";
import ConnectDB from "./src/config/db.js";
import productRouter from "./src/routes/products.route.js";
import userRouter from "./src/routes/user.route.js";
import addressRouter from "./src/routes/address.route.js";

const app = express();
const PORT = process.env.PORT || 8000;

app.use(express.json());

app.get("/", async (req, res) => {
  res.send("Welcome This Is Homepage !!");
});

app.use("/products", productRouter);
app.use("/user", userRouter);
app.use("/address", addressRouter);

ConnectDB()
  .then(() => {
    app.listen(PORT, () => {
      console.log(`Server is running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });

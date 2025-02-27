import { Router } from "express";
import {
  AddSingleProductController,
  AddMultiProductController,
  getAllProduct,
  getOneProduct,
  updateProduct,
  deleteProduct,
} from "../controllers/products.controller.js";

const productRouter = Router();

productRouter.post("/", AddSingleProductController);
productRouter.post("/multi", AddMultiProductController);

productRouter.get("/", getAllProduct);
productRouter.get("/:id", getOneProduct);

productRouter.patch("/:id", updateProduct);

productRouter.delete("/:id", deleteProduct);

export default productRouter;

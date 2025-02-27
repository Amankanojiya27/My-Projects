import { Router } from "express";
import {
  addAddress,
  getAddress,
  updateAddress,
  deleteAddress,
} from "../controllers/address.controller.js";

const addressRouter = Router();
addressRouter.post("/", addAddress);

addressRouter.get("/:uid", getAddress);
addressRouter.patch("/:id", updateAddress);
addressRouter.delete("/:id", deleteAddress);
export default addressRouter;

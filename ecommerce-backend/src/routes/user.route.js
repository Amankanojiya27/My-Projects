import { Router } from "express";

import {
  AddUser,
  getAllUser,
  findUserById,
  deleteUserById,
} from "../controllers/user.controller.js";

const userRouter = Router();
userRouter.post("/", AddUser);

userRouter.get("/", getAllUser);
userRouter.get("/search", findUserById);

userRouter.delete("/", deleteUserById);
export default userRouter;

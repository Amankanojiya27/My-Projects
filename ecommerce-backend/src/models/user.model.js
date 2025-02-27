import { model, Schema } from "mongoose";

const userSchema = new Schema(
  {
    name: { type: String, required: true },
    phoneNumber: { type: Number, required: true, uniqe: true },
    email: { type: String, required: true, uniqe: true },
    password: { type: String, required: true },
    roll: { type: String, enum: ["admin", "user"], required: true },
  },
  {
    autoIndex: true,
  }
);

export const UserModel = model("User", userSchema);

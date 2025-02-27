import { model, Schema } from "mongoose";

const AddressSchema = new Schema({
  address: String,
  phone: Number,
  pin: Number,
  uid: String,
});

export const AddressModel = model("Address", AddressSchema); // Correct name

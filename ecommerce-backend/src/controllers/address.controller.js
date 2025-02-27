import { AddressModel } from "../models/address.model.js";
import { UserModel } from "../models/user.model.js";

export async function addAddress(req, res) {
  try {
    const { address, phone, pin, uid } = req.body;

    if (!address || !phone || !pin || !uid) {
      return res.status(400).json({
        error: "Missing field Required",
        message: "Please provide all required details",
        data: null,
      });
    }

    const userExists = await UserModel.findOne({ _id: uid });

    if (!userExists) {
      return res.status(404).json({
        message: "User not found",
      });
    }
    const newAddress = new AddressModel({
      address,
      phone,
      pin,
      uid,
    });

    const data = await newAddress.save();

    return res.status(201).json({
      message: "Address added successfully",
      data: data,
    });
  } catch (error) {
    console.error(error);
    res.status(500).json({
      message: "Something went wrong",
      error: error.message,
    });
  }
}

export async function getAddress(req, res) {
  try {
    const { uid } = req.params;
    const findAddress = await AddressModel.find({ uid });

    if (!findAddress) {
      return res.status(404).json({
        message: "Not able to find Address",
        data: null,
      });
    }
    return res.status(200).json({
      message: "Address Find Successsfully",
      findAddress,
    });
    console.log(findAddress);
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      message: "Fail to find Address",
      error: error.message,
    });
  }
}

export async function updateAddress(req, res) {
  try {
    const { id } = req.params;
    const { address, phone, pin, uid } = req.body;

    const data = await AddressModel.findOneAndUpdate(
      { uid: id },
      {
        address,
        phone,
        pin,
      },
      {
        new: true,
      }
    );

    if (!data) {
      return res.status(404).json({
        message: "Address not Updated",
        data,
      });
    }
    return res.status(200).json({
      message: "Address Successfully Update",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
      message: "Error has Found",
    });
  }
}

export async function deleteAddress(req, res) {
  try {
    const { id } = req.params;

    const data = await AddressModel.findOneAndDelete({ uid: id });

    if (!data) {
      return res.status(404).json({
        message: "Address not Delete",
        data,
      });
    }
    return res.status(200).json({
      message: "Address Successfully Delete",
      data,
    });
  } catch (error) {
    console.log(error);
    return res.status(500).json({
      error: error.message,
      message: "Error has Found",
    });
  }
}
